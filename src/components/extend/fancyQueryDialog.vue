<!--文本扩展-->
<template>
  <div class="query-dialog">
      <el-form>
      <el-input v-model="dialogValue" readonly @click.native="handlerShowDialog" style="width:95%" suffix-icon="el-icon-search"></el-input>
      <el-dialog 
      :visible.sync="dialogVisible" 
      :title="title"
      width="60%"
      center
      :show-close="true"
      :lock-scroll="true"
      @open="show()"
      >
        <el-table 
            ref="dataTable"
            :data="gridData"
            border
            :row-class-name="tableRowClassName"
            :row-style="{height: '10px'}"
            :cell-style="{padding: '5px 0'}"
            :header-cell-style="{
                'background-color': '#fafafa',
                'border-bottom': '1px #e6f7ff solid'
            }"
            :highlight-current-row="!multi"
            max-height="600"
            @current-change="handleCurrentChange"
        >
            <el-table-column type="index" v-if="showIndex"></el-table-column>
            <el-table-column property="date" label="日期" width="150" align="center"></el-table-column>
            <el-table-column property="name" label="姓名" width="200" align="center"></el-table-column>
            <el-table-column property="address" label="地址" align="center"></el-table-column>
        </el-table>
        <span slot="footer" class="dialog-footer">
            <el-button type="primary" @click="handlerSelect">确 定</el-button>
            <el-button @click="handlerHideDialog">取 消</el-button>
        </span>
      </el-dialog>
      </el-form>
  </div>
  
</template>

<script>
export default {
    name:"fancyQueryDialog",
    props:{
        value: {
            type: String,
            default:''
        },
        title:{ 
            type:String,
            default:'请选择'
        },
        multi:{
            type:Boolean,
            default:false
        },
        type:{
            type:String,
            default:'list'  //暂时先只考虑list，暂时不考虑tree,treeList
        },
        searchable:{    //是否可搜索
            type:Boolean,
            default:false
        },
        showIndex:{ //显示序号
            type:Boolean,
            default:false
        },
        action:{
            type:String,
            default:''
        },
        val:{
            type:String,
            default:'id'
        },
        label:{
            type:String,
            default:'name'
        }
    },
    data() {
        return {
            currentRow: null,
            dialogValue:'',
            dialogVisible:false,
            gridData: []
        }
    },
    mounted(){
        this.$nextTick(() => {
            this.$axios.get(this.action).then(res => {
                this.gridData = [];
                this.gridData = this.gridData.concat(res.data.list);
                if(this.value !=='' && this.dialogValue ===''){
                    const index = this.gridData.findIndex(element=>element[this.val] == this.value);
                    if(index>0){
                        const row = this.gridData[index];
                        this.dialogValue = row[this.label];
                    }
                }
            })
            
        })
    },
    methods:{
        handlerShowDialog(){
            this.dialogVisible = true;
        },
        handleClose(){

        },
        tableRowClassName(v){
            if(v.rowIndex%2 ==1){
                return 'odd-row';
            }
            return '';
        },
        handleCurrentChange(val) {
            this.currentRow = val;
        },
        handlerSelect(){
            this.dialogVisible = false;
            this.dialogValue = this.currentRow[this.label];
            this.$emit('input',this.currentRow[this.val]+'');
        },
        handlerHideDialog(){
            this.dialogVisible = false;
            this.dialogValue = '';
            this.$emit('input','');
        },
        setDialogValue(){
            const index = this.gridData.findIndex(element=>element[this.val] == this.value);
            const row = this.gridData[index];
            this.$refs.dataTable.setCurrentRow(row);
        },
        show(){
            this.$nextTick(() => {
                this.setDialogValue();
            })
        }
    }
}
</script>
<style scoped>
/**#e6f7ff; */
.query-dialog >>>.el-table--enable-row-hover .el-table__body tr:hover>td{
    background-color: #d1dfd5
}
</style>
<style>
.el-table .odd-row {
    background-color:#eeeeee;
}
</style>
<!--文本扩展-->
<template>
  <div class="dialog-list">
      <el-input v-model="dialogValue" readonly  @click.native="handlerShowDialog" :disabled="disabled" style="width:95%" suffix-icon="el-icon-search"></el-input>
      <el-dialog 
      :visible.sync="dialogVisible" 
      :title="title"
      width="60%"
      center
      :append-to-body="true"
      :show-close="true"
      :lock-scroll="true"
      @open="show()"
      :destroy-on-close="true"
      top="15px"
      >
      <!--搜索暂不启用-->
        <!-- <div class="search-text" v-show="searchable">
            <el-input v-model="searchText" placeholder="请输入筛选内容" size="mini" suffix-icon="el-icon-search" clearable style="width:30%"></el-input>
        </div> -->
        <el-table 
            ref="dataTable"
            :data="filterGridData"
            border
            :row-class-name="tableRowClassName"
            :row-style="{height: '10px'}"
            :cell-style="{padding: '5px 0'}"
            :header-cell-style="{
                'background-color': '#fafafa',
                'border-bottom': '1px #e6f7ff solid'
            }"
            :highlight-current-row="!multi"
            :max-height="height"
            @row-dblclick="handlerRowDoubleClick"
            @current-change="handleCurrentChange"
            @selection-change="handleSelectionChange"
        >
            <el-table-column type="selection" width="55" v-if="multi"></el-table-column>
            <el-table-column type="index" v-if="showIndex" align="center"></el-table-column>
            <el-table-column :property="item.property"  :label="item.label" :width="item.width" align="center" :key="index" v-for="(item,index) in jsonColConf"/>
        </el-table>
        <span slot="footer" class="dialog-footer">
            <el-button type="primary" @click="handlerSelect">确 定</el-button>
            <el-button @click="handlerHideDialog">取 消</el-button>
        </span>
      </el-dialog>
  </div>
  
</template>

<script>
const splitKey = ";";
export default {
    name:"fancyDialogList",
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
        disabled:{
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
        height:{
            type:Number,
            default:600
        },
        colConf:{
            type:String,
            default:''
        },
        dval:{
            type:String,
            default:'id'
        },
        dlabel:{
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
                    if(this.multi){
                        const ids = this.value.split(splitKey);
                        this.currentRow = [];
                        ids.forEach(e=>{
                            const index = this.gridData.findIndex(element=>(element[this.dval]+"") == e);
                            if(index>0){
                                const row = this.gridData[index];
                                this.currentRow.push(row);
                            }
                        })
                        this.dialogValue = this.selectName;
                    }else{
                        const index = this.gridData.findIndex(element=>element[this.dval] == this.value);
                        if(index>0){
                            const row = this.gridData[index];
                            this.dialogValue = row[this.dlabel];
                        }
                    }
                    
                }
            })  
        })
    },
    methods:{
        handlerShowDialog(){
            if(this.disabled) return;
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
            if(!this.multi){
                this.currentRow = val;
            }
        },
        
        handlerRowDoubleClick(val){
            if(!this.multi){
                this.currentRow = val;
                this.handlerSelect();
            }
        },
        handleSelectionChange(val){
            this.currentRow = val;
        },
        handlerSelect(){
            this.dialogVisible = false;
            let dialogVal = '';
            let dialogId = '';
            dialogVal = this.selectName;
            dialogId = this.selectId;
            this.dialogValue = dialogVal;
            this.$emit('input',dialogId+'');
        },
        handlerHideDialog(){
            this.dialogVisible = false;
            this.dialogValue = '';
            this.$emit('input','');
        },
        setDialogValue(){
            if(this.multi){
                const ids = this.value.split(splitKey);
                this.currentRow = [];
                ids.forEach(e=>{
                    const index = this.gridData.findIndex(element=>element[this.dval] == e);
                    if(index>0){
                        const row = this.gridData[index];
                        this.$refs.dataTable.toggleRowSelection(row);
                    }
                })
            }else{
                const index = this.gridData.findIndex(element=>element[this.dval] == this.value);
                const row = this.gridData[index];
                this.$refs.dataTable.setCurrentRow(row);
            }
            
        },
        show(){
            this.$nextTick(() => {
                this.setDialogValue();
            })
        }
    },
    computed:{
        jsonColConf(){
            return JSON.parse(this.colConf);
        },
        selectName(){
            if(this.currentRow == null){
                return '';
            }
            if(this.multi){
                let names = '';
                this.currentRow.forEach(element=>{
                    names = names+splitKey+element[this.dlabel];
                })
                if(names.length>0){
                    names = names.substring(1);
                }
                return names;
            }else{
                return this.currentRow[this.dlabel];
            }
        },
        selectId(){
            if(this.currentRow == null){
                return '';
            }
            if(this.multi){
                let ids = '';
                this.currentRow.forEach(element=>{
                    ids = ids+splitKey+element[this.dval];
                })
                if(ids.length>0){
                    ids = ids.substring(1);
                }
                return ids;
            }else{
                return this.currentRow[this.dval];
            }
        },
        filterGridData(){
            return this.gridData;
        }
    }
}
</script>
<style scoped>
/**#e6f7ff; */
.dialog-list >>>.el-table--enable-row-hover .el-table__body tr:hover>td{
    background-color: #d1dfd5
}
.search-text{
    margin-bottom: 10px;
}
</style>
<style>
.el-table .odd-row {
    background-color:#FAFAFA;
}
</style>
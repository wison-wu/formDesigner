<!--文本扩展-->
<template>
  <div class="query-dialog">
      <el-input v-model="dialogValue" readonly @click.native="handlerShowDialog" style="width:95%"></el-input>
      <el-dialog 
      :visible.sync="dialogVisible" 
      :title="title"
      width="60%"
      center
      :show-close="false"
      :before-close="handleClose"
      :lock-scroll="true"
      >
        <el-table 
            :data="gridData"
            border
            :row-class-name="tableRowClassName"
            :row-style="{height: '10px'}"
            :cell-style="{padding: '5px 0'}"
            max-height="600"
        >
            <el-table-column type="index" v-if="showIndex"></el-table-column>
            <el-table-column property="date" label="日期" width="150" align="center"></el-table-column>
            <el-table-column property="name" label="姓名" width="200" align="center"></el-table-column>
            <el-table-column property="address" label="地址" align="center"></el-table-column>
        </el-table>
      <span slot="footer" class="dialog-footer">
            <el-button @click="dialogVisible = false">取 消</el-button>
            <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
        </span>
      </el-dialog>
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
        }
    },
    data() {
        return {
          dialogValue:'',
          dialogVisible:false,
          gridData: [{
            date: '2016-05-02',
            name: '王小虎1',
            address: '上海市普陀区金沙江路 1518 弄'
            }, {
            date: '2016-05-04',
            name: '王小虎2',
            address: '上海市普陀区金沙江路 1518 弄'
            }, {
            date: '2016-05-01',
            name: '王小虎3',
            address: '上海市普陀区金沙江路 1518 弄'
            }, {
            date: '2016-05-03',
            name: '王小虎4',
            address: '上海市普陀区金沙江路 1518 弄'
            }, {
            date: '2016-05-03',
            name: '王小虎5',
            address: '上海市普陀区金沙江路 1518 弄'
            }, {
            date: '2016-05-03',
            name: '王小虎6',
            address: '上海市普陀区金沙江路 1518 弄'
            }, {
            date: '2016-05-03',
            name: '王小虎7',
            address: '上海市普陀区金沙江路 1518 弄'
            }, {
            date: '2016-05-03',
            name: '王小虎8',
            address: '上海市普陀区金沙江路 1518 弄'
            }, {
            date: '2016-05-03',
            name: '王小虎9',
            address: '上海市普陀区金沙江路 1518 弄'
            }, {
            date: '2016-05-03',
            name: '王小虎0',
            address: '上海市普陀区金沙江路 1518 弄'
            }, {
            date: '2016-05-03',
            name: '王小虎a',
            address: '上海市普陀区金沙江路 1518 弄'
            }, {
            date: '2016-05-03',
            name: '王小虎b',
            address: '上海市普陀区金沙江路 1518 弄'
            }, {
            date: '2016-05-03',
            name: '王小虎c',
            address: '上海市普陀区金沙江路 1518 弄'
            }, {
            date: '2016-05-03',
            name: '王小虎d',
            address: '上海市普陀区金沙江路 1518 弄'
            }, {
            date: '2016-05-03',
            name: '王小虎e',
            address: '上海市普陀区金沙江路 1518 弄'
            }, {
            date: '2016-05-03',
            name: '王小虎f',
            address: '上海市普陀区金沙江路 1518 弄'
            }, {
            date: '2016-05-03',
            name: '王小虎g',
            address: '上海市普陀区金沙江路 1518 弄'
            }, {
            date: '2016-05-03',
            name: '王小虎h',
            address: '上海市普陀区金沙江路 1518 弄'
            }, {
            date: '2016-05-03',
            name: '王小虎i',
            address: '上海市普陀区金沙江路 1518 弄'
            }, {
            date: '2016-05-03',
            name: '王小虎j',
            address: '上海市普陀区金沙江路 1518 弄'
            }, {
            date: '2016-05-03',
            name: '王小虎k',
            address: '上海市普陀区金沙江路 1518 弄'
            }, {
            date: '2016-05-03',
            name: '王小虎l',
            address: '上海市普陀区金沙江路 1518 弄'
            }, {
            date: '2016-05-03',
            name: '王小虎m',
            address: '上海市普陀区金沙江路 1518 弄'
            }, {
            date: '2016-05-03',
            name: '王小虎n',
            address: '上海市普陀区金沙江路 1518 弄'
            }, {
            date: '2016-05-03',
            name: '王小虎o',
            address: '上海市普陀区金沙江路 1518 弄'
            }, {
            date: '2016-05-03',
            name: '王小虎p',
            address: '上海市普陀区金沙江路 1518 弄'
            }]
        }
    },
    methods:{
        handlerShowDialog(){
            this.dialogVisible = true;
        },
        handlerHideDialog(){
            this.dialogValue = '';
            this.$emit('input',this.dialogValue);
            this.dialogVisible = false;
        },
        handleClose(){

        },
        tableRowClassName(v){
            if(v.rowIndex%2 ==1){
                return 'odd-row';
            }
            return '';
        }
    }
}
</script>
<style scoped>
.query-dialog >>>.el-table--enable-row-hover .el-table__body tr:hover>td{
    background-color: #e6f7ff;
}
</style>
<style>
.el-table .odd-row {
    background-color:#eeeeee;
}
</style>
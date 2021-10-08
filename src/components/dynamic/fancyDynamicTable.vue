<!--动态表单（设计器）-->
<template>
<div class="fancyDynamicTable">
  <el-table
    :data="tableData"
    :fit="true"
    border
    :ref="conf.id"
    size="mini"
    :cell-style="{padding:'5px 0'}"
    :header-cell-style="{background:'#F5F7FA'}"
    style="width: 100%"
    :row-class-name="tableRowClassName"
    @selection-change="handlerSelectionChange"
    :show-summary="conf['show-summary']"
    :summary-method="sumTotal"
  >
    <el-table-column align="center" type="selection" width="35px" v-if="conf.multiCheck" fixed="left"/>
    <el-table-column align="center" type="index" label="序号" width="50px" v-if="conf.showIndex" fixed="left"/>
    <el-table-column align="center" :prop="item.id" v-for="(item,index) in conf.columns" :key="index" min-width="240px;">
      <template slot="header">
        {{tableColumnLabels[index]}}
      </template>
      <template slot-scope="scope">
          <slot name="item" :rowScope="scope" :item="item"></slot>
      </template>
    </el-table-column>
    <el-table-column align="center" label="操作" width="100px" v-if="conf.buttonDel" fixed="right">
      <template slot-scope="scope">
        <el-form-item label-width="0px"  style="margin:10px 3px 15px 3px;" >
          <i class="el-icon-delete optIcon" style="" @click="handlerDelete(scope,conf)"></i>
        </el-form-item>
      </template>
    </el-table-column>
  </el-table>
  <div class="column-buttons">
    <i class="el-icon-circle-plus-outline optIcon button-plus"  v-if="conf.buttonAdd" @click="handlerAdd(conf)"/>
    <i class="el-icon-remove-outline optIcon button-plus " v-if="BachDeleteButtonShow(conf.id)" @click="handlerBachDelete"/>
  </div>
</div>
</template>
<script>
export default {
  name:'fancyDynamicTable',
  props:['data','conf'],
  data(){
    return {
      tableData:this.data,
      tableColumns:[],
      tableColumnLabels:[],
      multipleSelection: [],
      componentsMount:false
    }
  },
  mounted(){
    this.conf.columns.forEach(element =>{
      this.tableColumnLabels.push(element.label);
      let tableCol = {};
      Object.assign(tableCol,element);
      this.tableColumns.push(tableCol);
    });
    this.componentsMount = true;
  },
  components:{
  },
  methods:{
    handlerAdd(origin){
      this.$emit('addRow',origin);
    },
    handlerDelete(scope,element){
      this.$emit('deleteRow',scope,element);
    },
    handlerBachDelete(){
      this.$confirm('确认删除选中的数据?').then(() => {
        const indexs = [];
        this.multipleSelection.forEach(item=>indexs.push(item.index));
        this.$emit('batchDeleteRow',indexs,this.conf);
      })
    },
    handlerSelectionChange(val) {
      this.multipleSelection = val;

    },
    tableRowClassName(row) {
      row.row.index = row.rowIndex;
    },
    sumTotal(param){
      const { columns, data } = param;
      const sums = [];
      columns.forEach((column, index) => {
        if (index === 0) {
          sums[index] = this.conf['sum-text'];
          return;
        }
        const values = data.map(item => Number(item[column.property]));
        if (!values.every(value => isNaN(value))) {
          sums[index] = values.reduce((prev, curr) => {
            const value = Number(curr);
            if (!isNaN(value)) {
              return prev + curr;
            } else {
              return prev;
            }
          }, 0);
          sums[index] += ' '+this.conf['summary-text'];
        } else {
          sums[index] = '';
        }
      });

      return sums;
    }
  },
  computed:{
    BachDeleteButtonShow(){
      return function(id){
        if(this.componentsMount){
          return this.conf.multiCheck&&this.$refs[id].selection.length>0;
        }
      }
    }
  }
}
</script>
<style scoped>
.fancyDynamicTable{
  width: 100%;
  padding:10px;
}
.column-buttons{
  padding:5px 0 5px 0;
  text-align: center;
  background-color: #f6f6f6;
}
.optIcon{
  font-size:18px;
  margin-right:5px;
  cursor: pointer;
}
.button-plus{
  font-size:30px;
  margin-right:10px;
}
.button-plus:hover{
  color: #000000;
}
</style>
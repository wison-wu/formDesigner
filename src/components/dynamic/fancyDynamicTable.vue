<!--动态表单（设计器）-->
<template>
<div class="fancyDynamicTable">
  <el-table
    :data="tableData"
    :fit="true"
    border
    size="mini"
    :cell-style="{padding:'5px 0'}"
    :header-cell-style="{background:'#F5F7FA'}"
    style="width: 100%">
    <el-table-column align="center" type="index" label="序号" width="50px" v-if="conf.showIndex" fixed="left"/>
    <el-table-column align="center" v-for="(item,index) in conf.columns" :key="index" min-width="150px;">
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
  <div class="column-buttons" v-if="conf.buttonAdd">
    <el-button type="primary" icon="el-icon-plus" circle @click="handlerAdd(conf)"></el-button>
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
      tableColumnLabels:[]
    }
  },
  mounted(){
    this.conf.columns.forEach(element =>{
      this.tableColumnLabels.push(element.label);
      let tableCol = {};
      Object.assign(tableCol,element);
      this.tableColumns.push(tableCol);
    });
  },
  components:{
  },
  methods:{
    handlerAdd(origin){
      this.$emit('addRow',origin);
    },
    handlerDelete(scope,element){
      this.$emit('deleteRow',scope,element);
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
  margin-top:15px;
  text-align: center;
}
.optIcon{
  font-size:18px;
  margin-right:5px;
  cursor: pointer;
}
</style>
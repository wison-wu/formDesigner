<!--动态表单（设计器）-->
<template>
<div class="fancyDynamicTable">
  <el-table
    :data="data"
    :fit="true"
    border
    size="mini"
    :cell-style="{padding:'5px 0'}"
    :header-cell-style="{background:'#F5F7FA'}"
    :show-summary="conf['show-summary']"
    style="width: 100%">
    <el-table-column align="center" type="index" label="序号" width="50px" v-if="conf.showIndex" fixed="left"/>
    <el-table-column align="center" :prop="item.id" v-for="(item,index) in conf.columns" :key="index" min-width="150px;">
      <template slot="header">
        {{tableColumnLables[index]}}
      </template>
      <template slot-scope="scope">
          <slot name="item" :rowScope="scope" :item="item"></slot>
      </template>
    </el-table-column>
  </el-table>
</div>
</template>
<script>
export default {
  name:'fancyDynamicViewTable',
  props:['data','conf'],
  data(){
    return {
      tableColumns:[],
      tableColumnLables:[]
    }
  },
  mounted(){
    this.conf.columns.forEach(element =>{
      this.tableColumnLables.push(element.label);
      let tableCol = {};
      Object.assign(tableCol,element);
      this.tableColumns.push(tableCol);
    });
    
  }
}
</script>
<style scoped>
.fancyDynamicTable{
  widows: 100%;
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
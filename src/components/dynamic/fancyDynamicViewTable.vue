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
    :summary-method="sumTotal"
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
  },
  methods:{
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
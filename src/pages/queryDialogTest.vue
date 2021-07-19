<!--elementUI 图标选择器-->
<template>
  <div >
    <query-dialog v-model="value" :title="title" :showIndex="true"  :multi="true" :colConf="colConf" :action="action"></query-dialog>
    显示当前选择的值:{{value}}
    <el-input v-model="title"></el-input>
    字段配置<el-input v-model="colConf" type="textarea"></el-input>
  </div>
</template>

<script>
//import queryDialog from '../components/extend/fancyDialogList'
export default {
  data(){
    return{
     value:'94;68;60',
     title:'',
     colConf:'[{"label":"姓名","property":"name","width":"250"},{"label":"日期","property":"date","width":"150"},{"label":"地址","property":"address","width":""}]',
     action:'https://www.fastmock.site/mock/51715c0157535b99010bde55f2df33c8/formDesigner/api/dialogListData'
    } 
  },
  methods:{

  },
  watch:{
  }
}
</script>
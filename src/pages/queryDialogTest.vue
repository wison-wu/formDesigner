<!--elementUI 图标选择器-->
<template>
  <div >
    <query-dialog v-model="value" :title="title" :showIndex="true" :action="action"></query-dialog>
    显示当前选择的值:{{value}}
    <el-input v-model="title"></el-input>
  </div>
</template>

<script>
import queryDialog from '../components/extend/fancyQueryDialog'
export default {
  data(){
    return{
     value:'99',
     title:'',
     action:'https://www.fastmock.site/mock/51715c0157535b99010bde55f2df33c8/formDesigner/api/dialogListData'
    } 
  },
  components:{
    queryDialog
  },
  methods:{

  },
  watch:{
  }
}
</script>
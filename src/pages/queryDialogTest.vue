<!--elementUI 图标选择器-->
<template>
  <div >
    <query-dialog v-model="value" :title="title" :showIndex="true"></query-dialog>
    显示当前选择的值:{{value}}
    <el-input v-model="title"></el-input>
  </div>
</template>

<script>
import queryDialog from '../components/extend/fancyQueryDialog'
export default {
  data(){
    return{
     value:'',
     title:''
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

<style>
</style>
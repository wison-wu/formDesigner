<!--elementUI 图标选择器-->
<template>
  <div >
    <query-dialog v-model="value"></query-dialog>
    显示当前选择的值:{{value}}
  </div>
</template>

<script>
import queryDialog from '../components/extend/fancyQueryDialog'
export default {
  data(){
    return{
     value:''
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
<!--表单查看页面-->
<template>
  <div class="formViewer">
    开发中1
  </div>
</template>

<script>
export default {
  name:'formViewer',
  data(){
    return{
      form:{}
    }
  },
  props:{
    value:{
      type:String,
      default:''
    },
    buildData:{
      type:String,
      default:''
    }
  },
  computed:{
    itemList(){
      if(this.buildData!==''){
        const buildData = JSON.parse(this.buildData);
        return buildData.list;
      }else{
        return [];
      }
    },
    _value(){ //转换成json的值
      if(this.value!==''){
        const value = JSON.parse(this.value);
        return value;
      }else{
        return {};
      }
    }
  }
}
</script>

<style>

</style>
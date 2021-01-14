<!--elementUI 图标选择器-->
<template>
  <div >
    <el-button @click="handlerchangeopen">展开</el-button>
    {{iconName}}
    <icon-dialog v-model="iconName" :visible.sync="iconDialogVisible">/</icon-dialog>
  </div>
</template>

<script>
export default {
  data(){
    return{
      iconDialogVisible:false,
      iconName:''
    } 
  },
  methods:{
    handlerchangeopen(){
      this.iconDialogVisible = true;
    }
  }
}
</script>

<style>
</style>
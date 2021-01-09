<!--elementUI 图标选择器-->
<template>
  <div >
    <el-button @click.native="handlerchangeopen">展开</el-button>
    <el-dialog title="选择icon" width="60%" :visible.sync="iconDialogVisible">
      <ul class="icon-list">
        <li v-for="c in icons" :key="c">
            <i :class="c"></i>
            <div class="icon-name">{{c}}</div>
        </li>
      </ul>
    </el-dialog>
  </div>
</template>

<script>
import iconList from './utils/icon.json';
export default {
  props:{
    // iconDialogVisible:{
    //   type: Boolean,
    //   default:true
    // }
  },
  data(){
    return{
      iconDialogVisible:true,
      icons:iconList
    } 
  },
  created(){
    console.log(iconList);
  },
  methods:{
    handlerchangeopen(){
      this.iconDialogVisible = true;
    }
  }
}
</script>

<style>
.icon-list{
  padding:0;
  margin:0;
  font-size:0;
}
.icon-list li{
  width: 16.66%;
  height:100px;
  font-size:14px;
  text-align: center;
  list-style-type: none;
  overflow: hidden;
  padding: 15px 6px 6px 6px;
  display: inline-block;
  box-sizing: border-box;
}
.icon-list li:hover{
  background-color: #F2F6FC;
  cursor: pointer;
}
.icon-list li i{
  width:100%;
  font-size: 30px;
  padding: 6px 6px 6px 6px;
}
.icon-name{
  display: block;
  padding-left:6px;
}
.el-dialog {
  border-radius: 8px;
  margin-bottom: 0;
  margin-top: 4vh !important;
  display: flex;
  flex-direction: column;
  max-height: 92vh;
  overflow: hidden;
  box-sizing: border-box;
}
.el-dialog .el-dialog__header {
  padding-top: 14px;
}
.el-dialog .el-dialog__body {
  margin: 0 20px 20px 20px;
  padding: 0;
  overflow: auto;
}
</style>
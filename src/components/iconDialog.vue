<!--elementUI 图标选择器-->
<template>
  <div >
    <el-dialog title="选择icon" width="60%" top="0vh" :visible.sync="dialogVisible">
      <ul class="icon-list">
        <li v-for="iconName in icons" :key="iconName" @click="handlerSelectIcon(iconName)" :class="{activeIcon:iconName ===value}">
            <i :class="iconName"></i>
            <!-- <div class="icon-name">{{iconName}}</div> -->
        </li>
      </ul>
    </el-dialog>
  </div>
</template>

<script>
import iconList from './utils/icon.json';
export default {
  props:{
    visible:{
      type: Boolean,
      default:true
    },
    value:{
      type:String,
      default:''
    }
  },
  data(){
    return{
      icons:iconList,
    } 
  },
  methods:{
    handlerSelectIcon(iconName){
      this.$emit('input',iconName);
      this.$emit('update:visible',false); 
    }
  },
  computed:{
    dialogVisible:{
       // getter
      get: function () {
        return this.visible;
      },
      // setter
      set: function (newValue) {
        this.$emit('update:visible',false); 
      }
    }
  }
}
</script>

<style scoped>
.icon-list{
  padding:0;
  margin:0;
  font-size:0;
}
.icon-list li{
  width: 10%;
  height:60px;
  font-size:14px;
  text-align: center;
  list-style-type: none;
  overflow: hidden;
  padding: 15px 6px 6px 0px;
  display: inline-block;
  box-sizing: border-box;
}
.icon-list li:hover{
  background-color: #F2F6FC;
  cursor: pointer;
}
.activeIcon{
  background-color: #F2F6FC;
  cursor: pointer;
}
.icon-list li i{
  width:100%;
  font-size: 30px;
  padding: 6px 6px 6px 0px;
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
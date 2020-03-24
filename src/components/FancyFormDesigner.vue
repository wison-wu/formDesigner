<template>
  <div class="container">
    <div class="left-board">
      <div class="logo-wrapper">
        <div class="logo">
          Form designer
        </div>
      </div>
      <el-scrollbar class="left-scrollbar">
        <!--左侧组件列表-->
        <div class="components-list">
          <div class="components-title">
            常用组件
          </div>
          <draggable
            class="components-draggable"
            :list="formItems"
            :group="{ name: 'componentsGroup', pull: 'clone', put: false }"
            :clone="cloneComponent"
            draggable=".components-item"
            :sort="false"
            @end="onEnd"
          >
            <div
              v-for="(element, index) in formItems" :key="index" class="components-item"
              @click="addComponent(element)"
            >
              <div class="components-body">
                {{ element.name}}
              </div>
            </div>
          </draggable>
        </div>
      </el-scrollbar>
    </div>
    <designer :list="designList" @clear="designList = []"/>
  </div>
</template>
<script>
/**
 * 1.0版本
 */
import draggable from "vuedraggable";
import formItems from "./custom/itemList";
import Designer from "./Designer";
import {getSimpleId} from "./utils/IdGenerate";

let tempActiveData;

export default {
  name:"fancyFormDesigner",
  components:{
    draggable
    ,Designer
  },
  data() {
    return {
      formItems:formItems,
      designList:[],
      activeData:''
    }
  },
  mounted() {
    
  },
  methods: {
    addComponent(element){

    },
    cloneComponent(origin){
      const clone = JSON.parse(JSON.stringify(origin))
      let uId = "fd_"+getSimpleId();
      clone.id = uId;
      tempActiveData = clone;
    },
    onEnd(obj){
      
      if(obj.from !== obj.to){
        this.activeData = tempActiveData;
        this.designList.splice(obj.newIndex,0,this.activeData);
      }
      
    }
  }
}

</script>
<style scoped>
@import "./style/designer.css";
.container{
  padding:0px
}
</style>
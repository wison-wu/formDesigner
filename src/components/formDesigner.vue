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
            @start="onStart"
            @end="onEnd"
          >
            <div
              v-for="(element, index) in formItems" :key="index" class="components-item"
              @click="addComponent(element)"
            >
              <div class="components-body">
                <icon :code="element.icon" :text="element.name"/>
              </div>
            </div>
          </draggable>
        </div>
      </el-scrollbar>
    </div>
    <designer ref="designer" :list="designList" @clear="designList = []" :activeData="activeData"/>
  </div>
</template>
<script>
/**
 * 1.0版本
 */
import draggable from "vuedraggable";
import formItems from "./custom/itemList";
import Designer from "./designer";
import Icon from "./icon";
import {getSimpleId} from "./utils/IdGenerate";

let tempActiveData;

export default {
  name:"formDesigner",
  components:{
    draggable
    ,Designer
    ,Icon
  },
  data() {
    return {
      formItems:formItems,
      designList:[],
      activeData:{}
    }
  },
  mounted() {
    
  },
  methods: {
    addComponent(element){

    },
    cloneComponent(origin){
      const clone = JSON.parse(JSON.stringify(origin))
      if (!clone.layout) clone.layout = 'colItem'
      if (clone.layout === 'colItem'||clone.layout === 'dynamicItem') {
        let uId = "fd_"+getSimpleId();
        clone.id = uId;
        clone._id = uId;
        tempActiveData = clone;
      }else{
        let uId = "row_"+getSimpleId();
        clone.id = uId;
        clone._id = uId;
        tempActiveData = clone;
      }
      this.$refs.designer.activeItem = tempActiveData;
    },
    onStart(obj){
      
    },
    onEnd(obj){
      if(obj.from !== obj.to){
        this.activeData = tempActiveData;
        this.$refs.designer.activeItem = this.activeData;
        if(obj.to.className.indexOf('row-drag')<0){
          this.designList.splice(obj.newIndex,0,this.activeData);
        }
      }else{
        this.$refs.designer.activeItem = {};
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
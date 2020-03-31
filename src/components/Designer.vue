<template>
  <!--中间面板-->
  <div class="center-board" >
    <div class="action-bar">
      <el-button icon="el-icon-view" type="text" @click="preview">
        预览
      </el-button>
      <el-button icon="el-icon-s-tools" type="text" @click="setting">
        设置
      </el-button>
      <el-button class="delete-btn" icon="el-icon-delete-solid" type="text" @click="clear">
        清空
      </el-button>
      <el-button icon="el-icon-question" type="text" @click="help">
        帮助
      </el-button>
    </div>
    <el-scrollbar class="center-scrollbar">
      <el-row class="center-board-row" :gutter="formConf.gutter">
        <el-form
          :size="formConf.size"
          :label-position="formConf.labelPosition"
          :disabled="formConf.disabled"
          :label-width="formConf.labelWidth + 'px'"
        >
        <draggable class="drawing-board" 
                   :list="list" 
                   :animation="100" 
                   group="componentsGroup" 
                   >
        <design-item 
            v-for="(element,index) in list" 
            :key="index" 
            :model="element" 
            :activeItem="activeItem"
            @onActiveItemChange="handlerActiveItemChange"
            @copyItem="handlerItemCopy"
            @deleteItem="handlerItemDelete"/>
        </draggable>
          <div v-show="infoShow" class="empty-info">
            从左侧拖入或点选组件进行表单设计
          </div>
        </el-form>
      </el-row>
    </el-scrollbar>
    <config-panel :activeItem="activeItem"/>
    <!-- 设计器配置弹出框 -->
    <el-dialog  :visible.sync="formConfVisible" width="30%">
        <el-form ref="formConf" :model="formConf" label-width="100px">
          <el-form-item label="表单名">
              <el-input class="input" v-model="formConf.formRef"></el-input>
          </el-form-item>
          <el-form-item label="表单模型">
              <el-input class="input" v-model="formConf.formModel"></el-input>
          </el-form-item>
          <el-form-item label="校验模型">
              <el-input class="input" v-model="formConf.formRules"></el-input>
          </el-form-item>
          <el-form-item label="表单尺寸">
              <el-radio-group v-model="formConf.size">
                <el-radio-button label="medium">中等</el-radio-button>
                <el-radio-button label="small">较小</el-radio-button>
                <el-radio-button label="mini">迷你</el-radio-button>
              </el-radio-group>
          </el-form-item>
          <el-form-item label="标签对齐">
              <el-radio-group v-model="formConf.labelPosition">
                <el-radio-button label="right">右对齐</el-radio-button>
                <el-radio-button label="left">左对齐</el-radio-button>
                <el-radio-button label="top">顶部对齐</el-radio-button>
              </el-radio-group>
          </el-form-item>
          <el-form-item label="标签宽度">
              <el-input-number v-model="formConf.labelWidth"  :min="60" :max="140"></el-input-number>
          </el-form-item>
          <el-form-item label="栅格间隔">
              <el-input-number v-model="formConf.gutter"  :min="0" :max="30"></el-input-number>
          </el-form-item>
          <el-form-item label="禁用表单">
              <el-switch v-model="formConf.disabled"></el-switch>
          </el-form-item>
        </el-form>
        <span slot="footer" class="dialog-footer">
            <el-button @click="formConfVisible = false">取 消</el-button>
            <el-button type="primary" @click="handlerSaveFormConf">确 定</el-button>
        </span>
    </el-dialog>
    <el-dialog :visible.sync="previewVisible" width="50%" title="预览" :modal="true" :destroy-on-close="true">
      <preview :itemList="itemList"  :formConf="formConf"/>
    </el-dialog>
  </div>
</template>
<script>
import draggable from "vuedraggable";
import configPanel from './configPanel'
import designItem from './designItem'
import {getSimpleId} from "./utils/IdGenerate";
import {isLayout} from "./utils/index";
import formConf from "./custom/formConf";
import preview from "./preview";

export default {
  name:"Designer",
  components:{
    draggable,
    configPanel,
    designItem,
    preview
  },
  props:{
    list: { 
      type: Array,
      default:[]
    }
  },
  data() {
    return {
      formConf:formConf,
      activeItem:{},
      lastActiveItem:{},
      formConfVisible:false,
      previewVisible:false,
      itemList:[]
    }
  },
  mounted() {
    //设计器加载时，需要加载默认的配置
  },
  methods: {
    preview(){
      this.previewVisible= true;
      const clone = JSON.parse(JSON.stringify(this.list))
      this.itemList = clone;
    },
    setting(){
      this.formConfVisible = true;
    },
    clear(){
      this.$confirm('此操作将清空整个表单,是否继续?').then(() => {
          this.$emit('clear'); 
      })
    },
    help(){
      this.$message('帮助！');
    },
    handlerActiveItemChange(obj){
      this.lastActiveItem = this.activeItem;
      this.activeItem = obj;
    },
    handlerItemCopy(origin,parent){
      if(isLayout(origin)){ //布局组件，需要复制布局组件以及下面的组件
          const clone = JSON.parse(JSON.stringify(origin))
          const uId = "row_"+getSimpleId();
          clone.id = uId;
          clone.columns.map((column,index)=>{
            let itemList = [];
            column.list.map((item,i)=>{
              const cloneitem = JSON.parse(JSON.stringify(item))
              const uId = "fd_"+getSimpleId();
              cloneitem.id = uId;
              itemList.push(cloneitem);
            })
            column.list = [];
            column.list = itemList;
          })
          this.list.push(clone);
          this.handlerActiveItemChange(clone);
      }else{  //如果是普通组件，需要判断他是否再布局组件下。
        if(parent){
          parent.columns.map((column,index)=>{
            if(column.list.some(item => item.id === origin.id)){
              const clone = JSON.parse(JSON.stringify(origin))
              const uId = "fd_"+getSimpleId();
              clone.id = uId;
              column.list.push(clone);
              this.handlerActiveItemChange(clone);
            }
          })
        }else{
          const clone = JSON.parse(JSON.stringify(origin))
          const uId = "fd_"+getSimpleId();
          clone.id = uId;
          this.list.push(clone);
          this.handlerActiveItemChange(clone);
        }
      }
      
    },
    handlerItemDelete(origin){
      const index = this.list.findIndex(item=>item.id === origin.id);
      this.list.splice(index,1);
      this.activeItem = this.lastActiveItem;
    },
    handlerSaveFormConf(){
      this.formConfVisible = false
    }
  },
  computed:{
    infoShow() {
      return this.list.length<1;
    }
  },
  watch: {
    activeItem (newValue,oldValue) {
      this.lastActiveItem = oldValue;
    }
  }
}

</script>
<style lang="scss">
@import "./style/designer.css";
@import "./style/designer.scss";
.el-rate{
  display:inline-block;
}
</style>
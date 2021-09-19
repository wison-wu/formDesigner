<template>
  <div v-show="props.compType === 'editor'">
    <el-form-item label="ID">
      <el-tooltip class="item" effect="dark" content="请注意,ID的修改可能会导致该组件相关事件失效！" placement="left">
        <el-input class="input" v-model="props.id" @change="handlerChangeId" ></el-input>
      </el-tooltip>
    </el-form-item>
    <el-form-item label="显示标签">
      <el-switch v-model="props.showLabel" @change="handlerShowLabel"></el-switch>
    </el-form-item>
    <el-form-item label="标签文字" v-show="props.showLabel">
      <el-input class="input" v-model="props.label"></el-input>
    </el-form-item>
    <el-form-item label="标签长度" v-show="props.showLabel">
      <el-input-number v-model="props.labelWidth"  :min="1" :max="200"></el-input-number>
    </el-form-item>
    <el-form-item label="必填">
      <el-switch v-model="props.required"></el-switch>
    </el-form-item>
    <el-form-item label="验证最大字数">
      <el-switch v-model="props.validateMaxText"></el-switch>
    </el-form-item>
    <el-form-item label="最大字数">
      <el-input-number v-model="props.max"  :min="100" ></el-input-number>
    </el-form-item>
  </div>
</template>
<script>
import {changeId} from '../mixin'
export default {
  name:"editorConfig",
  props:{
    props:{}
  },
  mixins:[changeId],
  methods:{
    handlerShowLabel(val){
      if(val){
        this.props.labelWidth = 80;
      }else{
        this.props.labelWidth = 0;
      }
    }
  }

}
</script>

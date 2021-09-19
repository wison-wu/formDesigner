<template>
  <div v-show="props.compType === 'Switch'">
    <el-form-item label="ID">
      <el-tooltip class="item" effect="dark" content="请注意,ID的修改可能会导致该组件相关事件失效！" placement="left">
        <el-input class="input" v-model="props.id" @change="handlerChangeId"></el-input>
      </el-tooltip>
    </el-form-item>
    <el-form-item label="标题">
      <el-input class="input" v-model="props.label"></el-input>
    </el-form-item>
    <!-- <el-form-item label="表单栅格">
      <el-slider class="input" v-model="props.span" :max="24" :min="1" :marks="{12:''}"></el-slider>
    </el-form-item> -->
    <el-form-item label="栅格间隔">
      <el-input-number v-model="props.gutter"  :min="0"></el-input-number>
    </el-form-item>
    <el-form-item label="标签宽度">
      <el-input-number v-model="props.labelWidth"  :min="1" :max="200"></el-input-number>
    </el-form-item>
    <el-form-item label="显示标签">
      <el-switch v-model="props.showLabel" @change="handlerChangeLabel"></el-switch>
    </el-form-item>
    <el-form-item label="必填">
      <el-switch v-model="props.required"></el-switch>
    </el-form-item>
    <el-form-item label="开启时颜色">
      <el-color-picker v-model="props['active-color']"></el-color-picker>
    </el-form-item>
    <el-form-item label="关闭时颜色">
      <el-color-picker v-model="props['inactive-color']"></el-color-picker>
    </el-form-item>
    <el-form-item label="开启时值">
      <el-input class="input" v-model="props['active-value']"></el-input>
    </el-form-item>
    <el-form-item label="关闭时值">
      <el-input class="input" v-model="props['inactive-value']"></el-input>
    </el-form-item>
    <el-form-item label="默认值">
      <el-switch v-model="props.value"></el-switch>
    </el-form-item>
  </div>
</template>
<script>
import {changeId} from '../mixin'

export default {
  name:"inputConfig",
  props:['props','getFormId'],
  components: {
  },
  mixins:[changeId],
  data(){
    return {}
  },
  methods:{
    handlerChangeLabel(val){
      this.props.labelWidth = val?'80':'1';
    },
    handlerChangeDisStatus(val){
      this.props.readOnly = !val;
    },
    handlerChangeReadStatus(val){
      this.props.disabled = !val;
    }
  },
  mounted(){
  }
}
</script>
<style scoped>
.input{
  width:75%
}
</style>
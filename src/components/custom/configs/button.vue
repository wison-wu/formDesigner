<template>
  <div v-show="props.compType === 'button'">
    <!-- <el-form-item label="字段名">
      <el-input class="input" v-model="props"></el-input>
    </el-form-item> -->
    <el-form-item label="按钮文字">
      <el-input class="input" v-model="props.text"></el-input>
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
    <el-form-item label="占用列数" v-show="props.span">
      <el-input-number v-model="props.span"  :min="1" :max="24"></el-input-number>
    </el-form-item>
    <el-form-item label="按钮类型" >
      <el-radio-group v-model="props.type">
        <el-radio-button label="primary">1</el-radio-button>
        <el-radio-button label="success">2</el-radio-button>
        <el-radio-button label="warning">3</el-radio-button>
        <el-radio-button label="danger">4</el-radio-button>
        <el-radio-button label="info">5</el-radio-button>
        <el-radio-button label="text">6</el-radio-button>
      </el-radio-group>
    </el-form-item>
    <el-form-item label="按钮大小">
      <el-radio-group v-model="props.size">
        <el-radio-button label="medium">大</el-radio-button>
        <el-radio-button label="small">中</el-radio-button>
        <el-radio-button label="mini">小</el-radio-button>
      </el-radio-group>
    </el-form-item>
    <el-form-item label="禁用">
      <el-switch v-model="props.disabled"></el-switch>
    </el-form-item>
    <el-form-item label="简单样式">
      <el-switch v-model="props.plain"></el-switch>
    </el-form-item>
    <el-form-item label="圆角">
      <el-switch v-model="props.round"></el-switch>
    </el-form-item>
    <el-form-item label="圆形">
      <el-switch v-model="props.circle"></el-switch>
    </el-form-item>
  </div>
</template>
<script>
/**
 * input的配置项
 */
export default {
  name:"buttonConfig",
  props:{
    props:{}
  },
  data(){
    return {
    }
  },
  methods:{
    handlerShowLabel(val){
      if(val){
        this.props.labelWidth = 80;
      }else{
        this.props.labelWidth = 0;
      }
    }
  },
  mounted(){
  }
}
</script>

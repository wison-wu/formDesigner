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
    <el-form-item label="标签长度" v-show="props.labelWidth !==''">
      <el-switch v-model="props.labelWidth"></el-switch>
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
      //if()
    }
  },
  mounted(){
  }
}
</script>

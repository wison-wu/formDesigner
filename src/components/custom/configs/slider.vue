<template>
  <div v-show="props.compType === 'slider'">
    <!-- <el-form-item label="字段名">
      <el-input class="input" v-model="props"></el-input>
    </el-form-item> -->
    <el-form-item label="标题">
      <el-input class="input" v-model="props.label"></el-input>
    </el-form-item>
    <el-form-item label="表单栅格">
      <el-slider class="input" v-model="props.span" :max="24" :min="1" :marks="{12:''}"></el-slider>
    </el-form-item>
    <el-form-item label="栅格间隔">
      <el-input-number v-model="props.gutter"  :min="0"></el-input-number>
    </el-form-item>
    <el-form-item label="标签宽度">
      <el-input-number v-model="props.labelWidth"  :min="1" :max="200"></el-input-number>
    </el-form-item>
    <el-form-item label="显示标签">
      <el-switch v-model="props.showLabel"></el-switch>
    </el-form-item>
    <el-form-item label="必填">
      <el-switch v-model="props.required"></el-switch>
    </el-form-item>

    <el-form-item label="最小值">
      <el-input-number v-model="props.min"  :min="0"></el-input-number>
    </el-form-item>
    <el-form-item label="最大值">
      <el-input-number v-model="props.max" placeholder="字符长度"/>
    </el-form-item>
    <el-form-item label="步长">
      <el-input-number v-model="props.step"></el-input-number>
    </el-form-item>
    <el-form-item label="范围选择">
      <el-switch v-model="props.range"></el-switch>
    </el-form-item>
    <el-form-item label="显示断点">
      <el-switch v-model="props['show-stops']"></el-switch>
    </el-form-item>
    <el-form-item label="显示提示消息">
      <el-switch v-model="props['show-tooltip']"></el-switch>
    </el-form-item>
    <el-form-item label="禁用">
      <el-switch v-model="props.disabled"></el-switch>
    </el-form-item>
    <el-form-item label="默认值">
      <el-input class="input" v-model="props.value"></el-input>
    </el-form-item>
  </div>
</template>
<script>
/**
 * input的配置项
 */
export default {
  name:"inputConfig",
  props:{
    props:{}
  },
  data(){
    return {
      val:123
    }
  },
  methods:{
  },
  mounted(){
  }
}
</script>

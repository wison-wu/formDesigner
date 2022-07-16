<template>
  <div v-show="props.compType === 'tdItem'">
    <el-form-item label="单元格背景">
      <el-color-picker v-model="props.style.background" :predefine="predefineColors"/>
    </el-form-item>
    <el-form-item label="表格宽度(%)">
      <el-inputNumber  class="input" :min="0" :max="100" v-model="props.style.width"/>
    </el-form-item>
  </div>
</template>
<script>
/**
 * input的配置项
 */
export default {
  name:"tdItemConfig",
  props:['props'],
  data(){
    return {
        predefineColors: [
          '#F6F6F6'
        ]
    }
  },
  methods:{
  }
}
</script>
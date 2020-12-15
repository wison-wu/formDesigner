<template>
  <div v-show="props.compType === 'button'">
    <!-- <el-form-item label="字段名">
      <el-input class="input" v-model="props"></el-input>
    </el-form-item> -->
    <el-form-item label="按钮文字">
      <el-input class="input" v-model="props.label"></el-input>
    </el-form-item>
    <el-form-item label="禁用">
      <el-switch v-model="props.disabled" @change="handlerChangeDisStatus('disabled')"></el-switch>
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
  },
  mounted(){
  }
}
</script>

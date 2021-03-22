<template>
  <div v-show="props.compType === 'dialogList'">
    <!-- <el-form-item label="字段名">
      <el-input class="input" v-model="props"></el-input>
    </el-form-item> -->
    <el-form-item label="ID" >
      <el-tooltip class="item" effect="dark" content="请注意,ID的修改可能会导致该组件相关事件失效！" placement="left">
        <el-input class="input" v-model="props.id" ></el-input>
      </el-tooltip>
    </el-form-item>
    <el-form-item label="标题" >
      <el-input class="input" v-model="props.label"></el-input>
    </el-form-item>
    <el-form-item label="栅格" >
      <el-input-number v-model="props.span"  :min="1" :max="24"/>
    </el-form-item>
    <el-form-item label="禁用" >
      <el-switch v-model="props.disabled"></el-switch>
    </el-form-item>
    <el-form-item label="默认值" >
      <el-input class="input" v-model="props.value"></el-input>
    </el-form-item>
    <el-form-item label="请求地址">
        <el-input v-model="props.action"></el-input>
    </el-form-item>
    <el-form-item label="标题">
        <el-input v-model="props.title"></el-input>
    </el-form-item>
  </div>
</template>
<script>
/**
 * text的配置项
 */
export default {
  name:"textConfig",
  props:{
    props:{}
  }
}
</script>

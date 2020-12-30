<template>
  <div v-show="props.compType === 'text'">
    <!-- <el-form-item label="字段名">
      <el-input class="input" v-model="props"></el-input>
    </el-form-item> -->
    <el-form-item label="ID" labelWidth="40px">
      <el-tooltip class="item" effect="dark" content="请注意,ID的修改可能会导致该组件相关事件失效！" placement="left">
        <el-input class="input" v-model="props.id" ></el-input>
      </el-tooltip>
    </el-form-item>
    <el-form-item label="文本" labelWidth="40px">
      <el-input type="textarea" class="input" v-model="props.text" rows="12"></el-input>
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

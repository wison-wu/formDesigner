<template>
  <div v-show="props.compType === 'divider'">
    <el-form-item label="ID">
      <el-tooltip class="item" effect="dark" content="请注意,ID的修改可能会导致该组件相关事件失效！" placement="left">
        <el-input class="input" v-model="props.id" ></el-input>
      </el-tooltip>
    </el-form-item>
    <el-form-item label="文字">
      <el-input class="input" v-model="props.text"></el-input>
    </el-form-item>
    <el-form-item label="文字大小">
      <el-radio-group v-model="props['content-position']">
        <el-radio-button label="left">左</el-radio-button>
        <el-radio-button label="center">中</el-radio-button>
        <el-radio-button label="right">右</el-radio-button>
      </el-radio-group>
    </el-form-item>
  </div>
</template>
<script>
/**
 * input的配置项
 */
export default {
  name:"dividerConfig",
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

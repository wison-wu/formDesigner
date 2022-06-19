<template>
  <div v-show="props.compType === 'table'">
    <!-- <el-form-item label="字段名">
      <el-input class="input" v-model="props"></el-input>
    </el-form-item> -->
    <el-form-item label="ID">
      <el-tooltip class="item" effect="dark" content="请注意,ID的修改可能会导致该组件相关事件失效！" placement="left">
        <el-input class="input" v-model="props.id" @change="handlerChangeId" ></el-input>
      </el-tooltip>
    </el-form-item>
    
  </div>
</template>
<script>
import {changeId} from '../mixin'
/**
 * input的配置项
 */
export default {
  name:"inputConfig",
  props:['props','getFormId'],
  components:{
  },
  mixins:[changeId],
  data(){
    return {
    }
  },
  methods:{
  }
}
</script>
<style scoped>
</style>
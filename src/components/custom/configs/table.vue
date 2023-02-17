<template>
  <div v-show="props.compType === 'table'">
    <div style="font-size:14px;margin-top:10px;height:20px;text-align: center">
      <i class="el-icon-info"></i>请点击右键增加行列，或者合并单元格
    </div>
    <el-divider></el-divider>
    <el-form-item label="ID" >
      <el-tooltip class="item" effect="dark" content="请注意,ID的修改可能会导致该组件相关事件失效！" placement="left">
        <el-input class="input" v-model="props.id" @change="handlerChangeId" ></el-input>
      </el-tooltip>
    </el-form-item>
    <el-form-item label="单元格样式">
      <el-input  class="input" v-model="props.tdStyle"></el-input>
    </el-form-item>
    <el-form-item label="表格宽度">
      <el-inputNumber  class="input" :min="0" :max="500" v-model="props.width"></el-inputNumber>
    </el-form-item>
    <el-form-item label="行高">
      <el-inputNumber  class="input" :min="0" :max="1500" :step="5" v-model="props.height"></el-inputNumber>
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
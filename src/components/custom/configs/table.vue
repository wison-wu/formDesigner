<template>
  <div v-show="props.compType === 'table'">
    <el-form-item label="单元格样式">
      <el-input  class="input" v-model="props.tdStyle"></el-input>
    </el-form-item>
    <el-form-item label="表格宽度">
      <el-inputNumber  class="input" :min="0" :max="500" v-model="props.width"></el-inputNumber>
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
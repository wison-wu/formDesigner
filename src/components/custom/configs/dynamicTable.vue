<template>
  <div v-show="props.compType === 'dynamicTable'">
    <el-form-item label="ID">
      <el-tooltip class="item" effect="dark" content="请注意,ID的修改可能会导致该组件相关事件失效！" placement="left">
        <el-input class="input" v-model="props.id" @change="handlerChangeId"></el-input>
      </el-tooltip>
    </el-form-item>
    <el-form-item label="显示新增按钮" label-width="120px">
      <el-switch v-model="props.buttonAdd"></el-switch>
    </el-form-item>
    <el-form-item label="显示删除按钮" label-width="120px">
      <el-switch v-model="props.buttonDel"></el-switch>
    </el-form-item>
    <el-form-item label="显示行号" label-width="120px">
      <el-switch v-model="props.showIndex"></el-switch>
    </el-form-item>
    <el-form-item label="多选" label-width="120px">
      <el-switch v-model="props.multiCheck"></el-switch>
    </el-form-item>
    <el-form-item label="合计行" label-width="120px">
      <el-switch v-model="props['show-summary']"></el-switch>
    </el-form-item>
    <el-form-item label="合计文本" label-width="120px">
      <el-input v-model="props['sum-text']"></el-input>
    </el-form-item>
    <el-form-item label="单位文本" label-width="120px">
      <el-input v-model="props['summary-text']"></el-input>
    </el-form-item>
  </div>
</template>
<script>
import {changeId} from '../mixin'
export default {
  name:"dynamicTableConfig",
  props:['props','getFormId'],
  mixins:[changeId],
  data(){
    return {
    }
  },
  methods:{
  }
}
</script>
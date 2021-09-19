<template>
  <div v-show="props.compType === 'text'">
    <!-- <el-form-item label="字段名">
      <el-input class="input" v-model="props"></el-input>
    </el-form-item> -->
    <el-form-item label="ID" labelWidth="40px">
      <el-tooltip class="item" effect="dark" content="请注意,ID的修改可能会导致该组件相关事件失效！" placement="left">
        <el-input class="input" v-model="props.id" @change="handlerChangeId" ></el-input>
      </el-tooltip>
    </el-form-item>
    <el-form-item label="文本" labelWidth="40px">
      <el-input type="textarea" class="input" v-model="props.text" rows="12" ></el-input>
    </el-form-item>
    <el-form-item label="颜色" labelWidth="40px">
      <el-color-picker v-model="props.color" />
    </el-form-item>
    <el-form-item label="布局" labelWidth="40px">
        <el-radio-group v-model="props.align">
          <el-radio-button label="left">左</el-radio-button>
          <el-radio-button label="center">中</el-radio-button>
          <el-radio-button label="right">右</el-radio-button>
        </el-radio-group>
    </el-form-item>
    <el-form-item label="大小" labelWidth="40px">
        <el-input-number v-model="props.size" :min="10" :max="50" @change="handlerChangeSize"></el-input-number>
    </el-form-item>
    <el-form-item label="加粗" labelWidth="40px">
        <el-input-number v-model="props.bold" :min="100" :max="800" :step="100" @change="handlerChangeBold"></el-input-number>
    </el-form-item>
  </div>
</template>
<script>
import {changeId} from '../mixin'
export default {
  name:"textConfig",
  props:['props'],
  data(){
    return{
    }
  },
  mixins:[changeId],
  methods:{
    handlerChangeSize(val){
      this.props.size = val+'';
    },
    handlerChangeBold(val){
      this.props.bold = val+'';
    }
  }
}
</script>

<template>
  <div v-show="props.compType === 'barCode'">
    <!-- <el-form-item label="字段名">
      <el-input class="input" v-model="props"></el-input>
    </el-form-item> -->
    <el-form-item label="ID">
      <el-tooltip class="item" effect="dark" content="请注意,ID的修改可能会导致该组件相关事件失效！" placement="left">
        <el-input class="input" v-model="props.id" ></el-input>
      </el-tooltip>
    </el-form-item>
    <el-form-item label="显示标签">
      <el-switch v-model="props.showLabel" @change="handlerShowLabel"></el-switch>
    </el-form-item>
    <el-form-item label="标签文字" v-show="props.showLabel">
      <el-input class="input" v-model="props.label"></el-input>
    </el-form-item>
    <el-form-item label="标签长度" v-show="props.showLabel">
      <el-input-number v-model="props.labelWidth"  :min="1" :max="200"></el-input-number>
    </el-form-item>
    <el-form-item label="占用列数" v-show="props.span">
      <el-input-number v-model="props.span"  :min="1" :max="24"></el-input-number>
    </el-form-item>
    <el-form-item label="条码值">
      <el-input v-model="props.value"></el-input>
    </el-form-item>
    <el-form-item label="条码颜色" v-show="props.lineColor">
      <el-color-picker v-model="props.lineColor" @change="handlerChangeBarCode"/>
    </el-form-item>
    <el-form-item label="背景颜色" v-show="props.background">
      <el-color-picker v-model="props.background" @change="handlerChangeBackground"/>
    </el-form-item>
    <!--暂不启用-->
    <!-- <el-form-item label="条码宽度">
      <el-input-number v-model="props.width"  :min="1" :max="10" :step="1"></el-input-number>
    </el-form-item> -->
    <el-form-item label="条码高度">
      <el-input-number v-model="props.height"  :min="10" :max="100" :step="1"></el-input-number>
    </el-form-item>
    <el-form-item label="显示值">
      <el-switch v-model="props.displayValue"></el-switch>
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
  components:{
  },
  data(){
    return {
    }
  },
  methods:{
    handlerShowLabel(val){
      if(val){
        this.props.labelWidth = 80;
      }else{
        this.props.labelWidth = 0;
      }
    },
    handlerChangeBarCode(val){
      if(val == null){
        this.props.lineColor = '#000';
      }
    },
    handlerChangeBackground(val){
      if(val == null){
        this.props.background = '#fff';
      }
    }
  },
  mounted(){
  }
}
</script>

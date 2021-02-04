<template>
  <div v-show="props.compType === 'cascader'">
    <!-- <el-form-item label="字段名">
      <el-input class="input" v-model="props"></el-input>
    </el-form-item> -->
    <el-form-item label="ID">
      <el-tooltip class="item" effect="dark" content="请注意,ID的修改可能会导致该组件相关事件失效！" placement="left">
        <el-input class="input" v-model="props.id" @change="handlerChangeId" ></el-input>
      </el-tooltip>
    </el-form-item>
    <el-form-item label="标题">
      <el-input class="input" v-model="props.label"></el-input>
    </el-form-item>
    <el-form-item label="栅格">
      <el-input-number v-model="props.span"  :min="1" :max="24"/>
    </el-form-item>
    <el-form-item label="宽度">
      <el-input-number v-model="props.width"  :min="0" :max="100"/>%
    </el-form-item>
    <el-form-item label="提示符">
      <el-input class="input" v-model="props.placeholder" placeholder="请输入提示符"/>
    </el-form-item>
    <!-- <el-form-item label="表单栅格">
      <el-slider class="input" v-model="props.span" :max="24" :min="1" :marks="{12:''}"></el-slider>
    </el-form-item> -->
    <el-form-item label="栅格间隔">
      <el-input-number v-model="props.gutter"  :min="0"></el-input-number>
    </el-form-item>
    <el-form-item label="标签宽度">
      <el-input-number v-model="props.labelWidth"  :min="0" :max="200"></el-input-number>
    </el-form-item>
    <el-form-item label="显示标签">
      <el-switch v-model="props.showLabel"  @change="handlerChangeLabel"></el-switch>
    </el-form-item>
    <el-form-item label="大小">
      <el-radio-group v-model="props.size">
        <el-radio-button label="medium">正常</el-radio-button>
        <el-radio-button label="small">略小</el-radio-button>
        <el-radio-button label="mini">迷你</el-radio-button>
      </el-radio-group>
    </el-form-item>
    <el-form-item label="URL">
      <el-input v-model="props.action"></el-input>
    </el-form-item>
    <el-form-item label="清除">
      <el-switch v-model="props.clearable"></el-switch>
    </el-form-item>
    <el-form-item label="禁用">
      <el-switch v-model="props.disabled" ></el-switch>
    </el-form-item>
    <el-form-item label="完整路径">
      <el-switch v-model="props['show-all-levels']" ></el-switch>
    </el-form-item>
    <el-form-item label="分隔符">
      <el-input v-model="props.separator" ></el-input>
    </el-form-item>
  </div>
</template>
<script>
/**
 * input的配置项
 */
export default {
  name:"cascaderConfig",
  props:['props'],
  components:{
  },
  data(){
    return {
    }
  },
  methods:{
    handlerChangeId(val){
      let idArray = this.getFormId(this.props._id);
      if(idArray.includes(val)){  //如果存在id相等，则提示
        this.$message.error('该ID已经存在，请修改');
        this.props.id=this.props._id;
      }else{
        this.props._id=val;
      }
    },
    handlerChangeLabel(val){
      this.props.labelWidth = val?'80':'1'
    },
  },
  mounted(){
  },
  watch:{
  }
}
</script>
<style scoped>
</style>
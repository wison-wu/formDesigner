<template>
  <div v-show="props.compType === 'input'">
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
      <el-input-number v-model="props.width"  :min="1" :max="100"/>%
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
      <el-input-number v-model="props.labelWidth"  :min="1" :max="200"></el-input-number>
    </el-form-item>
    <el-form-item label="显示标签">
      <el-switch v-model="props.showLabel" @change="handlerChangeLabel"></el-switch>
    </el-form-item>
    <el-form-item label="必填">
      <el-switch v-model="props.required"></el-switch>
    </el-form-item>
    <el-form-item label="清除">
      <el-switch v-model="props.clearable"></el-switch>
    </el-form-item>
    <el-form-item label="禁用">
      <el-switch v-model="props.disabled" @change="handlerChangeDisStatus('disabled')"></el-switch>
    </el-form-item>
    <el-form-item label="只读">
      <el-switch v-model="props.readonly" @change="handlerChangeReadStatus('readonly')"></el-switch>
    </el-form-item>
    <el-form-item label="前置图标">
      <el-input placeholder="请选择图标" readonly  v-model="props['prefix-icon']">
        <template slot="append" >
          <i class="el-icon-picture" style="cursor: pointer;" @click="handlerPrefixSelectIcon"/>
        </template>
      </el-input>
    </el-form-item>
    <el-form-item label="后置图标">
      <el-input placeholder="请选择图标" readonly  v-model="props['suffix-icon']">
        <template slot="append" >
          <i class="el-icon-picture" style="cursor: pointer;" @click="handlerSuffixSelectIcon"/>
        </template>
      </el-input>
    </el-form-item>
    <el-form-item label="默认值">
      <el-input class="input" v-model="props.value"></el-input>
    </el-form-item>
    <icon-dialog v-model="props['suffix-icon']" :visible.sync="iconDialogVisible_suffix"/>
    <icon-dialog v-model="props['prefix-icon']" :visible.sync="iconDialogVisible_prefix"/>
  </div>
</template>
<script>
/**
 * input的配置项
 */
export default {
  name:"inputConfig",
  props:['props','getFormId'],
  components:{
  },
  data(){
    return {
      val:'',
      iconDialogVisible_suffix:false,
      iconDialogVisible_prefix:false
    }
  },
  methods:{
    handlerChangeLabel(val){
      this.props.labelWidth = val?'80':'1'
    },
    handlerChangeDisStatus(val){
      this.props.readOnly = val?false:true
    },
    handlerChangeReadStatus(val){
      this.props.disabled = val?false:true
    },
    handlerChangeId(val){
      let idArray = this.getFormId(this.props._id);
      if(idArray.includes(val)){  //如果存在id相等，则提示
        this.$message.error('该ID已经存在，请修改');
        this.props.id=this.props._id;
      }else{
        this.props._id=val;
      }
    },
    handlerSuffixSelectIcon(){
      this.iconDialogVisible_suffix = true;
    },
    handlerPrefixSelectIcon(){
      this.iconDialogVisible_prefix = true;
    }
  },
  mounted(){
  },
  watch:{
  }
}
</script>
<style scoped>
.input{
  width:75%
}
</style>
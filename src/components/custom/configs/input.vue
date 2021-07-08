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
      <el-switch v-model="props.disabled"></el-switch>
    </el-form-item>
    <el-form-item label="只读">
      <el-switch v-model="props.readonly"></el-switch>
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
    <el-divider>校验</el-divider>
    <el-form-item label="验证类型">
      <el-input class="input" v-model="props.value"></el-input>
    </el-form-item>
    <div v-for="(item, index) in props.rules" :key="index" class="rule-item">
        <el-input v-model="item.rule" placeholder="正则" size="small" />
        <p/>
        <el-input v-model="item.msg" placeholder="自定义提示" size="small" />
        <div class="close-btn select-line-icon" @click="props.rules.splice(index, 1)">
          <i class="el-icon-remove-outline close-icon" />
        </div>
      </div>
    <div style="margin-left: 20px;">
      <el-button
        style="padding-bottom: 0"
        icon="el-icon-circle-plus-outline"
        type="text"
        @click="addRuleItem"
      >
        添加选项
      </el-button>
    </div>
    <icon-dialog v-model="props['suffix-icon']" :visible.sync="iconDialogVisible_suffix"/>
    <icon-dialog v-model="props['prefix-icon']" :visible.sync="iconDialogVisible_prefix"/>
  </div>
</template>
<script>
import iconDialog from '../../iconDialog';
/**
 * input的配置项
 */
export default {
  name:"inputConfig",
  props:['props','getFormId'],
  components:{
    iconDialog
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
    },
    addRuleItem(){
      this.props.rules.push({
        rule: '',
        msg: ''
      })
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
.rule-item{
 padding-top: 5px;
 padding-bottom: 5px;
}
.close-btn{
  text-align: center;
}
.close-icon:hover{
  cursor: pointer;
}
.close-btn >>> .el-icon-remove-outline{
  color:"red"
}
</style>
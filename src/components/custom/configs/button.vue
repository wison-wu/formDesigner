<template>
  <div v-show="props.compType === 'button'">
    <el-form-item label="ID">
      <el-tooltip class="item" effect="dark" content="请注意,ID的修改可能会导致该组件相关事件失效！" placement="left">
        <el-input class="input" v-model="props.id" ></el-input>
      </el-tooltip>
    </el-form-item>
    <el-form-item label="按钮文字">
      <el-input class="input" v-model="props.text"></el-input>
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
    
    <el-form-item label="按钮类型" >
      <el-select v-model="props.type" placeholder="请选择">
        <el-option label="primary" value="primary"/>
        <el-option label="success" value="success"/>
        <el-option label="warning" value="warning"/>
        <el-option label="danger" value="danger"/>
        <el-option label="info" value="info"/>
        <el-option label="text" value="text"/>
      </el-select>
    </el-form-item>
    <el-form-item label="按钮大小">
      <el-radio-group v-model="props.size">
        <el-radio-button label="medium">大</el-radio-button>
        <el-radio-button label="small">中</el-radio-button>
        <el-radio-button label="mini">小</el-radio-button>
      </el-radio-group>
    </el-form-item>
    <el-form-item label="禁用">
      <el-switch v-model="props.disabled"></el-switch>
    </el-form-item>
    <el-form-item label="简单样式">
      <el-switch v-model="props.plain"></el-switch>
    </el-form-item>
    <el-form-item label="圆角">
      <el-switch v-model="props.round"></el-switch>
    </el-form-item>
    <el-form-item label="圆形">
      <el-switch v-model="props.circle"></el-switch>
    </el-form-item>
    <el-form-item label="图标">
      <el-input placeholder="请选择图标" readonly  v-model="props.icon">
        <template slot="append" >
          <i class="el-icon-picture" style="cursor: pointer;" @click="handlerSelectIcon"/>
        </template>
      </el-input>
    </el-form-item>
    <icon-dialog v-model="props.icon" :visible.sync="iconDialogVisible"/>
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
  data(){
    return {
      iconDialogVisible:false
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
    handlerSelectIcon(){
      this.iconDialogVisible = true;
    }
  },
  mounted(){
  }
}
</script>

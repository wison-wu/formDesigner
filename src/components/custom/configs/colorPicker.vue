<template>
  <div v-show="props.compType === 'colorPicker'">
    <el-form-item label="ID">
      <el-tooltip class="item" effect="dark" content="请注意,ID的修改可能会导致该组件相关事件失效！" placement="left">
        <el-input class="input" v-model="props.id" @change="handlerChangeId" ></el-input>
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
    <el-form-item label="透明">
        <el-switch v-model="props['show-alpha']"></el-switch>
    </el-form-item>
    <el-form-item label="默认颜色">
        <el-color-picker v-model="props.value" />
    </el-form-item>
    <el-form-item label="大小">
      <el-radio-group v-model="props.size">
        <el-radio-button label="medium">常规</el-radio-button>
        <el-radio-button label="small">略小</el-radio-button>
        <el-radio-button label="mini">迷你</el-radio-button>
      </el-radio-group>
    </el-form-item>
    <el-form-item label="预定义颜色">
        <div class="select-item" v-for="(item,index) in props.predefine" :key="item">
            <span class="el-color-picker__color"><!--style="background-color: rgb(64, 158, 255);"-->
                <span class="el-color-picker__color-inner" :style="{'background-color':item}">
                </span>
            </span>
            <div class="close-btn select-line-icon">
                <i class="el-icon-remove-outline" @click="handlerRemoveColor(index)"/>
            </div>
        </div>
        <br/>
        <el-color-picker v-model="color" @change="handlerAddPreColor"></el-color-picker>
    </el-form-item>
</div>
</template>
<script>
import {changeId} from '../mixin'
export default {
  name:"buttonConfig",
  props:{
    props:{}
  },
  mixins:[changeId],
  data(){
    return {
      color:'#409EFF',
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
    handlerAddPreColor(val){
        console.log(val);
        this.props.predefine.push(val);
        console.log(this.props.predefine);
    },
    handlerRemoveColor(index){
        this.props.predefine.splice(index,1);
    }
  },
  mounted(){
  }
}
</script>
<style scoped>
.el-color-picker__color{
    position: relative;
    display: block;
    box-sizing: border-box;
    border: 1px solid #999;
    border-radius: 2px;
    width:100px;
    height:30px;
    float:left;
    margin-right:2px;
}
</style>

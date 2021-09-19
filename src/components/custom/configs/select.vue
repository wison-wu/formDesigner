<template>
  <div v-show="props.compType === 'select'">
    <!-- <el-form-item label="字段名">
      <el-input class="input" v-model="props"></el-input>
    </el-form-item> -->
    <el-form-item label="ID">
      <el-tooltip class="item" effect="dark" content="请注意,ID的修改可能会导致该组件相关事件失效！" placement="left">
        <el-input class="input" v-model="props.id" @change="handlerChangeId"></el-input>
      </el-tooltip>
    </el-form-item>
    <el-form-item label="标题">
      <el-input class="input" v-model="props.label"></el-input>
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
    <el-form-item label="多选">
      <el-switch v-model="props.multiple" @change="multipleChange"></el-switch>
    </el-form-item>
    <el-form-item label="折叠" v-show="props.multiple">
      <el-switch v-model="props['collapse-tags']" ></el-switch>
    </el-form-item>
    <el-form-item label="搜索">
      <el-switch v-model="props.filterable"></el-switch>
    </el-form-item>
    <el-form-item label="默认值">
      <el-input class="input"
        :value="setValue(props.value)"
        placeholder="请输入默认值"
        @input="onValueInput"
      />
    </el-form-item>
    <el-form-item label="数据类型">
      <el-radio-group v-model="props.dataType" @change="handlerChangeDataType">
        <el-radio-button label="static">静态数据</el-radio-button>
        <el-radio-button label="dynamic">动态数据</el-radio-button>
      </el-radio-group>
    </el-form-item>
    <div v-show='props.dataType ==="static"'>
    <el-divider>选项</el-divider>
      <draggable :list="props.options" handle=".option-drag">
      <div v-for="(item, index) in props.options" :key="index" class="select-item">
        <div class="select-line-icon option-drag">
          <i class="el-icon-s-operation" />
        </div>
        <el-input v-model="item.label" placeholder="选项名" size="small" />
        <el-input
          placeholder="选项值"
          size="small"
          :value="item.value"
          @input="setOptionValue(item, $event)"
        />
        <div class="close-btn select-line-icon" @click="props.options.splice(index, 1)">
          <i class="el-icon-remove-outline" />
        </div>
      </div>
      </draggable>
    <div style="margin-left: 20px;">
      <el-button
        style="padding-bottom: 0"
        icon="el-icon-circle-plus-outline"
        type="text"
        @click="addSelectItem"
      >
        添加选项
      </el-button>
    </div>
    </div>
    <div v-show='props.dataType ==="dynamic"'>
      <el-form-item label="地址">
        <el-input v-model="props.action"></el-input>
      </el-form-item>
    </div>
  </div>
</template>
<script>
import {changeId} from '../mixin'
import draggable from "vuedraggable";
import { isNumberStr } from '../../utils/index'
export default {
  name:"inputConfig",
  props:['props','getFormId'],
  components:{
    draggable
  },
  mixins:[changeId],
  data(){
    return {
      tempOptions:[]
    }
  },
  methods:{
    handlerChangeLabel(val){
      this.props.labelWidth = val?'80':'1'
    },
    setValue(val) {
      if (Array.isArray(val)) {
        return val.join(',')
      }
      if (['string', 'number'].indexOf(val) > -1) {
        return val
      }
      if (typeof val === 'boolean') {
        return `${val}`
      }
      return val
    },
    onValueInput(str) {
      if (Array.isArray(this.props.value)) {
        // 数组
        this.$set(
          this.props,
          'value',
          str.split(',').map(val => (isNumberStr(val) ? +val : val))
        )
      } else if (['true', 'false'].indexOf(str) > -1) {
        // 布尔
        this.$set(this.props, 'value', JSON.parse(str))
      } else {
        // 字符串和数字
        this.$set(
          this.props,
          'value',
          isNumberStr(str) ? +str : str
        )
      }
    },
    setOptionValue(item,val){
      item.value = isNumberStr(val) ? +val : val
    },
    addSelectItem(){
      this.props.options.push({
        label: '',
        value: ''
      })
    },
    multipleChange(val){
      this.$set(this.props, 'value', val ? [] : '')
    },
    handlerChangeDataType(value){
      if(value === 'static'){
        this.props.options = [];
        this.props.options = this.tempOptions;
      }else{
        this.tempOptions = this.props.options;
        this.props.options = [];
      }
    }
  },
  mounted(){
  }
}
</script>
<style lang="scss" scoped>
.input{
  width:75%
}
</style>
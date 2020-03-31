<!--后期支持flex布局-->
<template>
  <div v-show="props.compType === 'row'">
    <!-- <el-form-item label="字段名">
      <el-input class="input" v-model="props"></el-input>
    </el-form-item> -->
    <!-- <el-form-item label="flex布局">
      <el-radio-group v-model="props.flex">
        <el-radio-button label="default">默认</el-radio-button>
        <el-radio-button label="flex">flex</el-radio-button>
      </el-radio-group>
    </el-form-item>
    <el-form-item label="水平排列" v-show="props.flex">
      <el-select v-model="props.justify" @change="handlerFormatChange">
        <el-option label="左对齐" value="start"></el-option>
        <el-option label="右对齐" value="end"></el-option>
        <el-option label="居中" value="center"></el-option>
        <el-option label="两侧间隔相等" value="space-around"></el-option>
        <el-option label="两端对齐" value="space-between"></el-option>
      </el-select>
    </el-form-item>
    <el-form-item label="垂直排列" v-show="props.flex">
      <el-radio-group v-model="props.align">
        <el-radio-button label="top">顶部</el-radio-button>
        <el-radio-button label="middle">中间</el-radio-button>
        <el-radio-button label="bottom">底部</el-radio-button>
      </el-radio-group>
    </el-form-item> -->
    
    <el-form-item label="栅格间隔">
      <el-input-number size="small" v-model="props.gutter" :min="0" :max="100"/>
    </el-form-item>
    <el-divider>列配置项</el-divider>
    <draggable
      :list="props.columns"
      :animation="340"
      group="selectItem"
      handle=".option-drag"
    >
      <div v-for="(item, index) in props.columns" :key="index" class="select-item">
        <div class="select-line-icon option-drag">
          <i class="el-icon-s-operation" />
        </div>
        <el-input-number
          size="normal"
          v-model="item.span"
        />
        <div class="close-btn select-line-icon" @click="props.columns.splice(index,1)">
          <i class="el-icon-remove-outline" />
        </div>
      </div>
    </draggable>
    <div style="margin-left: 30px;">
      <el-button
        style="padding-bottom: 0"
        icon="el-icon-circle-plus-outline"
        type="text"
        @click="handlerAddCol"
      >
        添加选项
      </el-button>
    </div>
  </div>
</template>
<script>
export default {
  name:"rowConfig",
  props:{
    props:{}
  },
  data(){
    return {
    }
  },
  methods:{
    handlerAddCol(){
      const colIndex = this.props.columns+1;
      this.props.columns.push({
        index:colIndex,
        span:12,
        list:[]
      })
    },
  },
  mounted(){
  }
}
</script>

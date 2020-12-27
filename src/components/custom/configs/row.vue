<!--后期支持flex布局-->
<template>
  <div v-show="props.compType === 'row'">
    <el-form-item label="栅格间隔">
      <el-input-number size="small" v-model="props.gutter" :min="0" :max="100"/>
    </el-form-item>
    <el-divider>列配置项</el-divider>
      <div v-for="(item, index) in props.columns" :key="index" class="select-item">
        <div class="select-line-icon">
          <i class="el-icon-s-operation" />
        </div>
        <el-input-number
          size="normal"
          v-model="item.span"
          :min="1" :max="24"
        />
        <div class="close-btn select-line-icon" @click="props.columns.splice(index,1)">
          <i class="el-icon-remove-outline" />
        </div>
      </div>
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
  props:['props','getFormId'],
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

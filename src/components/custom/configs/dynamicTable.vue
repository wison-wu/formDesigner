<template>
  <div v-show="props.compType === 'dynamicTable'">
    <el-form-item label="ID">
      <el-tooltip class="item" effect="dark" content="请注意,ID的修改可能会导致该组件相关事件失效！" placement="left">
        <el-input class="input" v-model="props.id" @change="handlerChangeId"></el-input>
      </el-tooltip>
    </el-form-item>
  </div>
</template>
<script>
export default {
  name:"dynamicTableConfig",
  props:['props','getFormId'],
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
    }
  },
  mounted(){
  }
}
</script>
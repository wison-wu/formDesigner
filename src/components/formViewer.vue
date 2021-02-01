<!--表单查看页面-->
<template>
  <div class="form-viewer">
    <el-row  :gutter="formConf.gutter" >
      <el-form
          :ref="formConf.formModel"
          :size="formConf.size"
          :model="form"
          :label-position="formConf.labelPosition"
          :disabled="formConf.disabled"
        >
          <template v-for="(element,index) in itemList"  >
             <preview-row-item 
              v-if="element.compType === 'row'"
              :key="'row-'+index" 
              :model="element"
              >
              <el-col v-for="(column) in element.columns" :key="column.index" :span="column.span">
                <form-view-item 
                v-for="(item) in column.list"
                :key="item.id" 
                :model="item"
                v-model="form[item.id]"
                />
              </el-col>
            </preview-row-item> 
            <!--item-->
            <el-col class="drag-col-wrapper" :key="index"   :span="element.span" v-else>
              <form-view-item
                :model="element"
                v-model="form[element.id]"
              />
            </el-col>
          </template>
        </el-form>
    </el-row>
  </div>
</template>

<script>
import formViewItem from "./formViewItem";
import previewRowItem from "./previewRowItem";
export default {
  name:'formViewer',
  data(){
    return{
      form:{}
    }
  },
  props:{
    value:{
      type:String,
      default:''
    },
    buildData:{
      type:String,
      default:''
    }
  },
  components:{
    formViewItem,
    previewRowItem
  },
  mounted() {
    this.$nextTick(()=> {
      this.form = this._value;
    })
  },
  computed:{
    itemList(){
      if(this.buildData!==''){
        const buildData = JSON.parse(this.buildData);
        return buildData.list;
      }else{
        return [];
      }
    },
    _value(){ //转换成json的值
      if(this.value!==''){
        const value = JSON.parse(this.value);
        return value;
      }else{
        return {};
      }
    },
    formConf(){
      if(this.buildData!==''){
        const buildData = JSON.parse(this.buildData);
        buildData.config.disabled = this.disabled;
        return buildData.config;
      }else{
        return {};
      }
    }
  }
}
</script>

<style scoped>
.preview-board{
  border: 1px dashed #ccc
}
.form-viewer{
  padding: 20px;
}
.el-form-item{
  margin-left:10px;
  margin-right:10px;
}

</style>
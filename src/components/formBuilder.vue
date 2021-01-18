<template>
  <div>
    <el-row  :gutter="formConf.gutter" class="form-builder">
      <el-form
          :rules="rules"
          :ref="formConf.formModel"
          :size="formConf.size"
          :model="form"
          :label-position="formConf.labelPosition"
          :disabled="formConf.disabled"
          :validate-on-rule-change="false"
          :label-width="formConf.labelWidth + 'px'"
        >
          <template v-for="(element,index) in itemList"  >
             <preview-row-item 
              v-if="element.compType === 'row'"
              :key="'row-'+index" 
              :model="element"
              >
              <el-col v-for="(column) in element.columns" :key="column.index" :span="column.span">
                <preview-item 
                v-for="(item) in column.list"
                :key="item.id" 
                :model="item"
                v-model="form[item.id]"
                @valChange="handlerValChange"
                />
              </el-col>
            </preview-row-item> 
            <!--item-->
            <el-col class="drag-col-wrapper" :key="index"   :span="element.span" v-else>
              <preview-item 
                :model="element"
                v-model="form[element.id]"
                @valChange="handlerValChange"
              />
            </el-col>
          </template>
          
        </el-form>
    </el-row>
  </div>
</template>
<script>
import previewItem from "./previewItem";
import previewRowItem from "./previewRowItem";
export default {
  name:'formBuilder',
  props:{
    value:{
      type:String,
      default:''
    },
    buildData:{
      type:String,
      default:''
    },
    disabled:{
      type:Boolean,
      default:false
    }
  },
  components:{
    previewItem,
    previewRowItem
  },
  data(){
    return{
      form:{},
      rules:{},
    }
  },
  methods:{
    handlerValChange(key,orign){
      this.$set(this.form,key,orign);
    },
    handlerGetValue(){
      
    },
    validate(){
      this.$refs[this.formConf.formModel].validate((valid) => {
        if (valid) {
          this.$message.success('success');
          this.$emit('input',JSON.stringify(this.form));
        }else{
          this.$emit('input','');
        }
      });
    }
  },
  created(){
  },
  mounted() {
    this.$nextTick(()=> {
      if(this.value !==''){
        
      }
    })
  },
  beforeCreate(){
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
.form-builder{
  padding: 20px;
}
.el-form-item{
  margin-left:10px;
  margin-right:10px;
}

</style>
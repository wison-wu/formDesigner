<template>
  <div >
    <el-row  :gutter="formConf.gutter">
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
            <!-- <el-input v-model="element.id" placeholder=""></el-input> -->
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
                />
              </el-col>
            </preview-row-item> 
            <!--item-->
            <el-col class="drag-col-wrapper" :key="index"   :span="element.span" v-else>
              <preview-item 
                :model="element"
                v-model="form[element.id]"
                @itemCreate="handlerItemCreate"
              />
            </el-col>
          </template>
          </el-form>
      </el-row>
      <center>
        <span slot="footer" class="dialog-footer">
              <el-button @click="handlerGetValue">获得表单数据</el-button>
              <el-button type="primary" @click="handlerSubForm">提交</el-button>
        </span>
      </center>
  </div>
</template>
<script>
import previewItem from "./previewItem";
import previewRowItem from "./previewRowItem";
export default {
  name:'preview',
  props:['itemList','formConf'],
  components:{
    previewItem,previewRowItem
  },
  data(){
    return{
      list: this.itemList,
      form:{

      },
      rules:{
        
      }
    }
  },
  methods:{
    handlerItemCreate(key,orign){
      this.$set(this.form,key,orign);
    },
    handlerGetValue(){
      
    },
    handlerSubForm(){
      this.$refs[this.formConf.formModel].validate((valid) => {
          if (valid) {
            this.$message.success('成功!');
          }
      });
    }
  },
  mounted(){
    this.$nextTick(()=>{
      this.list.forEach(val => {
      //this.$set(this.form,val.id,val.value);
      
        if(val.required){
          let field = val.id;
          const r = [
            {required: true, message: val.label+'必填', trigger: 'blur'}
          ];
          this.$set(this.rules,val.id,r);
        }
      })
    })
  },
  watch:{
    'list':{
      handler(newValue){
        console.log(newValue);
      },
      deep:true
    }
  }
}
</script>
<style>
.preview-board{
  border: 1px dashed #ccc
}
</style>
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
            <preview-item 
              v-for="(element,index) in list" 
              :key="index" 
              :model="element"
              @itemCreate="handlerItemCreate"
              />
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

export default {
  name:'preview',
  props:['itemList','formConf'],
  components:{
    previewItem
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
    
    // console.log(this.form);
    // console.log(this.rules);
  },
  computed:{
  }
}
</script>
<style>
.preview-board{
  border: 1px dashed #ccc
}
</style>
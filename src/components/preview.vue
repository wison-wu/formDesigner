<template>
  <div >
    <el-row  :gutter="formConf.gutter">
      <el-form
          :rules="rules"
          :ref="formConf.formModel"
          :size="formConf.size"
          :model="form"
          label-position="formConf.labelPosition"
          :disabled="formConf.disabled"
          :validate-on-rule-change="false"
          label-width="formConf.labelWidth + 'px'"
        >
          <template v-for="(element,index) in list"  >
            <!-- <el-input v-model="element.id" placeholder=""></el-input> -->
             <preview-row-item 
              v-if="element.compType === 'row'"
              :key="'row-'+index" 
              :model="element"
              
              >
              <el-col v-for="(column) in element.columns" :key="column.index" :span="column.span">
                <template v-for="(col) in column.list">
                  <preview-item 
                  :key="col.id" 
                  :model="col"
                  v-model="form[col.id]"
                  @valChange="handlerValChange"
                  />
                </template>
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
    <el-divider></el-divider>
    <center>
      <span slot="footer" class="dialog-footer">
        <el-button type="primary" @click="handlerSubForm">提交</el-button>
      </span>
    </center>
  </div>
</template>
<script>
import previewItem from "./previewItem";
import previewRowItem from "./previewRowItem";
import {datas} from "./custom/formDraw";
export default {
  name:'preview',
  props:['itemList','formConf'],
  components:{
    previewItem,
    previewRowItem
  },
  data(){
    return{
      list: this.itemList,
      form:{},
      rules:{},
      jsonConfVisible:false
    }
  },
  methods:{
    handlerGetValue(){
    },
    handlerValChange(key,orign){
      this.$set(this.form,key,orign);
    },
    handlerSubForm(){
      this.$refs[this.formConf.formModel].validate((valid) => {
        if (valid) {
          this.$message.success('success');
        }
      });
    }

  },
  created(){
  },
  mounted() {
    this.$nextTick(()=> {
    })
  },
  beforeCreate(){
  },
  computed:{
  }
}
</script>
<style scoped>
.preview-board{
  border: 1px dashed #ccc
}
</style>
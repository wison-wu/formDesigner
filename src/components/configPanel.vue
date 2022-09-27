<template>
  <div class="right-board">
    <el-tabs v-model="currentTab" class="center-tabs">
      <el-tab-pane label="属性配置" name="field" />
    </el-tabs>
    <div class="field-box">
      <el-scrollbar class="right-scrollbar">
        <el-form size="small" label-width="100px" >
          <div v-for="(item,index) in cmps" :key="index">
            <component v-if="item.name === activeItem.compType" :getFormId="getFormId" :props="activeItem" :is="item.content"></component>
          </div>
        </el-form>
      </el-scrollbar>
    </div>
  </div>
</template>

<script>
import reg from "./custom/register";

export default {
  name:'configPanel',
  data() {
    return {
      currentTab: 'field',
      cmps:reg,
      formIdArray:[]
    }
  },
  props:{
    activeItem: { 
      type: Object,
      default:function(){
        return {}
      }
    },
    itemList: { 
      type: Array,
      default:function(){
        return []
      }
    }
  },
  created() {
    this.cmps.forEach(c => {
      c.content = require(`./custom/configs/${c.name}`).default;
    });
  },
  methods:{
    getFormId(itemId){
      this.formIdArray = [];
      Array.from(this.itemList,(item)=>{
        if(item.compType === 'row'){
          Array.from(item.columns,(column)=>{
            Array.from(column.list,(col)=>{
              if(col._id !== itemId){
                this.formIdArray.push(col.id);
              }
            })
          })
        }else{
          if(item._id !== itemId){
            this.formIdArray.push(item.id);
          }
        }
      })
      return this.formIdArray;
    }
  }
}
</script>
<style scoped>
.field-box >>> .el-scrollbar__wrap{
  overflow-x: hidden;
}
</style>
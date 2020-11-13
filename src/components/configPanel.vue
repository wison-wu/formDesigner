<template>
  <div class="right-board">
    <el-tabs v-model="currentTab" class="center-tabs">
      <el-tab-pane label="属性配置" name="field" />
    </el-tabs>
    <div class="field-box">
      <el-scrollbar class="right-scrollbar">
        <el-form size="small" label-width="90px" >
          <div v-for="(item,index) in cmps" :key="index">
            <component v-if="item.name === activeItem.compType"  :props="activeItem" :is="item.content"></component>
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
    }
  },
  props:{
    activeItem: { 
      type: Object,
      default:function(){
        return {}
      }
    }
  },
  created() {
    this.cmps.forEach(c => {
      c.content = require(`./custom/configs/${c.name}`).default;
    });
  }
}
</script>

<style lang="scss" >

</style>

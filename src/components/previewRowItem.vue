<template>
  <el-row  :gutter="model.gutter">
    <div class="drag-wrapper">
      <slot></slot>
    </div>
  </el-row>
</template>
<script>



export default {
  name:"previewRowItem",
  components: {
  },
  props: ['model','value'],
  data(){
    return {
      
    }
  },
  computed:{
  }
}
</script>
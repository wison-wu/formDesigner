<!--动态表单（设计器）-->
<template>

  <div class="dynamic-table">
    <slot>
    </slot>
  </div>

</template>
<script>
export default {
  name:'dynamicTable',
  props:['conf','activeItem'],
  data(){
    return {
      test1:'',
      list:[]
    }
  },
  components:{
  },
  methods:{
  }
}
</script>
<style>

</style>
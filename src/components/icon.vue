<template>
  <div class="text">
    <svg class="icon" aria-hidden="true">
      <use :xlink:href="iconFont"></use>
    </svg>
    {{text}}
  </div>
</template>
<script>
  export default {
    name:'icon',
    props:['code','text'],
    computed: {
      iconFont(){
        return '#icon-'+this.code;
      }
    }
  }
</script>
<style scoped>
.icon{
  width:20px;
  height:20px;
  vertical-align:-5px;
}
</style>
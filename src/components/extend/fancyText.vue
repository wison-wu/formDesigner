<!--文本扩展-->
<template>
  <div v-if="show" >
      <p v-text="text" style="margin-block-start:0em;margin-block-end:0em"/>
  </div>
  
</template>

<script>
export default {
    name:"fancyText",
    props:{
        text: { 
            type: String,
            default:''
        },
        show:{
            type:Boolean,
            default:true
        }
    }
}
</script>
<style>
</style>

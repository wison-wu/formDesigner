<!--废弃-->
<!--文本扩展-->
<template>
  <div v-if="show">
      <p v-html="text"/>
  </div>
  
</template>

<script>
export default {
    name:"fancyHtml",
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

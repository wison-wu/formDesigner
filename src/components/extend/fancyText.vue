<!--文本扩展-->
<template>
  <div v-if="show">
      <p v-text="text"/>
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

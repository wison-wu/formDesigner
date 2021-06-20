<!--文本扩展-->
<template>
  <div v-show="show" class="test">
      <p v-html="text" style="margin-block-start:0em;margin-block-end:0em;" 
        :style="{'text-align':align,
        'color':color,
        'font-size':size+'px',
        'font-weight':bold
        }"/>
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
        },
        align:{
            type:String,
            default:'left'
        },
        color:{
            type:String,
            default:''
        },
        size:{
            type:String,
            default:'',
        },
        bold:{
            type:String,
            default:'',
        }
    },
    data(){
        return {
            htmlText:''
        }
    }
}
</script>
<style>
</style>

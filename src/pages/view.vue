<template>
  <div >
    <el-card class="box-card">
      <form-builder ref="formBuilder" v-model="formVal" :buildData="formCode" v-if="itemList.length>0"/>
      <div style="text-align:center">
          <el-button type="primary" class="button">提交</el-button>
      </div>
    </el-card>
  </div>
</template>

<script>
import formBuilder from '../components/formBuilder'
export default {
  components:{
    formBuilder
  },
  data(){
    return{
      formCode:'',
      formVal:''
    } 
  },
  mounted(){
    this.$nextTick(()=> {
      const formValue = localStorage.getItem("formValue");
      this.formCode = formValue;
    })
    
  },
  methods:{
    handlerchangeopen(){
    }
  },
  computed:{
    itemList(){
      if(this.formCode!==''){
        const form = JSON.parse(this.formCode);
        return form.list;
      }else{
        return [];
      }
    }
  }
}
</script>

<style scoped>
.box-card{
  width:60%;
  position:absolute;
  top:0;
  left:0;
  right:0;
  bottom:0;
  margin:auto;
}
#app{
  position: relative;
}
</style>
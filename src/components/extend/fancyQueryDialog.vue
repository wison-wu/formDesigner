<!--文本扩展-->
<template>
  <div >
      <el-input v-model="dialogValue" readonly @click.native="handlerShowDialog" style="width:95%"></el-input>
      <el-dialog 
      :visible.sync="dialogVisible" 
      :title="title"
      width="60%"
      >
      <span slot="footer" class="dialog-footer">
            <el-button @click="dialogVisible = false">取 消</el-button>
            <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
        </span>
      </el-dialog>
  </div>
  
</template>

<script>
export default {
    name:"fancyQueryDialog",
    props:{
        value: {
            type: String,
            default:''
        },
        title:{ 
            type:String,
            default:'请选择'
        },
        multi:{
            type:Boolean,
            default:false
        },
        type:{
            type:Stirng,
            default:'list'  //list,tree
        },
        searchable:{    //是否可搜索
            type:boolean,
            default:false
        }
    },
    data() {
        return {
          dialogValue:'',
          dialogVisible:false
        }
    },
    methods:{
        handlerShowDialog(){
            this.dialogVisible = true;
        },
        handlerHideDialog(){
            this.dialogValue = '';
            this.$emit('input',this.dialogValue);
            this.dialogVisible = false;
        }
    }
}
</script>

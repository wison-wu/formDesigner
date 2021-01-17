<template>
  <div >
    <el-card class="box-card">
      <el-tabs v-model="tabName">
        <el-tab-pane label="编辑表单" name="form" class="tab-pane">
          <form-builder ref="formBuilder" v-model="formVal" :buildData="formCode" v-if="itemList.length>0"/>
          <div style="margin-bottom:15px;text-align:center">
              <el-button type="primary" class="button" @click="handlerSubForm">提交</el-button>
          </div>
        </el-tab-pane>
        <el-tab-pane label="配置" name="config">
          <codemirror v-model="formCode" :options="codeMirror"/>
        </el-tab-pane>
        <el-tab-pane label="数据" name="value">
          <codemirror v-model="formCode" :options="codeMirror"/>
        </el-tab-pane>
      </el-tabs>
      
    </el-card>
  </div>
</template>

<script>
import formBuilder from '../components/formBuilder'
import {codemirror} from 'vue-codemirror';
// 核心样式
import 'codemirror/lib/codemirror.css';
// 引入主题后还需要在 options 中指定主题才会生效
import 'codemirror/theme/dracula.css';
import 'codemirror/mode/javascript/javascript'
const options = {
    tabSize: 2, // 缩进格式
    theme: 'dracula', // 主题，对应主题库 JS 需要提前引入
    lineNumbers: true, // 显示行号
    line: true,
    styleActiveLine: true, // 高亮选中行
    hintOptions: {
      completeSingle: true // 当匹配只有一项的时候是否自动补全
    }
  }
export default {
  components:{
    formBuilder,
    codemirror
  },
  data(){
    return{
      formCode:'',
      formVal:'',
      tabName:'form',
      codeMirror:options
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
    },
    handlerSubForm(){
      this.$refs['formBuilder'].validate();
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
/* .box-card >>> .el-tabs__header{
  margin: 0px 0px 0px 0px;
} */
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
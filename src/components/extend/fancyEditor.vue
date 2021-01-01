<template>
  <div class="edit_container">
        <quill-editor 
            v-model="content" 
            ref="myQuillEditor" 
            :options="editorOption" 
            @blur="onEditorBlur($event)" @focus="onEditorFocus($event)"
            @change="onEditorChange($event)">
        </quill-editor>
    </div>
</template>

<script>
import 'quill/dist/quill.core.css'
import 'quill/dist/quill.snow.css'
import 'quill/dist/quill.bubble.css'
import { quillEditor } from 'vue-quill-editor'
export default {
    components:{
        quillEditor
    },
    props:{
        value:{
            type:String,
            default:''
        }
    },
    data() {
        return {
            content: this.value,
            editorOption: {}
        }
    },
    methods: {
        onEditorReady(editor) { // 准备编辑器
        },
        onEditorBlur(){}, // 失去焦点事件
        onEditorFocus(){
            console.log('test');
        }, // 获得焦点事件
        onEditorChange(v){
            this.$emit('input',this.content);
        }, // 内容改变事件
    },
    computed: {
        editor() {
            return this.$refs.myQuillEditor.quill;
        }
    },
    watch:{
        value(newVal){
            this.content = newVal;
        }
    }

}
</script>

<style>
.ql-editor{
    height:400px;
}
</style>
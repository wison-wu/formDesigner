<template>
  <div class="edit_container" :class="{warn_edit_container:warnTextLength}">
        <quill-editor 
            v-model="content" 
            ref="myQuillEditor" 
            :options="editorOption" 
            @blur="onEditorBlur($event)" @focus="onEditorFocus($event)"
            @change="onEditorChange($event)">
        </quill-editor>
        <div class="text_number_tips" :class="{warn_text_number_tips:warnTextLength}">{{currentLength}}/{{maxTextLength}}</div>
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
        },
        max:{
            type:Number,
            default:0
        },
        validateMaxText:{
            type:Boolean,
            default:false
        },
        id:{
            type:String,
            default:''
        }
    },
    data() {
        return {
            content: this.value,
            currentLength:0,
            defaultMaxLength:2000,
            editorOption: {}
        }
    },
    methods: {
        
        onEditorBlur(editor){
            
        }, // 失去焦点事件
        onEditorFocus(v){
        }, // 获得焦点事件
        onEditorChange(v){
            this.currentLength = v.text.length-1;
            this.$emit('input',this.content);
        }, // 内容改变事件
    },
    computed: {
        editor() {
            return this.$refs.myQuillEditor.quill;
        },
        maxTextLength(){
            let len = this.defaultMaxLength;
            if(this.max>=1){
                len = this.max;
            }
            return len;
        },
        warnTextLength(){
            const warn =this.validateMaxText&&this.currentLength>this.maxTextLength;
            return warn;
        }
    },
    watch:{
        value(newVal){
            this.content = newVal;
        },
        
    }

}
</script>

<style>
.ql-editor{
    height:400px;
}
.edit_container .text_number_tips{
    float:right;
    margin-top:-30px;
    padding-right:10px;
}
.warn_edit_container{
    border: solid 1px #F56C6C;
}
.warn_text_number_tips{
    color:#F56C6C;
}
</style>
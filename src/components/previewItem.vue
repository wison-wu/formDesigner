<script>
import render from './custom/previewRender'

const layouts = {
  colItem(h, element,value) {
    let labelWidth = element.labelWidth ? `${element.labelWidth}px` : null
    const {valChange} = this.$listeners;
    let r = [];
    if(element.required){
      r.push({required: true, message: element.label+'不能为空', trigger: ['blur','change']});
    }
    //编辑器最大字数验证
    if(typeof element.validateMaxText !== 'undefined'&&element.validateMaxText){
      const maxRules = {
        max: element.max, message: element.label+'超出最大字数限制', trigger: ['blur','change']
      }
      r.push(maxRules);
    }
    return (
        <el-col span={element.span}>
        <el-form-item label={element.showLabel ? element.label : ''}
                      label-width={labelWidth} 
                      prop={element.id}
                      rules={r}
                      > 
          <render key={element.id} conf={element} value={value} onInput={ event => {
            this.$set(element,'value',event);
            this.$emit('valChange',element.id,event);
          }}/>
        </el-form-item>
        </el-col>
    )
  }
}

export default {
  name:"previewItem",
  components: {
    render
  },
  props: ['model','value'],
  data(){
    return {
      eleConfig:this.model
    }
  },
  render(h) {
    return layouts.colItem.call(this, h, this.eleConfig,this.value)
  }
}
</script>
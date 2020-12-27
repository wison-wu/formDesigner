<script>
import render from './custom/previewRender'

const layouts = {
  colItem(h, element,value) {
    let labelWidth = element.labelWidth ? `${element.labelWidth}px` : null
    const {valChange} = this.$listeners;
    return (
        <el-form-item label={element.showLabel ? element.label : ''}
                      label-width={labelWidth} 
                      prop={element.id}
                      > 
          <render key={element.id} conf={element} value={value}  onInput={ event => {
          }}/>
        </el-form-item>
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
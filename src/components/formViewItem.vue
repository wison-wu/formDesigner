<script>
import render from './custom/viewRender'
const layouts = {
  colItem(h, element,value) {
    element.disabled= true;
    let labelWidth = element.labelWidth ? `${element.labelWidth}px` : null
    console.log(element);
    if(element.viewType === 'component'){
      return (
        <el-col span={element.span}>
          <el-form-item label={element.showLabel ? element.label : ''}
            label-width={labelWidth} 
            prop={element.id}
            >
            <render key={element.id} conf={element} value={value} onInput={ event => {
              this.$set(element,'value',event);
            }}/>
          </el-form-item>
        </el-col>
      )
    }else if(element.viewType === 'html'){
      <fancy-html text={value}/>
    }else{
      <fancy-text text={value}/>
    }
    
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
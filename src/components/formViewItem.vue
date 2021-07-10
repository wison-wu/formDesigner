<script>
import render from './custom/viewRender'
const layouts = {
  colItem(h, element,value) {
    element.disabled= true;
    let labelWidth = element.labelWidth ? `${element.labelWidth}px` : null
    if(element.viewType === 'component'){
      return (
          <el-form-item label={element.showLabel ? element.label : ''}
            label-width={labelWidth} 
            prop={element.id}
            >
            <render key={element.id} conf={element} value={value} onInput={ event => {
              this.$set(element,'value',event);
            }}/>
          </el-form-item>
      )
    }else if(element.viewType === 'html'){
      return (
        <el-form-item label={element.showLabel ? element.label : ''}
          label-width={labelWidth} 
          prop={element.id}
        >
          <fancy-html text={value}/>
        </el-form-item>
      )
    }else{
      console.log(typeof value);
      if(typeof value === 'object'){
        console.log(element['range-separator']);
        const val = value[0]+' '+element['range-separator']+' '+value[1];
        value = val;
      }
      return (
        <el-form-item label={element.showLabel ? element.label : ''}
          label-width={labelWidth} 
          prop={element.id}
        >
          {value}
        </el-form-item>
      )
    }
    
  }
}

export default {
  name:"formViewItem",
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
<style>
/* .el-form-item__label{
  font-weight: 600;
} */
</style>
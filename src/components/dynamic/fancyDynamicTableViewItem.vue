<script>
import render from '../custom/viewRender'
const layouts = {
  colItem(h, element,value) {
    element.disabled= true;
    let labelWidth = element.labelWidth ? `${element.labelWidth}px` : null
    if(element.viewType === 'component'){
      return (
          <render key={element.id} conf={element} value={value} onInput={ event => {
              this.$set(element,'value',event);
            }}/>
      )
    }else if(element.viewType === 'html'){
      return (
        <fancy-html text={value}/>
      )
    }else{
      return (
        <fancy-text text={value}  align="center"/>
      )
    }
  }
}

export default {
  name:"fancyDynamicTableViewItem",
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
<script>
import render from '../custom/previewRender'
import checkRules from '../custom/rule';
const layouts = {
  colItem(element,value,parent,index) {
    const {valChange} = this.$listeners;
    let rules = [];
    if(element&&element.rules) {
      rules = rules.concat(checkRules(element));
      return (
          <el-form-item label={''}
                        label-width={'0px'}
                        prop={parent.id + '.' + index + '.' + element.id}
                        rules={rules}
          >
            <render key={element.id} conf={element} value={value} onInput={event => {
              this.eleValue = event;
              valChange(this.eleParent.id, this.index, element.id, this.eleValue);
            }}/>
            {element.required ? <span style="color:#F56C6C">*</span> : ''}
          </el-form-item>
      )
    }
  }
}

export default {
  name:"fancyDynamicTableItem",
  components: {
    render
  },
  props: ['model','value','parent','index'],
  mounted(){
    
    let __eleConfig = {};
    Object.assign(__eleConfig,this.model);
    this.eleConfig = __eleConfig;
  },
  data(){
    return {
      eleConfig:{},
      eleParent:this.parent,
      eleValue:this.value
    }
  },
  render() {
    return layouts.colItem.call(this,this.eleConfig,this.eleValue,this.eleParent,this.index)
  },
  watch:{
    value(newVal){
      this.eleValue=newVal;
    }
  }
}
</script>
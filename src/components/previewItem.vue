<script>
import draggable from 'vuedraggable'
import render from './custom/previewRender'
import { jsonClone } from './utils'

const layout = {
  colFormItem(h, element) {
    let labelWidth = element.labelWidth ? `${element.labelWidth}px` : null
    //if (element.showLabel === false) labelWidth = '0'
    const {itemCreate} = this.$listeners;
    return (
      <el-col span={element.span}  required={element.required}>
        <el-form-item label={element.showLabel ? element.label : ''}
                      label-width={labelWidth} 
                      prop={element.id}
                      > 
          <render key={element.id} conf={element}  onInput={ event => {
              this.$set(element,'value',event);
              itemCreate(element.id,event);
            }} />
        </el-form-item>
      </el-col>
    )
  }
}

export default {
  name:"previewItem",
  components: {
    render,
    draggable
  },
  props: {
    model: { 
      type: Object,
      default:{}
    }
  },
  data(){
    return {
      
    }
  },
  render(h) {
    return layout.colFormItem.call(this, h,  this.model)
  },
  computed:{
  }
}
</script>
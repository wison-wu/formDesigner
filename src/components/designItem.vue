<script>
import draggable from 'vuedraggable'
import render from './custom/render'


const components = {
  itemBtns(h, element,activeEle) {
    const {copyItem,deleteItem} = this.$listeners;
    return [
      <span class="drawing-item-copy" title="复制" onClick={event => {
        copyItem(element); event.stopPropagation();
      }}>
        <i class="el-icon-copy-document" />
      </span>,
      <span class="drawing-item-delete" title="删除" onClick={event => {
        deleteItem(element); event.stopPropagation();
      }}>
        <i class="el-icon-delete" />
      </span>
    ]
  }
}
const layout = {
  colFormItem(h, element,active) {
    let className = active.id === element.id ? 'drawing-item active-from-item' : 'drawing-item'
    let labelWidth = element.labelWidth ? `${element.labelWidth}px` : null
    //if (element.showLabel === false) labelWidth = '0'
    const {onActiveItemChange} = this.$listeners;
    return (
      <el-col span={element.span} class={className} required={element.required}
        nativeOnClick={event => { onActiveItemChange(element); event.stopPropagation()}}>
        <el-form-item label={element.showLabel ? element.label : ''}
                      label-width={labelWidth} 
                      required={element.required}> 
          <render key={element.id} conf={element} onInput={ event => {
              this.$set(element, 'value', event)
            }} 
          />
        </el-form-item>
        {components.itemBtns.apply(this, arguments)}
      </el-col>
    )
  }
}

export default {
  name:"designItem",
  components: {
    render,
    draggable
  },
  props: {
    model: { 
      type: Object,
      default:{}
    },
    activeItem: {
      type: Object,
      default:{}
    }
  },
  data(){
    return {
    }
  },
  render(h) {
    return layout.colFormItem.call(this, h, this.model, this.activeItem)
  },
  computed:{
  }
}
</script>
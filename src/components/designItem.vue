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
  },
  rowitemBtns(h, element,activeEle) {
    const {copyItem,deleteItem} = this.$listeners;
    return [
      <span class="drawing-item-copy" title="复制" onClick={event => {
        copyItem(element,activeEle); event.stopPropagation();
      }}>
        <i class="el-icon-copy-document" />
      </span>,
      <span class="drawing-item-delete" title="删除" onClick={event => {
        deleteItem(element,activeEle); event.stopPropagation();
      }}>
        <i class="el-icon-delete" />
      </span>
    ]
  }
}
const layouts = {
  colItem(h, element,active) {
    let className = active.id === element.id ? 'drawing-item active-from-item' : 'drawing-item'
    let labelWidth = element.labelWidth ? `${element.labelWidth}px` : null
    //if (element.showLabel === false) labelWidth = '0'
    const {onActiveItemChange} = this.$listeners;
    return (
      <div  class={className}>
        <el-form-item label={element.showLabel ? element.label : ''}
                      label-width={labelWidth} 
                      required={element.required} nativeOnClick={event => { onActiveItemChange(element); event.stopPropagation()}}> 
          <render key={element.id} conf={element} onInput={ event => {
              this.$set(element, 'value', event)
            }} 
          />
        </el-form-item>
        {components.itemBtns.apply(this, arguments)}

      </div>
    ) 
  },
  rowItem(h, element,active){
    const { onActiveItemChange } = this.$listeners
    const className = active.id === element.id ? 'drawing-row-item active-from-item' : 'drawing-row-item'

    // if(element.id === dropdObj.toId&dropdObj.toIndex>-1){
    //   element.columns[dropdObj.toIndex].list.push(active);
    //   resetToDropObj();
    // }
    // if(element.id === dropdObj.fromId&dropdObj.fromIndex>-1){
    //   let itemList = element.columns[dropdObj.fromIndex].list;
    //   const itemIndex = itemList.findIndex(item=>item.id === dropdObj.fromId);
    //   element.columns[dropdObj.fromIndex].list = itemList.splice(itemIndex,1);
    //   resetFromDropObj();
    // }
    
    return (
        <el-row  class={className} nativeOnClick={event => { onActiveItemChange(element); event.stopPropagation()}}>
          <span class="component-name">{element.id}</span>
          <div class="drag-wrapper">
            {
              
              element.columns.map((item,index) =>{
                return (
                  <el-col class="drag-col-wrapper" gutter={element.gutter} span={item.span}>
                    <draggable class="drag-wrapper row-drag" v-model={item.list} animation="100" group="componentsGroup" onAdd={(e)=>{this.handlerAdd(e,item,element)}}
                      onRemove={(e)=>{this.handlerUpdate(e,item,element)}}
                    >
                      {
                        
                        item.list.map((obj,objIndex)=>{
                          return renderChildren.call(this,h,obj,this.activeItem)
                        })
                      }
                    </draggable>
                  </el-col>
                )
              })
            }
          </div>
          {components.rowitemBtns.call(this,h,element)}
        </el-row>
    )
  }
}


/**
 * 生成row的子选项
 */
function renderChildren(h, element,active) {
  const layout = layouts[element.layout]
  if (layout) {
    
    return layout.call(this, h, element,active)
  }
  return layoutIsNotFound.call(this)
}


//let dropdIndex = -1;
let dropdObj = {}

function resetToDropObj(){
  dropdObj.toId = '';
  dropdObj.toIndex = -1;
  // dropdObj.fromId = '';
  // dropdObj.fromIndex = -1;
}

function resetFromDropObj(){
  // dropdObj.toId = '';
  // dropdObj.toIndex = -1;
  dropdObj.fromId = '';
  dropdObj.fromIndex = -1;
}
function layoutIsNotFound() {
  throw new Error(`没有与${this.element.layout}匹配的layout`)
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
      activeComponent:this.activeItem
    }
  },
  render(h) {
    const layout = layouts[this.model.layout]
    if (layout) {
      return layout.call(this, h, this.model, this.activeComponent)
    }
    return layoutIsNotFound.call(this)
  },
  methods:{
    
    handlerAdd(evt,item,row){
      if(evt.pullMode === 'clone'){
        item.list.splice(evt.newIndex,0,this.activeItem);
      }
    }
  },
  computed:{
  },
  watch:{
    activeItem (newValue,oldValue) {
      // console.log('this.activeItem');
      // console.log(this.activeItem);
      // console.log(newValue);
    }
  }
}
</script>
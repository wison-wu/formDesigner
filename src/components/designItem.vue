<script>
import draggable from 'vuedraggable'
import render from './custom/render'
import {getSimpleId} from "./utils/IdGenerate";


/**
 * 动态表单允许增加的组件列表
 */
const components = {
  itemBtns(h, element,parent) {
    const {copyItem,deleteItem} = this.$listeners;
    return [
      <span class="drawing-item-copy" title="复制" onClick={event => {
        copyItem(element,parent); event.stopPropagation();
      }}>
        <i class="el-icon-copy-document" />
      </span>,
      <span class="drawing-item-delete" title="删除" onClick={event => {
        deleteItem(element,parent); event.stopPropagation();
      }}>
        <i class="el-icon-delete" />
      </span>
    ]
  }
}
const layouts = {
  colItem(h, element,parent) {
    let className = this.activeItem.id === element.id ? 'drawing-item active-from-item' : 'drawing-item'
    let labelWidth = element.labelWidth ? `${element.labelWidth}px` : null
    const {onActiveItemChange} = this.$listeners;
    return (
      <el-col span={element.span} class={className}>
        <el-form-item label={element.showLabel ? element.label : ''}
                      label-width={labelWidth} 
                      required={element.required} nativeOnClick={event => { onActiveItemChange(element); event.stopPropagation()}}> 
          <render key={element.id} conf={element} onInput={ event => {
              this.$set(element, 'value', event)
            }} 
          />
        </el-form-item>
        {components.itemBtns.apply(this, arguments)}
      </el-col>
    ) 
  },
  rowItem(h, element){
    const { onActiveItemChange } = this.$listeners
    const className = this.activeItem.id === element.id ? 'drawing-item drawing-row-item active-from-item' : 'drawing-item drawing-row-item'    
    return (
      <el-col span={24}>
      <el-row  gutter={element.gutter} class={className}  nativeOnClick={event => { onActiveItemChange(element); event.stopPropagation()}}>
        <span class="component-name">{element.id}</span>
        <div class="drag-wrapper">
          {
            element.columns.map((item,index) =>{
              return (
                <el-col class="drag-col-wrapper"  span={item.span}>
                  <draggable class="drag-wrapper row-drag" v-model={item.list} animation="100" group="componentsGroup" 
                  onAdd={(e)=>{this.handlerAdd(e,item,element)}}
                  >
                    {
                      item.list.map((obj,objIndex)=>{
                        return renderChildren.call(this,h,obj,element)
                      })
                    }
                  </draggable>
                </el-col>
              )
            })
          }
        </div>
        {components.itemBtns.call(this,h,element)}
      </el-row>
      </el-col>
    )    
  }
}
/**
 * 生成row的子选项
 */
function renderChildren(h, element,parent) {
  const layout = layouts[element.layout]
  if (layout) {
    
    return layout.call(this, h, element,parent)
  }
  return layoutIsNotFound.call(this)
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
      return layout.call(this, h, this.model)
    }
    return layoutIsNotFound.call(this)
  },
  methods:{
    
    handlerAdd(evt,item,row){
      if(evt.pullMode === 'clone'){
        if(!(evt.to.className.indexOf('row-drag')>-1&&this.activeItem.compType==='row')){
          item.list.splice(evt.newIndex,0,this.activeItem);
        }
      }else{
        if(evt.item.className.indexOf('el-row')>-1){  //防止row嵌套
          const newIndex = evt.newIndex;
          const oldIndex = evt.oldIndex;
          const rowItem = item.list[newIndex];
          item.list.splice(newIndex,1);
          this.$message.error('布局组件不允许被嵌套！');
          this.$emit('rowItemRollBack',rowItem,oldIndex);  //还原到原先的列表中
          return false;
        }
      }
      
    },
    handlerCopyItem(evt,element,index){
      const item = element.columns[index];
      const clone = JSON.parse(JSON.stringify(item))
      let uId = "fd_"+getSimpleId();
      clone.id = uId;
      clone._id = uId;
      element.columns.push(clone);
    },
    handlerDeleteItem(evt,element,index){
      const item = element.columns[index];
      element.columns.splice(index,1);
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
<style  lang="scss" scoped>
@import "./style/designer.css";
@import "./style/designer.scss";
.drawing-row-item .el-col{
  margin-top:15px;
  margin-bottom:0px;
}
</style>
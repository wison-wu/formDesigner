<script>
import draggable from 'vuedraggable'
import render from './custom/render'
import {getSimpleId} from "./utils/IdGenerate";
import {dynamicTableAllowedItems,tableAllowedItems} from "./custom/formConf";
import dynamicTable from './dynamic/dynamicTable'
import dynamicTableItem from './dynamic/dynamicTableItem'
import fancyTable from './table/fancyTable'
import fancyTableItem from './table/fancyTableItem'
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
        <el-col class={className} span={element.span} comptype={element.compType} nativeOnClick={event => { onActiveItemChange(element); event.stopPropagation()}}>
          <span class="component-name component-id">{element.id}</span>
          <el-form-item label={element.showLabel ? element.label : ''}
                        label-width={labelWidth}
                        required={element.required}
          >
            
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
        <el-col class={className} comptype={element.compType}>
          <el-row  gutter={element.gutter}  nativeOnClick={event => { onActiveItemChange(element); event.stopPropagation()}}>
            <span class="component-name">{element.id}</span>
            <div class="drag-wrapper" style="padding-left: 7.5px; padding-right: 7.5px;">
              {
                element.columns.map((item,index) =>{
                  return (
                    <el-col class="drag-col-wrapper" span={item.span} >
                  <draggable class="drag-wrapper row-drag" v-model={item.list} animation="100" group="componentsGroup"
                    onAdd={(e) => { this.handlerAdd(e, item, element) }}
                  >
                    {
                      item.list.map((obj, objIndex) => {
                        return (<el-row class='test-item' >
                          {renderChildren.call(this, h, obj, element)}
                        </el-row>)
                      })
                    }
                  </draggable>
                </el-col>
                  )
                })
              }
            </div>
          </el-row>
          {components.itemBtns.call(this,h,element)}
        </el-col>
    )    
  },
  tableItem(h, element){
    let className = "";
    className = this.activeItem.id === element.id ? 'drawing-item drawing-row-item active-from-item' : 'drawing-item drawing-row-item'
    const {onActiveItemChange} = this.$listeners;
    return (
      <el-col class={className} nativeOnClick={event => { onActiveItemChange(element); event.stopPropagation()}}>
        <span class="component-name" style="margin-bottom:15px">{element.id}</span>
        <fancy-table  layoutArray={element.layoutArray} 
                      tdStyle={element.tdStyle} 
                      width={element.width}
                      height={element.height}
                      onSelectItem={(item)=>{onActiveItemChange(item);}}
                      scopedSlots={{
                        default: (item) => {
                          return (
                                <draggable tag="div" class="table__content row-drag"
                                           v-model={item.td.columns} animation="100"
                                           group="componentsGroup"
                                           onAdd={(e) => {this.handlerTableAdd(e, item.td);e.stopPropagation()}}
                                >
                                  {
                                    item.td.columns.map((obj)=>{
                                      return renderChildren.call(this,h,obj,item.td)
                                    })
                                  }
                                </draggable>
                          );
                        }
                      }}
        />
        {components.itemBtns.call(this,h,element)}
      </el-col>
    )
  },
  dynamicItem(h,element){
    let className = "";
    className = this.activeItem.id === element.id ? className+'drawing-item active-from-item' : className+'drawing-item'
    const {onActiveItemChange} = this.$listeners;
    return (
        <el-col  class={className} >
          <dynamic-table conf={element} activeItem={this.activeItem} nativeOnClick={event => { onActiveItemChange(element); event.stopPropagation()}}>
            <draggable tag="div" class="dynamic-table__content row-drag" ghost-class="dynamicGhost" v-model={element.columns} animation="100"
                       group="componentsGroup"
                       onAdd={(e)=>{this.handlerDynamicAdd(e,element)}}
            >
              {
                element.columns.map((item,index)=>{
                  return (
                      <dynamic-table-item item={item} activeItem={this.activeItem}
                                          onSelectItem={(evt,item)=>{onActiveItemChange(item);evt.stopPropagation()}}
                                          onCopyItem={(evt)=>{this.handlerCopyItem(evt,element,index);evt.stopPropagation()}}
                                          onDeleteItem={(evt)=>{this.handlerDeleteItem(evt,element,index);evt.stopPropagation()}}
                      />
                  )
                })
              }
            </draggable>
          </dynamic-table>
          {components.itemBtns.call(this,h,element)}
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
    draggable,
    dynamicTable,
    dynamicTableItem,
    fancyTable,
    fancyTableItem
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
      }
      /**
       *
       * else{
        const dragComp = evt.clone.lastElementChild.attributes.getNamedItem("comptype").value;
        console.log(dragComp)
        if(dragComp==='row'){  //防止row嵌套
          const newIndex = evt.newIndex;
          const oldIndex = evt.oldIndex;
          const rowItem = item.list[newIndex];
          item.list.splice(newIndex,1);
          this.$message.error('布局组件不允许被嵌套！');
          this.$emit('rowItemRollBack',rowItem,oldIndex);  //还原到原先的列表中
          return false;
        }
      }
       */
    },
    /**
     * 动态表单
     */
    handlerDynamicAdd(evt,item){
      if(evt.pullMode === 'clone'){
        if(dynamicTableAllowedItems.includes(this.activeItem.compType)){
          item.columns.splice(evt.newIndex,0,this.activeItem);
        }else{
          this.$message.error('该组件不允许被放入动态表格内！');
        }
      }else{
        if(evt.item.className.indexOf('el-row')>-1){  //防止row嵌套
          const newIndex = evt.newIndex;
          const oldIndex = evt.oldIndex;
          const rowItem = item.columns[newIndex];
          item.columns.splice(newIndex,1);
          this.$message.error('布局组件不允许放入动态表格！');
          this.$emit('rowItemRollBack',rowItem,oldIndex);  //还原到原先的列表中
          return false;
        }
      }
    },
    handlerTableAdd(evt,td){
      if(evt.pullMode === 'clone'){
        if(!tableAllowedItems.includes(this.activeItem.compType)){
          td.columns.splice(evt.newIndex,0,this.activeItem);
        }else{
          this.$message.error('该组件不允许被放入表格内！');
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
      element.columns.splice(index,1);
    }
  }
}
</script>
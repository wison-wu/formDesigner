<!--动态表单（设计器）-->
<script>
import draggable from "vuedraggable";
import render from '../custom/render'

const colItem = function(h,element){
  const { selectItem,copyItem,deleteItem} = this.$listeners
  return (
    <div class={{'dynamic-table__item':true,'active':this.isHover||this.isActive}}
      style="min-width:200px;width: auto;position:relative" onClick={(e)=>{selectItem(e,element)}}
      onMouseover={(e)=>{this.isHover = true}}
      onMouseleave={(e)=>{this.isHover = false}}
      >
      <div class="dynamic-table__item_title">
        {element.label}
      </div>
      <div class="dynamic-table__item_body">
        <render conf={element}/><span v-show={element.required} style="color:#F56C6C">*</span>
      </div>
      <span class="dynamic-table-item-copy" title="复制" v-show={this.showbutton} onClick={(e)=>{copyItem(e,element)}}>
        <i class="el-icon-copy-document" />
      </span>
      <span class="dynamic-table-item-delete" title="删除" v-show={this.showbutton} onClick={(e)=>{deleteItem(e,element)}}>
        <i class="el-icon-delete" />
      </span>
    </div>
  )
}


export default {
  name:'dynamicTableItem',
  props:['item','activeItem'],
  data(){
    return {
      isActive:false,
      isHover:false,
    }
  },
  components:{
    draggable,
    render
  },
  methods:{
    handlerCopy(evt){
      this.$emit('copy',evt,this.item);
    },
    handlerDelete(evt){
      this.$emit('delete',evt,this.item);
    }
  },
  watch: {
    activeItem(newvalue){
      this.isActive = newvalue.id === this.item.id?true:false;
    }
  },
  computed:{
    showbutton(){
      return this.isActive||this.isHover;
    }
  },
  render:function(h){
      return colItem.call(this,h,this.item);
  }
}
</script>
<style lang="scss" scoped>
$lighterBlue: #409EFF;
.active{
  background: #E6F2FF;
}
.dynamic-table-item-copy{
  position: absolute;
  width: 22px;
  height: 22px;
  top:0px;
  right:30px;
  border: 1px solid;
  border-radius: 50%;
  cursor: pointer;
  font-size: 12px;
  line-height: 22px;
  text-align: center;
  color: $lighterBlue;
  background: #fff;
  z-index:2;
}
.dynamic-table-item-copy:hover{
  color:  #fff;
  background:$lighterBlue;
}
.dynamic-table-item-delete{
  position: absolute;
  width: 22px;
  height: 22px;
  top:0px;
  right:0px;
  border: 1px solid;
  border-radius: 50%;
  cursor: pointer;
  font-size: 12px;
  line-height: 22px;
  text-align: center;
  color: #F56C6C;
  background: #fff;
  z-index:2;
}
.dynamic-table-item-delete:hover{
  color:  #fff;
  background:#F56C6C;
}
</style>

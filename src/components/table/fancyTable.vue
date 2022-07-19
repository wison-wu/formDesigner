<template>
  <div>
    <div style="padding:5px;margin-top:10px">
      <table class="table-layout" :style="tableStyle">
        <tbody>
          <tr v-for="(tr,trIndex) in layoutArray" :key="trIndex" :style="trHeight">
            <fancy-table-item v-for="(td,tdIndex) in tr" :key="tdIndex" 
              :item="td" 
              :tdIndex="tdIndex" 
              :trIndex="trIndex" 
              :tdStyle="tdStyle" 
              @rightClick="rightClick"
              @click.native="handlerSelectedTd($event,td)"
            >
              <slot :td="td" />
            </fancy-table-item>
          </tr>
        </tbody>
      </table>
    </div>
    <div v-show="showContextMunu" class="right-menu" :style="{ top:  + positionY+'px',left:  + positionX+'px', }">
      <ul style="list-style-type: none">
        <li @click="handlerRightCol" v-if="showRightColMenu">
          <icon code="zuoyouhebing" text="向右合并单元格" />
        </li>
        <li @click="handlerDownRow" v-if="showDownRowMenu">
          <icon code="shangxiahebing" text="向下合并单元格" />
        </li>
        <li @click="handlerResetTable" v-if="showResetTableMenu">
          <icon code="chaifen" text="拆分单元格" />
        </li>
        <li @click="handlerAppendCol">
          <icon code="zhuijiahang" text="追加行" />
        </li>
        <li @click="handlerAppendRow">
          <icon code="zhuijialie" text="追加列" />
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import icon from '../icon';
import fancyTableItem from './fancyTableItem';
import {jsonClone} from "../utils";
import {getTrItem,getTdItem} from "./table";
import { getSimpleId } from '../utils/IdGenerate';
let tr = getTrItem();
export default {
  name:'fancyTable',
  components:{
    icon,
    fancyTableItem
  },
  props:{
    layoutArray:{
      type:Array,
      default:()=>[]
    },
    tdStyle:{
      type:String,
      default:''
    },
    width:{
      type:Number,
      default:100
    },
    height:{
      type:Number,
      default:100
    }
  },
  data(){
    return{
      positionX:0,
      positionY:0,
      showContextMunu:false,
      currentRowIndex:0,
      currentColIndex:0,
      //columns: this.trs
    }
  },
  mounted() {
    // 添加监听取消右键菜单
    document.addEventListener("click", this.hideRightContextMenu, true);
    document.addEventListener("contextmenu", this.hideRightContextMenu, true);
    // this.handlerAppendCol();
    // this.handlerAppendCol();
  },
  destroyed() {
    // 移除监听
    document.removeEventListener("click", this.hideRightContextMenu, true);
    document.removeEventListener("contextmenu",this.hideRightContextMenu,true);
  },
  methods:{
    rightClick(e,rowIndex,colIndex){
      this.positionX = e.clientX;
      this.positionY = e.clientY;
      this.showContextMunu = true;
      this.currentRowIndex = rowIndex;
      this.currentColIndex = colIndex;
    },
    hideRightContextMenu(){
      this.showContextMunu = false;
    },
    //向右合并单元格
    handlerRightCol(){
      let col = this.layoutArray[this.currentRowIndex][this.currentColIndex].col;
      let row = this.layoutArray[this.currentRowIndex][this.currentColIndex].row;
      if(row>1){
        for(let i =0;i<row;i++){
          this.layoutArray[this.currentRowIndex+i][this.currentColIndex+col].hide=true;
          this.layoutArray[this.currentRowIndex][this.currentColIndex].col=col+1;
        }
      }else{
        this.layoutArray[this.currentRowIndex][this.currentColIndex+col].hide=true;
        this.layoutArray[this.currentRowIndex][this.currentColIndex].col=col+1;
      }
      
    },
    //向下合并单元格
    handlerDownRow(){
      let col = this.layoutArray[this.currentRowIndex][this.currentColIndex].col;
      let row = this.layoutArray[this.currentRowIndex][this.currentColIndex].row;
      if(col>1){
        for(let i =0;i<col;i++){
          this.layoutArray[this.currentRowIndex+row][this.currentColIndex+i].hide=true;
          this.layoutArray[this.currentRowIndex][this.currentColIndex].row=row+1;
        }
      }else{
        this.layoutArray[this.currentRowIndex+row][this.currentColIndex].hide=true;
        this.layoutArray[this.currentRowIndex][this.currentColIndex].row=row+1;
      }
      // let nextCol = this.columns[this.currentRowIndex+1][this.currentColIndex].col;
      // let nextRow = this.columns[this.currentRowIndex+1][this.currentColIndex].row;
      // if(nextCol<2&nextRow<2){

      // }else{
      //     alert('请先拆分下方单元格！');
      // }

    },
    handlerResetTable(){
      //debugger;
      let col = this.layoutArray[this.currentRowIndex][this.currentColIndex].col;
      let row = this.layoutArray[this.currentRowIndex][this.currentColIndex].row;
      if(col===1&&row===1)return;

      for(let i = 0;i<row;i++){
        for(let j = 0;j<col;j++){
          this.layoutArray[this.currentRowIndex+i][this.currentColIndex+j].hide = false;
        }
      }
      this.layoutArray[this.currentRowIndex][this.currentColIndex].row=1;
      this.layoutArray[this.currentRowIndex][this.currentColIndex].col=1;
    },
    handlerSelectedTd(e,td){
      this.$emit('selectItem',td);
      e.stopPropagation();
    },
    //追加行
    handlerAppendCol(){
      let _trItem = jsonClone(tr);
      _trItem.map(item=>item.id=getSimpleId());
      this.layoutArray.push(_trItem);
    },
    handlerAppendRow(){
      tr.push(getTdItem());
      this.layoutArray.forEach(item=>{
        const _td = jsonClone(getTdItem());
        item.push(_td);
      })
    }
  },
  computed:{
    showRightColMenu(){
      if(this.showContextMunu){
        const col = this.layoutArray[this.currentRowIndex][this.currentColIndex].col;
        const td = this.layoutArray[this.currentRowIndex][this.currentColIndex+col];
        return (td&&td.row<2&&td.col<2&&!td.hide);
      }else{
        return false;
      }
    },
    showDownRowMenu(){
      if(this.showContextMunu){
        const row = this.layoutArray[this.currentRowIndex][this.currentColIndex].row;
        let td = undefined;
        if(typeof this.layoutArray[this.currentRowIndex+row] !== 'undefined'){
          td = this.layoutArray[this.currentRowIndex+row][this.currentColIndex];
        }
        return (td&&td.row<2&&td.col<2&&!td.hide);
      }else{
        return false;
      }
    },
    showResetTableMenu(){
      if(this.showContextMunu){
        const td = this.layoutArray[this.currentRowIndex][this.currentColIndex];
        return !(td.row<2&&td.col<2&&!td.hide);
      }else{
        return false;
      }
    },
    tableStyle(){
      return 'width:'+this.width+'%;';
    },
    trHeight(){
      return 'height:'+this.height+'px';
    }
  }
}
</script>

<style scoped>
table{
  border-spacing:0;
  width:100%
}
tbody{
  display: table-row-group;
  vertical-align: middle;
  border-color: inherit;
}
.table-layout{
  background-color: #ffffff;
  border-collapse: collapse;

  padding: 8px !important;
  text-align: left;
  margin: 0 auto;
  width: 100%; 
  table-layout: fixed;
}

.table-layout > tbody > tr{
  border-bottom: 1px solid #d2d2d2;
  border-top: 1px solid #d2d2d2;
}
.right-menu{
  background-color:#ffffff;
  z-index:100;
  width:200px;
  position: fixed;
  border: 1px solid #ccc;
  box-shadow: 3px 3px 8px #999;
  border-radius: 3px;
  padding: 8px 0;
}
.right-menu ul{
  margin:0px;
  padding:0px;
}
.right-menu ul li{
  padding:0 15px;
  height:30px;
  line-height: 30px;
}
.right-menu ul li:hover{
  cursor: pointer;
  background-color: #ccc;
}

</style>
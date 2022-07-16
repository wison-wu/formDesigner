<template>
    <td  
        :colspan="item.col" 
        :rowspan="item.row" 
        :class="{cellHide:item.hide,activeItem:isActiveItem} " 
        :style="{tdStyle,'background-color':item.style.background,'width':item.style.width+'%'}"
        style=""
        @contextmenu.prevent="rightClick($event,trIndex,tdIndex)"
    >
    <div class="component-td">
        <span >{{item.id}}</span>
        <slot :td="item" />
    </div>
    </td>
</template>

<script>
export default {
    name:'fancyTableItem',
    components:{
    },
    props:{
        item: {
            type: Object,
            default:{}
        },
        tdIndex: {
            type: Number,
            default:0
        },
        trIndex: {
            type: Number,
            default:0
        },
        tdStyle: {
            type: String,
            default:''
        }
    },
    data(){
        return{
        }
    },
    inject:['getContext'],
    methods:{
        rightClick(e,rowIndex,colIndex){
            this.$emit('rightClick',e,rowIndex,colIndex);
        }
    },
    computed:{
        isActiveItem() {
            return this.getContext.activeItem.id===this.item.id?true:false;
            //this.designerActiveItem
        }
    }
}
</script>

<style scoped>

td{
    border:1px #d2d2d2 solid;
    padding: 6px;
    padding-top:0px;
    word-break: break-word;
    border: 1px solid #d2d2d2;
    height: 20px;
    height:20px;
}
.cellHide{
  display: none;
}
.activeItem{
    border:2px solid #e6a23c
}

.component-td{
    font-size:12px;
    color:#bbb;
}
.activeItem div span{
    color:#409EFF
}
</style>
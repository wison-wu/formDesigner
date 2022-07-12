<template>
    <td  
        :colspan="item.col" 
        :rowspan="item.row" 
        :class="{CellHide:item.hide}" 
        :style="tdStyle"
        style=""
        @contextmenu.prevent="rightClick($event,trIndex,tdIndex)"
    >
        <slot :td="item" />
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
            
            //columns: this.trs
        }
    },
    methods:{
        rightClick(e,rowIndex,colIndex){
            this.$emit('rightClick',e,rowIndex,colIndex);
        }
    },
    computed:{
    }
}
</script>

<style scoped>

td{
    border:1px #d2d2d2 solid;
    padding: 6px;
    word-break: break-word;
    border: 1px solid #d2d2d2;
    height: 20px;
}
</style>
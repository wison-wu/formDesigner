<template>
    <div>
        <div style="padding:5px;margin-top:10px">
            <table class="table-layout" :style="tableWidth">
                <tbody>
                    <tr v-for="(tr, trIndex) in layoutArray" :key="trIndex" :style="trHeight">
                        <fancy-edit-table-item v-for="(td,tdIndex) in tr" :key="tdIndex" 
                            :item="td" 
                            :tdIndex="tdIndex" 
                            :trIndex="trIndex" 
                            :tdStyle="tdStyle" 
                        >
                            <slot :td="td" />
                        </fancy-edit-table-item>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script>
import fancyEditTableItem from './fancyEditTableItem';
export default {
    name: 'fancyEditTable',
    components: {
        fancyEditTableItem
    },
    props: {
        layoutArray: {
            type: Array,
            default: () => []
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
    data() {
        return {
        }
    },
    mounted() {
       
    },
    destroyed() {
    },
    methods: {
    },
    computed: {
        tableWidth(){
            return 'width:'+this.width+'%';
        },
        trHeight(){
            return 'height:'+this.height+'px';
        }
    }
}
</script>

<style scoped>
table {
    border-spacing: 0;
    width: 100%
}

tbody {
    display: table-row-group;
    vertical-align: middle;
    border-color: inherit;
}

td {
    border: 1px #d2d2d2 solid;
}

.table-layout {
    background-color: #ffffff;
    border-collapse: collapse;

    padding: 8px !important;
    text-align: left;
    margin: 0 auto;
    width: 100%;
    table-layout: fixed;
}

.table-layout>tbody>tr>td {
    padding: 6px;
    word-break: break-word;
    border: 1px solid #d2d2d2;
    height: 20px;
}

.table-layout>tbody>tr {
    border-bottom: 1px solid #d2d2d2;
    border-top: 1px solid #d2d2d2;
}

.right-menu {
    background-color: #ffffff;
    z-index: 100;
    width: 200px;
    position: fixed;
    border: 1px solid #ccc;
    box-shadow: 3px 3px 8px #999;
    border-radius: 3px;
    padding: 8px 0;
}

.right-menu ul {
    margin: 0px;
    padding: 0px;
}

.right-menu ul li {
    padding: 0 15px;
    height: 30px;
    line-height: 30px;
}

.right-menu ul li:hover {
    cursor: pointer;
    background-color: #ccc;
}

.CellHide {
    display: none;
}
</style>
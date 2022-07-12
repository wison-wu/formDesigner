<template>
    <span>
        <td v-for="(td, tdIndex) in trItem" :key="tdIndex" :colspan="td.col" :rowspan="td.row"
             :class="{ CellHide: td.hide }">
            <slot />
        </td>
    </span>

</template>

<script>
import icon from '../icon';
import draggable from 'vuedraggable';
let td = { col: 1, row: 1, hide: false };
let tr = [td, td];
export default {
    name: 'fancyEditTableItem',
    components: {
        icon,
        draggable
    },
    props: {
        trItem: {
            type: Array,
            default: []
        }
    },
    data() {
        return {
            positionX: 0,
            positionY: 0,
            showContextMunu: false,
            currentRowIndex: 0,
            currentColIndex: 0,
            text: ''
            //columns: this.trs
        }
    },
    mounted() {
        
    },
    destroyed() {
        
    },
    methods: {
        
    },
    computed: {
        
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
}

.table-layout>tbody>tr>span>td {
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
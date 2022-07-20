/**
 * 表格布局
 */
import {getDefaultTrs} from '../../table/table'
let trs = getDefaultTrs();
 export let table = {
    id:'',
    _id:'',
    compType: 'table',
    ele: 'fancy-table',
    //控件名称(左侧显示)
    compName:'表格布局',
    //图标
    compIcon:'table_layout',
    layout:'tableItem',
    // 是否可配置
    //暂时默认为true，无法更改，后期考虑某些时候无法配置
    config: true,
    layoutArray:trs,
    //单元格样式
    tdStyle:'',
    width:100,
    height:50
  }
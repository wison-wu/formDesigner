/**
 * 动态表单
 */
export let dynamicTable = {
    id:'',
    _id:'',
    compType: 'dynamicTable',
    ele: 'dynamic-table',
    //控件名称(左侧显示)
    compName:'动态表格',
    layout:'dynamicItem',
    //图标
    compIcon:'table',
    // 是否可配置
    //暂时默认为true，无法更改，后期考虑某些时候无法配置
    //显示标签
    labelWidth:0,
    showLabel:false,
    config: true,
    //显示新增按钮
    buttonAdd:true,
    //显示删除按钮
    buttonDel:true,
    //显示行号
    showIndex:true,
    visible:true,
    multiCheck:false,
    //合计行
    'show-summary':false,
    'sum-text':'合计',
    'summary-text':'元',
    columns:[
    ]
}

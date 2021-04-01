/**
 * dialogList
 */
 export let dialogList = {
    id:'',
    _id:'',
    compType: 'dialogList',
    ele: 'fancy-dialog-list',
    //控件名称(左侧显示)
    compName:'选择列表',
    //图标
    compIcon:'dialog',
    //展示表单的模式
    viewType:'component',
  
    // 是否可配置
    //暂时默认为true，无法更改，后期考虑某些时候无法配置
    config: true,
    // 控件左侧label内容
    showLabel:true,
    label: '选择列表',
    labelWidth: '80',
    showLabel: true,
    labelWidth: 80,
    // 是否必填
    required: false,
    //栅格间隔
    gutter:15,
    //默认栅格
    span:24,
    //禁用
    disabled:false,
    //标题
    title:'请选择',
    //多选
    multi:false,
    //显示序号
    showIndex:false,
    //请求地址
    action:'https://www.fastmock.site/mock/51715c0157535b99010bde55f2df33c8/formDesigner/api/dialogListData',
    //字段配置
    colConf:'[{"index":0,"label":"姓名","property":"name","width":"250","show":true},{"index":1,"label":"日期","property":"date","width":"150","show":true},{"index":2,"label":"地址","property":"address","width":"","show":true}]',
    // //值
    dval:'id',
    //字段
    dlabel:'name',
    height:500,
    value: ''
  }
  
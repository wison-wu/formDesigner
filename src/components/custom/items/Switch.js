/**
 * 开关，switch是js关键字，所以s大写，避过
 */
export let Switch = {
  id:'',
  _id:'',
  compType: 'Switch',
  ele: 'el-switch',
  //控件名称(左侧显示)
  compName:'开关',
  label: '开关',
  //图标
  compIcon:'switch',
  //展示表单的模式
  viewType:'component',
  //暂时默认为true，无法更改，后期考虑某些时候无法配置
  config: true,
  // 控件左侧label内容
  showLabel:true,
   //栅格间隔
  gutter:15,
  labelWidth: '80',
  value: false,
  rules:[],
  span: 24,
  disabled: false,
  required: false,
  'active-color': '#409EFF',
  'inactive-color': '#DCDFE6',
  'active-value': 'true',
  'inactive-value': 'false'
}
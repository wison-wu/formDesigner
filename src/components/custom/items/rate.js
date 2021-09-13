/**
 * 评分
 */
export let rate = {
  id:'',
  _id:'',
  compType: 'rate',
  ele: 'el-rate',
  //控件名称(左侧显示)
  compName:'评分',
  label: '评分',
  //图标
  compIcon:'rate',
  //展示表单的模式
  viewType:'component',
  //暂时默认为true，无法更改，后期考虑某些时候无法配置
  config: true,
  // 控件左侧label内容
  showLabel:true,
   //栅格间隔
  gutter:15,
  labelWidth: '80',
  value: 1,
  rules:[],
  span: 24,
  disabled: false,
  required: false,
  max: 5,
  'allow-half': false,
  'show-score': false
}
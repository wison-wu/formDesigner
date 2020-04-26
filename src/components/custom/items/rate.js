/**
 * 评分
 */
export let rate = {
  id:'',
  compType: 'rate',
  ele: 'el-rate',
  //控件名称(左侧显示)
  name:'评分',
  label: '评分',
  //图标
  icon:'rate',
  //暂时默认为true，无法更改，后期考虑某些时候无法配置
  config: true,
  // 控件左侧label内容
  showLabel:true,
   //栅格间隔
  gutter:15,
  labelWidth: '80',
  value: 1,
  span: 12,
  disabled: false,
  required: true,
  max: 5,
  'allow-half': false,
  'show-score': false
}
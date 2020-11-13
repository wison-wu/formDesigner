/**
 * 计数器
 */
export let inputNumber = {
  id:'',
  compType: 'inputNumber',
  ele: 'el-inputNumber',
  //控件名称(左侧显示)
  name:'计数器',
  label: '计数器',
  //图标
  icon:'inputNumber',
  //暂时默认为true，无法更改，后期考虑某些时候无法配置
  config: true,
  // 控件左侧label内容
  showLabel:true,
   //栅格间隔
  gutter:15,
  labelWidth: '80',
  value: 0,
  span: 12,
  min: 0,
  max: 100,
  step: 1,
  'step-strictly': false,
  precision: 0,
  'controls-position': 'default',
  disabled: false,
  required: true,
  regList: []
}

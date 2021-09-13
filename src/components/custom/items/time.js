/**
 * 单行&多行输入框
 */
export let time = {
  id:'',
  _id:'',
  compType: 'time',
  ele: 'el-time-picker',
  //控件名称(左侧显示)
  compName:'时间',
  //图标
  compIcon:'time',
  //展示表单的模式
  viewType:'text',
  // 是否可配置
  //暂时默认为true，无法更改，后期考虑某些时候无法配置
  config: true,
  // 控件左侧label内容
  showLabel:true,
  label: '时间',
  labelWidth: '80',
  placeholder: '请选择',
  // 是否必填
  required: false,
  // 最大长度
  maxLength: 50,
  //栅格间隔
  gutter:15,
  //默认栅格
  span:24,
  //是否可清空
  clearable:true,
  disabled:false,
  readonly:false,
  value: '',
  rules:[],
  'picker-options': {
    selectableRange: '00:00:00-23:59:59'
  },
  'arrow-control':true,
  align:'left',
  format: 'HH:mm:ss',
  'value-format': 'HH:mm:ss',
  'is-range':false,
  'range-separator':'-'
}

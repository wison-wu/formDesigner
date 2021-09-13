/**
 * 单行&多行输入框
 */
export let textarea = {
  id:'',
  _id:'',
  compType: 'textarea',
  ele: 'el-input',
  //控件名称(左侧显示)
  compName:'多行文本',
  //图标
  compIcon:'textarea',
  //展示表单的模式
  viewType:'text',
  // 是否可配置
  //暂时默认为true，无法更改，后期考虑某些时候无法配置
  config: true,
  // 控件左侧label内容
  showLabel:true,
  label: '多行文本',
  labelWidth: '80',
  placeholder: '请输入文本',
  type:'textarea',
  // 是否必填
  required: false,
  // 最大长度
  maxlength: 50,
  //输入统计
  'show-word-limit':false,
  //栅格间隔
  gutter:15,
  //默认栅格
  span:24,
  //是否可清空
  clearable:true,
  disabled:false,
  readonly:false,
  rows:4,
  //状态，正常，只读，禁用
  status:'normal',
  value: '',
  rules:[],
  // 验证错误提示信息
  ruleError: '该字段不能为空'
}

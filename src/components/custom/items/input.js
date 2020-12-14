/**
 * 单行&多行输入框
 */
export let input = {
  id:'',
  compType: 'input',
  ele: 'el-input',
  //控件名称(左侧显示)
  name:'单行文本',
  //图标
  icon:'input',

  // 是否可配置
  //暂时默认为true，无法更改，后期考虑某些时候无法配置
  config: true,
  // 控件左侧label内容
  showLabel:true,
  label: '单行文本',
  labelWidth: '80',
  placeholder: '请输入文本',
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
  //状态，正常，只读，禁用
  status:'normal',
  value: undefined,
  // 验证错误提示信息
  ruleError: '该字段不能为空'
  //暂时只有必填校验
}

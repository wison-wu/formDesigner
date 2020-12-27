/**
 * 表单配置
 */
const formConf = {
  version:'1.5',
  formRef: 'elForm',
  formModel: 'form',
  rules: 'rules',
  size: 'medium',
  labelPosition: 'right',
  labelWidth: 80,
  formRules: 'rules',
  gutter: 15,
  disabled: false,
  initFunc:''
};
export default formConf;

//row允许放入的items
export const rowAllowedItems = [
  'input',
  'input',
  'select',
  'radio',
  'checkbox',
  'Switch',
  'inputNumber',
  'textarea',
  'slider',
  'rate',
  'date',
  'time'
]
// export default (_self, h) => {
//   return [
//     h("Input", {})
//   ];
// };

export let radio = {
  id:'',
  _id:'',
  compType: 'radio',
  //控件名称
  compName:'单选框',
  //element标签
  ele: 'el-radio-group',
  //图标
  compIcon:'radio',
  //展示表单的模式
  viewType:'component',
  // 是否可配置
  config: true,
  // 控件左侧label内容
  label: '单选框',
  placeholder: '请选择',
  // 最大长度
  maxLength: 50,
  //表单栅格
  span:24,
  //栅格间隔
  gutter:'15',
  //标签宽度
  labelWidth:80,
  //显示标签
  showLabel:true,
  //必填
  required:false,
  //禁用
  disabled:false,
  //是否有边框
  border:false,
  //选项是否垂直
  vertical:false,
  //选项大小
  size:'medium',
  //是否是按钮
  optionType:'default',
  //选项列表
  options:[{
    label: '选项一',
    value: 1
  }, {
    label: '选项二',
    value: 2
  }],
  //数据类型 static，dynamic
  dataType:'static',
  //默认渲染的数据
  action:'https://www.fastmock.site/mock/51715c0157535b99010bde55f2df33c8/formDesigner/api/options',
  value: '',
  rules:[],
  // 验证错误提示信息
  ruleError: '该字段不能为空'
}

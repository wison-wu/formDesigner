// export default (_self, h) => {
//   return [
//     h("Input", {})
//   ];
// };

export let select = {
  
  compType: 'select',
  //控件名称
  name:'下拉框',
  //element标签
  ele: 'el-select',
  //图标
  compIcon:'select',
  // 是否可配置
  config: true,
  // 控件左侧label内容
  label: '下拉框',
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
  //多选
  multiple:false,
  //禁用
  disabled:false,
  //只读
  readOnly:false,
  //搜索
  filterable:false,
  
  //选项列表
  options:[{
    label: '选项一',
    value: 1
  }, {
    label: '选项二',
    value: 2
  }],
  //默认渲染的数据(暂缓)
  remoteUrl:'https://www.fastmock.site/mock/51715c0157535b99010bde55f2df33c8/formDesigner/api/options',
  remote_options:[
    
  ],
  //是否可以清空
  clearable:false,
  value: '',
  // 验证错误提示信息
  ruleError: '该字段不能为空',
  id:'',
  _id:''
}

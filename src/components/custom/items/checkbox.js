// export default (_self, h) => {
//   return [
//     h("Input", {})
//   ];
// };

export let checkbox = {
  id:'',
  compType: 'checkbox',
  //控件名称
  name:'复选框',
  //element标签
  ele: 'el-checkbox-group',
  //图标
  icon:'checkbox',
  // 是否可配置
  config: true,
  // 控件左侧label内容
  label: '复选框',
  placeholder: '请选择',
  // 最大长度
  maxLength: 50,
  //表单栅格
  span:12,
  //栅格间隔
  gutter:'15',
  //标签宽度
  labelWidth:80,
  //显示标签
  showLabel:true,
  //必填
  required:true,
  //禁用
  disabled:false,
  //是否有边框
  border:false,
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
  value: [],
  // 验证错误提示信息
  ruleError: '该字段不能为空'
  
}

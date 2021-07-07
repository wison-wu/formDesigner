/**
 * 上传组件
 */
export let upload = {
  id:'',
  _id:'',
  compType: 'upload',
  ele: 'el-upload',
  //控件名称(左侧显示)
  compName:'附件',
  //图标
  compIcon:'att',
  //展示表单的模式
  viewType:'component',

  // 是否可配置
  //暂时默认为true，无法更改，后期考虑某些时候无法配置
  config: true,
  // 控件左侧label内容
  showLabel:true,
  label: '附件上传',
  labelWidth: '80',
  //栅格间隔
  gutter:15,
  //默认栅格
  span:24,
  // 是否必填
  required: false,
  //上传地址
  action:'https://jsonplaceholder.typicode.com/posts/',
  //多选上传
  multiple:false,
  name:'file',
  //显示上传文件列表
  'show-file-list':true,
  //文件列表类型
  'list-type':'text',
  value:'',
  width:100,
  //按钮文字
  buttonText:'请上传附件',
  //是否显示描述
  showTip:false,
  //描述内容
  tips:'点击按钮上传附件',
  //允许文件类型
  accept:'.pdf, .doc, .docx, .xls, .xlsx',
  //文件大小MB
  fileSize:10,
}

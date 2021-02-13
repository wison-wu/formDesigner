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
  // 是否必填
  required: false,
  //禁用
  disable:false,
  //上传地址
  action:'http://www.baidu.com',
  //多选上传
  multiple:false,
  name:'file',
  'show-file-list':true,
  //拖拽上传
  drag:false,
  //文件列表类型
  'list-type':'text',
  value:'',
  accept: '',
  //按钮文字
  buttonText:'请上传'
}

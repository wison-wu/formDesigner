/**
 * 警告
 */
export let alert = {
  id:'',
  _id:'',
  compType: 'alert',
  ele: 'el-alert',
  name:'警告',
  icon:'alert',
  config: true,
  
  form:false, //是否表单组件
  // 控件左侧label内容
  showLabel:false,
  labelWidth: '0',
  span:24,
  //标题
  title:'alert',     
  //主题
  type:'success',  
  //辅助文字
  description:'',  
  //是否可关闭
  closable:true,   
  //是否居中
  center:false,   
  //关闭的按钮
  'close-text':'', 
  //是否显示图标 
  'show-icon':false,  
  //主题  light/dark
  effect:'light'  
}

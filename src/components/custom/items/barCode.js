/**
 * 警告
 */
 export let barCode = {
    id:'',
    _id:'',
    compType: 'barCode',
    ele: 'fancy-bar-code',
    compName:'条码',
    compIcon:'barcode',
    //展示表单的模式
    viewType:'component',
    config: true,
  
    form:true, //是否表单组件
    // 控件左侧label内容
    showLabel:false,
    labelWidth: '0',
    label:'条形码',
    span:24,
    value:'formDesigner',
    format:'CODE128',
    lineColor:'#000',
    background:'#fff',
    width:5,
    height:30,
    fontSize:12,
    displayValue:true
  }
  
/**
 * 富文本编辑器
 */
export let editor = {
    id:'',
    _id:'',
    compType: 'editor',
    ele: 'fancy-editor',
    compName:'编辑器',
    compIcon:'editor',
    //展示表单的模式
    viewType:'html',
    config: true,
    form:true,
    // 控件左侧label内容
    showLabel:true,
    labelWidth: '80',
    label:'文本编辑器',
    value:'',
    required:false,
    validateMaxText:false,
    //最大长度
    max:2000,
    //自定义rules
    customRules:[]
  }
  
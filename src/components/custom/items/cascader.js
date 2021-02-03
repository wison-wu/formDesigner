/**
 * 单行&多行输入框
 */
export let cascader = {
    id:'',
    _id:'',
    compType: 'cascader',
    ele: 'el-cascader',
    //控件名称(左侧显示)
    name:'级联选择器',
    //图标
    compIcon:'cascader',
    //展示表单的模式
    viewType:'component',
  
    // 是否可配置
    //暂时默认为true，无法更改，后期考虑某些时候无法配置
    config: true,
    // 控件左侧label内容
    showLabel:true,
    label: '级联选择',
    labelWidth: '80',
    placeholder: '请选择',
    //栅格间隔
    gutter:15,
    //默认栅格
    span:24,
    value: [],
    //大小
    size:"medium",
    //禁用
    disabled:false,
    //清空
    clearable:false,
    //显示完整路径
    'show-all-levels':false,
    //显示完整路径
    'collapse-tags':false

  }
  
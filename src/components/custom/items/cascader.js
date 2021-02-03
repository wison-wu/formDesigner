/**
 * 级联选择器
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
    //请求地址
    action:'',
    options:[
      {
        value: 'zhinan',
        label: '指南',
        disabled: true,
        children: [{
          value: 'shejiyuanze',
          label: '设计原则',
          children: [{
            value: 'yizhi',
            label: '一致'
          }, {
            value: 'fankui',
            label: '反馈'
          }, {
            value: 'xiaolv',
            label: '效率'
          }, {
            value: 'kekong',
            label: '可控'
          }]
        }]
      }
    ],
    props:{
      //触发方式,hover
      expandTrigger:'click',
      //多选
      multiple:false,
    }
  }
  
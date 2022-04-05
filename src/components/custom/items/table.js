/**
 * 表格布局
 */
 export let table = {
    id:'',
    _id:'',
    compType: 'table',
    ele: 'fancy-table',
    //控件名称(左侧显示)
    compName:'表格布局',
    //图标
    compIcon:'table_layout',
    layout:'tableItem',
    // 是否可配置
    //暂时默认为true，无法更改，后期考虑某些时候无法配置
    config: true,
    layoutArray:[[{
        col:1,
        row:1,
        hide:false,
        list:[]
      },{
        col:1,
        row:1,
        hide:false,
        list:[]
      }],[{
        col:1,
        row:1,
        hide:false,
        list:[]
      },{
        col:1,
        row:1,
        hide:false,
        list:[]
      }]
    ]

  }
  
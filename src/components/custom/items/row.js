/**
 * 栅格布局
 */

 // export default (_self, h) => {
//   return [
//     h("Input", {})
//   ];
// };

export let row = {
  id:'',
  _id:'',
  compType: 'row',
  //控件名称
  compName:'栅格布局',
  //element标签
  ele: 'el-row',
  //图标
  compIcon:'col',
  layout:'rowItem',
  // 是否可配置
  config: true,
  //
  flex:'default',
  justify:'start',
  align:'top',
  gutter:0,
  columns:[
    {
      index:0,
      span:12,
      list:[]
    },
    {
      index:1,
      span:12,
      list:[]
    }
  ],
  
  
}

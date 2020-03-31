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
  compType: 'row',
  //控件名称
  name:'栅格布局',
  //element标签
  ele: 'el-row',
  //图标，暂不启用
  icon:'',
  layout:'rowItem',
  // 是否可配置
  config: true,
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

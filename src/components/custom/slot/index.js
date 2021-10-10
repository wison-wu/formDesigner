const slots = require.context('./', false, /\.js$/);
const componentChild = {};
slots.keys().forEach(obj=>{
  const tag = obj.replace('./','').replace('.js','');
  if(tag !=='index'){
    componentChild[tag] = slots(obj).default;
  }
});


export default function childrenItem(h,confClone) {
  let children = [];
  const childObjs = componentChild[confClone.ele]
  if (childObjs&&childObjs.slot) {
    Object.keys(childObjs).forEach(key => {
      const childFunc = childObjs[key]
      children.push(childFunc(h,confClone))
    })
  }
  return children;
};
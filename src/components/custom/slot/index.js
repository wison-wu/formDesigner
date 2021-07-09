const slots = require.context('./', false, /\.js$/);
const componentChild = {};
slots.keys().forEach(obj=>{
  const tag = obj.replace('./','').replace('.js','');
  const content = slots(obj).default;
  componentChild[tag] = content;
});


export default function childrenItem(h,confClone) {
  let children = [];
  const childObjs = componentChild[confClone.ele]
  if (childObjs&&childObjs.slot) {
    Object.keys(childObjs).forEach(key => {
      console.log(key);
      const childFunc = childObjs[key]
      console.log(childFunc);
      children.push(childFunc(h,confClone))
    })
  }
  return children;
};
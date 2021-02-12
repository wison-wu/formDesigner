//在此注册组件
const components = [
  'input',
  'select',
  'radio',
  'checkbox',
  'Switch',
  'inputNumber',
  'textarea',
  'slider',
  'rate',
  'date',
  'time',
  'editor',
  'colorPicker',
  'cascader',
  'upload',
  'button',
  'divider',
  'alert',
  'link',
  'text',
  'html',
  'row'
];


let comps = [];
for (let i in components) {
  const comp = {
    name: components[i],
    content : null
  }
  comps.push(comp);
}
export default comps;
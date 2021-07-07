import { isAttr } from '../utils/index'

//先修改在这里,后续需要优化
function vModel(self, dataObject) {
  dataObject.on.input = val => {
    self.$emit('input', val)
  }
  //判断是否为上传组件
  if(self.conf.compType === 'upload'){
    dataObject.attrs['before-upload'] = file=>{
      //非限定后缀不允许上传
      const fileName = file.name;
      const suffixName = fileName.split('.').pop();
      
      if(!self.conf.accept.includes(suffixName)){ 
        self.$message.error('该后缀文件不允许上传');
        return false;
      }
      const fileSize = file.size;
      if(fileSize>dataObject.props.fileSize*1024*1024){
        self.$message.error('文件大小超出限制，请检查！');
        return false;
      }
    }
  }
  
}
//后续组件的子组件操作
const componentChild = {
  'el-select': {
    options(h, conf, key) {
      const list = []
      conf.options.forEach(item => {
        list.push(<el-option label={item.label} value={item.value} disabled={item.disabled}></el-option>)
      })
      return list;
    }
  },
  'el-radio-group': {
    options(h, conf, key) {
      const list = []
      const vertical = conf.vertical?'display:block;':'';
      conf.options.forEach(item => {
        if (conf.optionType === 'button') list.push(<el-radio-button label={item.value} style="">{item.label}</el-radio-button>)
        else list.push(<el-radio label={item.value} style={vertical} border={conf.border}>{item.label}</el-radio>)
      })
      return list
    }
  },
  'el-checkbox-group': {
    options(h, conf, key) {
      const list = []
      const vertical = conf.vertical?'display:block;':'';
      conf.options.forEach(item => {
        if (conf.optionType === 'button') list.push(<el-checkbox-button label={item.value}>{item.label}</el-checkbox-button>)
        else list.push(<el-checkbox label={item.value} style={vertical} border={conf.border}>{item.label}</el-checkbox>)
      })
      return list
    }
  },
  'el-upload':{
    'list-type': (h, conf, key) => {
      const list = []
      const config = conf.__config__
      if (conf['list-type'] === 'picture-card') {
        list.push(<i class="el-icon-plus"></i>)
      } else {
        list.push(<el-button size="small" type="primary" icon="el-icon-upload">{conf.buttonText}</el-button>)
      }
      if (conf.showTip) {
        list.push(
          <div slot="tip" class="el-upload__tip">{conf.tips}</div>
        )
      }
      return list
    }
  },
  'el-button': {
    innerText(conf) {
      return conf.text;
    }
  },
  'el-divider': {
    innerText(conf) {
      return conf.text;
    }
  },
  'el-link': {
    innerText(conf) {
      return conf.text;
    }
  }
  
}

export default {
  render(h) {
    let dataObject = {
      attrs: {},
      props: {},
      on: {},
      style: {}
    }
    //远程获取数据
    this.getRemoteData();
    const confClone = JSON.parse(JSON.stringify(this.conf))
    let children = []
    const childObjs = componentChild[confClone.ele]
    if (childObjs&&(childObjs.options||childObjs['list-type'])) {
      Object.keys(childObjs).forEach(key => {
        const childFunc = childObjs[key]
        if (confClone[key]) {
          children.push(childFunc(h, confClone, key))
        }
      })
    }
    if (childObjs&&childObjs.innerText) {
      children = childObjs.innerText(confClone);
    }
    Object.keys(confClone).forEach(key => {
      const val = confClone[key]
      if (dataObject[key]) {
        dataObject[key] = val
      } else if(key ==='width'){
        dataObject.style= 'width:'+val+'%';
      } else if (!isAttr(key)) {
        dataObject.props[key] = val
      } else {
        dataObject.attrs[key] = val
      }
    })
    /*调整赋值模式，规避cascader组件赋值props会出现覆盖预制参数的bug */
    vModel(this, dataObject);
    return h(confClone.ele, dataObject, children)
  },
  props: ['conf','value'],
  methods:{
    getRemoteData(){
      //动态数据
      if(this.conf.dataType === 'dymanic'){
         this.$axios.get(this.conf.action)
        .then(res => {
          if(this.conf.options.length==0){
            this.conf.options = this.conf.options.concat(res.data);
          }
        })  
      }
    }
  }
}

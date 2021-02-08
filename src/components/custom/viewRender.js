
import { makeMap } from '../utils/index'

const isAttr = makeMap(
  'accept,accept-charset,accesskey,action,align,alt,async,autocomplete,'
  + 'autofocus,autoplay,autosave,bgcolor,border,buffered,challenge,charset,'
  + 'checked,cite,class,code,codebase,color,cols,colspan,content,http-equiv,'
  + 'name,contenteditable,contextmenu,controls,coords,data,datetime,default,'
  + 'defer,dir,dirname,disabled,download,draggable,dropzone,enctype,method,for,'
  + 'form,formaction,headers,height,hidden,high,href,hreflang,http-equiv,'
  + 'icon,id,ismap,itemprop,keytype,kind,label,lang,language,list,loop,low,'
  + 'manifest,max,maxlength,media,method,GET,POST,min,multiple,email,file,'
  + 'muted,name,novalidate,open,optimum,pattern,ping,placeholder,poster,'
  + 'preload,radiogroup,readonly,rel,required,reversed,rows,rowspan,sandbox,'
  + 'scope,scoped,seamless,selected,shape,size,type,text,password,sizes,span,'
  + 'spellcheck,src,srcdoc,srclang,srcset,start,step,style,summary,tabindex,'
  + 'target,title,type,usemap,value,width,wrap'
)

function vModel(self, dataObject) {
  let _val = undefined;
  // console.log(typeof self.value);
  // if(typeof self.value !=='undefined'){
  //   _val = JSON.parse(self.value);
  // }else{
  //   _val = self.value;
  // }
  dataObject.props.value = _val
  dataObject.on.input = val => {
    self.$emit('input', val)
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
    if (childObjs&&childObjs.options) {
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
      if (key === 'id') {
        vModel(this, dataObject);
      } else if (dataObject[key]) {
        dataObject[key] = val
      } else if(key ==='width'){
        dataObject.style= 'width:'+val+'%';
      } else if (!isAttr(key)) {
        dataObject.props[key] = val
      } else {
        dataObject.attrs[key] = val
      }
    })
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

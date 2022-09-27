import { isAttr,jsonClone } from '../utils';
import childrenItem from './slot/index';
import {remoteData} from './mixin';

function vModel(self, dataObject) {
  dataObject.props.value=self.value;
  dataObject.on.input = val => {
    self.$emit('input', val)
  }
  //判断是否为上传组件
  if(self.conf.compType === 'upload'){
    // add by nbacheng 2022-09-09
    //dataObject.attrs['headers'] = {"Authorization":"Bearer " + getToken()};
    /**
     * 此处增加自定义的token,如果不能满足要求，可以重写此处代码
     */
    const token = '这里为自己的token';
    dataObject.attrs['headers'] = {"Authorization":"Bearer " + token};
    const filevalue = JSON.parse(dataObject.props.value);
    dataObject.props['file-list'] = filevalue;
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
    const confClone = jsonClone(this.conf);
    const children = childrenItem(h,confClone);
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
  mixins:[remoteData]
}

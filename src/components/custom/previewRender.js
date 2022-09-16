import { isAttr,jsonClone } from '../utils';
import childrenItem from './slot/index';
import {remoteData} from './mixin';
import Vue from 'vue'
//import { getToken } from "@/utils/auth";

//先修改在这里,后续需要优化
function vModel(self, dataObject) {
  dataObject.props.value = self.value;
  dataObject.on.input = val => {
    self.$emit('input', val)
  }
  //判断是否为上传组件
  if(self.conf.compType === 'upload'){
    //for token add by nbacheng 2022-09-07
    //dataObject.attrs['headers'] = {"Authorization":"Bearer " + getToken()};
    dataObject.attrs['headers'] = {"Authorization":"Bearer " + '这里为自己的token'};
    console.log("dataObject.props.value",dataObject.props.value)
    if(dataObject.props.value!==undefined && dataObject.props.value !==''){
      const filevalue = JSON.parse(dataObject.props.value);
      dataObject.props['file-list'] = filevalue;
    }
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

    //for get return file url add by nbacheng 2022-09-07
    dataObject.attrs['on-success'] = file=>{
        //console.log("on-success",file);
        var filename=file.message.substring(file.message.lastIndexOf('/')+1)  //获取文件名称
        let fileObj = {name: filename, url: file.message}
        console.log("dataObject=",dataObject);
        console.log("self.conf=",self.conf);
        let oldValue = [];
        if(dataObject.props.value) {
           oldValue = JSON.parse(dataObject.props.value);
        }else {
          oldValue = [];
        }
        if (oldValue) {
          oldValue.push(fileObj)
        } else {
          oldValue = [fileObj]
        }
        self.$emit('input',JSON.stringify(oldValue));
        console.log("on-success value",oldValue);
    } 
    dataObject.attrs['on-remove'] = (file, fileList) => {
      console.log("on-remove file,fileList",file,fileList);
      let oldValue = JSON.parse(dataObject.props.value);
      console.log("on-remove oldValue",oldValue);
      //file 删除的文件
      //过滤掉删除的文件  
      let newValue = oldValue.filter(item => item.name !== file.name)
      self.$emit('input',JSON.stringify(newValue));
      console.log("on-remove newValue",newValue);
    }
    
    dataObject.attrs['on-error'] = (file) => {
      console.log("on-error file",file);
    }
    
    dataObject.attrs['on-preview'] = (file) => {
      console.log("on-preview file",file);
      //download(file);
    }
    //for get return file url add by nbacheng 2022-09-07
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
        dataObject.style= 'width:'+val;
      } else if (!isAttr(key)) {
        dataObject.props[key] = val
      }else {
        if(key !== 'value'){
          dataObject.attrs[key] = val
        }
      }
    })
    /*调整赋值模式，规避cascader组件赋值props会出现覆盖预制参数的bug */
    vModel(this, dataObject);
    return h(confClone.ele, dataObject, children)
  },
  props: ['conf','value'],
  mixins:[remoteData]
}

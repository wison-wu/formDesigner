import {getSimpleId} from "../utils/IdGenerate";
import constant from '../utils/constants'
import {jsonClone} from "../utils";

let tdItemObj = {
    id:'',
    col:1,
    row:1,
    hide:false,
    compType:'tdItem',
    style:{
      background:constant.defaultTdBackgroundColor,
      width:35
    },
    columns:[]
  }

export function getTdItem(){
    let tdItem = cloneObj(tdItemObj);
    tdItem.id = getSimpleId();
    return tdItem;
}
export function getTitleTdItem(){
    let tdItem = cloneObj(tdItemObj);
    tdItem.style.background = constant.defaultTitleTdBackgroundColor;
    tdItem.style.width = 15;
    tdItem.id = getSimpleId();
    return tdItem;
}

function cloneObj(source){
    let target = jsonClone(source);
    target.id = getSimpleId();
    return target;
}

export function getTrItem(){
    let trItem= [getTitleTdItem(),getTdItem(),getTitleTdItem(),getTdItem()];
    return trItem;
}
export function getDefaultTrs(){
    let trs = [getTrItem(),getTrItem()];
    return trs;
}
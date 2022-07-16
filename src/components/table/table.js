import {getSimpleId} from "../utils/IdGenerate";
import constant from '../utils/constants'
import {jsonClone} from "../utils";

let titleItem = {
    id:'',
    col:1,
    row:1,
    hide:false,
    style:{
      background:constant.defaultTitleTdBackgroundColor,
      width:'15%'
    },
    columns:[]
  }
let contentItem = {
    id:'',
    col:1,
    row:1,
    hide:false,
    style:{
      background:constant.defaultTdBackgroundColor,
      width:'35%'
    },
    columns:[]
  }

export function getTdItem(){
    let tdItem = cloneObj(contentItem);
    tdItem.id = getSimpleId();
    return tdItem;
}
export function getTitleTdItem(){
    let tdItem = cloneObj(titleItem);
    console.log(tdItem.style.background);
    tdItem.id = getSimpleId();
    return tdItem;
}

function cloneObj(source){
    let target = jsonClone(source);
    target.id = getSimpleId();
    return target;
}

export function getTrItem(){
    let trItem= [getTitleTdItem(),getTdItem()];
    return trItem;
}
export function getDefaultTrs(){
    let trs = [[getTitleTdItem(),getTdItem(),getTitleTdItem(),getTdItem()],[getTitleTdItem(),getTdItem(),getTitleTdItem(),getTdItem()]];
    return trs;
}
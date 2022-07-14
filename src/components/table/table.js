import {getSimpleId} from "../utils/IdGenerate";


export function getTdItem(){
    let tdItem= {
        id:'',
        col:1,
        row:1,
        hide:false,
        style:{
            background:'#ffffff',
            width:25
        },
        columns:[]
    }
    tdItem.id = getSimpleId();
    return tdItem;
}


export function getTrItem(){
    let trItem= [getTdItem(),getTdItem()];
    return trItem;
}
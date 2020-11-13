import strUtil from "voca";
import { v4 as uuidv4 } from 'uuid';; 

export function getSimpleId(){
  let uuid = uuidv4();
  return strUtil.replaceAll(uuid,'-','');
}
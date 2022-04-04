import {input} from "./items/input";
import {select} from "./items/select";
import {radio} from "./items/radio";
import {checkbox} from "./items/checkbox";
import {Switch} from "./items/Switch";
import {inputNumber} from "./items/inputNumber";
import {textarea} from "./items/textarea";
import {slider} from "./items/slider";
import {rate} from "./items/rate";
import {date} from "./items/date";
import {time} from "./items/time";
import {editor} from "./items/editor";
import {colorPicker} from "./items/colorPicker";
import {cascader} from "./items/cascader";
import {upload} from "./items/upload";
import {dialogList} from "./items/dialogList";

import {dynamicTable} from "./items/dynamicTable";
import {button} from "./items/button";
import {divider} from "./items/divider";
import {row} from "./items/row";
import {table} from "./items/table";

import {alert} from "./items/alert";
import {link} from "./items/link";
import {text} from "./items/text";
import {barCode} from "./items/barCode";

export  const formItems = [
  input,select,radio,checkbox,Switch,inputNumber,textarea,slider
  ,rate,date,time,editor,colorPicker,cascader,upload,dialogList,barCode,dynamicTable
];
export  const assistFormItems = [button,divider,alert,link,text];
export  const layoutFormItems = [row,table];

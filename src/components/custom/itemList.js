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

import {button} from "./items/button";
import {divider} from "./items/divider";
import {row} from "./items/row";
import {alert} from "./items/alert";
import {link} from "./items/link";
import {text} from "./items/text";
import {html} from "./items/html";


const formList = {
  input: input,
  select: select,
  radio:radio,
  checkbox:checkbox,
  Switch:Switch,
  inputNumber:inputNumber,
  textarea:textarea,
  slider:slider,
  rate:rate,
  date:date,
  time:time,
  editor:editor,
  colorPicker:colorPicker,
  cascader:cascader,
  row:row,
  button: button,
  divider: divider,
  alert:alert,
  link:link,
  text:text,
  html:html
};
let items = [];
for (let i in formList) {
  items.push(formList[i]);
}
export default items;
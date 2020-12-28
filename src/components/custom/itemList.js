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
import {button} from "./items/button";
import {divider} from "./items/divider";
import {row} from "./items/row";
import {alert} from "./items/alert";

const formList = {
  input: input,
  button: button,
  divider: divider,
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
  row:row,
  alert:alert
};
let items = [];
for (let i in formList) {
  items.push(formList[i]);
}
export default items;
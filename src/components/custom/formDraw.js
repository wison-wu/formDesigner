//初始化校验规则
let itemRules = []; //表单控件的必填列表
export function rules(){
  itemRules = [];
  this.itemList.forEach(val => {
    if(val.layout === 'rowItem'){ //row布局
      ruleResolveRowItem(val);  //解析row布局
    }else{    //表单
      ruleResolveColItem(val);
    }
  })
  itemRules.forEach(o =>{
    this.$set(this.rules,o.name,o.valid);
  })
}
function ruleResolveRowItem(val){
  const columns = val.columns;
  columns.forEach(v =>{
    v.list.forEach(item =>{
      ruleResolveColItem(item);
    })
  })
}
function ruleResolveDynamicItem(val){

}
function ruleResolveColItem(val){
    if(val.required){
      let field = val.id;
      console.log(val.trigger);
      const r = [
        {required: true, message: val.label+'不能为空', trigger:['blur','change']}
      ];
      const rObj ={
        name:field,
        valid:r
      }
      itemRules.push(rObj);
    }
}


//初始化data里面的数据（1、默认为空，2、之前存在的数据。。）
let itemDatas = {}

export function datas(){
  itemDatas = {};

  let self = this;

  this.itemList.forEach(val => {
    
    if(val.layout === 'rowItem'){ //row布局
      dataResolveRowItem(val);  //解析row布局
    }else{    //表单
      dataResolveColItem(val);
    }
  })
  Object.keys(itemDatas).forEach(key =>{
    this.$set(this.form, key, itemDatas[key]);
  })
}

function dataResolveRowItem(val){
  const columns = val.columns;
  columns.forEach(v =>{
    v.list.forEach(item =>{
      dataResolveColItem(item);
    })
  })
}

function dataResolveColItem(val){
  itemDatas[val.id] = val.value;
}

export function dialogOpen(){
  let self = this;
  
}

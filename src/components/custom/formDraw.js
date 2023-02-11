//初始化data里面的数据（1、默认为空，2、之前存在的数据。。）
let itemDatas = {}
export function datas(){
    if(!this.isInitData){
        itemDatas = {};
        this.itemList.forEach(val => {
            if(val.layout === 'rowItem'){ //row布局
                dataResolveRowItem(val);  //解析row布局
            }else if(val.layout === 'dynamicItem'){ //动态表单布局
                let obj =dataResolveDynamicItem(val);
                let array = [];
                array.push(obj);
                itemDatas[val.id] = array;
            }else if(val.layout === 'tableItem'){ //表格布局
                dataResolveTableItem(val);
            }else{    //表单
                dataResolveColItem(val);
            }
        })
        Object.keys(itemDatas).forEach(key =>{
            this.$set(this.form, key, itemDatas[key]);
        })
    }
    return true;
}

function dataResolveRowItem(val){
    const columns = val.columns;
    columns.forEach(v =>{
        v.list.forEach(item =>{
            if(item.layout==='dynamicItem'){
                let obj =dataResolveDynamicItem(item);
                let array = [];
                array.push(obj);
                itemDatas[item.id] = array;
            }else{
                dataResolveColItem(item);
            }
        })
    })
}
function dataResolveDynamicItem(val){
    const columns = val.columns;
    let obj ={};
    columns.forEach(v =>{
        const key = v.id;
        obj[key] = v.value;
    })
    return obj;
}

/*
遍历表格实现组件渲染
*/
function dataResolveTableItem(val){
    val.layoutArray.map((tr)=>{
        tr.map((td)=>{
            td.columns.map(item=>dataResolveColItem(item));
        })
    })
}

function dataResolveColItem(val){
    itemDatas[val.id] = val.value;
}

export function fillDatas(jsonValue){
    const self = this;
    Object.keys(jsonValue).forEach(key =>{
       if(typeof(self.form[key]) === 'string'||typeof(self.form[key]) === 'number'){
         self.$set(self.form, key,jsonValue[key]);
       }else if(self.form[key] instanceof Array){//有可能是多选或者是明细表
         //判断是否数组中为对象
         if(jsonValue[key].length>0){
             const firsValue = jsonValue[key][0];//获取第一个对象判断是什么类型
             if(typeof(firsValue) === 'string'||typeof(firsValue) === 'number'){
               self.$set(self.form, key,jsonValue[key]);
             }else{ //明细表数组
               const arrayData = jsonValue[key];
               //self.form[key] = [];
               arrayData.forEach((v,index)=>{
                 const newV = JSON.parse(JSON.stringify(v));
                 self.$set(self.form[key],index,newV);
               })
             }
         }
       }
     })
     //console.log(this.form);
   }

export function addRow(element){
    let obj =dataResolveDynamicItem(element);
    this.form[element.id].push(obj);
}

export function deleteRow(scope,element){
    this.form[element.id].splice(scope.$index,1);
}

export function batchDeleteRow(indexs,element){
    for(let i =0;i<indexs.length;i++){
        const index = indexs[i];
        this.form[element.id].splice(index,1);
    }
}

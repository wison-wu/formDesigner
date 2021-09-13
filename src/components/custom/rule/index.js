export default function checkRules(element) {
    let r = [];
    const _trigger = ['blur','change'];
    if(element.required){
        r.push({required: true, message: element.label+'不能为空', trigger:_trigger});
    }
    //判断是否有规则
    if(element.rules){
        element.rules.forEach(obj=>{
            r.push({pattern:new RegExp(obj.rule),message:obj.msg, trigger:_trigger});
        });
    }
    //编辑器最大字数验证
    if(typeof element.validateMaxText !== 'undefined'&&element.validateMaxText){
        const maxRules = {
            max: element.max, message: element.label+'超出最大字数限制', trigger:_trigger
        }
        r.push(maxRules);
    }
    return r;
};
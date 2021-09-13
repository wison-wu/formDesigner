export default function checkRules(element) {
    let r = [];
    const trigger = ['blur','change'];
    if(element.required){
        r.push({required: true, message: element.label+'不能为空', trigger:trigger});
    }
    element.rules.forEach(obj=>{});
    const rules = element.rules;
    //判断是否有规则
    if(typeof rules !== 'undefined'){
        rules.forEach(obj=>{
            const rule = {};
            rule.pattern = new RegExp(obj.rule);
            rule.message=obj.msg;
            rule.trigger= trigger;
            r.push(rule);
        });
    }
    //编辑器最大字数验证
    if(typeof element.validateMaxText !== 'undefined'&&element.validateMaxText){
        const maxRules = {
            max: element.max, message: element.label+'超出最大字数限制', trigger:trigger
        }
        r.push(maxRules);
    }
    return r;
};
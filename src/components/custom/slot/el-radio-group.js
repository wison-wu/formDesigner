export default {
    slot(h,conf) {
        const list = [];
        const vertical = conf.vertical?'display:block;':'';
        conf.options.forEach(item => {
        if (conf.optionType === 'button') list.push(<el-radio-button label={item.value} style="">{item.label}</el-radio-button>)
        else list.push(<el-radio label={item.value} style={vertical} border={conf.border}>{item.label}</el-radio>)
        })
        return list
    }
}
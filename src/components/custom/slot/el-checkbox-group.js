export default {
    slot(h,conf) {
        const list = []
        const vertical = conf.vertical?'display:block;':'';
        conf.options.forEach(item => {
            if (conf.optionType === 'button') list.push(<el-checkbox-button  label={item.value}>{item.label}</el-checkbox-button>)
            else list.push(<el-checkbox label={item.value} style={vertical} border={conf.border}>{item.label}</el-checkbox>)
        })
        return list
    }
}
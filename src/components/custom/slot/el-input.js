export default {
    slot(h,conf) {
        const slotText = []
        if(conf.prepend!==''){
            slotText.push(<template slot="prepend">{conf.prepend}</template>);
        }
        if(conf.append!==''){
            slotText.push(<template slot="append">{conf.append}</template>);
        }
        return slotText;
    }
}
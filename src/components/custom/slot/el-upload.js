export default {
    slot(h,conf) {
        const list = [];
        if (conf['list-type'] === 'picture-card') {
            list.push(<i class="el-icon-plus"/>)
        } else {
            list.push(<el-button size="small" type="primary" icon="el-icon-upload">{conf.buttonText}</el-button>)
        }
        if (conf.showTip) {
            list.push(<div slot="tip" class="el-upload__tip">{conf.tips}</div>)
        }
        return list
    }
}
// 模态框
export const remoteData = {
    methods: {
        getRemoteData(){
            //动态数据
            if(this.conf.dataType === 'dynamic'){
                this.$axios.get(this.conf.action).then(res => {
                    if(this.conf.options.length===0){
                        this.conf.options = this.conf.options.concat(res.data);
                    }
                })
            }
        }
    }
}

export const changeId = {
    methods: {
        handlerChangeId(val){
            let idArray = this.getFormId(this.props._id);
            console.log(idArray);
            if(idArray.includes(val)){  //如果存在id相等，则提示
                this.$message.error('该ID已经存在，请修改');
                this.props.id=this.props._id;
            }else{
                this.props._id=val;
            }
        }
    }
}

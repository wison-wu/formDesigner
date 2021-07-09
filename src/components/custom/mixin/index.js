// 模态框
export const remoteData = {
    methods: {
        getRemoteData(){
            //动态数据
            if(this.conf.dataType === 'dymanic'){
                this.$axios.get(this.conf.action)
            .then(res => {
                if(this.conf.options.length==0){
                this.conf.options = this.conf.options.concat(res.data);
                }
            })
          }
        }
    }
}

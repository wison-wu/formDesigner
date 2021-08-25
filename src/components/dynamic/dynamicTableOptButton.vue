<!--操作区域，删除和复制，新增、序号，集成在一个文件中-->
<template>
    <div class="dynamic-table__item_opt" style="width: 100%;" >
      <div class="dynamic-table__item_title">
          操作
      </div>
      <div class="dynamic-table__item_body" style="text-align:center">
        <i class="el-icon-document-copy" style="margin:2px"></i>
        <i class="el-icon-delete" style="margin:2px"></i>
      </div>
    </div>
</template>
<script>
export default {
  name:'dynamicTableOptButton',
  props:['type'],
  data(){
    return{

    }
  }
}
</script>
<style scoped>

.dynamic-table__item_opt{
  padding-top:5px;
}
</style>

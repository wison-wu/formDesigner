<!--表单查看页面-->
<template>
  <div class="form-viewer">
    <el-row  :gutter="formConf.gutter" >
      <el-form
          :ref="formConf.formModel"
          :size="formConf.size"
          :model="form"
          :label-position="formConf.labelPosition"
          :disabled="formConf.disabled"
        >
          <template v-for="(element,index) in itemList"  >
             <preview-row-item 
              v-if="element.compType === 'row'"
              :key="'row-'+index" 
              :model="element"
              >
              <el-col v-for="(column) in element.columns" :key="column.index" :span="column.span">
                <form-view-item 
                v-for="(item) in column.list"
                :key="item.id" 
                :model="item"
                v-model="form[item.id]"
                />
              </el-col>
            </preview-row-item>
            <fancy-dynamic-view-table
                v-else-if="element.compType === 'dynamicTable'"
                :key="'dynamic-'+index"
                :data="form[element.id]"
                :ref="element.id"
                :conf="element"
            >
              <template v-slot:item="{rowScope,item}">
                <fancy-dynamic-table-view-item
                    :model="item"
                    :ref="item.id+rowScope.$index"
                    :parent="element"
                    :key="'tableIndex-'+rowScope.$index"
                    :index="rowScope.$index"
                    v-model="rowScope.row[item.id]"
                />
              </template>
            </fancy-dynamic-view-table>
            <fancy-edit-table
              v-else-if="element.compType === 'table'"
              :layoutArray="element.layoutArray"
              :tdStyle="element.tdStyle"
              :width="element.width"
              :height="element.height"
            >
             <template v-slot="{td}">
                <form-view-item 
                  v-for="(item) in td.columns"
                  :key="item.id" 
                  :model="item"
                  v-model="form[item.id]"
                  />
            </template>
            </fancy-edit-table>
            <!--item-->
            <el-col class="drag-col-wrapper" :key="index"   :span="element.span" v-else>
              <form-view-item
                :model="element"
                v-model="form[element.id]"
              />
            </el-col>
          </template>
        </el-form>
    </el-row>
  </div>
</template>

<script>
import formViewItem from "./formViewItem";
import previewRowItem from "./previewRowItem";
import fancyDynamicViewTable from "./dynamic/fancyDynamicViewTable";
import fancyDynamicTableViewItem from "./dynamic/fancyDynamicTableViewItem";
import fancyEditTable from "./table/fancyEditTable";
export default {
  name:'formViewer',
  data(){
    return{
    }
  },
  props:{
    value:{
      type:String,
      default:''
    },
    buildData:{
      type:String,
      default:''
    }
  },
  components:{
    formViewItem,
    previewRowItem,
    fancyDynamicViewTable,
    fancyDynamicTableViewItem,
    fancyEditTable
  },
  mounted() {
    this.$nextTick(()=> {
    })
  },
  computed:{
    itemList(){
      if(this.buildData!==''){
        const buildData = JSON.parse(this.buildData);
        return buildData.list;
      }else{
        return [];
      }
    },
    form(){ //转换成json的值
      if(this.value!==''){
        const value = JSON.parse(this.value);
        return value;
      }else{
        return {};
      }
    },
    formConf(){
      if(this.buildData!==''){
        const buildData = JSON.parse(this.buildData);
        buildData.config.disabled = this.disabled;
        return buildData.config;
      }else{
        return {};
      }
    }
  }
}
</script>

<style scoped>
.preview-board{
  border: 1px dashed #ccc
}
.form-viewer{
  padding: 20px;
  border:1px solid #dcdfe6;
}
.el-form-item{
  margin-left:10px;
  margin-right:10px;
}
</style>
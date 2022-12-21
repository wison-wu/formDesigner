<template>
  <div class="preview">
    <el-row  :gutter="formConf.gutter">
      <el-form
          :rules="rules"
          :ref="formConf.formModel"
          :size="formConf.size"
          :model="form"
          :label-position="formConf.labelPosition"
          :disabled="formConf.disabled"
          :validate-on-rule-change="false"
          label-width="formConf.labelWidth + 'px'"
        >
          <template v-for="(element,index) in list"  >
            <!-- <el-input v-model="element.id" placeholder=""></el-input> -->
             <preview-row-item 
              v-if="element.compType === 'row'"
              :key="'row-'+index" 
              :model="element"
              >
              <el-col v-for="(column) in element.columns" :key="column.index" :span="column.span">
                <template v-for="(col) in column.list">
                  <preview-item
                    v-if="col.compType!== 'dynamicTable'"
                    :key="col.id"
                    :model="col"
                    v-model="form[col.id]"
                    @valChange="handlerValChange"
                  />
                  <fancy-dynamic-table
                      v-else-if="col.compType === 'dynamicTable'"
                      ref="dynamicTable"
                      :key="'dynamic-'+index"
                      :data="form[col.id]"
                      :conf="col"
                      @addRow="handlerAddRow"
                      @deleteRow="handlerDeleteRow"
                      @batchDeleteRow="handlerBatchDeleteRow"
                  >
                    <template v-slot:item="{rowScope,item}">
                      <fancy-dynamic-table-item
                          :model="item"
                          :parent="col"
                          :key="'tableIndex-'+rowScope.$index"
                          :index="rowScope.$index"
                          v-model="rowScope.row[item.id]"
                          @valChange="handlerDynamicValChange"
                      />
                    </template>
                  </fancy-dynamic-table>
                </template>
              </el-col>
            </preview-row-item>
            <fancy-dynamic-table
                v-else-if="element.compType === 'dynamicTable'"
                :key="'dynamic-'+index"
                :data="form[element.id]"
                :ref="element.id"
                :conf="element"
                @addRow="handlerAddRow"
                @deleteRow="handlerDeleteRow"
                @batchDeleteRow="handlerBatchDeleteRow"
            >
              <template v-slot:item="{rowScope,item}">
                <fancy-dynamic-table-item
                    :model="item"
                    :ref="item.id+rowScope.$index"
                    :parent="element"
                    :key="'tableIndex-'+rowScope.$index"
                    :index="rowScope.$index"
                    v-model="rowScope.row[item.id]"
                    @valChange="handlerDynamicValChange"
                />
              </template>
            </fancy-dynamic-table>
            <fancy-edit-table
              v-else-if="element.compType === 'table'"
              :layoutArray="element.layoutArray"
              :tdStyle="element.tdStyle"
              :width="element.width"
              :height="element.height"
            >
             <template v-slot="{td}">
              <template v-for="(col) in td.columns">
                  <preview-item                   
                    :model="col"
                    v-model="form[col.id]"
                    @valChange="handlerValChange"
                  />
             </template>
            </template>
            </fancy-edit-table>
            <!--item-->
            <el-col class="drag-col-wrapper" :key="index"   :span="element.span" v-else>
              <preview-item 
                :model="element"
                v-model="form[element.id]"
                @valChange="handlerValChange"
              />
            </el-col>
          </template>
          
        </el-form>
    </el-row>
    <el-divider></el-divider>
    <div style="text-align: center;">
      <span slot="footer" class="dialog-footer">
        <el-button type="primary" @click="handlerSubForm">提交</el-button>
      </span>
    </div>
  </div>
</template>
<script>
import previewItem from "./previewItem";
import previewRowItem from "./previewRowItem";
import fancyDynamicTable from "./dynamic/fancyDynamicTable";
import fancyDynamicTableItem from "./dynamic/fancyDynamicTableItem";
import fancyEditTable from "./table/fancyEditTable";
import {datas,addRow,batchDeleteRow,deleteRow} from "./custom/formDraw";
export default {
  name:'preview',
  props:['itemList','formConf'],
  components:{
    previewItem,
    previewRowItem,
    fancyDynamicTable,
    fancyDynamicTableItem,
    fancyEditTable
  },
  data(){
    return{
      list: this.itemList,
      form:{},
      rules:{},
      currentIndex:-1
    }
  },
  methods:{
    handlerValChange(key,origin){
      console.log(key);
      this.$set(this.form,key,origin);
    },
    handlerDynamicValChange(parentId,index,key,origin){
      this.$set(this.form[parentId][index],key,origin);
      this.currentIndex = index;
    },
    handlerSubForm(){
      this.$refs[this.formConf.formModel].validate((valid) => {
        if (valid) {
          this.$message.success('success');
        }
      });
    },
    handlerAddRow:addRow,
    handlerDeleteRow:deleteRow,
    handlerBatchDeleteRow:batchDeleteRow,
    handlerInitDatas:datas,
  },
  created(){
    this.handlerInitDatas();//初始化表单
  },
  mounted() {
    this.$nextTick(()=> {
    })
  },
  beforeCreate(){
  },
  computed:{
  }
}
</script>
<style scoped>
.preview-board{
  border: 1px dashed #ccc
}
.preview >>> .el-radio.is-bordered+.el-radio.is-bordered{
  margin-left:0px;
}
.preview >>> .el-checkbox.is-bordered+.el-checkbox.is-bordered{
  margin-left:0px;
}
.preview >>> .el-form-item{
  margin-bottom:15px;
}
</style>
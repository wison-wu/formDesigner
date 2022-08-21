<template>
  <div >
    <el-row  :gutter="formConf.gutter" class="form-builder">
      <el-form
          :rules="rules"
          :ref="formConf.formModel"
          :size="formConf.size"
          :model="form"
          :label-position="formConf.labelPosition"
          :disabled="formConf.disabled"
          :validate-on-rule-change="false"
          :label-width="formConf.labelWidth + 'px'"
        >
          <template v-for="(element,index) in itemList"  >
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
                    v-if="col.compType!== 'dynamicTable'"
                    :key="col.id"
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
  </div>
</template>
<script>
import previewItem from "./previewItem";
import previewRowItem from "./previewRowItem";
import fancyDynamicTable from "./dynamic/fancyDynamicTable";
import fancyDynamicTableItem from "./dynamic/fancyDynamicTableItem";
import {datas,addRow,deleteRow,fillDatas} from "./custom/formDraw";
import fancyEditTable from "./table/fancyEditTable";
export default {
  name:'formBuilder',
  props:{
    value:{
      type:String,
      default:''
    },
    buildData:{
      type:String,
      default:''
    },
    disabled:{
      type:Boolean,
      default:false
    }
  },
  components:{
    previewItem,
    previewRowItem,
    fancyDynamicTable,
    fancyDynamicTableItem,
    fancyEditTable
  },
  data(){
    return{
      form:{},
      rules:{},
      currentIndex:-1
    }
  },
  mounted() {
    this.$nextTick(()=> {
      if(this.value !==''){
        const jsonValue = JSON.parse(this.value)
        this.handlerFillDatas(jsonValue);
      }
    })
  },
  methods:{
    handlerValChange(key,origin){
      this.$set(this.form,key,origin);
    },
    handlerDynamicValChange(parentId,index,key,origin){
      this.$set(this.form[parentId][index],key,origin);
      this.currentIndex = index;
    },
    validate(){
      this.$refs[this.formConf.formModel].validate((valid) => {
        if (valid) {
          this.$message.success('success');
          this.$emit('input',JSON.stringify(this.form,null,4));
        }else{
          this.$emit('input','');
        }
      });
    },
    handlerAddRow:addRow,
    handlerDeleteRow:deleteRow,
    handlerInitDatas:datas,
    handlerFillDatas:fillDatas
  },
  created(){
    this.handlerInitDatas();
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
.form-builder{
  padding: 20px;
  border:1px solid #dcdfe6;
}
.el-form-item{
  margin-left:10px;
  margin-right:10px;
}
.form-builder >>> .el-radio.is-bordered+.el-radio.is-bordered{
  margin-left:0px;
}
.form-builder >>> .el-checkbox.is-bordered+.el-checkbox.is-bordered{
  margin-left:0px;
}
</style>
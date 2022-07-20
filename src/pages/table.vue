<template>
  <div>
    <fancy-table :layoutArray="trs">
      <template v-slot:item="{item,index}">
        <fancy-table-item :trItem="item" :index="index">
          test111
        </fancy-table-item>
      </template>
    </fancy-table>
    {{trs}}
  </div>
</template>

<script>
import fancyTable from '../components/table/fancyTable'
import fancyTableItem from '../components/table/fancyTableItem'
export default {
  components:{
    fancyTable,
    fancyTableItem
  },
  data(){
    return{
      trs:[[{
                col:1,
                row:1,
                list:[]
              },{
                col:1,
                row:1,
                list:[]
              }],[{
                col:1,
                row:1,
                list:[]
              },{
                col:1,
                row:1,
                list:[]
              }]
          ]
    } 
  },
  mounted(){
    this.$nextTick(()=> {
     
    })
    
  },
  methods:{
   
  },
  computed:{
  }
}
</script>

<style scoped>

</style>
<template>
  <v-app>
    <ag-grid-vue 
      style="width: 100%; height: 70%;"
      class="ag-theme-alpine"
      :columnDefs="this.$store.state.industryCashFlowColumns"
      :rowData="this.$store.state.kospiIndustryCashFlowRowData"
      rowSelection="single"
      @grid-ready="onGridReady"
      :defaultColDef="this.$store.state.defaultColDef"
      @cell-double-clicked="onCellDoubleClicked"
    >
    </ag-grid-vue>
  </v-app>
</template>
<script>
import { AgGridVue } from "ag-grid-vue";
import {mapMutations, mapActions} from 'vuex';
// import {CommonUtil} from '../CommonUtil';

export default {
  computed: {

  },
  
  beforeCreate() {},

  created() {
    this.kospiIndustryCashFlow();
  },
  beforeMount() {},
  mounted(){},
  beforeUpdate(){},
  updated(){},

  name: 'QuickInterestStock',
  methods: {
    ...mapMutations([]),
    ...mapActions(['changeKospiIndustryCashFlowData', 'callKospiIndustryCashFlow']),
    async onCellDoubleClicked(params){
      // const selectedNodes = this.gridApi.getSelectedNodes();
      // console.log('params;;;;;', params);
      // console.log('selectedNodes;;;;;', selectedNodes);
      try {
        if(params.colDef.field != 'title'){
          if(params.data.title == '종합주가지수'){
            alert('종합주가지수는 종목 검색이 불가합니다.');
            return;
          }
          console.log('더블클릭');
          await this.$store.dispatch('callKospiEachIndustryStock', { 
            stockIndustry: params.data.title
            , period: params.colDef.headerName
          });
        }
      } catch(error){
        console.log(error);
      }
      
    },
    async kospiIndustryCashFlow(){
      let ths = this;
      try{
          let postData = {
            hero: ths.hero
          };
          await this.$store.dispatch('callKospiIndustryCashFlow', postData);
          await this.$store.dispatch('changeKospiIndustryCashFlowData', postData);

      } catch(error) {
          console.log(error);
      }
    },
    onGridReady(params) {
      this.gridApi = params.api;
      this.columnApi = params.columnApi;
      this.gridApi.sizeColumnsToFit();
    },
  },
  async onCellDoubleClicked(params){
    if(params.api.colDef.field == 'title'){
      alert('업종 데이터 클릭');
    }
  },
  components: {
    AgGridVue,
  },
  props: ['sources'],
  data:function() {
    // ag grid 관련
    return {
      columnDefs: null,
      hero: this.sources
    }
  },
}
</script>

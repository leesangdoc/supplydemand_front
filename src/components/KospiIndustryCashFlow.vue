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
      // console.log('params_onCellDoubleClicked111111;;;;;', params);
      console.log('params.getValue()_onCellDoubleClicked222222;;;;;', params);
      const selectedNodes = this.gridApi.getSelectedNodes();
      console.log('onCellDoubleClicked_selectedNodes111111;;;;;', selectedNodes);
      // getSelectedNodes
      if(params.colDef.field == 'title'){
        console.log('업종더블클릭');

      } else {
        console.log('업종더블클릭 아님');
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

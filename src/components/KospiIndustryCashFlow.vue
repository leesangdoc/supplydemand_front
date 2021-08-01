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
    >
    </ag-grid-vue>
  </v-app>
</template>
<script>
import { AgGridVue } from "ag-grid-vue";
import axios from "axios";
import {mapMutations, mapActions} from 'vuex';
// import {CommonUtil} from '../CommonUtil';

export default {
  computed: {

  },
  
  beforeCreate() {
    
  },

  created() {
    let postData = {};
    let ths = this;    
    axios.post('http://supplydemand.iptime.org/supplydemand/api/kospiIndustryCashFlowResultList/',
      {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'JWT fefege...'
      }, postData})
      .then(function(response) {
        ths.success = true;
        console.log(response);
        ths.$store.state.kospiIndustryCashFlowArr = response.data;
      })
      .then(function() {
        ths.$store.dispatch('changeKospiIndustryCashFlowData', ths.hero);
      })
      .catch(function(error) {
        ths.error = true;
        console.log(error);
      })
      .finally(()=>{});
  },
  beforeMount() {
    // console.log('beforeMount_hero;;;;;;;;;;;', this.hero);
    // console.log('IndustryRanking_beforeMount');
    
  },
  mounted(){
    // console.log('mounted_hero;;;;;;;;;;;', this.hero);
  },
  beforeUpdate(){
    // console.log('beforeUpdate_hero;;;;;;;;;;;', this.hero);
    
  },
  updated(){
    // console.log('updated_hero;;;;;;;;;;;', this.hero);
    
  },

  name: 'QuickInterestStock',
  methods: {
    ...mapMutations([]),
    ...mapActions(['changeKospiIndustryCashFlowData']),
    onGridReady(params) {
      this.gridApi = params.api;
      this.columnApi = params.columnApi;
      this.setHeaderNames();
      this.gridApi.sizeColumnsToFit()
    },
    setHeaderNames(){
      let columnDefs = this.$store.state.industryRankingColumns;
      columnDefs.forEach(function (colDef, index) {
        if(index == 0){
          // colDef.headerName = 'C' + index;
          colDef.headerName = this.hero;
        }
      });
      this.gridApi.setColumnDefs(columnDefs);
    },
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

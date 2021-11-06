<template>
  <v-app>
    <div class="text-center">
    <v-progress-circular
        :size="this.$store.state.spinnerLoading ? 70 : 0"
        :width="10"
        color="purple"
        :indeterminate="this.$store.state.spinnerLoading"
      ></v-progress-circular>
    </div>
    <ag-grid-vue 
      style="width: 100%; height: 30%;"
      class="ag-theme-alpine"
      :columnDefs="this.$store.state.industryRankingColumns"
      :rowData="this.$store.state.kospiIndustryRankingRowData"
      rowSelection="single"
      @grid-ready="onGridReady1"
      :defaultColDef="this.$store.state.defaultColDef"
      @cell-double-clicked="onCellDoubleClicked1"
    >
    </ag-grid-vue>
    <br/>
    <ag-grid-vue
      style="width: 100%; height: 30%;"
      class="ag-theme-alpine"
      :columnDefs="this.$store.state.industryHeroRankingColumns"
      :rowData="this.$store.state.kospiIndustryHeroRankingRowData"
      rowSelection="single"
      @grid-ready="onGridReady2"
      :defaultColDef="this.$store.state.defaultColDef"
    >
    </ag-grid-vue>
  </v-app>
</template>
<script>
import { AgGridVue } from "ag-grid-vue";
import {mapMutations, mapActions} from 'vuex';

export default {
  computed: {},
  beforeCreate() {},
  created() {
    this.kospiIndustryRanking();
  },
  beforeMount() {},
  mounted(){},
  beforeUpdate(){},
  updated(){},
  name: 'KospiIndustryRanking',
  methods: {
    ...mapMutations([]),
    ...mapActions(['changeKospiIndustryRankingData', 'changeKospiIndustryHeroRankingData', 'callKospiIndustryRanking']),
    async onCellDoubleClicked1(params){
      let temp = params.value.split('(');
      // console.log('temp[0];;;', temp[0]);
      // console.log(' params.data.period;;;',  params.data.period);
      try {
        await this.$store.dispatch('callKospiEachIndustryStock', { 
          stockIndustry: temp[0]
          , period: params.data.period 
        });
        
      } catch(error){
        console.log(error);
      }
      
    },
    async kospiIndustryRanking(){
      let _this = this;
      try{
          let postData = {
            hero: _this.hero
          };
          await this.$store.dispatch('callKospiIndustryRanking', postData);
          await this.$store.dispatch('changeKospiIndustryRankingData', postData);
          await this.$store.dispatch('changeKospiIndustryHeroRankingData', 'rank');
      } catch(error) {
          console.log(error);
      }
    },
    onGridReady1(params) {
      this.gridApi1 = params.api;
      this.columnApi1 = params.columnApi;
      this.setHeaderNames1();
    },
    onGridReady2(params) {
      this.gridApi2 = params.api;
      this.columnApi2 = params.columnApi;
      this.setHeaderNames2();
    },
    setHeaderNames1(){
      let columnDefs = this.$store.state.industryRankingColumns;
      columnDefs.forEach(function (colDef, index) {
        if(index == 0){
          colDef.headerName = ' '; 
        } 
      });
      this.gridApi1.setColumnDefs(columnDefs);
    },
    setHeaderNames2(){
      let columnDefs = this.$store.state.industryHeroRankingColumns;
      columnDefs.forEach(function (colDef, index) {
        if(index == 0){
          colDef.headerName = ' '; 
        } 
      });
      this.gridApi2.setColumnDefs(columnDefs);
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

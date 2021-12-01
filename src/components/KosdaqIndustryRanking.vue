<template>
  <v-app>
    <div class="text-center">
    <v-progress-circular
        :size="this.$store.state.spinnerLoading ? 70 : 0"
        :width="10"
        color="purple"
        :indeterminate="this.$store.state.spinnerLoading"
      ></v-progress-circular>
      <v-overlay
        :value="this.$store.state.spinnerLoading"
      ></v-overlay>
    </div>
    <ag-grid-vue 
      style="width: 100%; height: 30%;"
      class="ag-theme-alpine"
      :columnDefs="this.$store.state.industryRankingColumns"
      :rowData="this.$store.state.kosdaqIndustryRankingRowData"
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
      :rowData="this.$store.state.kosdaqIndustryHeroRankingRowData"
      rowSelection="single"
      @grid-ready="onGridReady2"
      :defaultColDef="this.$store.state.defaultColDef"
    >
    </ag-grid-vue>
  </v-app>
</template>
<script>
import { AgGridVue } from "ag-grid-vue";
import { mapMutations, mapActions } from 'vuex';

export default {
  computed: {},
  
  beforeCreate() {},
  created() {
    this.kosdaqIndustryRanking();
  },
  beforeMount() {},
  mounted(){},
  beforeUpdate(){},
  updated(){},

  name: 'QuickInterestStock',
  methods: {
     ...mapMutations([])
    , ...mapActions(['changeKosdaqIndustryRankingData', 'changeKosdaqIndustryHeroRankingData', 'callKosdaqIndustryRanking'])
    , async onCellDoubleClicked1(params){
        let temp = params.value.split('(');
        try {
          await this.$store.dispatch('callEachIndustryStock', { 
            stockIndustry: '('+temp[1]
            , period: params.data.period
            , category: 'kosdaq'
          });
          
        } catch(error){
          console.log(error);
        }
    }
    , async kosdaqIndustryRanking(){
      let _this = this;
      try{
          let postData = {
            hero: _this.hero
          };
          await this.$store.dispatch('callKosdaqIndustryRanking', postData);
          await this.$store.dispatch('changeKosdaqIndustryRankingData', postData);
          await this.$store.dispatch('changeKosdaqIndustryHeroRankingData', 'rank');
      } catch(error) {
          console.log(error);
      }
    }
    , onGridReady1(params) {
      this.gridApi1 = params.api;
      this.columnApi1 = params.columnApi;
      this.setHeaderNames1();
    }
    , onGridReady2(params) {
      this.gridApi2 = params.api;
      this.columnApi2 = params.columnApi;
      this.setHeaderNames2();
    }
    , setHeaderNames1(){
      let columnDefs = this.$store.state.industryRankingColumns;
      columnDefs.forEach(function (colDef, index) {
        if(index == 0){
          colDef.headerName = ' ';
        }
        
      });
      this.gridApi1.setColumnDefs(columnDefs);
    }
    , setHeaderNames2(){
      let columnDefs = this.$store.state.industryHeroRankingColumns;
      columnDefs.forEach(function (colDef, index) {
        if(index == 0){
          colDef.headerName = ' '; 
        } 
      });
      this.gridApi2.setColumnDefs(columnDefs);
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

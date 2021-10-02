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
      :rowData="this.$store.state.kosdaqIndustryRankingRowData"
      rowSelection="single"
      @grid-ready="onGridReady"
      :defaultColDef="this.$store.state.defaultColDef"
    >
    </ag-grid-vue>
    <br/>
    <ag-grid-vue 
      style="width: 100%; height: 30%;"
      class="ag-theme-alpine"
      :columnDefs="this.$store.state.industryHeroRankingColumns"
      :rowData="this.$store.state.kosdaqIndustryHeroRankingRowData"
      rowSelection="single"
      @grid-ready="onGridReady"
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
    , onGridReady(params) {
      this.gridApi = params.api;
      this.columnApi = params.columnApi;
      this.setHeaderNames();
    }
    , setHeaderNames(){
      let columnDefs = this.$store.state.industryRankingColumns;
      columnDefs.forEach(function (colDef, index) {
        if(index == 0){
          colDef.headerName = ' ';
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

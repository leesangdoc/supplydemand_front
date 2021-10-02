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
      @grid-ready="onGridReady"
      :defaultColDef="this.$store.state.defaultColDef"
    >
    </ag-grid-vue>
    <br/>
    <ag-grid-vue
      style="width: 100%; height: 30%;"
      class="ag-theme-alpine"
      :columnDefs="this.$store.state.industryHeroRankingColumns"
      :rowData="this.$store.state.kospiIndustryHeroRankingRowData"
      rowSelection="single"
      @grid-ready="onGridReady"
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
    onGridReady(params) {
      this.gridApi = params.api;
      this.columnApi = params.columnApi;
      this.setHeaderNames();
    },
    setHeaderNames(){
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

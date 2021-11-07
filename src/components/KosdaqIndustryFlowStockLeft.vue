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
    업종명: {{this.$store.state.kosdaqIndustryName}} / 
    종목수: {{this.$store.state.kosdaqIndustryStockLength}} / 
    기간: {{this.$store.state.kosdaqStockIndustryPeriod}}
    <ag-grid-vue 
      style="width: 100%; height: 100%;"
      class="ag-theme-alpine"
      :columnDefs="this.$store.state.kosdaqIndustryFlowStockLeftGridColumns"
      :rowData="this.$store.state.kosdaqIndustryFlowStockLeftRowData"
      rowSelection="single"
      @grid-ready="onGridReady"
      @cell-clicked="getSelectedRows"
      :defaultColDef="this.$store.state.defaultColDef"
    >
    </ag-grid-vue>
  </v-app>
</template>
<script>
import { AgGridVue } from "ag-grid-vue";
import {mapGetters, mapState} from 'vuex';

export default {
  computed: {
    ...mapGetters(['kosdaqIndustryFlowStockLeftRowLength', 'kosdaqIndustryFlowStockLeftGetStkNm']),
    /** 다른 방법
     * ...mapGetters({
     *    lth: 'inOnLftRowLength', // 해당 컴포넌트 내에서, 'inOnLftRowLength'를 lth로 사용하겠다. @row-selected
     *    stockName: 'getStkNm', // 해당 컴포넌트 내에서, 'getStkNm'를 stockName로 사용하겠다.
     * })
     */
    ...mapState(['kosdaqIndustryFlowStockLeftRowData'])
  },
  created() {
     console.log('created');
  },
  beforeMount() {
    console.log('beforeMount');
    this.todate = this.$moment(new Date()).format('YYYY-MM-DD');
    this.fromdate = this.$moment(new Date()).add(-7, 'days').format('YYYY-MM-DD');
    // this.$store.state.inOnLftRowData = [];
    // this.$store.dispatch('emptyRowData', []); // dispatch 액션(비동기 처리를 위해 사용함.)
  },
  mounted(){
   
  },
  name: 'KosdaqIndustryFlowStockLeft',
  methods: {
    onGridReady(params) {
      this.gridApi = params.api;
      this.columnApi = params.columnApi;
      // this.gridApi.sizeColumnsToFit();
    },

    async getSelectedRows() {
      const selectedNodes = this.gridApi.getSelectedNodes();
      const selectedData = selectedNodes.map(node => node.data);
      const csvFileName = selectedData[0].fileTitle;
      const stockName = selectedData[0].stockName;
      try {
        await this.$store.dispatch('callStockRight', { 
          csvFileName
          , stockName
          , fromdate: this.fromdate
          , todate: this.todate
          , category: 'kosdaqIndustry'
        });
        await this.$store.dispatch('callShortSelling', { 
          csvFileName
          , stockName
          , fromdate: this.fromdate
          , todate: this.todate
          , category: 'kosdaqIndustry'
        });
        await this.$store.dispatch('callLoanTransaction', { 
          csvFileName
          , stockName
          , fromdate: this.fromdate
          , todate: this.todate
          , category: 'kosdaqIndustry'
        });
      } catch(error){
        console.log(error);
      }
    },
  },

  components: {
    AgGridVue,
  },

  data: () => ({}),
}
</script>

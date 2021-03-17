<template>
  <v-app>
    <ag-grid-vue 
        style="width: 100%; height: 100%;"
        class="ag-theme-alpine"
        :columnDefs="columnDefs"
        :rowData="this.$store.state.averagePriceRowData"
        rowSelection="single"
        @grid-ready="onGridReady"
        :defaultColDef="this.$store.state.defaultColDef">
    </ag-grid-vue>
  </v-app>
</template>

<script>
import { AgGridVue } from "ag-grid-vue";
import {CommonUtil} from '../CommonUtil';
export default {
  name: 'HelloWorld',
  beforeMount() {
    console.log('beforeMount');
    const commonUtil = new CommonUtil(); 
    this.columnDefs = [
      { headerName: '퍼센트(%)', field: 'percent(%)',},
      { headerName: '개인', field: 'individual', valueFormatter: commonUtil.curruncyFormatter, },
      { headerName: '세력합', field: 'grossSum', valueFormatter: commonUtil.curruncyFormatter, },
      { headerName: '외국인', field: 'foreigner', valueFormatter: commonUtil.curruncyFormatter, },
      { headerName: '금융', field: 'finance', valueFormatter: commonUtil.curruncyFormatter, },
      { headerName: '보험', field: 'insurance', valueFormatter: commonUtil.curruncyFormatter, },
      { headerName: '투신', field: 'investment', valueFormatter: commonUtil.curruncyFormatter, },
      { headerName: '은행', field: 'bank', valueFormatter: commonUtil.curruncyFormatter, },
      { headerName: '기타금융', field: 'etcFinance', valueFormatter: commonUtil.curruncyFormatter, },
      { headerName: '연기금', field: 'pensionFund', valueFormatter: commonUtil.curruncyFormatter, },
      { headerName: '국가(지자체)', field: 'government', valueFormatter: commonUtil.curruncyFormatter, },
      { headerName: '기타법인', field: 'etcCorp', valueFormatter: commonUtil.curruncyFormatter, },
      { headerName: '기타외인', field: 'etcForeigner', valueFormatter: commonUtil.curruncyFormatter, },
      { headerName: '사모펀드', field: 'privateEquity', valueFormatter: commonUtil.curruncyFormatter, },
    ];
  },
  methods: {
    onGridReady(params) {
      this.gridApi = params.api;
      this.columnApi = params.columnApi;
      this.gridApi.sizeColumnsToFit();
    },
  },
  components: {
    AgGridVue,
  },
  data: () => ({
    rowData: []
  }),
}
</script>

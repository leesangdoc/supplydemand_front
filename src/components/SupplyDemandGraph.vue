<template>
  <v-app>
    <ag-grid-vue 
        style="width: 100%; height: 100%;"
        class="ag-theme-alpine"
        :columnDefs="columnDefs"
        :rowData="this.$store.state.resultRowData"
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
      { headerName: '기간', field: 'period', sortable: true, filter: true},
      { headerName: '종가', field: 'closePrice', sortable: true, filter: true},
      { headerName: '개인', field: 'individual', sortable: true, filter: true, valueFormatter: commonUtil.curruncyFormatter, cellStyle: commonUtil.cellStyleFormatter, },
      { headerName: '세력합', field: 'grossSum', sortable: true, filter: true, valueFormatter: commonUtil.curruncyFormatter, cellStyle: commonUtil.cellStyleFormatter, },
      { headerName: '외국인', field: 'foreigner', sortable: true, filter: true, valueFormatter: commonUtil.curruncyFormatter, cellStyle: commonUtil.cellStyleFormatter, },
      { headerName: '금융', field: 'finance', sortable: true, filter: true, valueFormatter: commonUtil.curruncyFormatter, cellStyle: commonUtil.cellStyleFormatter, },
      { headerName: '보험', field: 'insurance', sortable: true, filter: true, valueFormatter: commonUtil.curruncyFormatter, cellStyle: commonUtil.cellStyleFormatter, },
      { headerName: '투신', field: 'investment', sortable: true, filter: true, valueFormatter: commonUtil.curruncyFormatter, cellStyle: commonUtil.cellStyleFormatter, },
      { headerName: '은행', field: 'bank', sortable: true, filter: true, valueFormatter: commonUtil.curruncyFormatter, cellStyle: commonUtil.cellStyleFormatter, },
      { headerName: '기타금융', field: 'etcFinance', sortable: true, filter: true, valueFormatter: commonUtil.curruncyFormatter, cellStyle: commonUtil.cellStyleFormatter, },
      { headerName: '연기금', field: 'pensionFund', sortable: true, filter: true, valueFormatter: commonUtil.curruncyFormatter, cellStyle: commonUtil.cellStyleFormatter, },
      { headerName: '국가(지자체)', field: 'government', sortable: true, filter: true, valueFormatter: commonUtil.curruncyFormatter, cellStyle: commonUtil.cellStyleFormatter, },
      { headerName: '기타법인', field: 'etcCorp', sortable: true, filter: true, valueFormatter: commonUtil.curruncyFormatter, cellStyle: commonUtil.cellStyleFormatter, },
      { headerName: '기타외인', field: 'etcForeigner', sortable: true, filter: true, valueFormatter: commonUtil.curruncyFormatter, cellStyle: commonUtil.cellStyleFormatter, },
      { headerName: '사모펀드', field: 'privateEquity', sortable: true, filter: true, valueFormatter: commonUtil.curruncyFormatter, cellStyle: commonUtil.cellStyleFormatter, },
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

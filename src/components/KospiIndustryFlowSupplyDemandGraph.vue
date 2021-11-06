<template>
  <v-app>
    <ag-grid-vue 
        style="width: 100%; height: 100%;"
        class="ag-theme-alpine"
        :columnDefs="this.$store.state.supplyDemandGraphColumns"
        :rowData="this.$store.state.kospiIndustryFlowStockRightResultRowData"
        rowSelection="single"
        @grid-ready="onGridReady"
        :defaultColDef="this.$store.state.defaultColDef">
    </ag-grid-vue>
  </v-app>
</template>

<script>
import { AgGridVue } from "ag-grid-vue";
export default {
  name: 'HelloWorld',
  beforeMount() {},
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

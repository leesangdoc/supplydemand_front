<template>
  <v-app>
    <ag-grid-vue 
        style="width: 100%; height: 25%;"
        class="ag-theme-alpine"
        :columnDefs="this.$store.state.averagePriceGraphColumns"
        :rowData="this.$store.state.kospiIndustryFlowStockRightAveragePriceRowData"
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
  beforeMount() {
    console.log('beforeMount');
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

}
</script>

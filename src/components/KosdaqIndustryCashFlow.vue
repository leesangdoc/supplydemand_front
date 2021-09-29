<template>
  <v-app>
    <ag-grid-vue 
      style="width: 100%; height: 70%;"
      class="ag-theme-alpine"
      :columnDefs="this.$store.state.industryCashFlowColumns"
      :rowData="this.$store.state.kosdaqIndustryCashFlowRowData"
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
    this.kosdaqIndustryCashFlow();
  },
  beforeMount() {},
  mounted(){},
  beforeUpdate(){},
  updated(){
    // this.kosdaqIndustryCashFlow();
  },

  name: 'QuickInterestStock',
  methods: {
    ...mapMutations([])
    , ...mapActions(['changeKosdaqIndustryCashFlowData'])
    , async kosdaqIndustryCashFlow(){
      let ths = this;
      try{
          let postData = {
            hero: ths.hero
          };
          // console.log("postData;;;", postData);
          await this.$store.dispatch('callKosdaqIndustryCashFlow', postData);
          await this.$store.dispatch('changeKosdaqIndustryCashFlowData', postData);
       } catch(error){
          console.log(error);
       }
    }
    , onGridReady(params) {
      this.gridApi = params.api;
      this.columnApi = params.columnApi;
      this.gridApi.sizeColumnsToFit();
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

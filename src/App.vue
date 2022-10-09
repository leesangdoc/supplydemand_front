<style lang="scss">
  @import "../node_modules/ag-grid-community/dist/styles/ag-grid.css";
  @import "../node_modules/ag-grid-community/dist/styles/ag-theme-alpine.css";
</style>
<template>
<div id="app">
    <router-view/>
  </div>
</template>
<script>

export default {
  setup() {
    // console.log('setup');
  },
  beforeCreate() {     
    //  console.log('beforeCreate');   
  },
  created() {     
    //  console.log('created');   
  },
  beforeMount() {
    //  console.log('beforeMount');
  },
  mounted() {             
    // console.log('mounted!');         
  },
  beforeUpdate() {
    // console.log("beforeUpdate");
  },
  beforeUnmount() {
    //  console.log('beforeUnmount');
   },
  updated() {             
    // console.log('updated!');  
  },
  unmounted() { /* Options API */
    // console.log('unmounted');
  },
  name: 'App',
  methods: {
    showChart:function(responseData){
      this.stockinfo =  {
        resultStockInfo : responseData.resultStockInfo,
        stockName : responseData.stockName,
      };
    }
    , cancel() {
      // console.log("cancel()...");
    },
    handleTabChange(sourceName){
      // console.log('sourceName;;;;;', sourceName);
      this.$store.dispatch('changeKospiIndustryRankingData', sourceName);
      this.$store.dispatch('changeKospiIndustryCashFlowData', sourceName);
      this.$store.dispatch('changeKosdaqIndustryRankingData', sourceName);
      this.$store.dispatch('changeKosdaqIndustryCashFlowData', sourceName);
    },
  },
  components: {
    
  },
  data: () => ({
    currentItem: 'tabWeb'
    , items: [
      
    ]
    , stockinfo: {
      resultStockInfo: [],
    }
    , sourceGroup: []
  }),
};
</script>

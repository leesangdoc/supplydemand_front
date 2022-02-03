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
// import QuickInterestStockLeft from './components/QuickInterestStockLeft';
// import QuickInterestStockRight from './components/QuickInterestStockRight';
// import SearchSupplyDemand from './components/SearchSupplyDemand';
// import SupplyDemandAnalysisGraph from './components/SupplyDemandAnalysisGraph';
// import SupplyDemandGraph from './components/SupplyDemandGraph';
// import AveragePriceGraph from './components/AveragePriceGraph';
// import KospiIndustryRanking from './components/KospiIndustryRanking';
// import KospiIndustryCashFlow from './components/KospiIndustryCashFlow';
// import KosdaqIndustryRanking from './components/KosdaqIndustryRanking';
// import KosdaqIndustryCashFlow from './components/KosdaqIndustryCashFlow';
// import KospiMarketIndexFlow from './components/KospiMarketIndexFlow';
// import KosdaqMarketIndexFlow from './components/KosdaqMarketIndexFlow';
// import KospiMarketIndustryIndexFlow from './components/KospiMarketIndustryIndexFlow';
// import KosdaqMarketIndustryIndexFlow from './components/KosdaqMarketIndustryIndexFlow';
// import KospiIndustryFlowStockLeft from './components/KospiIndustryFlowStockLeft';
// import KospiIndustryFlowStockRight from './components/KospiIndustryFlowStockRight';
// import KospiIndustryFlowAveragePriceGraph from './components/KospiIndustryFlowAveragePriceGraph';
// import KospiIndustryFlowSupplyDemandGraph from './components/KospiIndustryFlowSupplyDemandGraph';
// import KosdaqIndustryFlowStockLeft from './components/KosdaqIndustryFlowStockLeft';
// import KosdaqIndustryFlowStockRight from './components/KosdaqIndustryFlowStockRight';
// import KosdaqIndustryFlowAveragePriceGraph from './components/KosdaqIndustryFlowAveragePriceGraph';
// import KosdaqIndustryFlowSupplyDemandGraph from './components/KosdaqIndustryFlowSupplyDemandGraph';


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
    // QuickInterestStockLeft
    // , QuickInterestStockRight
    // , SearchSupplyDemand
    //  ,SupplyDemandAnalysisGraph
    //  ,SupplyDemandGraph
    //  ,AveragePriceGraph
    // , KospiIndustryRanking
    // , KospiIndustryCashFlow
    // , KosdaqIndustryRanking
    // , KosdaqIndustryCashFlow
    // , KospiMarketIndexFlow
    // , KosdaqMarketIndexFlow
    // , KospiMarketIndustryIndexFlow
    // , KosdaqMarketIndustryIndexFlow
    // , KospiIndustryFlowStockLeft
    // , KospiIndustryFlowStockRight
    // , KospiIndustryFlowAveragePriceGraph
    // , KospiIndustryFlowSupplyDemandGraph
    // , KosdaqIndustryFlowStockLeft
    // , KosdaqIndustryFlowStockRight
    // , KosdaqIndustryFlowAveragePriceGraph
    // , KosdaqIndustryFlowSupplyDemandGraph
  },
  data: () => ({
    currentItem: 'tabWeb'
    , items: [
      '빠른 관심 종목'
      , '업종흐름(코스피)'
      , '업종흐름종목(코스피)'
      , '업종흐름(코스닥)'
      , '업종흐름종목(코스닥)'
      , '업종별_지수흐름(코스피)'
      , '업종별_지수흐름(코스닥)'
      , '지수흐름(코스피)'
      , '지수흐름(코스닥)'
      , '수급분석표'
      , '시장수급'
      , '수급분석표 검색',
    ]
    , stockinfo: {
      resultStockInfo: [],
    }
    , sourceGroup: ["외국인", "세력합", "보험", "연기금", "금융투자"
                    , "개인", "투신", "은행", "기타금융", "사모펀드"
                    , "국가,지자체", "기타법인", "기타외인"]
  }),
};
</script>

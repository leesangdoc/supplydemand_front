<style lang="scss">
  @import "../node_modules/ag-grid-community/dist/styles/ag-grid.css";
  @import "../node_modules/ag-grid-community/dist/styles/ag-theme-alpine.css";
</style>
<template>
  <v-app>
    <v-app-bar app color="primary" dark fade-img-on-scroll scroll-target="#scrolling-techniques-3">
    <v-app-bar-nav-icon></v-app-bar-nav-icon>
    <v-app-bar-title>수급분석</v-app-bar-title>
    <v-spacer></v-spacer>
    <template v-slot:extension> 
        <v-tabs align-with-title dark slider color="yellow" v-model="currentItem">
            <v-tab v-for="item in items" :key="item" :href="'#tab-' + item">{{ item }}</v-tab>
        </v-tabs>
      </template>
      <v-spacer></v-spacer>
    </v-app-bar>
    <v-main>
        <v-tabs-items v-model="currentItem">
        <v-tab-item v-for="(item, index) in items" :key="item" :value="'tab-' + item">
          <v-card flat>
            <v-card-text>

              <div v-if="index === 0">
                  <v-container class="grey lighten-5" fluid>
                    <v-row mb-6 no-gutters dense>
                      <v-col  md="4"> <!--auto-->
                        <v-card class="pa-2" outlined tile>
                        <QuickInterestStockLeft v-on:showchart="showChart"/>
                        </v-card>
                        
                      </v-col>
                      <v-col>
                        <v-card class="pa-2" outlined tile>
                        <QuickInterestStockRight :stla="stockinfo"/>
                        </v-card>
                      </v-col>
                    </v-row>
                    <v-row mb-6 no-gutters dense>
                       <v-col auto>
                         <v-card class="pa-2" outlined tile height="200px">
                           <AveragePriceGraph />
                         </v-card>
                        </v-col>
                    </v-row>
                    <v-row>
                       <v-col>
                         <v-card>
                           <SupplyDemandGraph />
                         </v-card>
                        </v-col>
                    </v-row>
                  </v-container>
              </div>





              <div v-else-if="index === 1">
                <v-container class="grey lighten-5" fluid>
                <v-tabs>
                  <v-tab
                    v-for="source in sourceGroup" 
                    :key="source"
                     @change="handleTabChange(source)"
                    >
                      {{source}}
                  </v-tab>
                  <v-tab-item v-for="source in sourceGroup" :key="source">
                    <v-row mb-20 no-gutters dense>

                        <v-col md="4">
                          <v-card class="pa-2" outlined tile>
                            <KospiIndustryRanking :sources="source"/>
                          </v-card>
                        </v-col>

                        <v-col md="8">
                          <v-card class="pa-2" outlined tile>
                            <KospiIndustryCashFlow :sources="source"/>
                          </v-card>
                        </v-col>
                </v-row>
                 </v-tab-item>
                </v-tabs>
                </v-container>
              </div>







              <div v-else-if="index === 2">
              <v-container class="grey lighten-5" fluid>
                <v-tabs>
                  <v-tab
                    v-for="source in sourceGroup" 
                    :key="source"
                     @change="handleTabChange(source)"
                    >
                      {{source}}
                  </v-tab>
                  <v-tab-item v-for="source in sourceGroup" :key="source">
                    <v-row mb-20 no-gutters dense>

                        <v-col md="4">
                          <v-card class="pa-2" outlined tile>
                            <KosdaqIndustryRanking :sources="source"/>
                          </v-card>
                        </v-col>

                        <v-col md="8">
                          <v-card class="pa-2" outlined tile>
                            <KosdaqIndustryCashFlow :sources="source"/>
                          </v-card>
                        </v-col>
                </v-row>
                 </v-tab-item>
                </v-tabs>
                </v-container>
              
              
              
              </div>
              <div v-else-if="index === 3"> <SearchSupplyDemand/></div>
              <div v-else-if="index === 4"> <MarketSupplyDemand/></div>
              <div v-else-if="index === 5"> <SearchSupplyDemand/></div>
            </v-card-text>
          </v-card>
        </v-tab-item>
      </v-tabs-items>
    </v-main>
    <v-footer app color="primary" dark>
      Authored by sdlee. All rights reserved. Deep Learning Stock under Big data
    </v-footer>
  </v-app>
</template>
<script>
import QuickInterestStockLeft from './components/QuickInterestStockLeft';
import QuickInterestStockRight from './components/QuickInterestStockRight';
import SearchSupplyDemand from './components/SearchSupplyDemand';
import MarketSupplyDemand from './components/MarketSupplyDemand';
import SupplyDemandGraph from './components/SupplyDemandGraph';
import AveragePriceGraph from './components/AveragePriceGraph';
import KospiIndustryRanking from './components/KospiIndustryRanking';
import KospiIndustryCashFlow from './components/KospiIndustryCashFlow';
import KosdaqIndustryRanking from './components/KosdaqIndustryRanking';
import KosdaqIndustryCashFlow from './components/KosdaqIndustryCashFlow';

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
    },
    cancel() {
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
    QuickInterestStockLeft
    , QuickInterestStockRight
    , SearchSupplyDemand
     ,MarketSupplyDemand
     ,SupplyDemandGraph
     ,AveragePriceGraph
    , KospiIndustryRanking
    , KospiIndustryCashFlow
    , KosdaqIndustryRanking
    , KosdaqIndustryCashFlow

  },
  data: () => ({
    currentItem: 'tab-Web'
    , items: [
      '빠른 관심 종목'
      , '업종흐름(코스피)'
      , '업종흐름(코스닥)'
      , '수급분석표'
      ,'시장수급'
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

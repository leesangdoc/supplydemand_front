<style lang="scss">
  @import "../node_modules/ag-grid-community/dist/styles/ag-grid.css";
  @import "../node_modules/ag-grid-community/dist/styles/ag-theme-alpine.css";
</style>
<template>
  
  <v-app>
      <template>
        <v-app-bar app color="primary" dark fade-img-on-scroll scroll-target="#scrolling-techniques-3">
        <v-app-bar-nav-icon></v-app-bar-nav-icon>

        <v-app-bar-title>수급분석</v-app-bar-title>
        <v-btn @click="logout" right style="marginLeft: 90%;">로그아웃</v-btn>

        <v-spacer></v-spacer>
        <template v-slot:extension>
          <v-tabs align-with-title dark slider color="yellow" v-model="currentItem">
              <v-tab v-for="(item, index) in items" :key="item" :href="'#tab-' + index">{{ item }}</v-tab>
          </v-tabs>
        </template>
      <v-spacer></v-spacer>
    </v-app-bar>
    <v-main>
     
        <v-tabs-items v-model="currentItem">
        <v-tab-item v-for="(item, index) in items" :key="item" :value="'tab-' + index">
          <v-card flat>
            <v-card-text>
              <div v-if="index === 0">
                  <v-container class="grey lighten-5" fluid>
                    <v-row mb-6 no-gutters dense>
                      <v-col md="4"> <!-- auto md="4" -->
                        <v-card class="pa-2" outlined tile>
                        <QuickInterestStockLeft v-on:showchart="showChart"/>
                        </v-card>  
                      </v-col>
                      <v-col md="8">
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
              <div v-if="index === 2">
                  <v-container class="grey lighten-5" fluid>
                    <v-row mb-6 no-gutters dense>
                      <v-col md="4"> <!-- auto md="4" -->
                        <v-card class="pa-2" outlined tile>
                        <KospiIndustryFlowStockLeft v-on:showchart="showChart"/>
                        </v-card>  
                      </v-col>
                      <v-col>
                        <v-card class="pa-2" outlined tile>
                        <KospiIndustryFlowStockRight :stla="stockinfo"/>
                        </v-card>
                      </v-col>
                    </v-row>
                    <v-row mb-6 no-gutters dense>
                       <v-col auto>
                         <v-card class="pa-2" outlined tile height="200px">
                           <KospiIndustryFlowAveragePriceGraph />
                         </v-card>
                        </v-col>
                    </v-row>
                    <v-row>
                       <v-col>
                         <v-card>
                           <KospiIndustryFlowSupplyDemandGraph />
                         </v-card>
                        </v-col>
                    </v-row>
                  </v-container>
              </div>
              <div v-else-if="index === 3">
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
              <div v-if="index === 4">
                  <v-container class="grey lighten-5" fluid>
                    <v-row mb-6 no-gutters dense>
                      <v-col md="4"> <!-- auto md="4" -->
                        <v-card class="pa-2" outlined tile>
                        <KosdaqIndustryFlowStockLeft v-on:showchart="showChart"/>
                        </v-card>  
                      </v-col>
                      <v-col>
                        <v-card class="pa-2" outlined tile>
                        <KosdaqIndustryFlowStockRight :stla="stockinfo"/>
                        </v-card>
                      </v-col>
                    </v-row>
                    <v-row mb-6 no-gutters dense>
                       <v-col auto>
                         <v-card class="pa-2" outlined tile height="200px">
                           <KosdaqIndustryFlowAveragePriceGraph />
                         </v-card>
                        </v-col>
                    </v-row>
                    <v-row>
                       <v-col>
                         <v-card>
                           <KosdaqIndustryFlowSupplyDemandGraph />
                         </v-card>
                        </v-col>
                    </v-row>
                  </v-container>
              </div>
              <div v-else-if="index === 5"> 
                <KospiMarketIndustryIndexFlow/>
              </div>
              <div v-else-if="index === 6"> 
                <KosdaqMarketIndustryIndexFlow/>
              </div>
              <div v-else-if="index === 7"> 
                <KospiMarketIndexFlow/>
              </div>
              <div v-else-if="index === 8"> 
                <KosdaqMarketIndexFlow/>
              </div>
              <div v-else-if="index === 9"> 
                <SupplyDemandAnalysisGraph/>
              </div>
              <div v-else-if="index === 10"> 
                <v-container class="grey lighten-5" fluid>
                  <v-tabs>
                    <v-tab
                        v-for="global in globalArray" 
                        :key="global"
                        @change="handleTabChangeMacro(global)"
                    >
                      {{global}}
                    </v-tab>
                    <v-tab-item v-for="global in globalArray" :key="global">
                      <v-row>
                       <v-col>
                         <v-card>
                          <MacroEconomyAnalysis :globalCode = "global"/>
                         </v-card>
                        </v-col>
                      </v-row>
                    </v-tab-item>
                    
                  </v-tabs>
                </v-container>
              </div>
              <div v-else-if="index === 11">
                <v-container class="grey lighten-5" fluid>
                  <v-tabs>
                    <v-tab
                        v-for="global in industrySectorArray" 
                        :key="global"
                        @change="handleTabChangeMacro(global)"
                    >
                      {{global}}
                    </v-tab>
                    <v-tab-item v-for="industryType in industrySectorArray" :key="industryType">
                      <v-row>
                       <v-col>
                         <v-card>
                          <IndustrySectorInfo :industryCode = "industryType"/>
                         </v-card>
                        </v-col>
                      </v-row>
                    </v-tab-item>
                    
                  </v-tabs>
                </v-container>
              </div>

              <div v-else-if="index === 12">
                <v-container class="grey lighten-5" fluid>
                  <TradingPrinciple />
                </v-container>
              </div>
            </v-card-text>
          </v-card>
        </v-tab-item>
      </v-tabs-items>
    </v-main>
    <v-footer app color="primary" dark>
      Authored by sdlee. All rights reserved. Deep Learning Stock under Big data
    </v-footer>
     </template>
  </v-app>
</template>
<script>
import QuickInterestStockLeft from './components/QuickInterestStockLeft';
import QuickInterestStockRight from './components/QuickInterestStockRight';
import SupplyDemandAnalysisGraph from './components/SupplyDemandAnalysisGraph';
import SupplyDemandGraph from './components/SupplyDemandGraph';
import AveragePriceGraph from './components/AveragePriceGraph';
import KospiIndustryRanking from './components/KospiIndustryRanking';
import KospiIndustryCashFlow from './components/KospiIndustryCashFlow';
import KosdaqIndustryRanking from './components/KosdaqIndustryRanking';
import KosdaqIndustryCashFlow from './components/KosdaqIndustryCashFlow';
import KospiMarketIndexFlow from './components/KospiMarketIndexFlow';
import KosdaqMarketIndexFlow from './components/KosdaqMarketIndexFlow';
import KospiMarketIndustryIndexFlow from './components/KospiMarketIndustryIndexFlow';
import KosdaqMarketIndustryIndexFlow from './components/KosdaqMarketIndustryIndexFlow';
import KospiIndustryFlowStockLeft from './components/KospiIndustryFlowStockLeft';
import KospiIndustryFlowStockRight from './components/KospiIndustryFlowStockRight';
import KospiIndustryFlowAveragePriceGraph from './components/KospiIndustryFlowAveragePriceGraph';
import KospiIndustryFlowSupplyDemandGraph from './components/KospiIndustryFlowSupplyDemandGraph';
import KosdaqIndustryFlowStockLeft from './components/KosdaqIndustryFlowStockLeft';
import KosdaqIndustryFlowStockRight from './components/KosdaqIndustryFlowStockRight';
import KosdaqIndustryFlowAveragePriceGraph from './components/KosdaqIndustryFlowAveragePriceGraph';
import KosdaqIndustryFlowSupplyDemandGraph from './components/KosdaqIndustryFlowSupplyDemandGraph';
import MacroEconomyAnalysis from './components/MacroEconomyAnalysis';
import IndustrySectorInfo from './components/IndustrySectorInfo';
import TradingPrinciple from './components/TradingPrinciple';



export default {
  setup() {
    // console.log('setup');
  },
  beforeCreate() {     
    //  console.log('beforeCreate');   
  },
  created() {     
    //  console.log('created');
    if (localStorage.getItem('jwt') != null && localStorage.getItem('jwt') != undefined){
      console.log('login succeed!');
    }  else {
      this.$router.push({name : 'Login'});
    }
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
    , async logout(){
      await this.$store.commit('setIsLogin', {val: false});
      await localStorage.setItem('jwt', '');
      if(this.$store.state.isLogin == false && localStorage.getItem('jwt') == ''){
        this.$router.push({name : 'Login'});  
      }      
    }
    , cancel() {
      // console.log("cancel()...");
    }
    , handleTabChange(sourceName){
      this.$store.dispatch('changeKospiIndustryRankingData', sourceName);
      this.$store.dispatch('changeKospiIndustryCashFlowData', sourceName);
      this.$store.dispatch('changeKosdaqIndustryRankingData', sourceName);
      this.$store.dispatch('changeKosdaqIndustryCashFlowData', sourceName);
    }
    , async handleTabChangeMacro(sourceName){
      console.log('Macro_sourceName;;;', sourceName);
    }
  },
  components: {
    QuickInterestStockLeft
    , QuickInterestStockRight
    , SupplyDemandAnalysisGraph
    , SupplyDemandGraph
    , AveragePriceGraph
    , KospiIndustryRanking
    , KospiIndustryCashFlow
    , KosdaqIndustryRanking
    , KosdaqIndustryCashFlow
    , KospiMarketIndexFlow
    , KosdaqMarketIndexFlow
    , KospiMarketIndustryIndexFlow
    , KosdaqMarketIndustryIndexFlow
    , KospiIndustryFlowStockLeft
    , KospiIndustryFlowStockRight
    , KospiIndustryFlowAveragePriceGraph
    , KospiIndustryFlowSupplyDemandGraph
    , KosdaqIndustryFlowStockLeft
    , KosdaqIndustryFlowStockRight
    , KosdaqIndustryFlowAveragePriceGraph
    , KosdaqIndustryFlowSupplyDemandGraph
    , MacroEconomyAnalysis
    , IndustrySectorInfo
    , TradingPrinciple
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
      , '거시경제분석'
      , '산업별분석'
      , '매매전략'
      // , '시장수급'
    ]
    , stockinfo: {
      resultStockInfo: [],
    }
    , sourceGroup: ["외국인", "세력합", "보험", "연기금", "금융투자"
                    , "개인", "투신", "은행", "기타금융", "사모펀드"
                    , "국가,지자체", "기타법인", "기타외인"]
    , globalArray: ["KR", "US", "CH", "EU", "ReferenceSite"]
    , industrySectorArray: ["businessCycle", "semiconductor", "steel", "petro"]
  }),
};
</script>

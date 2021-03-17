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
                      <v-col auto>
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
                    <v-row>
                       <v-col>
                         <v-card>
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

              <div v-else-if="index === 1"> <MarketSupplyDemand/></div>
              <div v-else-if="index === 2"> <SearchSupplyDemand/></div>
            </v-card-text>
          </v-card>
        </v-tab-item>
      </v-tabs-items>
    </v-main>
    <v-footer app color="primary" dark>
      Copyright BPInvesting Corp. All rights reserved. Deep Learning Stock under Big data
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

export default {
  setup() {
    console.log('setup');
  },
  beforeCreate() {     
     console.log('beforeCreate');   
  },
  created() {     
     console.log('created');   
  },
  beforeMount() {
     console.log('beforeMount');
  },
  mounted() {             
    console.log('mounted!');         
  },
  beforeUpdate() {
    console.log("beforeUpdate");
  },
  beforeUnmount() {
     console.log('beforeUnmount');
   },
  updated() {             
    console.log('updated!');  
  },
  unmounted() { /* Options API */
    console.log('unmounted');
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
      console.log("cancel()...");
    },
  },
  components: {
    QuickInterestStockLeft,
    QuickInterestStockRight,
    SearchSupplyDemand,
    MarketSupplyDemand,
    SupplyDemandGraph,
    AveragePriceGraph,

  },
  data: () => ({
    currentItem: 'tab-Web',
    items: [
      '빠른 관심 종목', '수급분석표','시장수급', '수급분석표 검색',
    ],
    stockinfo: {
      resultStockInfo: [],
    },
  }),
};
</script>

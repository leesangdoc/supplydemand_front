<template>
  <v-app>
    <div class="text-center">
    <v-progress-circular
        :size="this.$store.state.spinnerLoading ? 70 : 0"
        :width="10"
        color="purple"
        :indeterminate="this.$store.state.spinnerLoading"
      ></v-progress-circular>
    </div>



    <div>
      <v-container class="grey lighten-5" fluid>
        <v-row mb-20 no-gutters dense>
          <v-col md="4">
            <highcharts 
              :options="this.$store.state.kosdaqMarketBigCompanyIndexChart"
              :constructor-type="'stockChart'"
              :callback="someFunction"
              :highcharts="this.$store.state.kosdaqMarketIndexHcInstance">
              {{this.$store.state.stla}}
            </highcharts>
          </v-col>
          <v-col md="4">
            <highcharts 
              :options="this.$store.state.kosdaqMarketMiddleCompanyIndexChart"
              :constructor-type="'stockChart'"
              :callback="someFunction"
              :highcharts="this.$store.state.kosdaqMarketIndexHcInstance">
              {{this.$store.state.stla}}
            </highcharts>
          </v-col>
          <v-col md="4">
            <highcharts 
              :options="this.$store.state.kosdaqMarketSmallCompanyIndexChart"
              :constructor-type="'stockChart'"
              :callback="someFunction"
              :highcharts="this.$store.state.kosdaqMarketIndexHcInstance">
              {{this.$store.state.stla}}
            </highcharts>
          </v-col>
        </v-row>



        <v-row mb-20 no-gutters dense>
          <v-col md="4">
            <highcharts 
              :options="this.$store.state.kosdaqMarketBeverageFoodIndexChart"
              :constructor-type="'stockChart'"
              :callback="someFunction"
              :highcharts="this.$store.state.kosdaqMarketIndexHcInstance">
              {{this.$store.state.stla}}
            </highcharts>
          </v-col>
          <v-col md="4">
            <highcharts 
              :options="this.$store.state.kosdaqMarketFiberClothIndexChart"
              :constructor-type="'stockChart'"
              :callback="someFunction"
              :highcharts="this.$store.state.kosdaqMarketIndexHcInstance">
              {{this.$store.state.stla}}
            </highcharts>
          </v-col>
          <v-col md="4">
            <highcharts 
              :options="this.$store.state.kosdaqMarketPaperWoodIndexChart"
              :constructor-type="'stockChart'"
              :callback="someFunction"
              :highcharts="this.$store.state.kosdaqMarketIndexHcInstance">
              {{this.$store.state.stla}}
            </highcharts>
          </v-col>
        </v-row>



        <v-row mb-20 no-gutters dense>
          <v-col md="4">
            <highcharts 
              :options="this.$store.state.kosdaqMarketChemicalIndexChart"
              :constructor-type="'stockChart'"
              :callback="someFunction"
              :highcharts="this.$store.state.kosdaqMarketIndexHcInstance">
              {{this.$store.state.stla}}
            </highcharts>
          </v-col>
          <v-col md="4">
            <highcharts 
              :options="this.$store.state.kosdaqMarketMedicineIndexChart"
              :constructor-type="'stockChart'"
              :callback="someFunction"
              :highcharts="this.$store.state.kosdaqMarketIndexHcInstance">
              {{this.$store.state.stla}}
            </highcharts>
          </v-col>
          <v-col md="4">
            <highcharts 
              :options="this.$store.state.kosdaqMarketNonmetallicMineralIndexChart"
              :constructor-type="'stockChart'"
              :callback="someFunction"
              :highcharts="this.$store.state.kosdaqMarketIndexHcInstance">
              {{this.$store.state.stla}}
            </highcharts>
          </v-col>
        </v-row>
        <v-row mb-20 no-gutters dense>
          <v-col md="4">
            <highcharts 
              :options="this.$store.state.kosdaqMarketSteelMetallicMineralIndexChart"
              :constructor-type="'stockChart'"
              :callback="someFunction"
              :highcharts="this.$store.state.kosdaqMarketIndexHcInstance">
              {{this.$store.state.stla}}
            </highcharts>
          </v-col>
          <v-col md="4">
            <highcharts 
              :options="this.$store.state.kosdaqMarketMerchineIndexChart"
              :constructor-type="'stockChart'"
              :callback="someFunction"
              :highcharts="this.$store.state.kosdaqMarketIndexHcInstance">
              {{this.$store.state.stla}}
            </highcharts>
          </v-col>
          <v-col md="4">
            <highcharts 
              :options="this.$store.state.kosdaqMarketElectricalElectronicsIndexChart"
              :constructor-type="'stockChart'"
              :callback="someFunction"
              :highcharts="this.$store.state.kosdaqMarketIndexHcInstance">
              {{this.$store.state.stla}}
            </highcharts>
          </v-col>
        </v-row>
        <v-row mb-20 no-gutters dense>
          <v-col md="4">
            <highcharts 
              :options="this.$store.state.kosdaqMarketMedicalPrecisionIndexChart"
              :constructor-type="'stockChart'"
              :callback="someFunction"
              :highcharts="this.$store.state.kosdaqMarketIndexHcInstance">
              {{this.$store.state.stla}}
            </highcharts>
          </v-col>
          <v-col md="4">
            <highcharts 
              :options="this.$store.state.kosdaqMarketTransportationEquipmentIndexChart"
              :constructor-type="'stockChart'"
              :callback="someFunction"
              :highcharts="this.$store.state.kosdaqMarketIndexHcInstance">
              {{this.$store.state.stla}}
            </highcharts>
          </v-col>
          <v-col md="4">
            <highcharts 
              :options="this.$store.state.kosdaqMarketDistributionIndustryIndexChart"
              :constructor-type="'stockChart'"
              :callback="someFunction"
              :highcharts="this.$store.state.kosdaqMarketIndexHcInstance">
              {{this.$store.state.stla}}
            </highcharts>
          </v-col>
        </v-row>
        <v-row mb-20 no-gutters dense>
          <v-col md="4">
            <highcharts 
              :options="this.$store.state.kosdaqMarketElectricGasIndexChart"
              :constructor-type="'stockChart'"
              :callback="someFunction"
              :highcharts="this.$store.state.kosdaqMarketIndexHcInstance">
              {{this.$store.state.stla}}
            </highcharts>
          </v-col>
          <v-col md="4">
            <highcharts 
              :options="this.$store.state.kosdaqMarketConstructionIndexChart"
              :constructor-type="'stockChart'"
              :callback="someFunction"
              :highcharts="this.$store.state.kosdaqMarketIndexHcInstance">
              {{this.$store.state.stla}}
            </highcharts>
          </v-col>
          <v-col md="4">
            <highcharts 
              :options="this.$store.state.kosdaqMarketTransportWarehouseIndexChart"
              :constructor-type="'stockChart'"
              :callback="someFunction"
              :highcharts="this.$store.state.kosdaqMarketIndexHcInstance">
              {{this.$store.state.stla}}
            </highcharts>
          </v-col>
        </v-row>
        <v-row mb-20 no-gutters dense>
          <v-col md="4">
            <highcharts 
              :options="this.$store.state.kosdaqMarketNetworkingBusinessIndexChart"
              :constructor-type="'stockChart'"
              :callback="someFunction"
              :highcharts="this.$store.state.kosdaqMarketIndexHcInstance">
              {{this.$store.state.stla}}
            </highcharts>
          </v-col>
          <v-col md="4">
            <highcharts 
              :options="this.$store.state.kosdaqMarketFinanceIndexChart"
              :constructor-type="'stockChart'"
              :callback="someFunction"
              :highcharts="this.$store.state.kosdaqMarketIndexHcInstance">
              {{this.$store.state.stla}}
            </highcharts>
          </v-col>
          <v-col md="4">
            <highcharts 
              :options="this.$store.state.kosdaqMarketBankIndexChart"
              :constructor-type="'stockChart'"
              :callback="someFunction"
              :highcharts="this.$store.state.kosdaqMarketIndexHcInstance">
              {{this.$store.state.stla}}
            </highcharts>
          </v-col>
        </v-row>
        <v-row mb-20 no-gutters dense>
          <v-col md="4">
            <highcharts 
              :options="this.$store.state.kosdaqMarketStockSecurityIndexChart"
              :constructor-type="'stockChart'"
              :callback="someFunction"
              :highcharts="this.$store.state.kosdaqMarketIndexHcInstance">
              {{this.$store.state.stla}}
            </highcharts>
          </v-col>
          <v-col md="4">
            <highcharts 
              :options="this.$store.state.kosdaqMarketInsuranceIndexChart"
              :constructor-type="'stockChart'"
              :callback="someFunction"
              :highcharts="this.$store.state.kosdaqMarketIndexHcInstance">
              {{this.$store.state.stla}}
            </highcharts>
          </v-col>
          <v-col md="4">
            <highcharts 
              :options="this.$store.state.kosdaqMarketServiceIndexChart"
              :constructor-type="'stockChart'"
              :callback="someFunction"
              :highcharts="this.$store.state.kosdaqMarketIndexHcInstance">
              {{this.$store.state.stla}}
            </highcharts>
          </v-col>
        </v-row>
        <v-row mb-20 no-gutters dense>
          <v-col md="4">
            <highcharts 
              :options="this.$store.state.kosdaqMarketManufacturingIndexChart"
              :constructor-type="'stockChart'"
              :callback="someFunction"
              :highcharts="this.$store.state.kosdaqMarketIndexHcInstance">
              {{this.$store.state.stla}}
            </highcharts>
          </v-col>
          <v-col md="4">
            <highcharts 
              :options="this.$store.state.kosdaqMarketKosdaq200IndexChart"
              :constructor-type="'stockChart'"
              :callback="someFunction"
              :highcharts="this.$store.state.kosdaqMarketIndexHcInstance">
              {{this.$store.state.stla}}
            </highcharts>
          </v-col>
          <v-col md="4">
            
          </v-col>
        </v-row>
      </v-container>
    </div>
    




  </v-app>
</template>

<script>
import {Chart} from 'highcharts-vue'

export default {
  name: 'KosdaqMarketIndexFlow',
  components: {
    highcharts: Chart,
  },
  created() {
    this.callKosdaqMarketIndustryIndexFlow();
  },
  
  methods: {
     async callKosdaqMarketIndustryIndexFlow() {
       try{
          let postData = {};
          await this.$store.dispatch('callKosdaqMarketIndustryIndexCandleChartData', postData);
       } catch(error){
          console.log(error);
       } finally{
         console.log('FINALLY');
       }

     },
    // 차트 로드된 다음에 뿌림.
    someFunction(){
      console.log("someFunction()...");
    }
  },
  data: () => ({
    
  }),
}
</script>

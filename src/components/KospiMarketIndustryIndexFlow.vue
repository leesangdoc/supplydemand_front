<template>
  <v-app>
    <div class="text-center" id="progressCircular" v-bind:style="{top: bgHeight, left: bgWidth, zIndex: bgZindex, position: bgPosition}">
      <v-progress-circular
        :size="this.$store.state.spinnerLoading ? 70 : 0"
        :width="10"
        color="purple"
        :indeterminate="this.$store.state.spinnerLoading"
      ></v-progress-circular>
    </div>
    <v-overlay :value="this.$store.state.spinnerLoading"></v-overlay>
    <div>
      <v-container class="grey lighten-5" fluid>
        <v-row mb-20 no-gutters dense>
          <v-col md="4">
            <highcharts 
              :options="this.$store.state.kospiMarketBigCompanyIndexChart"
              :constructor-type="'stockChart'"
              :callback="someFunction"
              :highcharts="this.$store.state.kospiMarketIndexHcInstance">
              {{this.$store.state.stla}}
            </highcharts>
          </v-col>
          <v-col md="4">
            <highcharts 
              :options="this.$store.state.kospiMarketMiddleCompanyIndexChart"
              :constructor-type="'stockChart'"
              :callback="someFunction"
              :highcharts="this.$store.state.kospiMarketIndexHcInstance">
              {{this.$store.state.stla}}
            </highcharts>
          </v-col>
          <v-col md="4">
            <highcharts 
              :options="this.$store.state.kospiMarketSmallCompanyIndexChart"
              :constructor-type="'stockChart'"
              :callback="someFunction"
              :highcharts="this.$store.state.kospiMarketIndexHcInstance">
              {{this.$store.state.stla}}
            </highcharts>
          </v-col>
        </v-row>



        <v-row mb-20 no-gutters dense>
          <v-col md="4">
            <highcharts 
              :options="this.$store.state.kospiMarketBeverageFoodIndexChart"
              :constructor-type="'stockChart'"
              :callback="someFunction"
              :highcharts="this.$store.state.kospiMarketIndexHcInstance">
              {{this.$store.state.stla}}
            </highcharts>
          </v-col>
          <v-col md="4">
            <highcharts 
              :options="this.$store.state.kospiMarketFiberClothIndexChart"
              :constructor-type="'stockChart'"
              :callback="someFunction"
              :highcharts="this.$store.state.kospiMarketIndexHcInstance">
              {{this.$store.state.stla}}
            </highcharts>
          </v-col>
          <v-col md="4">
            <highcharts 
              :options="this.$store.state.kospiMarketPaperWoodIndexChart"
              :constructor-type="'stockChart'"
              :callback="someFunction"
              :highcharts="this.$store.state.kospiMarketIndexHcInstance">
              {{this.$store.state.stla}}
            </highcharts>
          </v-col>
        </v-row>



        <v-row mb-20 no-gutters dense>
          <v-col md="4">
            <highcharts 
              :options="this.$store.state.kospiMarketChemicalIndexChart"
              :constructor-type="'stockChart'"
              :callback="someFunction"
              :highcharts="this.$store.state.kospiMarketIndexHcInstance">
              {{this.$store.state.stla}}
            </highcharts>
          </v-col>
          <v-col md="4">
            <highcharts 
              :options="this.$store.state.kospiMarketMedicineIndexChart"
              :constructor-type="'stockChart'"
              :callback="someFunction"
              :highcharts="this.$store.state.kospiMarketIndexHcInstance">
              {{this.$store.state.stla}}
            </highcharts>
          </v-col>
          <v-col md="4">
            <highcharts 
              :options="this.$store.state.kospiMarketNonmetallicMineralIndexChart"
              :constructor-type="'stockChart'"
              :callback="someFunction"
              :highcharts="this.$store.state.kospiMarketIndexHcInstance">
              {{this.$store.state.stla}}
            </highcharts>
          </v-col>
        </v-row>
        <v-row mb-20 no-gutters dense>
          <v-col md="4">
            <highcharts 
              :options="this.$store.state.kospiMarketSteelMetallicMineralIndexChart"
              :constructor-type="'stockChart'"
              :callback="someFunction"
              :highcharts="this.$store.state.kospiMarketIndexHcInstance">
              {{this.$store.state.stla}}
            </highcharts>
          </v-col>
          <v-col md="4">
            <highcharts 
              :options="this.$store.state.kospiMarketMerchineIndexChart"
              :constructor-type="'stockChart'"
              :callback="someFunction"
              :highcharts="this.$store.state.kospiMarketIndexHcInstance">
              {{this.$store.state.stla}}
            </highcharts>
          </v-col>
          <v-col md="4">
            <highcharts 
              :options="this.$store.state.kospiMarketElectricalElectronicsIndexChart"
              :constructor-type="'stockChart'"
              :callback="someFunction"
              :highcharts="this.$store.state.kospiMarketIndexHcInstance">
              {{this.$store.state.stla}}
            </highcharts>
          </v-col>
        </v-row>
        <v-row mb-20 no-gutters dense>
          <v-col md="4">
            <highcharts 
              :options="this.$store.state.kospiMarketMedicalPrecisionIndexChart"
              :constructor-type="'stockChart'"
              :callback="someFunction"
              :highcharts="this.$store.state.kospiMarketIndexHcInstance">
              {{this.$store.state.stla}}
            </highcharts>
          </v-col>
          <v-col md="4">
            <highcharts 
              :options="this.$store.state.kospiMarketTransportationEquipmentIndexChart"
              :constructor-type="'stockChart'"
              :callback="someFunction"
              :highcharts="this.$store.state.kospiMarketIndexHcInstance">
              {{this.$store.state.stla}}
            </highcharts>
          </v-col>
          <v-col md="4">
            <highcharts 
              :options="this.$store.state.kospiMarketDistributionIndustryIndexChart"
              :constructor-type="'stockChart'"
              :callback="someFunction"
              :highcharts="this.$store.state.kospiMarketIndexHcInstance">
              {{this.$store.state.stla}}
            </highcharts>
          </v-col>
        </v-row>
        <v-row mb-20 no-gutters dense>
          <v-col md="4">
            <highcharts 
              :options="this.$store.state.kospiMarketElectricGasIndexChart"
              :constructor-type="'stockChart'"
              :callback="someFunction"
              :highcharts="this.$store.state.kospiMarketIndexHcInstance">
              {{this.$store.state.stla}}
            </highcharts>
          </v-col>
          <v-col md="4">
            <highcharts 
              :options="this.$store.state.kospiMarketConstructionIndexChart"
              :constructor-type="'stockChart'"
              :callback="someFunction"
              :highcharts="this.$store.state.kospiMarketIndexHcInstance">
              {{this.$store.state.stla}}
            </highcharts>
          </v-col>
          <v-col md="4">
            <highcharts 
              :options="this.$store.state.kospiMarketTransportWarehouseIndexChart"
              :constructor-type="'stockChart'"
              :callback="someFunction"
              :highcharts="this.$store.state.kospiMarketIndexHcInstance">
              {{this.$store.state.stla}}
            </highcharts>
          </v-col>
        </v-row>
        <v-row mb-20 no-gutters dense>
          <v-col md="4">
            <highcharts 
              :options="this.$store.state.kospiMarketNetworkingBusinessIndexChart"
              :constructor-type="'stockChart'"
              :callback="someFunction"
              :highcharts="this.$store.state.kospiMarketIndexHcInstance">
              {{this.$store.state.stla}}
            </highcharts>
          </v-col>
          <v-col md="4">
            <highcharts 
              :options="this.$store.state.kospiMarketFinanceIndexChart"
              :constructor-type="'stockChart'"
              :callback="someFunction"
              :highcharts="this.$store.state.kospiMarketIndexHcInstance">
              {{this.$store.state.stla}}
            </highcharts>
          </v-col>
          <v-col md="4">
            <highcharts 
              :options="this.$store.state.kospiMarketBankIndexChart"
              :constructor-type="'stockChart'"
              :callback="someFunction"
              :highcharts="this.$store.state.kospiMarketIndexHcInstance">
              {{this.$store.state.stla}}
            </highcharts>
          </v-col>
        </v-row>
        <v-row mb-20 no-gutters dense>
          <v-col md="4">
            <highcharts 
              :options="this.$store.state.kospiMarketStockSecurityIndexChart"
              :constructor-type="'stockChart'"
              :callback="someFunction"
              :highcharts="this.$store.state.kospiMarketIndexHcInstance">
              {{this.$store.state.stla}}
            </highcharts>
          </v-col>
          <v-col md="4">
            <highcharts 
              :options="this.$store.state.kospiMarketInsuranceIndexChart"
              :constructor-type="'stockChart'"
              :callback="someFunction"
              :highcharts="this.$store.state.kospiMarketIndexHcInstance">
              {{this.$store.state.stla}}
            </highcharts>
          </v-col>
          <v-col md="4">
            <highcharts 
              :options="this.$store.state.kospiMarketServiceIndexChart"
              :constructor-type="'stockChart'"
              :callback="someFunction"
              :highcharts="this.$store.state.kospiMarketIndexHcInstance">
              {{this.$store.state.stla}}
            </highcharts>
          </v-col>
        </v-row>
        <v-row mb-20 no-gutters dense>
          <v-col md="4">
            <highcharts 
              :options="this.$store.state.kospiMarketManufacturingIndexChart"
              :constructor-type="'stockChart'"
              :callback="someFunction"
              :highcharts="this.$store.state.kospiMarketIndexHcInstance">
              {{this.$store.state.stla}}
            </highcharts>
          </v-col>
          <v-col md="4">
            <highcharts 
              :options="this.$store.state.kospiMarketKospi200IndexChart"
              :constructor-type="'stockChart'"
              :callback="someFunction"
              :highcharts="this.$store.state.kospiMarketIndexHcInstance">
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
import {Chart} from 'highcharts-vue';

export default {
  name: 'KospiMarketIndexFlow',
  components: {
    highcharts: Chart,
  },
  created() {
    this.callKospiMarketIndustryIndexFlow();
  },
  mounted(){
    window.addEventListener('resize', this.handleResize);
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.handleResize);
  },
  methods: {
    handleResize(event) {
      this.bgWidth = ((window.innerWidth / 2)-40)+'px';
      this.bgHeight = ((window.innerHeight / 2)-200)+'px';
      console.log(event);
    }
    , async callKospiMarketIndustryIndexFlow() {
       try{
          let postData = {};
          await this.$store.dispatch('callKospiMarketIndustryIndexCandleChartData', postData);
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
    bgWidth: ((window.innerWidth / 2)-40)+'px',
    bgHeight: ((window.innerHeight / 2)-200)+'px',
    bgPosition: 'absolute',
    bgZindex: 2,
  }),
}
</script>

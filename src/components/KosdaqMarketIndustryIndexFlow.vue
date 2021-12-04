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
              :options="this.$store.state.kosdaq100IndexChart"
              :constructor-type="'stockChart'"
              :callback="someFunction"
              :highcharts="this.$store.state.kosdaqMarketIndexHcInstance">
              {{this.$store.state.stla}}
            </highcharts>
          </v-col>
          <v-col md="4">
            <highcharts 
              :options="this.$store.state.kosdaqMid300IndexChart"
              :constructor-type="'stockChart'"
              :callback="someFunction"
              :highcharts="this.$store.state.kosdaqMarketIndexHcInstance">
              {{this.$store.state.stla}}
            </highcharts>
          </v-col>
          <v-col md="4">
            <highcharts 
              :options="this.$store.state.kosdaqSmallIndexChart"
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
              :options="this.$store.state.kosdaqEtcIndexChart"
              :constructor-type="'stockChart'"
              :callback="someFunction"
              :highcharts="this.$store.state.kosdaqMarketIndexHcInstance">
              {{this.$store.state.stla}}
            </highcharts>
          </v-col>
          <v-col md="4">
            <highcharts 
              :options="this.$store.state.kosdaqItTotalIndexChart"
              :constructor-type="'stockChart'"
              :callback="someFunction"
              :highcharts="this.$store.state.kosdaqMarketIndexHcInstance">
              {{this.$store.state.stla}}
            </highcharts>
          </v-col>
          <v-col md="4">
            <highcharts 
              :options="this.$store.state.kosdaqDistributionIndustryIndexChart"
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
              :options="this.$store.state.kosdaqTransportationIndexChart"
              :constructor-type="'stockChart'"
              :callback="someFunction"
              :highcharts="this.$store.state.kosdaqMarketIndexHcInstance">
              {{this.$store.state.stla}}
            </highcharts>
          </v-col>
          <v-col md="4">
            <highcharts 
              :options="this.$store.state.kosdaqFinanceIndexChart"
              :constructor-type="'stockChart'"
              :callback="someFunction"
              :highcharts="this.$store.state.kosdaqMarketIndexHcInstance">
              {{this.$store.state.stla}}
            </highcharts>
          </v-col>
          <v-col md="4">
            <highcharts 
              :options="this.$store.state.kosdaqLeisureCultureIndexChart"
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
              :options="this.$store.state.kosdaqNetworkBroadcastingServiceIndexChart"
              :constructor-type="'stockChart'"
              :callback="someFunction"
              :highcharts="this.$store.state.kosdaqMarketIndexHcInstance">
              {{this.$store.state.stla}}
            </highcharts>
          </v-col>
          <v-col md="4">
            <highcharts 
              :options="this.$store.state.kosdaqItSoftwareSvcIndexChart"
              :constructor-type="'stockChart'"
              :callback="someFunction"
              :highcharts="this.$store.state.kosdaqMarketIndexHcInstance">
              {{this.$store.state.stla}}
            </highcharts>
          </v-col>
          <v-col md="4">
            <highcharts 
              :options="this.$store.state.kosdaqItHardwareIndexChart"
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
              :options="this.$store.state.kosdaqBeverageFoodCigaretteIndexChart"
              :constructor-type="'stockChart'"
              :callback="someFunction"
              :highcharts="this.$store.state.kosdaqMarketIndexHcInstance">
              {{this.$store.state.stla}}
            </highcharts>
          </v-col>
          <v-col md="4">
            <highcharts 
              :options="this.$store.state.kosdaqFiberClothEquipmentIndexChart"
              :constructor-type="'stockChart'"
              :callback="someFunction"
              :highcharts="this.$store.state.kosdaqMarketIndexHcInstance">
              {{this.$store.state.stla}}
            </highcharts>
          </v-col>
          <v-col md="4">
            <highcharts 
              :options="this.$store.state.kosdaqPaperWoodIndexChart"
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
              :options="this.$store.state.kosdaqPublishingMediaCopyIndexChart"
              :constructor-type="'stockChart'"
              :callback="someFunction"
              :highcharts="this.$store.state.kosdaqMarketIndexHcInstance">
              {{this.$store.state.stla}}
            </highcharts>
          </v-col>
          <v-col md="4">
            <highcharts 
              :options="this.$store.state.kosdaqChemicalIndexChart"
              :constructor-type="'stockChart'"
              :callback="someFunction"
              :highcharts="this.$store.state.kosdaqMarketIndexHcInstance">
              {{this.$store.state.stla}}
            </highcharts>
          </v-col>
          <v-col md="4">
            <highcharts 
              :options="this.$store.state.kosdaqMedicineIndexChart"
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
              :options="this.$store.state.kosdaqNonmetallicMineralIndexChart"
              :constructor-type="'stockChart'"
              :callback="someFunction"
              :highcharts="this.$store.state.kosdaqMarketIndexHcInstance">
              {{this.$store.state.stla}}
            </highcharts>
          </v-col>
          <v-col md="4">
            <highcharts 
              :options="this.$store.state.kosdaqMetallicMineralIndexChart"
              :constructor-type="'stockChart'"
              :callback="someFunction"
              :highcharts="this.$store.state.kosdaqMarketIndexHcInstance">
              {{this.$store.state.stla}}
            </highcharts>
          </v-col>
          <v-col md="4">
            <highcharts 
              :options="this.$store.state.kosdaqMerchineEquipmentIndexChart"
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
              :options="this.$store.state.kosdaqGeneralElectricalElectronicsIndexChart"
              :constructor-type="'stockChart'"
              :callback="someFunction"
              :highcharts="this.$store.state.kosdaqMarketIndexHcInstance">
              {{this.$store.state.stla}}
            </highcharts>
          </v-col>
          <v-col md="4">
            <highcharts 
              :options="this.$store.state.kosdaqMedicalPrecisionMerchineryIndexChart"
              :constructor-type="'stockChart'"
              :callback="someFunction"
              :highcharts="this.$store.state.kosdaqMarketIndexHcInstance">
              {{this.$store.state.stla}}
            </highcharts>
          </v-col>
          <v-col md="4">
            <highcharts 
              :options="this.$store.state.kosdaqTransportationEquipmentComponentIndexChart"
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
              :options="this.$store.state.kosdaqEtcMenufacturingIndexChart"
              :constructor-type="'stockChart'"
              :callback="someFunction"
              :highcharts="this.$store.state.kosdaqMarketIndexHcInstance">
              {{this.$store.state.stla}}
            </highcharts>
          </v-col>
          <v-col md="4">
            <highcharts 
              :options="this.$store.state.kosdaqNetworkingServiceIndexChart"
              :constructor-type="'stockChart'"
              :callback="someFunction"
              :highcharts="this.$store.state.kosdaqMarketIndexHcInstance">
              {{this.$store.state.stla}}
            </highcharts>
          </v-col>
          <v-col md="4">
            <highcharts 
              :options="this.$store.state.kosdaqMediaServiceIndexChart"
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
              :options="this.$store.state.kosdaqInternetIndexChart"
              :constructor-type="'stockChart'"
              :callback="someFunction"
              :highcharts="this.$store.state.kosdaqMarketIndexHcInstance">
              {{this.$store.state.stla}}
            </highcharts>
          </v-col>
          <v-col md="4">
            <highcharts 
              :options="this.$store.state.kosdaqDigitalContentsIndexChart"
              :constructor-type="'stockChart'"
              :callback="someFunction"
              :highcharts="this.$store.state.kosdaqMarketIndexHcInstance">
              {{this.$store.state.stla}}
            </highcharts>
          </v-col>
          <v-col md="4">
            <highcharts 
              :options="this.$store.state.kosdaqSoftwareIndexChart"
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
              :options="this.$store.state.kosdaqComputerServiceIndexChart"
              :constructor-type="'stockChart'"
              :callback="someFunction"
              :highcharts="this.$store.state.kosdaqMarketIndexHcInstance">
              {{this.$store.state.stla}}
            </highcharts>
          </v-col>
          <v-col md="4">
            <highcharts 
              :options="this.$store.state.kosdaqNetworkingEquipmentIndexChart"
              :constructor-type="'stockChart'"
              :callback="someFunction"
              :highcharts="this.$store.state.kosdaqMarketIndexHcInstance">
              {{this.$store.state.stla}}
            </highcharts>
          </v-col>
          <v-col md="4">
            <highcharts 
              :options="this.$store.state.kosdaqInformationMerchineryIndexChart"
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
              :options="this.$store.state.kosdaqSemiconductorIndexChart"
              :constructor-type="'stockChart'"
              :callback="someFunction"
              :highcharts="this.$store.state.kosdaqMarketIndexHcInstance">
              {{this.$store.state.stla}}
            </highcharts>
          </v-col>
          <v-col md="4">
            <highcharts 
              :options="this.$store.state.kosdaqItComponentIndexChart"
              :constructor-type="'stockChart'"
              :callback="someFunction"
              :highcharts="this.$store.state.kosdaqMarketIndexHcInstance">
              {{this.$store.state.stla}}
            </highcharts>
          </v-col>
          <v-col md="4">
            <highcharts 
              :options="this.$store.state.kosdaqBestCompanyIndexChart"
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
              :options="this.$store.state.kosdaqVentureCompanyIndexChart"
              :constructor-type="'stockChart'"
              :callback="someFunction"
              :highcharts="this.$store.state.kosdaqMarketIndexHcInstance">
              {{this.$store.state.stla}}
            </highcharts>
          </v-col>
          <v-col md="4">
            <highcharts 
              :options="this.$store.state.kosdaqMiddleCompanyIndexChart"
              :constructor-type="'stockChart'"
              :callback="someFunction"
              :highcharts="this.$store.state.kosdaqMarketIndexHcInstance">
              {{this.$store.state.stla}}
            </highcharts>
          </v-col>
          <v-col md="4">
            <highcharts 
              :options="this.$store.state.kosdaqTechGrowingCompanyIndexChart"
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
              :options="this.$store.state.kosdaqMenufacturingIndexChart"
              :constructor-type="'stockChart'"
              :callback="someFunction"
              :highcharts="this.$store.state.kosdaqMarketIndexHcInstance">
              {{this.$store.state.stla}}
            </highcharts>
          </v-col>
          <v-col md="4">
            <highcharts 
              :options="this.$store.state.kosdaqConstructionIndexChart"
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
    , async callKosdaqMarketIndustryIndexFlow() {
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
    bgWidth: ((window.innerWidth / 2)-40)+'px',
    bgHeight: ((window.innerHeight / 2)-200)+'px',
    bgPosition: 'absolute',
    bgZindex: 2,
  }),
}
</script>

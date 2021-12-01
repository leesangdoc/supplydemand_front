<template>
  <v-app>
    <div class="text-center">
    <v-progress-circular
        :size="this.$store.state.spinnerLoading ? 70 : 0"
        :width="10"
        color="purple"
        :indeterminate="this.$store.state.spinnerLoading"
      ></v-progress-circular>
      <v-overlay
        :value="this.$store.state.spinnerLoading"
      ></v-overlay>
    </div>
    <div>
      <highcharts 
        :options="this.$store.state.kosdaqMarketIndexChart"
        :constructor-type="'stockChart'"
        :callback="someFunction"
        :highcharts="this.$store.state.kosdaqMarketIndexHcInstance"
      ><!--:highcharts="this.$store.state.kospiMarketIndexAcuHcInstance"--> 
      {{this.$store.state.stla}}
      </highcharts>

      <highcharts 
        :options="this.$store.state.kosdaqMarketIndexAcuChart"
        :constructor-type="'stockChart'"
        :callback="someFunction"
        :highcharts="this.$store.state.kosdaqMarketIndexAcuHcInstance"
      ><!--:highcharts="this.$store.state.kospiMarketIndexAcuHcInstance"--> 
      {{this.$store.state.stla}}
      </highcharts>

      <highcharts 
        :options="this.$store.state.kosdaqMarketIndexDispersionChart"
        :constructor-type="'stockChart'"
        :callback="someFunction"
        :highcharts="this.$store.state.kosdaqMarketIndexDispersionHcInstance">
      {{this.$store.state.stla}}
      </highcharts>

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
    this.callKosdaqMarketIndexFlow();
  },
  
  methods: {
     async callKosdaqMarketIndexFlow() {
       try{
          let postData = {};
          await this.$store.dispatch('callKosdaqMarketIndexFlow', postData);
          await this.$store.dispatch('callKosdaqMarketIndexCandleChartData', postData);
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

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
        :options="this.$store.state.kospiMarketIndexChart"
        :constructor-type="'stockChart'"
        :callback="someFunction"
        :highcharts="this.$store.state.kospiMarketIndexHcInstance"
      ><!--:highcharts="this.$store.state.kospiMarketIndexAcuHcInstance"--> 
      {{this.$store.state.stla}}
      </highcharts>
      
      <highcharts 
        :options="this.$store.state.kospiMarketIndexAcuChart"
        :constructor-type="'stockChart'"
        :callback="someFunction"
        :highcharts="this.$store.state.kospiMarketIndexAcuHcInstance"
      ><!--:highcharts="this.$store.state.kospiMarketIndexAcuHcInstance"--> 
      {{this.$store.state.stla}}
      </highcharts>

      <highcharts 
        :options="this.$store.state.kospiMarketIndexDispersionChart"
        :constructor-type="'stockChart'"
        :callback="someFunction"
        :highcharts="this.$store.state.kospiMarketIndexDispersionHcInstance">
      {{this.$store.state.stla}}
      </highcharts>

    </div>
  </v-app>
</template>

<script>
import {Chart} from 'highcharts-vue'

export default {
  name: 'KospiMarketIndexFlow',
  components: {
    highcharts: Chart,
  },
  created() {
    this.callKospiMarketIndexFlow();
  },
  
  methods: {
     async callKospiMarketIndexFlow() {
       try{
          let postData = {};
          await this.$store.dispatch('callKospiMarketIndexFlow', postData);
          await this.$store.dispatch('callKospiMarketIndexCandleChartData', postData);
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

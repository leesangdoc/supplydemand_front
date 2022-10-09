<template>
  <v-app>
    <div>
      <highcharts 
        :options="this.$store.state.quickInterestStockRightStockInfoChart"
        :constructor-type="'stockChart'"
        :callback="someFunction"
        :highcharts="this.$store.state.quickInterestStockRightStockInfoHcInstance">
      {{stla}}
      </highcharts>
      <highcharts 
        :options="this.$store.state.quickInterestStockRightVolumeChart"
        :constructor-type="'stockChart'"
        :callback="someFunction"
        :highcharts="this.$store.state.quickInterestStockRightVolumeHcInstance">
      {{stla}}
      </highcharts>
      <highcharts 
        :options="this.$store.state.quickInterestStockRightAcuChart"
        :constructor-type="'stockChart'"
        :callback="someFunction"
        :highcharts="this.$store.state.quickInterestStockRightAcuHcInstance">
      {{stla}}
      </highcharts>
      <highcharts 
        :options="this.$store.state.quickInterestStockRightDispersionChart"
        :constructor-type="'stockChart'"
        :callback="someFunction"
        :highcharts="this.$store.state.quickInterestStockRightDispersionHcInstance">
      {{stla}}
      </highcharts>
      <highcharts 
        :options="this.$store.state.shortSellingChart"
        :constructor-type="'stockChart'"
        :callback="someFunction"
        :highcharts="this.$store.state.shortSellingHcInstance">
      {{stla}}
      </highcharts>
      <highcharts 
        :options="this.$store.state.loanTransactionChart"
        :constructor-type="'stockChart'"
        :callback="someFunction"
        :highcharts="this.$store.state.loanTransactionHcInstance">
      {{stla}}
      </highcharts>
    </div>
    
  </v-app>
</template>

<script>
import {Chart} from 'highcharts-vue'

export default {
  beforeMount() {
    this.$store.commit('setStockClosePriceAxisLength', this.$store.state.quickInterestStockRightStockInfoChart.series.length);
  },
  beforeCreate() {     
    console.log('beforeCreate');
  },
  updated() {},
  props: ['stla'],
  components: {
    highcharts: Chart,
  },
  name: 'QuickInterestStockRight',
  methods: {
    cancel() {
      console.log("cancel()...");
      alert('캔슬입니다......')
    },
    // 차트 로드된 다음에 뿌림.
    someFunction(){
      console.log("someFunction()...");
    }
  },
  data: () => ({}),
}
</script>

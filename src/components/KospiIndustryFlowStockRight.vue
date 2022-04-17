<template>
  <v-app>
    <div>
      <highcharts 
        :options="this.$store.state.kospiIndustryFlowStockRightInfoChart"
        :constructor-type="'stockChart'"
        :callback="someFunction"
        :highcharts="this.$store.state.kospiIndustryFlowStockRightInfoChartHcInstance"
      >
      {{stla}}
      </highcharts>
      <highcharts 
        :options="this.$store.state.kospiIndustryFlowStockRightAcuChart"
        :constructor-type="'stockChart'"
        :callback="someFunction"
        :highcharts="this.$store.state.kospiIndustryFlowStockRightAcuChartHcInstance"
      >
      {{stla}}
      </highcharts>
      <highcharts 
        :options="this.$store.state.kospiIndustryFlowStockRightDispersionChart"
        :constructor-type="'stockChart'"
        :callback="someFunction"
        :highcharts="this.$store.state.kospiIndustryFlowStockRightDispersionChartHcInstance"
      >
      {{stla}}
      </highcharts>
      <highcharts 
        :options="this.$store.state.kospiIndustryFlowStockRightShortSellingChart"
        :constructor-type="'stockChart'"
        :callback="someFunction"
        :highcharts="this.$store.state.kospiIndustryFlowStockRightShortSellingHcInstance">
      {{stla}}
      </highcharts>
      <highcharts 
        :options="this.$store.state.kospiIndustryFlowStockRightLoanTransactionChart"
        :constructor-type="'stockChart'"
        :callback="someFunction"
        :highcharts="this.$store.state.kospiIndustryFlowStockRightLoanTransactionHcInstance">
      {{stla}}
      </highcharts>
    </div>
    
  </v-app>
</template>

<script>
import {Chart} from 'highcharts-vue'

export default {
  beforeMount() {},
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

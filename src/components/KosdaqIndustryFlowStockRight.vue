<template>
  <v-app>
    <div>
      <highcharts 
        :options="this.$store.state.kosdaqIndustryFlowStockRightInfoChart"
        :constructor-type="'stockChart'"
        :callback="someFunction"
        :highcharts="this.$store.state.kosdaqIndustryFlowStockRightInfoChartHcInstance">
      {{stla}}
      </highcharts>
      <highcharts 
        :options="this.$store.state.kosdaqIndustryFlowStockRightVolumeChart"
        :constructor-type="'stockChart'"
        :callback="someFunction"
        :highcharts="this.$store.state.kosdaqIndustryFlowStockRightVolumeHcInstance">
      {{stla}}
      </highcharts>
      <highcharts 
        :options="this.$store.state.kosdaqIndustryFlowStockRightAcuChart"
        :constructor-type="'stockChart'"
        :callback="someFunction"
        :highcharts="this.$store.state.kosdaqIndustryFlowStockRightAcuChartHcInstance">
      {{stla}}
      </highcharts>
      <highcharts 
        :options="this.$store.state.kosdaqIndustryFlowStockRightDispersionChart"
        :constructor-type="'stockChart'"
        :callback="someFunction"
        :highcharts="this.$store.state.kosdaqIndustryFlowStockRightDispersionChartHcInstance">
      {{stla}}
      </highcharts>
      <highcharts 
        :options="this.$store.state.kosdaqIndustryFlowStockRightShortSellingChart"
        :constructor-type="'stockChart'"
        :callback="someFunction"
        :highcharts="this.$store.state.kosdaqIndustryFlowStockRightShortSellingHcInstance">
      {{stla}}
      </highcharts>
      <highcharts 
        :options="this.$store.state.kosdaqIndustryFlowStockRightLoanTransactionChart"
        :constructor-type="'stockChart'"
        :callback="someFunction"
        :highcharts="this.$store.state.kosdaqIndustryFlowStockRightLoanTransactionHcInstance">
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

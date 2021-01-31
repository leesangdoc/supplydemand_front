<template>
  <v-app>
    이곳은 빠른 종목검색2 입니다.
    <highcharts 
      :options="chartOptions"
      :constructor-type="'stockChart'"
      :callback="someFunction"
      :highcharts="hcInstance"
    >
    </highcharts>
  </v-app>
</template>
<script>

import {Chart} from 'highcharts-vue'
import Highcharts from 'highcharts'
import stockInit from 'highcharts/modules/stock'

stockInit(Highcharts)

export default {
  components: {
    highcharts: Chart 
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
  data: () => ({
      hcInstance: Highcharts,
      setOptions: {

      },
       
      chartOptions: {
        chart: { 
          renderTo: 'container',
          type: 'line',
          //marginBottom: 80
        },
        title: {
          text: 'Fruit Consumption'
        },
        subtitle: {
          text: 'Left side of the text should be aligned to the tick'
        },
        xAxis: {
          categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
          type: 'datetime',
          title: {
            text: 'Date'
          },
          labels: {
            autoRotationLimit: 40
          },
          
        },
        tooltip: {
          crosshairs: true,
          shared: true
        },
        credits: {
          enabled: true
        },
        yAxis: {
          title: {
              text: 'Fruit eaten'
          },
          labels: {
            formatter: function () {
                return this.value;
            }
          }
        },

        series: [{
          name: '준봉',
          data: [1,2,3,4,5,6,7,8,10,11,12,13] // sample data
        }]
      }
  }),
}
</script>

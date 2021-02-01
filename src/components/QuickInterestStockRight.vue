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
        rangeSelector: {
          allButtonsEnabled: true,
          verticalAlign: "top",
          floating: true,
          y: 0,
          x: 0,
          // buttons: [{
          //       type: 'month',
          //       count: 3,
          //       text: 'Day',
          //       dataGrouping: {
          //           forced: true,
          //           units: [['day', [1]]]
          //       }
          //   }, {
          //       type: 'year',
          //       count: 1,
          //       text: 'Week',
          //       dataGrouping: {
          //           forced: true,
          //           units: [['week', [1]]]
          //       }
          //   }, {
          //       type: 'all',
          //       text: 'Month',
          //       dataGrouping: {
          //           forced: true,
          //           units: [['month', [1]]]
          //       }
          //   }],
            buttonTheme: {
                width: 60
            },
            selected: 1
        },
        xAxis: {
          type: "category",
          title: {
            text: '날짜(기간)'
          },
          labels: {
            autoRotationLimit: 40
          },
          
        },
        chart: { 
          renderTo: 'container',
          type: 'line',
          //marginBottom: 80
        },
        title: {
          text: 'Fruit Consumption'
        },
        subtitle: {
          text: '종가 기준 주식차트'
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
              text: '주가(종가)'
          },
          alignTicks:'left', 
          textAlign:'left',
          align:'middle',
          opposite:false,
          labels: {
            formatter: function () {
                return this.value;
            }
          }
        },
        responsive: {
          rules: [{
            condition: {
                maxWidth: 500,
            },
            chartOptions: {
                chart: {
                    height: 300,
                },
                subtitle: {
                    text: null,
                },
                navigator: {
                    enabled: true,
                },
                legend: {
                  enabled: false,
                },
                yAxis: {
                  title: {
                    enabled: false,
                  }
                }
            }
          }]
        },
        series: [{
          name: '준봉',
          pointStart: Date.UTC(2018, 1, 1),
          pointInterval: 1000 * 3600 * 24,
          data: [1,2,3,4,5,6,7,8,10,11,12,13,77,8,65,4,2,4,5,7,88], // sample data
          marker: {
            enabled: null, // auto
            radius: 3,
            lineWidth: 1,
            lineColor: '#FFFFFF',
          },
          tooltip: {
              valueDecimals: 0,
              valueSuffix: '원',
          },
          dataGrouping:{
            approximation: 'average',
            enabled:true,
            forced:true,
            groupAll:true,
            groupPixelWidth:15,
          }
        }]
      }
  }),
}
</script>

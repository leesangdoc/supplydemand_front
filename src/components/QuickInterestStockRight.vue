<template>
  <v-app>
    
    <highcharts 
      :options="chartOptions"
      :constructor-type="'stockChart'"
      :callback="someFunction"
      :highcharts="hcInstance"
    >
    {{stla}}
    </highcharts>
    
  </v-app>
</template>
<script>

import {Chart} from 'highcharts-vue'
import Highcharts from 'highcharts'
import stockInit from 'highcharts/modules/stock'

stockInit(Highcharts)

export default {
  beforeCreate() {     
    console.log('beforeCreate');
  },
  updated() {             
    this.stla.resultStockInfo.forEach(
      element => {
        var eltStr = element[0].toString();
        var trnDay = (
          new Date(
            parseInt(eltStr.slice(0,4)),
            parseInt(eltStr.slice(4,6))-1,
            parseInt(eltStr.slice(6, 8))
        )).getTime();
        element[0] = trnDay;
    });
    this.chartOptions.series[0].data = this.stla.resultStockInfo;
    this.chartOptions.title.text = this.stla.stockName;
  },
  props: ['stla'],
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
          y: 230,
          x: 0,
          buttons: [{
                type: 'month',
                count: 1,
                text: '1m',
                title: 'View 1 month'
            }, {
                type: 'month',
                count: 3,
                text: '3m',
                title: 'View 3 months'
            }, {
                type: 'month',
                count: 6,
                text: '6m',
                title: 'View 6 months'
            }, {
                type: 'ytd',
                text: 'YTD',
                title: 'View year to date'
            }, {
                type: 'year',
                count: 1,
                text: '1y',
                title: 'View 1 year'
            }, {
                type: 'all',
                text: 'All',
                title: 'View all'
            }],
            buttonTheme: {
                width: 30
            },
            selected: 1
        },
        xAxis: {
          type: "datetime",
          title: {
            text: '날짜(기간)'
          },
          labels: {
            // autoRotationLimit: 40
            formatter: function() {
              return Highcharts.dateFormat('%b/%e/%Y', this.value);
            }
          },
          
        },
        chart: { 
          renderTo: 'container',
          type: 'line',
          //marginBottom: 80
        },
        title: {
          text: '종목명'
        },
        subtitle: {
          text: '수급분석 주식차트'
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
                    height: 500,
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
          // pointStart: Date.UTC(2018, 1, 1),
          // pointInterval: 1000 * 3600 * 24,
          data: [],
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

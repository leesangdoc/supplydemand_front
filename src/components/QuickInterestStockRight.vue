<template>
  <v-app>
    <div>
      <highcharts 
        :options="closePriceChartOptions"
        :constructor-type="'stockChart'"
        :callback="someFunction"
        :highcharts="hcInstance">
      {{stla}}
      </highcharts>
      <highcharts 
        :options="acuChartOptions"
        :constructor-type="'stockChart'"
        :callback="someFunction"
        :highcharts="hcInstance">
      {{stla}}
      </highcharts>
      <highcharts 
        :options="dsprChartOptions"
        :constructor-type="'stockChart'"
        :callback="someFunction"
        :highcharts="hcInstance">
      {{stla}}
      </highcharts>
    </div>
    
  </v-app>
</template>

<script>
import {Chart} from 'highcharts-vue'
import Highcharts from 'highcharts'
import stockInit from 'highcharts/modules/stock'


stockInit(Highcharts)

export default {
  beforeMount() {
    this.columnDefs = [
      { field: 'titleObj', sortable: true, filter: true, },
      { field: 'close', sortable: true, filter: true, },
      { field: 'individual', sortable: true, filter: true, },
      { field: 'grossSum', sortable: true, filter: true, },
      { field: 'foreigner', sortable: true, filter: true, },
      { field: 'finance', sortable: true, filter: true, },
      { field: 'insurance', sortable: true, filter: true, },
      { field: 'investment', sortable: true, filter: true, },
      { field: 'bank', sortable: true, filter: true, },
      { field: 'etcFinance', sortable: true, filter: true, },
      { field: 'pensionFund', sortable: true, filter: true, },
      { field: 'government', sortable: true, filter: true, },
      { field: 'etcCorp', sortable: true, filter: true, },
      { field: 'etcForeigner', sortable: true, filter: true, },
      { field: 'privateEquity', sortable: true, filter: true, },
    ];
    this.rowData = [];

  },
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
    this.closePriceChartOptions.series[0].data = this.stla.resultStockInfo;
    this.closePriceChartOptions.title.text = this.stla.stockName;
    this.closePriceChartOptions.series[0].name = this.stla.stockName;
    this.acuChartOptions.series[0].data = this.$store.state.acuIndividualStkInfo;
    this.acuChartOptions.series[1].data = this.$store.state.acuForeignerStkInfo;
    this.acuChartOptions.series[2].data = this.$store.state.acuFinanceStkInfo;
    this.acuChartOptions.series[3].data = this.$store.state.acuInsuranceStkInfo;
    this.acuChartOptions.series[4].data = this.$store.state.acuInvestmentStkInfo;
    this.acuChartOptions.series[5].data = this.$store.state.acuBankStkInfo;
    this.acuChartOptions.series[6].data = this.$store.state.acuEtcFinanceStkInfo;
    this.acuChartOptions.series[7].data = this.$store.state.acuPensionFundStkInfo;
    this.acuChartOptions.series[8].data = this.$store.state.acuGovernmentStkInfo;
    this.acuChartOptions.series[9].data = this.$store.state.acuEtcCorpStkInfo;
    this.acuChartOptions.series[10].data = this.$store.state.acuEtcForeignerStkInfo;
    this.acuChartOptions.series[11].data = this.$store.state.acuPrivateEquityStkInfo;
    this.acuChartOptions.series[12].data = this.$store.state.acuGrossSumStkInfo;

    this.dsprChartOptions.series[0].data = this.$store.state.indiDispersionArr;
    this.dsprChartOptions.series[1].data = this.$store.state.foreignerDispersionArr;
    this.dsprChartOptions.series[2].data = this.$store.state.financeInvestDispersionArr;
    this.dsprChartOptions.series[3].data = this.$store.state.insuranceDispersionArr;
    this.dsprChartOptions.series[4].data = this.$store.state.assetManageDispersionArr;
    this.dsprChartOptions.series[5].data = this.$store.state.bankDispersionArr;
    this.dsprChartOptions.series[6].data = this.$store.state.etcFinanceDispersionArr;
    this.dsprChartOptions.series[7].data = this.$store.state.pensionFundDispersionArr;
    this.dsprChartOptions.series[8].data = this.$store.state.governmentDispersionArr;
    this.dsprChartOptions.series[9].data = this.$store.state.etcCoporDispersionArr;
    this.dsprChartOptions.series[10].data = this.$store.state.etcForeignerDispersionArr;
    this.dsprChartOptions.series[11].data = this.$store.state.privateEquityDispersionArr;
    this.dsprChartOptions.series[12].data = this.$store.state.grossSumDispersionArr;
  },
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
  data: () => ({
      hcInstance: Highcharts,
      setOptions: {},
      // 종가 차트(관심1 상단)
      closePriceChartOptions: {
        rangeSelector: {
          allButtonsEnabled: true,
          verticalAlign: "top",
          floating: true,
          y: 205,
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
        legend: {
          enabled: false,
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
        plotOptions: {
          series: {
            events: {
                legendItemClick: function () {}
            }
        }
        },
        chart: { 
          renderTo: 'container',
          type: 'line',
          zoomType: 'x',
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
                maxWidth: 200,
            },
            chartOptions: {
                chart: {
                    height: 200,
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
          name: '종목',
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
              split: true,
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
      },

      // 매집 차트(관심1 중단)
      acuChartOptions: {
        rangeSelector: {
          allButtonsEnabled: true,
          verticalAlign: "top",
          floating: true,
          y: 205,
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
        legend: {
          enabled: true,
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
        plotOptions: {
          series: {
            events: {
                legendItemClick: function () {}
            }
        }
        },
        chart: { 
          renderTo: 'container',
          type: 'line',
          zoomType: 'x',
          //marginBottom: 80
        },
        title: {
          text: '매집량'
        },
        // subtitle: {
        //   text: '수급분석 주식차트'
        // },
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
                maxWidth: 200,
            },
            chartOptions: {
                chart: {
                    height: 200,
                },
                subtitle: {
                    text: null,
                },
                navigator: {
                    enabled: true,
                },
                // legend: {
                //   enabled: true,
                // },
                yAxis: {
                  title: {
                    enabled: false,
                  }
                }
            }
          }]
        },
        series: [{
          name: '개인',
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
              split: true,
              valueDecimals: 0,
              valueSuffix: '주',
          },
          dataGrouping:{
            approximation: 'average',
            enabled:true,
            forced:true,
            groupAll:true,
            groupPixelWidth:15,
          }
        },
        {
          name: '외국인',
          // pointStart: Date.UTC(2018, 1, 1),
          // pointInterval: 1000 * 3600 * 24,
          data: [],
          marker: {
            enabled: null, // auto
            radius: 3,
            lineWidth: 1,
            lineColor: '#FF0000',
          },
          tooltip: {
              split: true,
              valueDecimals: 0,
              valueSuffix: '주',
          },
          dataGrouping:{
            approximation: 'average',
            enabled:true,
            forced:true,
            groupAll:true,
            groupPixelWidth:15,
          }
        },
        {
          name: '금융',
          // pointStart: Date.UTC(2018, 1, 1),
          // pointInterval: 1000 * 3600 * 24,
          data: [],
          marker: {
            enabled: null, // auto
            radius: 3,
            lineWidth: 1,
            lineColor: '#FFFB33',
          },
          tooltip: {
              split: true,
              valueDecimals: 0,
              valueSuffix: '주',
          },
          dataGrouping:{
            approximation: 'average',
            enabled:true,
            forced:true,
            groupAll:true,
            groupPixelWidth:15,
          }
        },
        {
          name: '보험',
          // pointStart: Date.UTC(2018, 1, 1),
          // pointInterval: 1000 * 3600 * 24,
          data: [],
          marker: {
            enabled: null, // auto
            radius: 3,
            lineWidth: 1,
            lineColor: '#A6FF33',
          },
          tooltip: {
              split: true,
              valueDecimals: 0,
              valueSuffix: '주',
          },
          dataGrouping:{
            approximation: 'average',
            enabled:true,
            forced:true,
            groupAll:true,
            groupPixelWidth:15,
          }
        },
        {
          name: '투신',
          // pointStart: Date.UTC(2018, 1, 1),
          // pointInterval: 1000 * 3600 * 24,
          data: [],
          marker: {
            enabled: null, // auto
            radius: 3,
            lineWidth: 1,
            lineColor: '#419332',
          },
          tooltip: {
              split: true,
              valueDecimals: 0,
              valueSuffix: '주',
          },
          dataGrouping:{
            approximation: 'average',
            enabled:true,
            forced:true,
            groupAll:true,
            groupPixelWidth:15,
          }
        },
        {
          name: '은행',
          // pointStart: Date.UTC(2018, 1, 1),
          // pointInterval: 1000 * 3600 * 24,
          data: [],
          marker: {
            enabled: null, // auto
            radius: 3,
            lineWidth: 1,
            lineColor: '#676E65',
          },
          tooltip: {
              split: true,
              valueDecimals: 0,
              valueSuffix: '주',
          },
          dataGrouping:{
            approximation: 'average',
            enabled:true,
            forced:true,
            groupAll:true,
            groupPixelWidth:15,
          }
        },
        {
          name: '기타금융',
          // pointStart: Date.UTC(2018, 1, 1),
          // pointInterval: 1000 * 3600 * 24,
          data: [],
          marker: {
            enabled: null, // auto
            radius: 3,
            lineWidth: 1,
            lineColor: '#1B2B16',
          },
          tooltip: {
              split: true,
              valueDecimals: 0,
              valueSuffix: '주',
          },
          dataGrouping:{
            approximation: 'average',
            enabled:true,
            forced:true,
            groupAll:true,
            groupPixelWidth:15,
          }
        },
        {
          name: '연기금',
          // pointStart: Date.UTC(2018, 1, 1),
          // pointInterval: 1000 * 3600 * 24,
          data: [],
          marker: {
            enabled: null, // auto
            radius: 3,
            lineWidth: 1,
            lineColor: '#26DC83',
          },
          tooltip: {
              split: true,
              valueDecimals: 0,
              valueSuffix: '주',
          },
          dataGrouping:{
            approximation: 'average',
            enabled:true,
            forced:true,
            groupAll:true,
            groupPixelWidth:15,
          }
        },
        {
          name: '국가',
          // pointStart: Date.UTC(2018, 1, 1),
          // pointInterval: 1000 * 3600 * 24,
          data: [],
          marker: {
            enabled: null, // auto
            radius: 3,
            lineWidth: 1,
            lineColor: '#000000',
          },
          tooltip: {
              split: true,
              valueDecimals: 0,
              valueSuffix: '주',
          },
          dataGrouping:{
            approximation: 'average',
            enabled:true,
            forced:true,
            groupAll:true,
            groupPixelWidth:15,
          }
        },
        {
          name: '기타법인',
          // pointStart: Date.UTC(2018, 1, 1),
          // pointInterval: 1000 * 3600 * 24,
          data: [],
          marker: {
            enabled: null, // auto
            radius: 3,
            lineWidth: 1,
            lineColor: '#FE0B0B',
          },
          tooltip: {
              split: true,
              valueDecimals: 0,
              valueSuffix: '주',
          },
          dataGrouping:{
            approximation: 'average',
            enabled:true,
            forced:true,
            groupAll:true,
            groupPixelWidth:15,
          }
        },
        {
          name: '기타외인',
          // pointStart: Date.UTC(2018, 1, 1),
          // pointInterval: 1000 * 3600 * 24,
          data: [],
          marker: {
            enabled: null, // auto
            radius: 3,
            lineWidth: 1,
            lineColor: '#549AF0',
          },
          tooltip: {
              split: true,
              valueDecimals: 0,
              valueSuffix: '주',
          },
          dataGrouping:{
            approximation: 'average',
            enabled:true,
            forced:true,
            groupAll:true,
            groupPixelWidth:15,
          }
        },
        {
          name: '사모펀드',
          // pointStart: Date.UTC(2018, 1, 1),
          // pointInterval: 1000 * 3600 * 24,
          data: [],
          marker: {
            enabled: null, // auto
            radius: 3,
            lineWidth: 1,
            lineColor: '#808EF6',
          },
          tooltip: {
              split: true,
              valueDecimals: 0,
              valueSuffix: '주',
          },
          dataGrouping:{
            approximation: 'average',
            enabled:true,
            forced:true,
            groupAll:true,
            groupPixelWidth:15,
          }
        },
        {
          name: '세력합',
          // pointStart: Date.UTC(2018, 1, 1),
          // pointInterval: 1000 * 3600 * 24,
          data: [],
          marker: {
            enabled: null, // auto
            radius: 3,
            lineWidth: 1,
            lineColor: '#F5BCE9',
          },
          tooltip: {
              split: true,
              valueDecimals: 0,
              valueSuffix: '주',
          },
          dataGrouping:{
            approximation: 'average',
            enabled:true,
            forced:true,
            groupAll:true,
            groupPixelWidth:15,
          }
        }]
      },




      // 분산비율 차트(관심1 하단)
      dsprChartOptions: {
        rangeSelector: {
          allButtonsEnabled: true,
          verticalAlign: "top",
          floating: true,
          y: 205,
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
        legend: {
          enabled: true,
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
        plotOptions: {
          series: {
            events: {
                legendItemClick: function () {}
            }
        }
        },
        chart: { 
          renderTo: 'container',
          type: 'line',
          zoomType: 'x',
          //marginBottom: 80
        },
        title: {
          text: '분산비율'
        },
        // subtitle: {
        //   text: '수급분석 주식차트'
        // },
        tooltip: {
          crosshairs: true,
          shared: true
        },
        credits: {
          enabled: true
        },
        yAxis: {
          title: {
              text: '분산비율'
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
                maxWidth: 200,
            },
            chartOptions: {
                chart: {
                    height: 200,
                },
                subtitle: {
                    text: null,
                },
                navigator: {
                    enabled: true,
                },
                // legend: {
                //   enabled: true,
                // },
                yAxis: {
                  title: {
                    enabled: false,
                  }
                }
            }
          }]
        },
        series: [{
          name: '개인',
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
              split: true,
              valueDecimals: 1,
              valueSuffix: '%',
          },
          dataGrouping:{
            approximation: 'average',
            enabled:true,
            forced:true,
            groupAll:true,
            groupPixelWidth:15,
          }
        },
        {
          name: '외국인',
          // pointStart: Date.UTC(2018, 1, 1),
          // pointInterval: 1000 * 3600 * 24,
          data: [],
          marker: {
            enabled: null, // auto
            radius: 3,
            lineWidth: 1,
            lineColor: '#FF0000',
          },
          tooltip: {
              split: true,
              valueDecimals: 1,
              valueSuffix: '%',
          },
          dataGrouping:{
            approximation: 'average',
            enabled:true,
            forced:true,
            groupAll:true,
            groupPixelWidth:15,
          }
        },
        {
          name: '금융',
          // pointStart: Date.UTC(2018, 1, 1),
          // pointInterval: 1000 * 3600 * 24,
          data: [],
          marker: {
            enabled: null, // auto
            radius: 3,
            lineWidth: 1,
            lineColor: '#FFFB33',
          },
          tooltip: {
              split: true,
              valueDecimals: 1,
              valueSuffix: '%',
          },
          dataGrouping:{
            approximation: 'average',
            enabled:true,
            forced:true,
            groupAll:true,
            groupPixelWidth:15,
          }
        },
        {
          name: '보험',
          // pointStart: Date.UTC(2018, 1, 1),
          // pointInterval: 1000 * 3600 * 24,
          data: [],
          marker: {
            enabled: null, // auto
            radius: 3,
            lineWidth: 1,
            lineColor: '#A6FF33',
          },
          tooltip: {
              split: true,
              valueDecimals: 1,
              valueSuffix: '%',
          },
          dataGrouping:{
            approximation: 'average',
            enabled:true,
            forced:true,
            groupAll:true,
            groupPixelWidth:15,
          }
        },
        {
          name: '투신',
          // pointStart: Date.UTC(2018, 1, 1),
          // pointInterval: 1000 * 3600 * 24,
          data: [],
          marker: {
            enabled: null, // auto
            radius: 3,
            lineWidth: 1,
            lineColor: '#419332',
          },
          tooltip: {
              split: true,
              valueDecimals: 1,
              valueSuffix: '%',
          },
          dataGrouping:{
            approximation: 'average',
            enabled:true,
            forced:true,
            groupAll:true,
            groupPixelWidth:15,
          }
        },
        {
          name: '은행',
          // pointStart: Date.UTC(2018, 1, 1),
          // pointInterval: 1000 * 3600 * 24,
          data: [],
          marker: {
            enabled: null, // auto
            radius: 3,
            lineWidth: 1,
            lineColor: '#676E65',
          },
          tooltip: {
              split: true,
              valueDecimals: 1,
              valueSuffix: '%',
          },
          dataGrouping:{
            approximation: 'average',
            enabled:true,
            forced:true,
            groupAll:true,
            groupPixelWidth:15,
          }
        },
        {
          name: '기타금융',
          // pointStart: Date.UTC(2018, 1, 1),
          // pointInterval: 1000 * 3600 * 24,
          data: [],
          marker: {
            enabled: null, // auto
            radius: 3,
            lineWidth: 1,
            lineColor: '#1B2B16',
          },
          tooltip: {
              split: true,
              valueDecimals: 1,
              valueSuffix: '%',
          },
          dataGrouping:{
            approximation: 'average',
            enabled:true,
            forced:true,
            groupAll:true,
            groupPixelWidth:15,
          }
        },
        {
          name: '연기금',
          // pointStart: Date.UTC(2018, 1, 1),
          // pointInterval: 1000 * 3600 * 24,
          data: [],
          marker: {
            enabled: null, // auto
            radius: 3,
            lineWidth: 1,
            lineColor: '#26DC83',
          },
          tooltip: {
              split: true,
              valueDecimals: 1,
              valueSuffix: '%',
          },
          dataGrouping:{
            approximation: 'average',
            enabled:true,
            forced:true,
            groupAll:true,
            groupPixelWidth:15,
          }
        },
        {
          name: '국가',
          // pointStart: Date.UTC(2018, 1, 1),
          // pointInterval: 1000 * 3600 * 24,
          data: [],
          marker: {
            enabled: null, // auto
            radius: 3,
            lineWidth: 1,
            lineColor: '#000000',
          },
          tooltip: {
              split: true,
              valueDecimals: 1,
              valueSuffix: '%',
          },
          dataGrouping:{
            approximation: 'average',
            enabled:true,
            forced:true,
            groupAll:true,
            groupPixelWidth:15,
          }
        },
        {
          name: '기타법인',
          // pointStart: Date.UTC(2018, 1, 1),
          // pointInterval: 1000 * 3600 * 24,
          data: [],
          marker: {
            enabled: null, // auto
            radius: 3,
            lineWidth: 1,
            lineColor: '#FE0B0B',
          },
          tooltip: {
              split: true,
              valueDecimals: 1,
              valueSuffix: '%',
          },
          dataGrouping:{
            approximation: 'average',
            enabled:true,
            forced:true,
            groupAll:true,
            groupPixelWidth:15,
          }
        },
        {
          name: '기타외인',
          // pointStart: Date.UTC(2018, 1, 1),
          // pointInterval: 1000 * 3600 * 24,
          data: [],
          marker: {
            enabled: null, // auto
            radius: 3,
            lineWidth: 1,
            lineColor: '#549AF0',
          },
          tooltip: {
              split: true,
              valueDecimals: 1,
              valueSuffix: '%',
          },
          dataGrouping:{
            approximation: 'average',
            enabled:true,
            forced:true,
            groupAll:true,
            groupPixelWidth:15,
          }
        },
        {
          name: '사모펀드',
          // pointStart: Date.UTC(2018, 1, 1),
          // pointInterval: 1000 * 3600 * 24,
          data: [],
          marker: {
            enabled: null, // auto
            radius: 3,
            lineWidth: 1,
            lineColor: '#808EF6',
          },
          tooltip: {
              split: true,
              valueDecimals: 1,
              valueSuffix: '%',
          },
          dataGrouping:{
            approximation: 'average',
            enabled:true,
            forced:true,
            groupAll:true,
            groupPixelWidth:15,
          }
        },
        {
          name: '세력합',
          // pointStart: Date.UTC(2018, 1, 1),
          // pointInterval: 1000 * 3600 * 24,
          data: [],
          marker: {
            enabled: null, // auto
            radius: 3,
            lineWidth: 1,
            lineColor: '#F5BCE9',
          },
          tooltip: {
              split: true,
              valueDecimals: 1,
              valueSuffix: '%',
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

import {Chart} from 'highcharts-vue'
import stockInit from 'highcharts/modules/stock'
import Highcharts from 'highcharts'

stockInit(Highcharts);

export default {
    hcInstance: Highcharts
    , components: {
        highcharts: Chart,
    }
    , methods: {
      testFunc() {}
    }

    // 매집 차트용 설정
    , acuChartOptions: {
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
          setExtremes: function(e) {
            console.log(this);
            if(typeof(e.rangeSelectorButton)!== 'undefined') {
              // alert('count: '+e.rangeSelectorButton.count + 'text: ' +e.rangeSelectorButton.text + ' type:' + e.rangeSelectorButton.type);
              console.log('e.rangeSelectorButton;;;;;', e.rangeSelectorButton);
            }
          },
        },
        plotOptions: {
          series: {
            events: {
                legendItemClick: function () {

                },
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
      }











      // 분산차트용 설정
      // 분산비율 차트(관심1 하단)
      , dsprChartOptions: {
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
          setExtremes: function(e) {
            console.log(this);
            if(typeof(e.rangeSelectorButton)!== 'undefined') {
              // alert('count: '+e.rangeSelectorButton.count + 'text: ' +e.rangeSelectorButton.text + ' type:' + e.rangeSelectorButton.type);
              console.log('e.rangeSelectorButton;;;;;', e.rangeSelectorButton);
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









      // 종가 차트(관심1 상단)
      , kosdaqMarketChartOptions: {
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
          setExtremes: function(e) {
            console.log(this);
            if(typeof(e.rangeSelectorButton)!== 'undefined') {
              // alert('count: '+e.rangeSelectorButton.count + 'text: ' +e.rangeSelectorButton.text + ' type:' + e.rangeSelectorButton.type);
              console.log('e.rangeSelectorButton;;;;;', e.rangeSelectorButton);
            }
          },
          
        },
        plotOptions: {
          candlestick: {
            color: 'blue',
            upColor: 'red'
          },
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
          text: 'KOSDAQ INDEX'
        },
        subtitle: {
          text: '코스닥시장'
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
              text: '지수'
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
          type: 'candlestick',
          name: '코스닥 지수',
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
              valueDecimals: 2,
              // valueSuffix: '원',
          },
          dataGrouping:{
            
          }
        },
        
        ]
      }




      , kosdaq100ChartOptions: {
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
          setExtremes: function(e) {
            console.log(this);
            if(typeof(e.rangeSelectorButton)!== 'undefined') {
              // alert('count: '+e.rangeSelectorButton.count + 'text: ' +e.rangeSelectorButton.text + ' type:' + e.rangeSelectorButton.type);
              console.log('e.rangeSelectorButton;;;;;', e.rangeSelectorButton);
            }
          },
          
        },
        plotOptions: {
          candlestick: {
            color: 'blue',
            upColor: 'red'
         },
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
          text: 'KOSDAQ INDEX(코스닥100 지수)'
        },
        subtitle: {
          text: '코스닥시장' 
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
            text: '코스닥100 지수'
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
          type: 'candlestick',
          name: '코스닥100 지수',
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
              valueDecimals: 2,
              // valueSuffix: 'point',
          },
          dataGrouping:{
            
          }
        },
        ]
      }




      , kosdaqMid300ChartOptions: {
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
          setExtremes: function(e) {
            console.log(this);
            if(typeof(e.rangeSelectorButton)!== 'undefined') {
              // alert('count: '+e.rangeSelectorButton.count + 'text: ' +e.rangeSelectorButton.text + ' type:' + e.rangeSelectorButton.type);
              console.log('e.rangeSelectorButton;;;;;', e.rangeSelectorButton);
            }
          },
          
        },
        plotOptions: {
          candlestick: {
            color: 'blue',
            upColor: 'red'
         },
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
          text: 'KOSDAQ INDEX(코스닥중간300 지수)'
        },
        subtitle: {
          text: '코스닥시장' 
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
            text: '코스닥중간300 지수'
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
          type: 'candlestick',
          name: '코스닥중간300 지수',
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
              valueDecimals: 2,
              // valueSuffix: 'point',
          },
          dataGrouping:{
            
          }
        },
        ]
      }




      , kosdaqSmallChartOptions: {
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
          setExtremes: function(e) {
            console.log(this);
            if(typeof(e.rangeSelectorButton)!== 'undefined') {
              // alert('count: '+e.rangeSelectorButton.count + 'text: ' +e.rangeSelectorButton.text + ' type:' + e.rangeSelectorButton.type);
              console.log('e.rangeSelectorButton;;;;;', e.rangeSelectorButton);
            }
          },
          
        },
        plotOptions: {
          candlestick: {
            color: 'blue',
            upColor: 'red'
         },
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
          text: 'KOSDAQ INDEX(코스닥 소형주 지수)'
        },
        subtitle: {
          text: '코스닥시장' 
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
            text: '코스닥 소형주 지수'
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
          type: 'candlestick',
          name: '코스닥 소형주 지수',
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
              valueDecimals: 2,
              // valueSuffix: 'point',
          },
          dataGrouping:{
            
          }
        },
        ]
      }




      , kosdaqEtcChartOptions: {
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
          setExtremes: function(e) {
            console.log(this);
            if(typeof(e.rangeSelectorButton)!== 'undefined') {
              // alert('count: '+e.rangeSelectorButton.count + 'text: ' +e.rangeSelectorButton.text + ' type:' + e.rangeSelectorButton.type);
              console.log('e.rangeSelectorButton;;;;;', e.rangeSelectorButton);
            }
          },
          
        },
        plotOptions: {
          candlestick: {
            color: 'blue',
            upColor: 'red'
         },
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
          text: 'KOSDAQ INDEX(코스닥 기타지수)'
        },
        subtitle: {
          text: '코스닥시장' 
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
            text: '코스닥 기타지수'
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
          type: 'candlestick',
          name: '코스닥 기타지수',
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
              valueDecimals: 2,
              // valueSuffix: 'point',
          },
          dataGrouping:{
            
          }
        },
        ]
      }




      , kosdaqItTotalChartOptions: {
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
          setExtremes: function(e) {
            console.log(this);
            if(typeof(e.rangeSelectorButton)!== 'undefined') {
              // alert('count: '+e.rangeSelectorButton.count + 'text: ' +e.rangeSelectorButton.text + ' type:' + e.rangeSelectorButton.type);
              console.log('e.rangeSelectorButton;;;;;', e.rangeSelectorButton);
            }
          },
          
        },
        plotOptions: {
          candlestick: {
            color: 'blue',
            upColor: 'red'
         },
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
          text: 'KOSDAQ INDEX(IT종합 지수)'
        },
        subtitle: {
          text: '코스닥시장' 
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
            text: 'IT종합 지수'
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
          type: 'candlestick',
          name: 'IT종합 지수',
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
              valueDecimals: 2,
              // valueSuffix: 'point',
          },
          dataGrouping:{
            
          }
        },
        ]
      }





      , distributionIndustryChartOptions: {
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
          setExtremes: function(e) {
            console.log(this);
            if(typeof(e.rangeSelectorButton)!== 'undefined') {
              // alert('count: '+e.rangeSelectorButton.count + 'text: ' +e.rangeSelectorButton.text + ' type:' + e.rangeSelectorButton.type);
              console.log('e.rangeSelectorButton;;;;;', e.rangeSelectorButton);
            }
          },
          
        },
        plotOptions: {
          candlestick: {
            color: 'blue',
            upColor: 'red'
         },
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
          text: 'KOSDAQ INDEX(유통업 지수)'
        },
        subtitle: {
          text: '코스닥시장' 
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
            text: '유통업 지수'
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
          type: 'candlestick',
          name: '유통업 지수',
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
              valueDecimals: 2,
              // valueSuffix: 'point',
          },
          dataGrouping:{
            
          }
        },
        ]
      }




      , transportationChartOptions: {
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
          setExtremes: function(e) {
            console.log(this);
            if(typeof(e.rangeSelectorButton)!== 'undefined') {
              // alert('count: '+e.rangeSelectorButton.count + 'text: ' +e.rangeSelectorButton.text + ' type:' + e.rangeSelectorButton.type);
              console.log('e.rangeSelectorButton;;;;;', e.rangeSelectorButton);
            }
          },
          
        },
        plotOptions: {
          candlestick: {
            color: 'blue',
            upColor: 'red'
         },
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
          text: 'KOSDAQ INDEX(운송지수)'
        },
        subtitle: {
          text: '코스닥시장' 
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
            text: '운송지수'
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
          type: 'candlestick',
          name: '운송지수',
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
              valueDecimals: 2,
              // valueSuffix: 'point',
          },
          dataGrouping:{
            
          }
        },
        ]
      }




      , financeChartOptions: {
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
          setExtremes: function(e) {
            console.log(this);
            if(typeof(e.rangeSelectorButton)!== 'undefined') {
              // alert('count: '+e.rangeSelectorButton.count + 'text: ' +e.rangeSelectorButton.text + ' type:' + e.rangeSelectorButton.type);
              console.log('e.rangeSelectorButton;;;;;', e.rangeSelectorButton);
            }
          },
          
        },
        plotOptions: {
          candlestick: {
            color: 'blue',
            upColor: 'red'
         },
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
          text: 'KOSDAQ INDEX(금융지수)'
        },
        subtitle: {
          text: '코스닥시장' 
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
            text: '금융지수'
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
          type: 'candlestick',
          name: '금융지수',
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
              valueDecimals: 2,
              // valueSuffix: 'point',
          },
          dataGrouping:{
            
          }
        },
        ]
      }




      , leisureCultureChartOptions: {
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
          setExtremes: function(e) {
            console.log(this);
            if(typeof(e.rangeSelectorButton)!== 'undefined') {
              // alert('count: '+e.rangeSelectorButton.count + 'text: ' +e.rangeSelectorButton.text + ' type:' + e.rangeSelectorButton.type);
              console.log('e.rangeSelectorButton;;;;;', e.rangeSelectorButton);
            }
          },
          
        },
        plotOptions: {
          candlestick: {
            color: 'blue',
            upColor: 'red'
         },
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
          text: 'KOSDAQ INDEX(오락문화 지수)'
        },
        subtitle: {
          text: '코스닥시장' 
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
            text: '오락문화 지수'
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
          type: 'candlestick',
          name: '오락문화 지수',
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
              valueDecimals: 2,
              // valueSuffix: 'point',
          },
          dataGrouping:{
            
          }
        },
        ]
      }




      , networkBroadcastingServiceChartOptions: {
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
          setExtremes: function(e) {
            console.log(this);
            if(typeof(e.rangeSelectorButton)!== 'undefined') {
              // alert('count: '+e.rangeSelectorButton.count + 'text: ' +e.rangeSelectorButton.text + ' type:' + e.rangeSelectorButton.type);
              console.log('e.rangeSelectorButton;;;;;', e.rangeSelectorButton);
            }
          },
          
        },
        plotOptions: {
          candlestick: {
            color: 'blue',
            upColor: 'red'
         },
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
          text: 'KOSDAQ INDEX(통신방송서비스지수)'
        },
        subtitle: {
          text: '코스닥시장' 
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
            text: '통신방송서비스지수'
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
          type: 'candlestick',
          name: '통신방송서비스지수',
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
              valueDecimals: 2,
              // valueSuffix: 'point',
          },
          dataGrouping:{
            
          }
        },
        ]
      }




      , merchineChartOptions: {
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
          setExtremes: function(e) {
            console.log(this);
            if(typeof(e.rangeSelectorButton)!== 'undefined') {
              // alert('count: '+e.rangeSelectorButton.count + 'text: ' +e.rangeSelectorButton.text + ' type:' + e.rangeSelectorButton.type);
              console.log('e.rangeSelectorButton;;;;;', e.rangeSelectorButton);
            }
          },
          
        },
        plotOptions: {
          candlestick: {
            color: 'blue',
            upColor: 'red'
         },
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
          text: 'KOSDAQ INDEX(기계지수)'
        },
        subtitle: {
          text: '코스닥시장' 
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
            text: '기계지수'
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
          type: 'candlestick',
          name: '기계지수',
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
              valueDecimals: 2,
              // valueSuffix: 'point',
          },
          dataGrouping:{
            
          }
        },
        ]
      }




      , electricalElectronicsChartOptions: {
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
          setExtremes: function(e) {
            console.log(this);
            if(typeof(e.rangeSelectorButton)!== 'undefined') {
              // alert('count: '+e.rangeSelectorButton.count + 'text: ' +e.rangeSelectorButton.text + ' type:' + e.rangeSelectorButton.type);
              console.log('e.rangeSelectorButton;;;;;', e.rangeSelectorButton);
            }
          },
          
        },
        plotOptions: {
          candlestick: {
            color: 'blue',
            upColor: 'red'
         },
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
          text: 'KOSDAQ INDEX(전기전자지수)'
        },
        subtitle: {
          text: '코스닥시장' 
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
            text: '전기전자지수'
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
          type: 'candlestick',
          name: '전기전자지수',
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
              valueDecimals: 2,
              // valueSuffix: 'point',
          },
          dataGrouping:{
            
          }
        },
        ]
      }




      , medicalPrecisionChartOptions: {
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
          setExtremes: function(e) {
            console.log(this);
            if(typeof(e.rangeSelectorButton)!== 'undefined') {
              // alert('count: '+e.rangeSelectorButton.count + 'text: ' +e.rangeSelectorButton.text + ' type:' + e.rangeSelectorButton.type);
              console.log('e.rangeSelectorButton;;;;;', e.rangeSelectorButton);
            }
          },
          
        },
        plotOptions: {
          candlestick: {
            color: 'blue',
            upColor: 'red'
         },
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
          text: 'KOSDAQ INDEX(의료정밀지수)'
        },
        subtitle: {
          text: '코스닥시장' 
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
            text: '의료정밀지수'
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
          type: 'candlestick',
          name: '의료정밀지수',
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
              valueDecimals: 2,
              // valueSuffix: 'point',
          },
          dataGrouping:{
            
          }
        },
        ]
      }




      , transportationEquipmentChartOptions: {
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
          setExtremes: function(e) {
            console.log(this);
            if(typeof(e.rangeSelectorButton)!== 'undefined') {
              // alert('count: '+e.rangeSelectorButton.count + 'text: ' +e.rangeSelectorButton.text + ' type:' + e.rangeSelectorButton.type);
              console.log('e.rangeSelectorButton;;;;;', e.rangeSelectorButton);
            }
          },
          
        },
        plotOptions: {
          candlestick: {
            color: 'blue',
            upColor: 'red'
         },
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
          text: 'KOSDAQ INDEX(운송장비지수)'
        },
        subtitle: {
          text: '코스닥시장' 
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
            text: '운송장비지수'
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
          type: 'candlestick',
          name: '운송장비지수',
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
              valueDecimals: 2,
              // valueSuffix: 'point',
          },
          dataGrouping:{
            
          }
        },
        ]
      }




      , distributionIndustryIndexChartOptions: {
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
          setExtremes: function(e) {
            console.log(this);
            if(typeof(e.rangeSelectorButton)!== 'undefined') {
              // alert('count: '+e.rangeSelectorButton.count + 'text: ' +e.rangeSelectorButton.text + ' type:' + e.rangeSelectorButton.type);
              console.log('e.rangeSelectorButton;;;;;', e.rangeSelectorButton);
            }
          },
          
        },
        plotOptions: {
          candlestick: {
            color: 'blue',
            upColor: 'red'
         },
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
          text: 'KOSDAQ INDEX(유통업지수)'
        },
        subtitle: {
          text: '코스닥시장' 
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
            text: '유통업지수'
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
          type: 'candlestick',
          name: '유통업지수',
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
              valueDecimals: 2,
              // valueSuffix: 'point',
          },
          dataGrouping:{
            
          }
        },
        ]
      }




      , electricGasIndexChartOptions: {
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
          setExtremes: function(e) {
            console.log(this);
            if(typeof(e.rangeSelectorButton)!== 'undefined') {
              // alert('count: '+e.rangeSelectorButton.count + 'text: ' +e.rangeSelectorButton.text + ' type:' + e.rangeSelectorButton.type);
              console.log('e.rangeSelectorButton;;;;;', e.rangeSelectorButton);
            }
          },
          
        },
        plotOptions: {
          candlestick: {
            color: 'blue',
            upColor: 'red'
         },
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
          text: 'KOSDAQ INDEX(전기가스지수)'
        },
        subtitle: {
          text: '코스닥시장' 
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
            text: '전기가스지수'
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
          type: 'candlestick',
          name: '전기가스지수',
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
              valueDecimals: 2,
              // valueSuffix: 'point',
          },
          dataGrouping:{
            
          }
        },
        ]
      }




      , constructionChartOptions: {
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
          setExtremes: function(e) {
            console.log(this);
            if(typeof(e.rangeSelectorButton)!== 'undefined') {
              // alert('count: '+e.rangeSelectorButton.count + 'text: ' +e.rangeSelectorButton.text + ' type:' + e.rangeSelectorButton.type);
              console.log('e.rangeSelectorButton;;;;;', e.rangeSelectorButton);
            }
          },
          
        },
        plotOptions: {
          candlestick: {
            color: 'blue',
            upColor: 'red'
         },
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
          text: 'KOSDAQ INDEX(건설업지수)'
        },
        subtitle: {
          text: '코스닥시장' 
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
            text: '건설업지수'
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
          type: 'candlestick',
          name: '건설업지수',
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
              valueDecimals: 2,
              // valueSuffix: 'point',
          },
          dataGrouping:{
            
          }
        },
        ]
      }




      , transportWarehouseChartOptions: {
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
          setExtremes: function(e) {
            console.log(this);
            if(typeof(e.rangeSelectorButton)!== 'undefined') {
              // alert('count: '+e.rangeSelectorButton.count + 'text: ' +e.rangeSelectorButton.text + ' type:' + e.rangeSelectorButton.type);
              console.log('e.rangeSelectorButton;;;;;', e.rangeSelectorButton);
            }
          },
          
        },
        plotOptions: {
          candlestick: {
            color: 'blue',
            upColor: 'red'
         },
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
          text: 'KOSDAQ INDEX(운수창고지수)'
        },
        subtitle: {
          text: '코스닥시장' 
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
            text: '운수창고지수'
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
          type: 'candlestick',
          name: '운수창고지수',
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
              valueDecimals: 2,
              // valueSuffix: 'point',
          },
          dataGrouping:{
            
          }
        },
        ]
      }




      , networkingBusinessChartOptions: {
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
          setExtremes: function(e) {
            console.log(this);
            if(typeof(e.rangeSelectorButton)!== 'undefined') {
              // alert('count: '+e.rangeSelectorButton.count + 'text: ' +e.rangeSelectorButton.text + ' type:' + e.rangeSelectorButton.type);
              console.log('e.rangeSelectorButton;;;;;', e.rangeSelectorButton);
            }
          },
          
        },
        plotOptions: {
          candlestick: {
            color: 'blue',
            upColor: 'red'
         },
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
          text: 'KOSDAQ INDEX(통신업지수)'
        },
        subtitle: {
          text: '코스닥시장' 
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
            text: '통신업지수'
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
          type: 'candlestick',
          name: '통신업지수',
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
              valueDecimals: 2,
              // valueSuffix: 'point',
          },
          dataGrouping:{
            
          }
        },
        ]
      }




      , financeChartOptions: {
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
          setExtremes: function(e) {
            console.log(this);
            if(typeof(e.rangeSelectorButton)!== 'undefined') {
              // alert('count: '+e.rangeSelectorButton.count + 'text: ' +e.rangeSelectorButton.text + ' type:' + e.rangeSelectorButton.type);
              console.log('e.rangeSelectorButton;;;;;', e.rangeSelectorButton);
            }
          },
          
        },
        plotOptions: {
          candlestick: {
            color: 'blue',
            upColor: 'red'
         },
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
          text: 'KOSDAQ INDEX(금융업지수)'
        },
        subtitle: {
          text: '코스닥시장' 
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
            text: '금융업지수'
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
          type: 'candlestick',
          name: '금융업지수',
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
              valueDecimals: 2,
              // valueSuffix: 'point',
          },
          dataGrouping:{
            
          }
        },
        ]
      }





      , bankChartOptions: {
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
          setExtremes: function(e) {
            console.log(this);
            if(typeof(e.rangeSelectorButton)!== 'undefined') {
              // alert('count: '+e.rangeSelectorButton.count + 'text: ' +e.rangeSelectorButton.text + ' type:' + e.rangeSelectorButton.type);
              console.log('e.rangeSelectorButton;;;;;', e.rangeSelectorButton);
            }
          },
          
        },
        plotOptions: {
          candlestick: {
            color: 'blue',
            upColor: 'red'
         },
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
          text: 'KOSDAQ INDEX(은행업지수)'
        },
        subtitle: {
          text: '코스닥시장' 
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
            text: '은행업지수'
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
          type: 'candlestick',
          name: '은행업지수',
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
              valueDecimals: 2,
              // valueSuffix: 'point',
          },
          dataGrouping:{
            
          }
        },
        ]
      }





      , stockSecurityChartOptions: {
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
          setExtremes: function(e) {
            console.log(this);
            if(typeof(e.rangeSelectorButton)!== 'undefined') {
              // alert('count: '+e.rangeSelectorButton.count + 'text: ' +e.rangeSelectorButton.text + ' type:' + e.rangeSelectorButton.type);
              console.log('e.rangeSelectorButton;;;;;', e.rangeSelectorButton);
            }
          },
          
        },
        plotOptions: {
          candlestick: {
            color: 'blue',
            upColor: 'red'
         },
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
          text: 'KOSDAQ INDEX(증권업지수)'
        },
        subtitle: {
          text: '코스닥시장' 
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
            text: '증권업지수'
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
          type: 'candlestick',
          name: '증권업지수',
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
              valueDecimals: 2,
              // valueSuffix: 'point',
          },
          dataGrouping:{
            
          }
        },
        ]
      }




      , insuranceChartOptions: {
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
          setExtremes: function(e) {
            console.log(this);
            if(typeof(e.rangeSelectorButton)!== 'undefined') {
              // alert('count: '+e.rangeSelectorButton.count + 'text: ' +e.rangeSelectorButton.text + ' type:' + e.rangeSelectorButton.type);
              console.log('e.rangeSelectorButton;;;;;', e.rangeSelectorButton);
            }
          },
          
        },
        plotOptions: {
          candlestick: {
            color: 'blue',
            upColor: 'red'
         },
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
          text: 'KOSDAQ INDEX(보험업지수)'
        },
        subtitle: {
          text: '코스닥시장' 
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
            text: '보험업지수'
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
          type: 'candlestick',
          name: '보험업지수',
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
              valueDecimals: 2,
              // valueSuffix: 'point',
          },
          dataGrouping:{
            
          }
        },
        ]
      }





      , serviceChartOptions: {
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
          setExtremes: function(e) {
            console.log(this);
            if(typeof(e.rangeSelectorButton)!== 'undefined') {
              // alert('count: '+e.rangeSelectorButton.count + 'text: ' +e.rangeSelectorButton.text + ' type:' + e.rangeSelectorButton.type);
              console.log('e.rangeSelectorButton;;;;;', e.rangeSelectorButton);
            }
          },
          
        },
        plotOptions: {
          candlestick: {
            color: 'blue',
            upColor: 'red'
         },
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
          text: 'KOSDAQ INDEX(서비스업지수)'
        },
        subtitle: {
          text: '코스닥시장' 
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
            text: '서비스업지수'
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
          type: 'candlestick',
          name: '서비스업지수',
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
              valueDecimals: 2,
              // valueSuffix: 'point',
          },
          dataGrouping:{
            
          }
        },
        ]
      }





      , manufacturingChartOptions: {
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
          setExtremes: function(e) {
            console.log(this);
            if(typeof(e.rangeSelectorButton)!== 'undefined') {
              // alert('count: '+e.rangeSelectorButton.count + 'text: ' +e.rangeSelectorButton.text + ' type:' + e.rangeSelectorButton.type);
              console.log('e.rangeSelectorButton;;;;;', e.rangeSelectorButton);
            }
          },
          
        },
        plotOptions: {
          candlestick: {
            color: 'blue',
            upColor: 'red'
         },
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
          text: 'KOSDAQ INDEX(제조업지수)'
        },
        subtitle: {
          text: '코스닥시장' 
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
            text: '제조업지수'
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
          type: 'candlestick',
          name: '제조업지수',
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
              valueDecimals: 2,
              // valueSuffix: 'point',
          },
          dataGrouping:{
            
          }
        },
        ]
      }





      , kospi200ChartOptions: {
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
          setExtremes: function(e) {
            console.log(this);
            if(typeof(e.rangeSelectorButton)!== 'undefined') {
              // alert('count: '+e.rangeSelectorButton.count + 'text: ' +e.rangeSelectorButton.text + ' type:' + e.rangeSelectorButton.type);
              console.log('e.rangeSelectorButton;;;;;', e.rangeSelectorButton);
            }
          },
          
        },
        plotOptions: {
          candlestick: {
            color: 'blue',
            upColor: 'red'
         },
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
          text: 'KOSDAQ INDEX(코스피200지수)'
        },
        subtitle: {
          text: '코스닥시장' 
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
            text: '코스피200지수'
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
          type: 'candlestick',
          name: '코스피200지수',
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
              valueDecimals: 2,
              // valueSuffix: 'point',
          },
          dataGrouping:{
            
          }
        },
        ]
      }




















      
}
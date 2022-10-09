import {Chart} from 'highcharts-vue'
import stockInit from 'highcharts/modules/stock'
import Highcharts from 'highcharts'

Highcharts.setOptions({
  global:{
      useUTC: false,
  }
});

stockInit(Highcharts);

export default {
    hcInstance: Highcharts
    , components: {
        highcharts: Chart,
    }
    , methods: {
      testFunc() {}
    }

    // 종가 차트(관심1 상단)
    , closePriceChartOptions: {   
      rangeSelector: {
        selected: 5,
        allButtonsEnabled: true,
        verticalAlign: "top",
        floating: true,
        y: 785,
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
            // console.log('e.rangeSelectorButton;;;;;', e.rangeSelectorButton);
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
        height: 1000,
        //marginBottom: 80
      },
      title: {
        text: '종목명'
      },
      subtitle: {
        text: '수급분석 주식차트'
      },
      
      tooltip: {
        crosshairs: true
        , shared: true
        , split: true
      },
      credits: {
        enabled: true
      },
      yAxis: [{
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
          , align: 'right'
          , x: -3
        }
        , height: '70%'
        , lineWidth: 2
        , resize: {
            enabled: true
        }
      }
      , {
        labels: {
            align: 'right',
            x: -3
        },
        title: {
            text: '거래량'
        },
        top: '75%',
        height: '25%',
        offset: 0,
        lineWidth: 2
    }],
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
        id: 'aapl',
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
        dataGrouping:{}
      }
      , {
        name: '5일선',
        // type: 'column',
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
            valueSuffix: '원',
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
        name: '10일선',
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
            valueSuffix: '원',
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
        name: '20일선',
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
            valueSuffix: '원',
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
        name: '60일선',
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
            valueSuffix: '원',
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
        name: '100일선',
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
            valueSuffix: '원',
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
        name: '200일선',
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
            valueSuffix: '원',
        },
        dataGrouping:{
          approximation: 'average',
          enabled:true,
          forced:true,
          groupAll:true,
          groupPixelWidth:15,
        }
      }
      , {
        type: 'column',
        name: '거래량',
        data: [],
        yAxis: 1,
        dataGrouping: {
          //   units: [[
          //     'week',                         // unit name
          //     [1]                             // allowed multiples
          // ], [
          //     'month',
          //     [1, 2, 3, 4, 6]
          // ]]
        }
      }
    ]
    }














    // 매집 차트용 설정
    , acuChartOptions: {
        rangeSelector: {
          allButtonsEnabled: true,
          verticalAlign: "top",
          floating: true,
          y: 785,
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
              // console.log('e.rangeSelectorButton;;;;;', e.rangeSelectorButton);
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
          height: 1000,
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
          y: 785,
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
          height: 1000,
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









      
      // 공매도 차트용 설정
    , shortSellingOptions: {
      rangeSelector: {
        allButtonsEnabled: true,
        verticalAlign: "top",
        floating: true,
        y: 785,
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
        height: 1000,
        //marginBottom: 80
      },
      title: {
        text: '공매도량'
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
            text: '공매도량, 비중, 거래대금 등'
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
                enabled: true,
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
        name: '공매도량',
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
        name: '공매도비중',
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
            valueDecimals: 2,
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
        name: '공매도 거래대금',
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
            valueSuffix: '(백만)원',
        },
        dataGrouping:{
          approximation: 'average',
          enabled:true,
          forced:true,
          groupAll:true,
          groupPixelWidth:15,
        }
      },
      ]
    }










    // 대차잔고 차트용 설정
    , loanTransactionChartOptions: {
      rangeSelector: {
        allButtonsEnabled: true,
        verticalAlign: "top",
        floating: true,
        y: 785,
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
        height: 1000,
        //marginBottom: 80
      },
      title: {
        text: '대차잔고'
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
            text: '대차 상환 대차잔고증감, 주수, 금액 등'
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
                enabled: true,
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
        name: '대차(주식수)',
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
        name: '상환(주식수)',
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
            valueDecimals: 2,
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
        name: '대차잔고증감(주식수)',
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
        name: '대차잔고주수',
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
        name: '대차잔고금액',
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
            valueSuffix: '(백만)원',
        },
        dataGrouping:{
          approximation: 'average',
          enabled:true,
          forced:true,
          groupAll:true,
          groupPixelWidth:15,
        }
      },
      ]
    }

    // 매집 차트용 설정
    , kospiIndustryFlowStockRightAcuChartOptions: {
        rangeSelector: {
          allButtonsEnabled: true,
          verticalAlign: "top",
          floating: true,
          y: 785,
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
          height: 1000,
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

      , kospiIndustryFlowStockRightDispersionChartOptions: {
        rangeSelector: {
          allButtonsEnabled: true,
          verticalAlign: "top",
          floating: true,
          y: 785,
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
          height: 1000,
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
      , kospiIndustryFlowStockRightInfoChartOptions: {
        rangeSelector: {
          allButtonsEnabled: true,
          verticalAlign: "top",
          floating: true,
          y: 785,
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
          height: 1000,
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
        yAxis: [{
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
            , align: 'right'
            , x: -3
          }
          , height: '70%'
          , lineWidth: 2
          , resize: {
              enabled: true
          }
        }
        , {
          labels: {
              align: 'right',
              x: -3
          },
          title: {
              text: '거래량'
          },
          top: '75%',
          height: '25%',
          offset: 0,
          lineWidth: 2
        }],
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

          }
        },
        {
          name: '5일선',
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
              valueSuffix: '원',
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
          name: '10일선',
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
              valueSuffix: '원',
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
          name: '20일선',
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
              valueSuffix: '원',
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
          name: '60일선',
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
              valueSuffix: '원',
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
          name: '100일선',
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
              valueSuffix: '원',
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
          name: '200일선',
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
              valueSuffix: '원',
          },
          dataGrouping:{
            approximation: 'average',
            enabled:true,
            forced:true,
            groupAll:true,
            groupPixelWidth:15,
          }
        }, {
          type: 'column',
          name: '거래량',
          data: [],
          yAxis: 1,
          dataGrouping: {}
        }]
      }














      // 공매도 차트용 설정
    , kospiIndustryFlowStockRightShortSellingChartOptions: {
      rangeSelector: {
        allButtonsEnabled: true,
        verticalAlign: "top",
        floating: true,
        y: 785,
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
        height: 1000,
        //marginBottom: 80
      },
      title: {
        text: '공매도량'
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
            text: '공매도량, 비중, 거래대금 등'
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
                enabled: true,
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
        name: '공매도량',
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
        name: '공매도비중',
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
            valueDecimals: 2,
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
        name: '공매도 거래대금',
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
            valueSuffix: '(백만)원',
        },
        dataGrouping:{
          approximation: 'average',
          enabled:true,
          forced:true,
          groupAll:true,
          groupPixelWidth:15,
        }
      },
      ]
    }










    // 대차잔고 차트용 설정
    , kospiIndustryFlowStockRightLoanTransactionChartOptions: {
      rangeSelector: {
        allButtonsEnabled: true,
        verticalAlign: "top",
        floating: true,
        y: 785,
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
        height: 1000,
        //marginBottom: 80
      },
      title: {
        text: '대차잔고'
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
            text: '대차 상환 대차잔고증감, 주수, 금액 등'
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
                enabled: true,
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
        name: '대차(주식수)',
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
        name: '상환(주식수)',
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
            valueDecimals: 2,
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
        name: '대차잔고증감(주식수)',
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
        name: '대차잔고주수',
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
        name: '대차잔고금액',
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
            valueSuffix: '(백만)원',
        },
        dataGrouping:{
          approximation: 'average',
          enabled:true,
          forced:true,
          groupAll:true,
          groupPixelWidth:15,
        }
      },
      ]
    }
    














    // 매집 차트용 설정
    , kosdaqIndustryFlowStockRightAcuChartOptions: {
      rangeSelector: {
        allButtonsEnabled: true,
        verticalAlign: "top",
        floating: true,
        y: 785,
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
        height: 1000,
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

    , kosdaqIndustryFlowStockRightDispersionChartOptions: {
      rangeSelector: {
        allButtonsEnabled: true,
        verticalAlign: "top",
        floating: true,
        y: 785,
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
        height: 1000,
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
    , kosdaqIndustryFlowStockRightInfoChartOptions: {
      rangeSelector: {
        allButtonsEnabled: true,
        verticalAlign: "top",
        floating: true,
        y: 785,
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
        height: 1000,
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
      yAxis: [{
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
          , align: 'right'
          , x: -3
        }
        , height: '70%'
        , lineWidth: 2
        , resize: {
            enabled: true
        }
      }
      , {
        labels: {
            align: 'right',
            x: -3
        },
        title: {
            text: '거래량'
        },
        top: '75%',
        height: '25%',
        offset: 0,
        lineWidth: 2
      }],
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
          
        }
      },
      {
        name: '5일선',
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
            valueSuffix: '원',
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
        name: '10일선',
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
            valueSuffix: '원',
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
        name: '20일선',
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
            valueSuffix: '원',
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
        name: '60일선',
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
            valueSuffix: '원',
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
        name: '100일선',
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
            valueSuffix: '원',
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
        name: '200일선',
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
            valueSuffix: '원',
        },
        dataGrouping:{
          approximation: 'average',
          enabled:true,
          forced:true,
          groupAll:true,
          groupPixelWidth:15,
        }
      }
      , {
        type: 'column',
        name: '거래량',
        data: [],
        yAxis: 1,
        dataGrouping: {}
      }]
    }














    // 공매도 차트용 설정
  , kosdaqIndustryFlowStockRightShortSellingChartOptions: {
    rangeSelector: {
      allButtonsEnabled: true,
      verticalAlign: "top",
      floating: true,
      y: 785,
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
      height: 1000,
      //marginBottom: 80
    },
    title: {
      text: '공매도량'
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
          text: '공매도량, 비중, 거래대금 등'
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
              enabled: true,
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
      name: '공매도량',
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
      name: '공매도비중',
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
          valueDecimals: 2,
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
      name: '공매도 거래대금',
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
          valueSuffix: '(백만)원',
      },
      dataGrouping:{
        approximation: 'average',
        enabled:true,
        forced:true,
        groupAll:true,
        groupPixelWidth:15,
      }
    },
    ]
  }










  // 대차잔고 차트용 설정
  , kosdaqIndustryFlowStockRightLoanTransactionChartOptions: {
    rangeSelector: {
      allButtonsEnabled: true,
      verticalAlign: "top",
      floating: true,
      y: 785,
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
      height: 1000,
      //marginBottom: 80
    },
    title: {
      text: '대차잔고'
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
          text: '대차 상환 대차잔고증감, 주수, 금액 등'
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
              enabled: true,
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
      name: '대차(주식수)',
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
      name: '상환(주식수)',
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
          valueDecimals: 2,
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
      name: '대차잔고증감(주식수)',
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
      name: '대차잔고주수',
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
      name: '대차잔고금액',
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
          valueSuffix: '(백만)원',
      },
      dataGrouping:{
        approximation: 'average',
        enabled:true,
        forced:true,
        groupAll:true,
        groupPixelWidth:15,
      }
    },
    ]
  }











  // 거래량 차트 추가 기능...
  // 2022 04 21
  , volumeChartOptions: {
      rangeSelector: {
        allButtonsEnabled: true,
        verticalAlign: "top",
        floating: true,
        y: 785,
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
            // console.log('e.rangeSelectorButton;;;;;', e.rangeSelectorButton);
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
        height: 1000,
        //marginBottom: 80
      },
      title: {
        text: '거래량분석'
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
            text: '일일거래량'
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
              yAxis: {
                title: {
                  enabled: false,
                }
              }
          }
        }]
      },
      series: [{
        type: 'column',
        name: '일일거래량',
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
        name: '5일_이평선',
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
        name: '20일_이평선',
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
      }]
    }









  // 거래량 차트 추가 기능...
  // 2022 04 21
  , kospiIndustryFlowStockRightVolumeChartOptions: {
    rangeSelector: {
      allButtonsEnabled: true,
      verticalAlign: "top",
      floating: true,
      y: 785,
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
          // console.log('e.rangeSelectorButton;;;;;', e.rangeSelectorButton);
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
      height: 1000,
      //marginBottom: 80
    },
    title: {
      text: '거래량분석'
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
          text: '일일거래량'
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
            yAxis: {
              title: {
                enabled: false,
              }
            }
        }
      }]
    },
    series: [{
      type: 'column',
      name: '일일거래량',
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
      name: '5일_이평선',
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
      name: '20일_이평선',
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
    }]
  }









  // 거래량 차트 추가 기능...
  // 2022 04 21
  , kosdaqIndustryFlowStockRightVolumeChartOptions: {
    rangeSelector: {
      allButtonsEnabled: true,
      verticalAlign: "top",
      floating: true,
      y: 785,
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
          // console.log('e.rangeSelectorButton;;;;;', e.rangeSelectorButton);
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
      height: 1000,
      //marginBottom: 80
    },
    title: {
      text: '거래량분석'
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
          text: '일일거래량'
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
            yAxis: {
              title: {
                enabled: false,
              }
            }
        }
      }]
    },
    series: [{
      type: 'column',
      name: '일일거래량',
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
      name: '5일_이평선',
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
      name: '20일_이평선',
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
    }]
  }

  
}
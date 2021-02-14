<template>
  <v-app>

      <v-row no-gutters class="fill-height">
        <v-col>
          <!-- <h1>{{$store.getters.getStkNm}}</h1> -->
        <!-- cols="12"
            sm="10"
            offset-sm="1"
            md="8"
            offset-md="2"
            lg="6"
            offset-lg="3"
            xl="4"
            offset-xl="4" -->
          <!-- <v-card class="pa-2" outlined tile> -->
            <highcharts 
              :options="chartOptions"
              :constructor-type="'stockChart'"
              :callback="someFunction"
              :highcharts="hcInstance"
            >
            {{stla}}
            </highcharts>
          <!-- </v-card> -->
        </v-col>
      </v-row>

      <v-row no-gutters class="fill-height">
        <v-col>
          <!-- <v-card class="pa-2" outlined tile> -->

            <ag-grid-vue
                style="width: 100%; height: 100%;"
                class="ag-theme-alpine"
                :columnDefs="columnDefs"
                :rowData="rowData"
                rowSelection="single"
                @grid-ready="onGridReady"
                :defaultColDef="defaultColDef">
            </ag-grid-vue>

          <!-- </v-card> -->
        </v-col>
      </v-row>


  </v-app>
</template>
<script>

import {Chart} from 'highcharts-vue'
import Highcharts from 'highcharts'
import stockInit from 'highcharts/modules/stock'
import { AgGridVue } from "ag-grid-vue";

stockInit(Highcharts)

export default {
  beforeMount() {
    this.defaultColDef={
        resizable: true
    },
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
    this.chartOptions.series[0].data = this.stla.resultStockInfo;
    this.chartOptions.title.text = this.stla.stockName;
    this.chartOptions.series[0].name = this.stla.stockName;
  },
  props: ['stla'],
  components: {
    AgGridVue,
    highcharts: Chart,
  },
  name: 'QuickInterestStockRight',
  methods: {
    onGridReady(params) {
      this.gridApi = params.api;
      this.columnApi = params.columnApi;
      //this.gridApi.sizeColumnsToFit();
    },
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
                maxWidth: 300,
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

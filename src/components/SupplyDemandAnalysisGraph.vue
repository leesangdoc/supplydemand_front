<template>
  <v-app>
    <div class="text-center" id="progressCircular" v-bind:style="{top: bgHeight, left: bgWidth, zIndex: bgZindex, position: bgPosition}">
      <v-progress-circular
        :size="this.$store.state.spinnerLoading ? 70 : 0"
        :width="10"
        color="purple"
        :indeterminate="this.$store.state.spinnerLoading"
      ></v-progress-circular>
    </div>
    <v-overlay :value="this.$store.state.spinnerLoading"></v-overlay>
    <table width="100%">
        <tr>
          <th>FROM(달력):</th>
          <td>
            <v-menu
          v-model="menu1"
          :close-on-content-click="false"
          :nudge-right="40"
          transition="scale-transition"
          offset-y
          min-width="auto"
        >
          <template v-slot:activator="{ on, attrs }">
            <!-- label="Picker without buttons" -->
            <v-text-field
              v-model="fromdate"
              prepend-icon="mdi-calendar"
              readonly
              v-bind="attrs"
              v-on="on"
            ></v-text-field>
          </template>
          <v-date-picker
            v-model="fromdate"
            @input="menu1 = false"
          ></v-date-picker>
        </v-menu>
          </td>
          <th>TO(달력):</th>
          <td>
            <v-menu
          v-model="menu2"
          :close-on-content-click="false"
          :nudge-right="40"
          transition="scale-transition"
          offset-y
          min-width="auto"
        >
          <template v-slot:activator="{ on, attrs }">
            <!-- label="Picker without buttons" -->
            <v-text-field
              v-model="todate"
              prepend-icon="mdi-calendar"
              readonly
              v-bind="attrs"
              v-on="on"
            ></v-text-field>
          </template>
          <v-date-picker
            v-model="todate"
            @input="menu2 = false"
          ></v-date-picker>
        </v-menu>
          </td>
          <th>종목</th>
          <td> 
            <v-autocomplete 
              clearable solo
              :menu-props="{ maxHeight: '300' }"
              :items="this.$store.state.supplyDemandAnalysisGraphAutoCompleteSelectBox"
              label="Select"
              @change="selectCompanyAutoCompleteChange"
              @keydown="selectCompanyAutoCompleteKeydown"
              open-on-clear
              return-object
              rounded
              :value="this.$store.state.sendStockObject"
            >
            </v-autocomplete> <!-- full-width -->
          </td>
          <td>
            <v-btn
              icon
              color="primary"
              dark
              @click="searchData">
              <v-icon>mdi-magnify</v-icon>
            </v-btn>
          </td>
        </tr>
    </table>
    
    <br /><br />
    <v-container class="grey lighten-5" fluid>
      <v-row mb-12 no-gutters dense>
        <v-col auto>
          <v-card class="pa-2" outlined tile height="200px">
            <ag-grid-vue 
              style="width: 100%; height: 100%;"
              class="ag-theme-alpine"
              :columnDefs="this.$store.state.quickInterestStockLeftGridColumns"
              :rowData="this.$store.state.supplyDemandAnalysisGraphRowData"
              rowSelection="single"
              @grid-ready="onGridReady"
              :defaultColDef="this.$store.state.defaultColDef"
            >
            </ag-grid-vue>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
      <div>
      <highcharts 
        :options="this.$store.state.supplyDemandAnalysisGraphStockInfoChart"
        :constructor-type="'stockChart'"
        :callback="someFunction"
        :highcharts="this.$store.state.supplyDemandAnalysisGraphStockInfoHcInstance">
        {{this.$store.state.stla}}
      </highcharts>
      </div>
      <div>
      <highcharts 
        :options="this.$store.state.supplyDemandAnalysisGraphAcuChart"
        :constructor-type="'stockChart'"
        :callback="someFunction"
        :highcharts="this.$store.state.supplyDemandAnalysisGraphAcuHcInstance">
        {{this.$store.state.stla}}
      </highcharts>
       </div>
      <div>
      <highcharts 
        :options="this.$store.state.supplyDemandAnalysisGraphDispersionChart"
        :constructor-type="'stockChart'"
        :callback="someFunction"
        :highcharts="this.$store.state.supplyDemandAnalysisGraphDispersionHcInstance">
        {{this.$store.state.stla}}
      </highcharts>
       </div>
      <div>
      <highcharts 
        :options="this.$store.state.supplyDemandAnalysisGraphShortSellingChart"
        :constructor-type="'stockChart'"
        :callback="someFunction"
        :highcharts="this.$store.state.supplyDemandAnalysisGraphShortSellingHcInstance">
        {{this.$store.state.stla}}
      </highcharts>
       </div>
      <div>
      <highcharts 
        :options="this.$store.state.supplyDemandAnalysisGraphLoanTransactionChart"
        :constructor-type="'stockChart'"
        :callback="someFunction"
        :highcharts="this.$store.state.supplyDemandAnalysisGraphLoanTransactionHcInstance">
        {{this.$store.state.stla}}
      </highcharts>
       </div>
 <v-container class="grey lighten-5" fluid>
      <v-row mb-12 no-gutters dense>
        <v-col auto>
          <v-card class="pa-2" outlined tile height="200px">
      <ag-grid-vue 
        style="width: 100%; height: 100%;"
        class="ag-theme-alpine"
        :columnDefs="this.$store.state.averagePriceGraphColumns"
        :rowData="this.$store.state.supplyDemandAnalysisGraphAveragePriceRowData"
        rowSelection="single"
        @grid-ready="onGridReady"
        :defaultColDef="this.$store.state.defaultColDef">
    </ag-grid-vue>
</v-card>
        </v-col>
      </v-row>
    </v-container>
 <v-container class="grey lighten-5" fluid>
      <v-row mb-12 no-gutters dense>
        <v-col auto>
          <v-card class="pa-2" outlined tile height="1400px">
    <ag-grid-vue 
        style="width: 100%; height: 100%;"
        class="ag-theme-alpine"
        :columnDefs="this.$store.state.supplyDemandGraphColumns"
        :rowData="this.$store.state.supplyDemandAnalysisGraphResultRowData"
        rowSelection="single"
        @grid-ready="onGridReady"
        :defaultColDef="this.$store.state.defaultColDef">
    </ag-grid-vue>
</v-card>
        </v-col>
      </v-row>
    </v-container>
    
  </v-app>
</template>

<script>
import { AgGridVue } from "ag-grid-vue";
import {Chart} from 'highcharts-vue';
export default {
  name: 'SupplyDemandAnalysisGraph'
  , mounted(){
    window.addEventListener('resize', this.handleResize);
  }
  , beforeDestroy() {
    window.removeEventListener('resize', this.handleResize);
  }
  , beforeMount(){
    this.todate = this.$moment(new Date()).format('YYYY-MM-DD');
    this.fromdate = this.$moment(new Date()).add(-7, 'days').format('YYYY-MM-DD');
  }
  , components: {
    AgGridVue
    , highcharts: Chart
  },
  methods: {
    handleResize(event) {
      this.bgWidth = ((window.innerWidth / 2)-40)+'px';
      this.bgHeight = ((window.innerHeight / 2)-200)+'px';
      console.log(event);
    }
    , selectCompanyAutoCompleteChange(e){
      this.$store.commit('setSDAGAutoComplete', e);
    }
    , selectCompanyAutoCompleteKeydown(e){
      console.log('selectCompanyAutoCompleteKeydown;;;', e);
    }
    , onGridReady(params) {
      this.gridApi = params.api;
      this.columnApi = params.columnApi;
      // this.gridApi.sizeColumnsToFit();
    }
    // 차트 로드된 다음에 뿌림.
    , someFunction(){
      console.log("someFunction()...");
    }
    , async searchData(){
        try{
          if( this.fromdate === null || this.fromdate === undefined || this.fromdate === ''){
            alert('FROM(달력)에 날짜를 선택해주세요!');
            return;
          }

          if( this.todate === null || this.todate === undefined || this.todate === ''){
            alert('TO(달력)에 날짜를 선택해주세요!');
            return;
          }

          if(this.fromdate === undefined){
            let date = new Date();
            let year = date.getFullYear();
            let month = ("0" + (1 + date.getMonth())).slice(-2);
            let day = ("0" + date.getDate()).slice(-2);
            this.fromdate = year + '-'+month + '-'+day;
            // console.log('interest1 undefined this.fromdate', this.fromdate);
          }

          if(this.todate === undefined){
            let date = new Date();
            let year = date.getFullYear();
            let month = ("0" + (1 + date.getMonth())).slice(-2);
            let day = ("0" + date.getDate()).slice(-2);
            this.todate = year + '-'+ month +'-'+ day;
            // console.log('interest1 undefined this.todate', this.todate);
          } 

          if(parseInt(this.fromdate.replace(/-/gi, "")) > parseInt(this.todate.replace(/-/gi, ""))){
            alert('TO(달력)이 FROM(달력)보다 작을 수 없습니다. \n다시 선택하세요!');
            return;
          }

          if( this.$store.state.sendStockObject === null || this.$store.state.sendStockObject === undefined || this.$store.state.sendStockObject === ''){
            alert('검색할 종목을 선택해주세요!');
            return;
          }

          let postData = {
            fromdate: this.fromdate
            , todate: this.todate
            , sendStockObject: this.$store.state.sendStockObject
            , category: 'supplyDemandAnalysisGraph'
            , csvFileName: this.$store.state.sendStockObject.text+'_'+this.$store.state.sendStockObject.value+'.csv'
          };
          await this.$store.dispatch('callSupplyDemandAnalysisGraph', postData);
          await this.$store.dispatch('callStockRight', postData);
          await this.$store.dispatch('callShortSelling', postData);
          await this.$store.dispatch('callLoanTransaction', postData);

        } catch(error){
          console.log(error);
        }
    }
  },
  data: () => ({
    menu1: false,
    menu2: false,
    bgWidth: ((window.innerWidth / 2)-40)+'px',
    bgHeight: ((window.innerHeight / 2)-200)+'px',
    bgPosition: 'absolute',
    bgZindex: 2,
  }),
}
</script>

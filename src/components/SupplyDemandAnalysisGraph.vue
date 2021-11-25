<template>
  <v-app>
    <h1>수급분석표입니다.</h1>
    <table width="100%">
        <tr>
          <th>FROM(달력):</th>
          <td>
            <vue-englishdatepicker classValue="datepicker" placeholder="YYYY-MM-DD"
              format="YYYY-MM-DD" @change="changeFromDate" :value="fromdate"/>
          </td>
          <th>TO(달력):</th>
          <td>
            <vue-englishdatepicker classValue="datepicker" placeholder="YYYY-MM-DD"
              format="YYYY-MM-DD" @change="changeToDate" :value="todate" />
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
    <ag-grid-vue 
        style="width: 100%; height: 80%;"
        class="ag-theme-alpine"
        :columnDefs="this.$store.state.quickInterestStockLeftGridColumns"
        :rowData="this.$store.state.supplyDemandAnalysisGraphRowData"
        rowSelection="single"
        @grid-ready="onGridReady"
        :defaultColDef="this.$store.state.defaultColDef"
        >
    </ag-grid-vue>
    
  </v-app>
</template>

<script>
import VueEnglishdatepicker from 'vue-englishdatepicker';
import { AgGridVue } from "ag-grid-vue";

export default {
  name: 'SupplyDemandAnalysisGraph',
  components: {
    AgGridVue
    , VueEnglishdatepicker
  },
  // 이게 액션기능인듯...
  // this.$store.state.selectCompanyAutoComplete
  methods: {
    selectCompanyAutoCompleteChange(e){
      console.log('selectCompanyAutoCompleteChange;;;', e);
      this.$store.commit('setSDAGAutoComplete', e);
    }
    , selectCompanyAutoCompleteKeydown(e){
      console.log('selectCompanyAutoCompleteKeydown;;;', e);
    }
    , changeFromDate(e){
      this.fromdate = e;
    },
    changeToDate(e){
      this.todate = e;
    }
    , onGridReady(params) {
      this.gridApi = params.api;
      this.columnApi = params.columnApi;
      // this.gridApi.sizeColumnsToFit();
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
            fromdate: this.fromdate, 
            todate: this.todate,
            sendStockObject: this.$store.state.sendStockObject,
          };
          await this.$store.dispatch('callSupplyDemandAnalysisGraph', postData);
        } catch(error){
          console.log(error);
        }
    }
  },
  data: () => ({
    
  }),
}
</script>

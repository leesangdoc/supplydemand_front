<template>
  <v-app>
    <div class="text-center">
    <v-progress-circular
        :size="this.$store.state.spinnerLoading ? 70 : 0"
        :width="10"
        color="purple"
        :indeterminate="this.$store.state.spinnerLoading"
      ></v-progress-circular>
    </div>
    <div class="loader" v-if="this.$store.state.spinnerLoading">데이터를 불러오고 있습니다. 잠시만 기다려주세요.....</div>
    <v-radio-group v-model="row" row column :disabled=this.$store.state.spinnerLoading>
        <v-radio label="관심1" value="radio-1" @click=interest1 @change=interest1Change />
        <v-radio label="관심2" value="radio-2" @click=interest2></v-radio>
      </v-radio-group>
    <div v-if="inter1">
      <table width="100%">
        <tr><td>FROM(달력):</td>
          <td>
            <vue-englishdatepicker classValue="datepicker" placeholder="YYYY-MM-DD"
              format="YYYY-MM-DD" @change="changeFromDate" :value="fromdate"/>
          </td>
          <td>TO(달력):</td>
          <td>
            <vue-englishdatepicker classValue="datepicker" placeholder="YYYY-MM-DD"
              format="YYYY-MM-DD" @change="changeToDate" :value="todate" />
          </td>
        </tr>
        </table>
        <table>
          <tr>
            <td><v-checkbox v-model="individual" :label="`개인`" /></td>
            <td><v-checkbox v-model="grossSum" @click="changeGrossSum" :label="`세력합`"/></td> 
            <td><v-checkbox v-model="foreigner" @click="changeNotGrossSum(e)" :label="`외인`"/></td>
            <td><v-checkbox v-model="finance" @click="changeNotGrossSum(e)" :label="`금융`"/></td>
            <td><v-checkbox v-model="insurance" @click="changeNotGrossSum(e)" :label="`보험`"/></td>
            <td><v-checkbox v-model="investment" @click="changeNotGrossSum(e)" :label="`투신`"/></td>
            <td><v-checkbox v-model="bank" @click="changeNotGrossSum(e)" :label="`은행`"/></td>
            <td><v-checkbox v-model="etcFinance" @click="changeNotGrossSum(e)" :label="`기타금융`"/></td>
            <td><v-checkbox v-model="pensionFund" @click="changeNotGrossSum(e)" :label="`연기금`"/></td>
            <td><v-checkbox v-model="government" @click="changeNotGrossSum(e)" :label="`국가`"/></td>
            <td><v-checkbox v-model="etcCorp" @click="changeNotGrossSum(e)" :label="`기타법인`"/></td>
            <td><v-checkbox v-model="etcForeigner" @click="changeNotGrossSum(e)" :label="`기타외인`"/></td>
            <td><v-checkbox v-model="privateEquity" @click="changeNotGrossSum(e)" :label="`사모펀드`"/></td>
          </tr>
        </table>
        <v-simple-table>
        <thead>
          <tr>
            <th class="text-left">
              항목수(길이){{ inOnLftRowLength }}
            </th>
            <th class="text-left">
              단위(백만)
            </th>
             <th class="text-left">
               <v-btn
                color="primary"
                elevation="4"
                small
                v-on:click="onBtnExport()"
              >CSV 다운로드</v-btn>
            </th>
          </tr>
        </thead>
        <!-- <tbody><tr><td></td><td></td></tr></tbody> @selection-changed="getSelectedRows" @row-selected-->
    </v-simple-table>
    </div>
    <ag-grid-vue 
        style="width: 100%; height: 100%;"
        class="ag-theme-alpine"
        :columnDefs="this.$store.state.quickInterestStockLeftGridColumns"
        :rowData="this.$store.state.rowData"
        rowSelection="single"
        @grid-ready="onGridReady"
        @cell-clicked="getSelectedRows"
        :defaultColDef="this.$store.state.defaultColDef"
        >
    </ag-grid-vue>
  </v-app>
</template>
<script>
import { AgGridVue } from "ag-grid-vue";
import VueEnglishdatepicker from 'vue-englishdatepicker';
import {mapGetters, mapState, mapMutations, mapActions} from 'vuex';

export default {
  computed: {
    ...mapGetters(['inOnLftRowLength', 'getStkNm']),
    /** 다른 방법
     * ...mapGetters({
     *    lth: 'inOnLftRowLength', // 해당 컴포넌트 내에서, 'inOnLftRowLength'를 lth로 사용하겠다.
     *    stockName: 'getStkNm', // 해당 컴포넌트 내에서, 'getStkNm'를 stockName로 사용하겠다.
     * })
     */
    ...mapState(['inOnLftRowData', 'rowData'])
  },
  created() {
     console.log('created');
  },
  beforeMount() {
    console.log('beforeMount');
    this.todate = this.$moment(new Date()).format('YYYY-MM-DD');
    this.fromdate = this.$moment(new Date()).add(-7, 'days').format('YYYY-MM-DD');
    this.$store.state.inOnLftRowData = [];
    this.$store.dispatch('emptyRowData', []); // dispatch 액션(비동기 처리를 위해 사용함.)
  },
  mounted(){
    // 이벤트버스 활용 예
    /**  
     * // 받는 부분
     * EventBus.$on('signUp', users => {
     *   this.allUsers.push(users);
     * });
     */

    /**
     * // 보내는 부분
     * EventBus.$emit('signUp', userObj);
     */
  },
  name: 'QuickInterestStock',
  methods: {
     onBtnExport() {
      this.gridApi.exportDataAsCsv(); 
     },
    ...mapMutations(['callInOnLftRowData']), // 'emptyRowData'
    ...mapActions(['emptyRowData']),
    keyFromDate(e){
      console.log('keyUpFromDate e;;;'+e);
    },
    changeNotGrossSum(e){
      console.log('changeNotGrossSum e;;;'+e);
      if(this.finance && this.foreigner && this.finance && this.insurance
      && this.investment && this.bank && this.etcFinance && this.pensionFund
      && this.government && this.etcCorp && this.etcForeigner && this.privateEquity){
        this.grossSum = true;
        return;
      }
      if(!e){
        this.grossSum = false;
        return;
      }
    },
    changeGrossSum(){
      this.foreigner = this.grossSum;
      this.finance = this.grossSum;
      this.insurance = this.grossSum;
      this.investment = this.grossSum;
      this.bank = this.grossSum;
      this.etcFinance = this.grossSum;
      this.pensionFund = this.grossSum;
      this.government = this.grossSum;
      this.etcCorp = this.grossSum;
      this.etcForeigner = this.grossSum;
      this.privateEquity = this.grossSum;
    },
    changeFromDate(e){
      this.fromdate = e;
    },
    changeToDate(e){
      this.todate = e;
    },

    async interest1() {
      this.inter1 = true;
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
        alert('toDate가 fromDate보다 작을 수 없습니다. \n다시 선택하세요!');
        return;
      }
      let postData = {
        fromdate: this.fromdate, 
        todate: this.todate,
        checkbx: {
          individual: this.individual,
          grossSum: this.grossSum,
          foreigner: this.foreigner,
          finance: this.finance,
          insurance: this.insurance,
          investment: this.investment,
          bank: this.bank,
          etcFinance: this.etcFinance,
          pensionFund: this.pensionFund,
          government: this.government,
          etcCorp: this.etcCorp,
          etcForeigner: this.etcForeigner,
          privateEquity: this.privateEquity,
        },
      };
      await this.$store.commit('callInOnLftRowData', []);
      // this.$store.state.rowData = []; // mapState 선언 되있으면, this.rowData;
      // this.emptyRowData([]);
      // this.$store.commit('emptyRowData', []); // mapMutations 선언 되있으면, this.emptyRowData([]);
      // 액션함수를 불러올 때, dispatch 함수를 사용한다.
      await this.$store.dispatch('emptyRowData', []); // mapActions 선언 되있으면, this.emptyRowData([]);
      try {
        await this.$store.dispatch('callQuickInterestStockLeft', postData);
      } catch(error){
        console.log(error);
      }
    },

    interest1Change(){
      console.log('inter1 changed...');
    },

    async interest2() {
      this.inter1 = false;
      this.inter2 = true;
      console.log("interest2()...");
    },

    onGridReady(params) {
      this.gridApi = params.api;
      this.columnApi = params.columnApi;
      // this.gridApi.sizeColumnsToFit();
    },
    async getSelectedRows() {
      const selectedNodes = this.gridApi.getSelectedNodes();
      const selectedData = selectedNodes.map(node => node.data);
      const csvFileName = selectedData[0].fileTitle;
      const stockName = selectedData[0].stockName;
      try {
        await this.$store.dispatch('callStockRight', { 
          csvFileName
          , stockName
          , fromdate: this.fromdate
          , todate: this.todate
          , category: 'quickOne'
        });
        await this.$store.dispatch('callShortSelling', { 
          csvFileName
          , stockName
          , fromdate: this.fromdate
          , todate: this.todate
          , category: 'quickOne'
        });
        await this.$store.dispatch('callLoanTransaction', { 
          csvFileName
          , stockName
          , fromdate: this.fromdate
          , todate: this.todate
          , category: 'quickOne'
        });
      } catch(error){
        console.log(error);
      }
    },
  },
  components: {
    AgGridVue,
    VueEnglishdatepicker,
  },
  data: () => ({
    // spinner
    loading: false,

    // ag grid 관련
    columnDefs: null,
    
    // 관심1 라디오 박스
    inter1: false,
    // 관심1 체크: 개인
    individual: false,
    // 관심1 체크: 세력합
    grossSum: true,
    // 관심1 체크: 외인
    foreigner: true,
    // 관심1 체크: 금융
    finance: true,
    // 관심1 체크: 보험
    insurance: true,
    // 관심1 체크: 투신
    investment: true,
    // 관심1 체크: 은행
    bank: true,
    // 관심1 체크: 기타금융
    etcFinance: true,
    // 관심1 체크: 연기금
    pensionFund: true,
    // 관심1 체크: 국가
    government: true,
    // 관심1 체크: 기타법인
    etcCorp: true,
    // 관심1 체크: 기타외인
    etcForeigner: true,
    // 관심1 체크: 사모펀드
    privateEquity: true,
    // ///////////////////////////////////////////////////
    // 관심2 라디오 박스
    inter2: false,
    
    
  }),
}
</script>

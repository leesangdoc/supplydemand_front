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
    <!-- <div class="loader" v-if="this.$store.state.spinnerLoading">데이터를 불러오고 있습니다. 잠시만 기다려주세요.....</div> -->
    <v-radio-group v-model="row" row column :disabled=this.$store.state.spinnerLoading>
      <v-radio label="관심1" value="radio-1" @click="interest1" @change="interest1Change"></v-radio>
      <v-radio label="관심2" value="radio-2" @click="interest2" @change="interest2Change"></v-radio>
    </v-radio-group>
    <div v-if="inter1">
      설명: 특정 세력별 수급분석
      <table width="100%">
        <tr><td>FROM(달력):</td>
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
          <td>TO(달력):</td>
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
          </tr>
          <tr>
            
            <td><v-checkbox v-model="bank" @click="changeNotGrossSum(e)" :label="`은행`"/></td>
            <td><v-checkbox v-model="etcFinance" @click="changeNotGrossSum(e)" :label="`기타금융`"/></td>
            <td><v-checkbox v-model="pensionFund" @click="changeNotGrossSum(e)" :label="`연기금`"/></td>
            <td><v-checkbox v-model="government" @click="changeNotGrossSum(e)" :label="`국가`"/></td>
            <td><v-checkbox v-model="etcCorp" @click="changeNotGrossSum(e)" :label="`기타법인`"/></td>
            <td><v-checkbox v-model="etcForeigner" @click="changeNotGrossSum(e)" :label="`기타외인`"/></td>
          </tr>
          <tr>
            <td><v-checkbox v-model="privateEquity" @click="changeNotGrossSum(e)" :label="`사모펀드`"/></td>
            <td>
            <v-btn
              icon
              color="primary"
              dark
              @click="getInterest1">
              <v-icon>mdi-magnify</v-icon>
            </v-btn>
          </td>
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
    </v-simple-table>
    </div>
    <div v-if="inter2">
      설명: 특정날짜 특정 이평선 상향돌파와 하향돌파
      <table width="100%">
        <tr>
          <th>FROM(달력):</th>
          <td>
            <v-menu
          v-model="menu3"
          :close-on-content-click="false"
          :nudge-right="40"
          transition="scale-transition"
          offset-y
          min-width="auto"
        >
          <template v-slot:activator="{ on, attrs }">
            <!-- label="Picker without buttons" -->
            <v-text-field
              v-model="searchDate2"
              prepend-icon="mdi-calendar"
              readonly
              v-bind="attrs"
              v-on="on"
            ></v-text-field>
          </template>
          <v-date-picker
            v-model="searchDate2"
            @input="menu3 = false"
          ></v-date-picker>
        </v-menu>
          </td>
          <th>TO(달력):</th>
          <td>
            <v-menu
          v-model="menu4"
          :close-on-content-click="false"
          :nudge-right="40"
          transition="scale-transition"
          offset-y
          min-width="auto"
        >
          <template v-slot:activator="{ on, attrs }">
            <!-- label="Picker without buttons" -->
            <v-text-field
              v-model="searchDate3"
              prepend-icon="mdi-calendar"
              readonly
              v-bind="attrs"
              v-on="on"
            ></v-text-field>
          </template>
          <v-date-picker
            v-model="searchDate3"
            @input="menu4 = false"
          ></v-date-picker>
        </v-menu>
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
        <tr>
          
          
        </tr>
        <tr>
          <th>업종:</th>
          <td :style= "{width: '250px'}">
            <v-select
              v-model="defaultSelected"
              :items="this.$store.state.industries"
              :menu-props="{ maxHeight: '300' }"
              label="Select"
              dense
              full-width
              @change="selectIndustries"
              persistent-hint
              return-object
              single-line
            ></v-select>
          </td>
          <th>이평선:</th>
          <td :style= "{width: '200px'}">
            <v-text-field
              @change = "changeAvgLine"
              label="AVG Line..."
              :value="this.$store.state.avgLineList"
            ></v-text-field>
          </td>
        </tr>
        <tr>
          <th>이평선 돌파:</th>
          <td :style= "{width: '250px'}">
            <v-select
              v-model="defaultAvgCrossSelected"
              :items="this.$store.state.avgCross"
              :menu-props="{ maxHeight: '300' }"
              label="Select"
              dense
              full-width
              @change="selectAvgCross"
              persistent-hint
              return-object
              single-line
            ></v-select>
          </td>
          <th>매수주체:</th>
          <td :style= "{width: '250px'}">
            <v-select
              v-model="defaultBuySubjectSelected"
              :items="this.$store.state.buySubject"
              :menu-props="{ maxHeight: '300' }"
              label="Select"
              dense
              full-width
              @change="selectBuySubject"
              persistent-hint
              return-object
              single-line
            ></v-select>
          </td>
        </tr>
      </table>
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
     console.log('window.innerHeight;;;', window.innerHeight);
     console.log('window.innerWidth;;;', window.innerWidth);
    //  window.addEventListener("scroll", this.onScroll)

    // v-bind:style="{top: (window.innerHeight / 2)+'px', left: (window.innerWidth / 2)+'px', zIndex:2, position:absolute}"
    
  },
  beforeMount() {
    console.log('beforeMount');
    this.todate = this.$moment(new Date()).format('YYYY-MM-DD');
    this.fromdate = this.$moment(new Date()).add(-7, 'days').format('YYYY-MM-DD');
    this.searchDate2 = this.$moment(new Date()).add(-7, 'days').format('YYYY-MM-DD');
    this.searchDate3 = this.$moment(new Date()).format('YYYY-MM-DD');
    this.$store.state.inOnLftRowData = [];
    this.$store.dispatch('emptyRowData', []); // dispatch 액션(비동기 처리를 위해 사용함.)
    this.$store.dispatch('callQuickInterestTwoIndustrySelectBox', []);
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
    window.addEventListener('resize', this.handleResize);
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.handleResize);
  },
  name: 'QuickInterestStock',
  
  methods: {
    handleResize(event) {
      this.bgWidth = ((window.innerWidth / 2)-40)+'px';
      this.bgHeight = ((window.innerHeight / 2)-200)+'px';
      console.log(event);
    }
    , changeAvgLine(e){
      this.$store.commit('setAvgLineList', e);
    }
    , async selectIndustries(e){
      this.$store.commit('setSendIndustry', e);
    }
    , async selectAvgCross(e){
        this.$store.commit('setSendAvgCross', e);
    }
    , async selectBuySubject(e){
      this.$store.commit('setSendBuySubject', e);
    }
    , async validationCheckAvgLineList() {
        let resultBool = this.$store.dispatch('validationCheckAvgLineList', this.$store.state.avgLineList);
        resultBool.then((result)=>{
          resultBool = result;
        }).catch(function(error) {
          console.log(error);
          resultBool = false;
        });
        return resultBool;
    }

    , async searchData(){
        try{
          let resultBool = this.validationCheckAvgLineList();
          
          if (!resultBool){
            return;
          }

          if(this.$store.state.spinnerLoading){
            alert('아직 조회중입니다. 조회가 끝나고 버튼을 클릭해주세요.');
            return;
          }
          let num = this.searchDate2.replace(/-/gi, "").toString();
          if( isNaN(parseInt(this.searchDate2.replace(/-/gi, ""))) 
              || !Number(this.searchDate2.replace(/-/gi, ""))
              || num.length != 8) {
            alert('관심2 조회 FROM 일자를 정확하게 입력하세요!');
            return;
          }
          let num3 = this.searchDate3.replace(/-/gi, "").toString();
          if( isNaN(parseInt(this.searchDate3.replace(/-/gi, ""))) 
              || !Number(this.searchDate3.replace(/-/gi, ""))
              || num3.length != 8) {
            alert('관심2 조회 TO 일자를 정확하게 입력하세요!');
            return;
          }
          if(parseInt(this.searchDate2.replace(/-/gi, "")) > parseInt(this.searchDate3.replace(/-/gi, ""))){
            alert('toDate가 fromDate보다 작을 수 없습니다. \n다시 선택하세요!');
            return;
          }
          if( this.$store.state.sendIndustry === null ||
              this.$store.state.sendIndustry === undefined || 
              this.$store.state.sendIndustry === ''){
            alert('업종을 선택해주세요!');
            return;
          }
          if( typeof this.$store.state.avgLineList === 'string' 
              || this.$store.state.avgLineList === '' 
              || this.$store.state.avgLineList.length === 0){
            alert('검색을 원하는 이평선 일수를 1개 이상 입력 해주세요(4개 이하).\n5, 10, 20, 60, 100, 200일선 제외.\n예) 100,200,300,400');
            return;
          }
          if(this.$store.state.avgLineList.length > 4){
            alert('이평선은 최대 4개까지 입력 가능합니다.\n예) 100,200,300,400');
            return;
          }
          let postData = { 
            searchDate2: this.searchDate2
            , searchDate3: this.searchDate3
            , category: 'interestTwo'
            , industry: this.$store.state.sendIndustry
            , avgLineList: this.$store.state.avgLineList
            , avgCross: this.$store.state.sendAvgCross
            , buySubject: this.$store.state.sendBuySubject
          };
          await this.$store.dispatch('callQuickInterestTwoStockLeft', postData);
        } catch(error){
          console.log(error);
        }
    }
     , onBtnExport() {
      this.gridApi.exportDataAsCsv(); 
     },
    ...mapMutations(['callInOnLftRowData']), // 'emptyRowData'
    ...mapActions(['emptyRowData']),
    keyFromDate(e){
      console.log('keyUpFromDate e;;;'+e);
    },
    changeNotGrossSum(e){
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
    }
    , async interest2() {
      this.inter1 = false;
      this.inter2 = true;
      this.$store.dispatch('emptyRowData', []);
    }
    , async interest1() {
      this.inter1 = true;
      this.inter2 = false;
      this.$store.dispatch('emptyRowData', []);
    }
    , async getInterest1(){
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
          category: 'interestOne',
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

    async interest1Change(){
      console.log('inter1 changed...');
      await this.$store.commit('setInterestValue', 'interestOne'); 
      
    },

    async interest2Change(){
      console.log('inter2 changed...');
      await this.$store.commit('setInterestValue', 'interestTwo'); 
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
      // console.log('selectedData;;;;;', selectedData);
      try {
        if (this.$store.state.interestValue === 'interestTwo'){
          if(JSON.stringify(this.$store.state.avgLineList) != JSON.stringify(selectedData[0].avgList)){
            alert('변경된 이평선을 조회하기 위해 그리드를 재조회 후 사용해주세요!\n변경전: '+ selectedData[0].avgList + '\n변경후: '+ this.$store.state.avgLineList);
            return;
          }
          let resultBool = this.validationCheckAvgLineList();
          if (!resultBool){
            return;
          }
        }
        await this.$store.dispatch('callStockRight', { 
          csvFileName: csvFileName
          , stockName
          , fromdate: this.fromdate
          , todate: this.todate
          , category: 'quickOne'
          , radioBoxKind: this.$store.state.interestValue
          , avgLineList: this.$store.state.avgLineList
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
        await this.$store.dispatch('callVolume', { 
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
  },
  data: () => ({
    menu1: false,
    menu2: false,
    menu3: false,
    menu4: false,
    bgWidth: ((window.innerWidth / 2)-40)+'px',
    bgHeight: ((window.innerHeight / 2)-200)+'px',
    bgPosition: 'absolute',
    bgZindex: 2,
    
    interestTwoTextField: '',
    defaultSelected: {text: '전체', value: '000'},
    defaultAvgCrossSelected: {text: '골든크로스', value: 'avgUp'},
    defaultBuySubjectSelected: {text: '세력합', value: 'grossSum'},
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

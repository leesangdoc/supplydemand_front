import Vuex from 'vuex'
import Vue from 'vue'

Vue.use(Vuex);

export default new Vuex.Store({
    // 데이타
    state: {

        industryRankingColumns: [
            { headerName: '주체', field: 'period', width: 100}
            , { headerName: '1위', field: 'No1', width: 140}
            , { headerName: '2위', field: 'No2', width: 140}
            , { headerName: '3위', field: 'No3', width: 140}
            , { headerName: '4위', field: 'No4', width: 140}
            , { headerName: '5위', field: 'No5', width: 140}
            , { headerName: '6위', field: 'No6', width: 140}
            , { headerName: '7위', field: 'No7', width: 140}
            , { headerName: '8위', field: 'No8', width: 140}
            , { headerName: '9위', field: 'No9', width: 140}
            , { headerName: '10위', field: 'No10', width: 140}
            , { headerName: '11위', field: 'No11', width: 140}
            , { headerName: '12위', field: 'No12', width: 140}
            , { headerName: '13위', field: 'No13', width: 140}
            , { headerName: '14위', field: 'No14', width: 140}
            , { headerName: '15위', field: 'No15', width: 140}
            , { headerName: '16위', field: 'No16', width: 140}
            , { headerName: '17위', field: 'No17', width: 140}
            , { headerName: '18위', field: 'No18', width: 140}
            , { headerName: '19위', field: 'No19', width: 140}
            , { headerName: '20위', field: 'No20', width: 140}
            , { headerName: '21위', field: 'No21', width: 140}
            , { headerName: '22위', field: 'No22', width: 140}
            , { headerName: '주체', field: 'source', hide: true }
        ],
        // 업종흐름(코스피)
        kospiIndustryRankingArr: [],
        kospiIndustryRankingRowData: [],
        // 관심1 로우 데이터
        inOnLftRowData: [],
        // 관심1 로우 데이터 클릭 시, 주식명
        inOnLftClkStkNm: '',
        // 현재 그리드 상에 보여주는 로우 데이터
        rowData: [],
        defaultColDef: { resizable: true, },
        // 관심1 우측 차트2 매집량 관련
        acuIndividualStkInfo: [],
        acuForeignerStkInfo: [],
        acuFinanceStkInfo: [],
        acuInsuranceStkInfo: [],
        acuInvestmentStkInfo: [],
        acuBankStkInfo: [],
        acuEtcFinanceStkInfo: [],
        acuPensionFundStkInfo: [],
        acuGovernmentStkInfo: [],
        acuEtcCorpStkInfo: [],
        acuEtcForeignerStkInfo: [],
        acuPrivateEquityStkInfo: [],
        acuGrossSumStkInfo: [],
        // 관심1 우측 차트3 분산비율 관련
        indiDispersionArr: [],
        foreignerDispersionArr: [],
        financeInvestDispersionArr: [],
        insuranceDispersionArr: [],
        assetManageDispersionArr: [],
        bankDispersionArr: [],
        etcFinanceDispersionArr: [],
        pensionFundDispersionArr: [],
        governmentDispersionArr: [],
        etcCoporDispersionArr: [],
        etcForeignerDispersionArr: [],
        privateEquityDispersionArr: [],
        grossSumDispersionArr: [],
        // 관심1 하단 1번째 평균단가 그리드
        averagePriceRowData: [],
        // 관심1 하단 2번째 그리드
        resultRowData: [],
    },
    // computed 같은??
    getters:{
        // QuickInterestStockRight.vue <h1>{{$store.getters.getStkNm}}</h1> 참조
        // state를 사용한다고 반드시 알려줘야 함.
        getStkNm: function(state){
            return state.inOnLftClkStkNm;
        },
        inOnLftRowLength: state => {
            return state.inOnLftRowData.length;
        },
        // 만약 getStkNm랑 inOnLftRowLength를 직접 사용하고 싶을때...
        /** 2번째 인자로 getters가 들어오기 때문에 2개 인자로 넣어야 함.
         * percentOfSeoul: (state, getters) =>{
         *   return getters.getStkNm / getters.inOnLftRowLength // 이런식으로 사용가능
         * }
         */
    },
    // state 값을 변화 시키는 부분(통일시켜서 사용하기 위해 여기에 만듬).
    mutations: {
        emptyRowData: (state, payload)=> {
            console.log("payload;;;", payload);
            state.rowData = payload;
        },
        changeIndustryRankingData: (state, payload)=>{
            console.log("changeIndustryRankingData;;;", payload);
            console.log("state.kospiIndustryRankingArr[payload];;;", state.kospiIndustryRankingArr[payload]);
            state.kospiIndustryRankingRowData = state.kospiIndustryRankingArr[payload];
        }
    },
    // 
    actions: {
        // 액션 함수명... 뮤테이션과는 다르나 이름을 매치시켜야 구분하기 쉬움.
        emptyRowData: ({commit}, payload) => {
            commit('emptyRowData', payload);
        },
        changeIndustryRankingData: ({commit}, payload) => {
            commit('changeIndustryRankingData', payload);
        },
    },

});


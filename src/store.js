import Vuex from 'vuex'
import Vue from 'vue'

Vue.use(Vuex);

export default new Vuex.Store({
    // 데이타
    state: {
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
    },
    // 
    actions: {
        // 액션 함수명... 뮤테이션과는 다르나 이름을 매치시켜야 구분하기 쉬움.
        emptyRowData: ({commit}, payload) => {
            commit('emptyRowData', payload);
        },
    },

});


import Vuex from 'vuex'
import Vue from 'vue'
import {CommonUtil} from './CommonUtil';

Vue.use(Vuex);

const commonUtil = new CommonUtil(); 
export default new Vuex.Store({
    // 데이타
    state: {

        industryHeroRankingColumns: [
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
            , { headerName: '주체', field: 'source', hide: true }
        ],

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

        industryCashFlowColumns: [
            { headerName: '업종', field: 'title', width: 120}
            , { headerName: '1D', field: '1day', width: 120, valueFormatter: commonUtil.curruncyFormatter, cellStyle: commonUtil.cellStyleFormatter}
            , { headerName: '2D', field: '2day', width: 120, valueFormatter: commonUtil.curruncyFormatter, cellStyle: commonUtil.cellStyleFormatter}
            , { headerName: '3D', field: '3day', width: 120, valueFormatter: commonUtil.curruncyFormatter, cellStyle: commonUtil.cellStyleFormatter}
            , { headerName: '4D', field: '4day', width: 120, valueFormatter: commonUtil.curruncyFormatter, cellStyle: commonUtil.cellStyleFormatter}
            , { headerName: '5D', field: '5day', width: 120, valueFormatter: commonUtil.curruncyFormatter, cellStyle: commonUtil.cellStyleFormatter}
            , { headerName: '1W', field: '1week', width: 120, valueFormatter: commonUtil.curruncyFormatter, cellStyle: commonUtil.cellStyleFormatter}
            , { headerName: '2W', field: '2week', width: 120, valueFormatter: commonUtil.curruncyFormatter, cellStyle: commonUtil.cellStyleFormatter}
            , { headerName: '3W', field: '3week', width: 120, valueFormatter: commonUtil.curruncyFormatter, cellStyle: commonUtil.cellStyleFormatter}
            , { headerName: '4W', field: '4week', width: 120, valueFormatter: commonUtil.curruncyFormatter, cellStyle: commonUtil.cellStyleFormatter}
            , { headerName: '1M', field: '1month', width: 120, valueFormatter: commonUtil.curruncyFormatter, cellStyle: commonUtil.cellStyleFormatter}
            , { headerName: '2M', field: '2month', width: 120, valueFormatter: commonUtil.curruncyFormatter, cellStyle: commonUtil.cellStyleFormatter}
            , { headerName: '3M', field: '3month', width: 120, valueFormatter: commonUtil.curruncyFormatter, cellStyle: commonUtil.cellStyleFormatter}
            , { headerName: '1Q', field: 'firstQuarter', width: 120, valueFormatter: commonUtil.curruncyFormatter, cellStyle: commonUtil.cellStyleFormatter}
            , { headerName: '2Q', field: 'secondQuarter', width: 120, valueFormatter: commonUtil.curruncyFormatter, cellStyle: commonUtil.cellStyleFormatter}
            , { headerName: '3Q', field: 'thirdQuarter', width: 120, valueFormatter: commonUtil.curruncyFormatter, cellStyle: commonUtil.cellStyleFormatter}
            , { headerName: '4Q', field: 'fourthQuarter', width: 120, valueFormatter: commonUtil.curruncyFormatter, cellStyle: commonUtil.cellStyleFormatter}
            , { headerName: '1Y', field: '1year', width: 120, valueFormatter: commonUtil.curruncyFormatter, cellStyle: commonUtil.cellStyleFormatter}
            , { headerName: '2Y', field: '2year', width: 120, valueFormatter: commonUtil.curruncyFormatter, cellStyle: commonUtil.cellStyleFormatter}
            , { headerName: '3Y', field: '3year', width: 120, valueFormatter: commonUtil.curruncyFormatter, cellStyle: commonUtil.cellStyleFormatter}
            , { headerName: '4Y', field: '4year', width: 120, valueFormatter: commonUtil.curruncyFormatter, cellStyle: commonUtil.cellStyleFormatter}
            , { headerName: '5Y', field: '5year', width: 120, valueFormatter: commonUtil.curruncyFormatter, cellStyle: commonUtil.cellStyleFormatter}
            , { headerName: '6Y', field: '6year', width: 120, valueFormatter: commonUtil.curruncyFormatter, cellStyle: commonUtil.cellStyleFormatter}
            , { headerName: '7Y', field: '7year', width: 120, valueFormatter: commonUtil.curruncyFormatter, cellStyle: commonUtil.cellStyleFormatter}
            , { headerName: '8Y', field: '8year', width: 120, valueFormatter: commonUtil.curruncyFormatter, cellStyle: commonUtil.cellStyleFormatter}
            
        ],

        // 업종흐름순위(코스피)
        kospiIndustryRankingArr: [],
        kospiIndustryRankingRowData: [],
        kospiIndustryHeroRankingRowData: [],
        // 업종 돈냄새(코스피)
        kospiIndustryCashFlowArr: [],
        kospiIndustryCashFlowRowData: [],

        // 업종흐름순위(코스닥)
        kosdaqIndustryRankingArr: [],
        kosdaqIndustryRankingRowData: [],
        kosdaqIndustryHeroRankingRowData: [],
        // 업종 돈냄새(코스닥)
        kosdaqIndustryCashFlowArr: [],
        kosdaqIndustryCashFlowRowData: [],



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
            state.rowData = payload;
        },
        changeKospiIndustryRankingData: (state, payload)=>{
            state.kospiIndustryRankingRowData = state.kospiIndustryRankingArr[payload];
        },
        changeKospiIndustryCashFlowData: (state, payload)=>{
            state.kospiIndustryCashFlowRowData = state.kospiIndustryCashFlowArr[payload];
        },
        changeKospiIndustryHeroRankingData: (state, payload)=>{
            state.kospiIndustryHeroRankingRowData = state.kospiIndustryRankingArr[payload];
        },

        changeKosdaqIndustryRankingData: (state, payload)=>{
            state.kosdaqIndustryRankingRowData = state.kosdaqIndustryRankingArr[payload];
        },
        changeKosdaqIndustryCashFlowData: (state, payload)=>{
            state.kosdaqIndustryCashFlowRowData = state.kosdaqIndustryCashFlowArr[payload];
        },
        changeKosdaqIndustryHeroRankingData: (state, payload)=>{
            state.kosdaqIndustryHeroRankingRowData = state.kosdaqIndustryRankingArr[payload];
        },
    },
    // 
    actions: {
        // 액션 함수명... 뮤테이션과는 다르나 이름을 매치시켜야 구분하기 쉬움.
        emptyRowData: ({commit}, payload) => {
            commit('emptyRowData', payload);
        },
        changeKospiIndustryRankingData: ({commit}, payload) => {
            commit('changeKospiIndustryRankingData', payload);
        },
        changeKospiIndustryCashFlowData: ({commit}, payload) => {
            commit('changeKospiIndustryCashFlowData', payload);
        },
        changeKospiIndustryHeroRankingData: ({commit}, payload) => {
            commit('changeKospiIndustryHeroRankingData', payload);
        },

        changeKosdaqIndustryRankingData: ({commit}, payload) => {
            commit('changeKosdaqIndustryRankingData', payload);
        },
        changeKosdaqIndustryCashFlowData: ({commit}, payload) => {
            commit('changeKosdaqIndustryCashFlowData', payload);
        },
        changeKosdaqIndustryHeroRankingData: ({commit}, payload) => {
            commit('changeKosdaqIndustryHeroRankingData', payload);
        },

        
    },

});


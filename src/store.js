import Vuex from 'vuex'
import Vue from 'vue'
import {CommonUtil} from './CommonUtil';
import axios from "axios";
import constants from "./Constants";
import chartSetting from "./ChartSetting"

Vue.use(Vuex);

const commonUtil = new CommonUtil(); 
export default new Vuex.Store({
    // data
    state: {
        // [시작] 지수흐름
        kospiMarketIndexAcuChart: chartSetting.acuChartOptions
        , kospiMarketIndexAcuHcInstance: chartSetting.hcInstance
        , kospiMarketIndexDispersionChart: chartSetting.dsprChartOptions
        , kospiMarketIndexDispersionHcInstance: chartSetting.hcInstance

        , kosdaqMarketIndexAcuChart: chartSetting.acuChartOptions
        , kosdaqMarketIndexAcuHcInstance: chartSetting.hcInstance

        // 지수흐름(코스피)
        , kospiMarketIndexFlow: {}

        // 지수흐름(코스닥)
        , kosdaqMarketIndexFlow: {}
        // [종료] 지수흐름

        , industryHeroRankingColumns: [
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
        ]

        , industryRankingColumns: [
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
        ]

        , industryCashFlowColumns: [
            { headerName: '업종', field: 'title', minWidth: 120}
            , { headerName: '1D', field: '1day', minWidth: 120, valueFormatter: commonUtil.curruncyFormatter, cellStyle: commonUtil.cellStyleFormatter}
            , { headerName: '2D', field: '2day', minWidth: 120, valueFormatter: commonUtil.curruncyFormatter, cellStyle: commonUtil.cellStyleFormatter}
            , { headerName: '3D', field: '3day', minWidth: 120, valueFormatter: commonUtil.curruncyFormatter, cellStyle: commonUtil.cellStyleFormatter}
            , { headerName: '4D', field: '4day', minWidth: 120, valueFormatter: commonUtil.curruncyFormatter, cellStyle: commonUtil.cellStyleFormatter}
            , { headerName: '5D', field: '5day', minWidth: 120, valueFormatter: commonUtil.curruncyFormatter, cellStyle: commonUtil.cellStyleFormatter}
            , { headerName: '1W', field: '1week', minWidth: 120, valueFormatter: commonUtil.curruncyFormatter, cellStyle: commonUtil.cellStyleFormatter}
            , { headerName: '2W', field: '2week', minWidth: 120, valueFormatter: commonUtil.curruncyFormatter, cellStyle: commonUtil.cellStyleFormatter}
            , { headerName: '3W', field: '3week', minWidth: 120, valueFormatter: commonUtil.curruncyFormatter, cellStyle: commonUtil.cellStyleFormatter}
            , { headerName: '4W', field: '4week', minWidth: 120, valueFormatter: commonUtil.curruncyFormatter, cellStyle: commonUtil.cellStyleFormatter}
            , { headerName: '1M', field: '1month', minWidth: 120, valueFormatter: commonUtil.curruncyFormatter, cellStyle: commonUtil.cellStyleFormatter}
            , { headerName: '2M', field: '2month', minWidth: 120, valueFormatter: commonUtil.curruncyFormatter, cellStyle: commonUtil.cellStyleFormatter}
            , { headerName: '3M', field: '3month', minWidth: 120, valueFormatter: commonUtil.curruncyFormatter, cellStyle: commonUtil.cellStyleFormatter}
            , { headerName: '1Q', field: 'firstQuarter', minWidth: 120, valueFormatter: commonUtil.curruncyFormatter, cellStyle: commonUtil.cellStyleFormatter}
            , { headerName: '2Q', field: 'secondQuarter', minWidth: 120, valueFormatter: commonUtil.curruncyFormatter, cellStyle: commonUtil.cellStyleFormatter}
            , { headerName: '3Q', field: 'thirdQuarter', minWidth: 120, valueFormatter: commonUtil.curruncyFormatter, cellStyle: commonUtil.cellStyleFormatter}
            , { headerName: '4Q', field: 'fourthQuarter', minWidth: 120, valueFormatter: commonUtil.curruncyFormatter, cellStyle: commonUtil.cellStyleFormatter}
            , { headerName: '1Y', field: '1year', minWidth: 120, valueFormatter: commonUtil.curruncyFormatter, cellStyle: commonUtil.cellStyleFormatter}
            , { headerName: '2Y', field: '2year', minWidth: 120, valueFormatter: commonUtil.curruncyFormatter, cellStyle: commonUtil.cellStyleFormatter}
            , { headerName: '3Y', field: '3year', minWidth: 120, valueFormatter: commonUtil.curruncyFormatter, cellStyle: commonUtil.cellStyleFormatter}
            , { headerName: '4Y', field: '4year', minWidth: 120, valueFormatter: commonUtil.curruncyFormatter, cellStyle: commonUtil.cellStyleFormatter}
            , { headerName: '5Y', field: '5year', minWidth: 120, valueFormatter: commonUtil.curruncyFormatter, cellStyle: commonUtil.cellStyleFormatter}
            , { headerName: '6Y', field: '6year', minWidth: 120, valueFormatter: commonUtil.curruncyFormatter, cellStyle: commonUtil.cellStyleFormatter}
            , { headerName: '7Y', field: '7year', minWidth: 120, valueFormatter: commonUtil.curruncyFormatter, cellStyle: commonUtil.cellStyleFormatter}
            , { headerName: '8Y', field: '8year', minWidth: 120, valueFormatter: commonUtil.curruncyFormatter, cellStyle: commonUtil.cellStyleFormatter}
        ]

        // 업종흐름순위(코스피)
        , kospiIndustryRankingArr: []
        , kospiIndustryRankingRowData: []
        , kospiIndustryHeroRankingRowData: []
        
        // 업종 돈냄새(코스피)
        , kospiIndustryCashFlowArr: []
        , kospiIndustryCashFlowRowData: []

        // 업종흐름순위(코스닥)
        , kosdaqIndustryRankingArr: []
        , kosdaqIndustryRankingRowData: []
        , kosdaqIndustryHeroRankingRowData: []
        
        // 업종 돈냄새(코스닥)
        , kosdaqIndustryCashFlowArr: []
        , kosdaqIndustryCashFlowRowData: []

        // 관심1 로우 데이터
        , inOnLftRowData: []
        
        // 관심1 로우 데이터 클릭 시, 주식명
        , inOnLftClkStkNm: ''
        
        // 현재 그리드 상에 보여주는 로우 데이터
        , rowData: []
        , defaultColDef: { resizable: true, }
        
        // 관심1 우측 차트2 매집량 관련
        , acuIndividualStkInfo: []
        , acuForeignerStkInfo: []
        , acuFinanceStkInfo: []
        , acuInsuranceStkInfo: []
        , acuInvestmentStkInfo: []
        , acuBankStkInfo: []
        , acuEtcFinanceStkInfo: []
        , acuPensionFundStkInfo: []
        , acuGovernmentStkInfo: []
        , acuEtcCorpStkInfo: []
        , acuEtcForeignerStkInfo: []
        , acuPrivateEquityStkInfo: []
        , acuGrossSumStkInfo: []
        
        // 관심1 우측 차트3 분산비율 관련
        , indiDispersionArr: []
        , foreignerDispersionArr: []
        , financeInvestDispersionArr: []
        , insuranceDispersionArr: []
        , assetManageDispersionArr: []
        , bankDispersionArr: []
        , etcFinanceDispersionArr: []
        , pensionFundDispersionArr: []
        , governmentDispersionArr: []
        , etcCoporDispersionArr: []
        , etcForeignerDispersionArr: []
        , privateEquityDispersionArr: []
        , grossSumDispersionArr: []
        
        // 관심1 하단 1번째 평균단가 그리드
        , averagePriceRowData: []
        
        // 관심1 하단 2번째 그리드
        , resultRowData: []

        , stla: []
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
        callKospiMarketIndexFlow: (state, payload)=>{
            state.kospiMarketIndexFlow = payload;
            let response = payload;
            // state.kospiMarketIndexFlow.acuForeignerStkInfo = commonUtil.changeDate(response.acuForeignerStkInfo);
            // state.kospiMarketIndexAcuChart.series[1].data = state.kospiMarketIndexFlow.acuForeignerStkInfo;
            state.kospiMarketIndexAcuChart.title.text = "매집금액";
            state.kospiMarketIndexAcuChart.yAxis.title.text = "매집량 공식으로 환산";
            state.kospiMarketIndexAcuChart.series[0].data = commonUtil.changeDate(response.acuIndividualStkInfo);
            state.kospiMarketIndexAcuChart.series[1].data = commonUtil.changeDate(response.acuForeignerStkInfo);
            state.kospiMarketIndexAcuChart.series[2].data = commonUtil.changeDate(response.acuFinanceStkInfo);
            state.kospiMarketIndexAcuChart.series[3].data = commonUtil.changeDate(response.acuInsuranceStkInfo);
            state.kospiMarketIndexAcuChart.series[4].data = commonUtil.changeDate(response.acuInvestmentStkInfo);
            state.kospiMarketIndexAcuChart.series[5].data = commonUtil.changeDate(response.acuBankStkInfo);
            state.kospiMarketIndexAcuChart.series[6].data = commonUtil.changeDate(response.acuEtcFinanceStkInfo);
            state.kospiMarketIndexAcuChart.series[7].data = commonUtil.changeDate(response.acuPensionFundStkInfo);
            state.kospiMarketIndexAcuChart.series[8].data = commonUtil.changeDate(response.acuGovernmentStkInfo);
            state.kospiMarketIndexAcuChart.series[9].data = commonUtil.changeDate(response.acuEtcCorpStkInfo);
            state.kospiMarketIndexAcuChart.series[10].data = commonUtil.changeDate(response.acuEtcForeignerStkInfo);
            state.kospiMarketIndexAcuChart.series[11].data = commonUtil.changeDate(response.acuPrivateEquityStkInfo);
            state.kospiMarketIndexAcuChart.series[12].data = commonUtil.changeDate(response.acuGrossSumStkInfo);     

            state.kospiMarketIndexAcuChart.series[0].tooltip.valueSuffix = "십억원";
            state.kospiMarketIndexAcuChart.series[1].tooltip.valueSuffix = "십억원";
            state.kospiMarketIndexAcuChart.series[2].tooltip.valueSuffix = "십억원";
            state.kospiMarketIndexAcuChart.series[3].tooltip.valueSuffix = "십억원";
            state.kospiMarketIndexAcuChart.series[4].tooltip.valueSuffix = "십억원";
            state.kospiMarketIndexAcuChart.series[5].tooltip.valueSuffix = "십억원";
            state.kospiMarketIndexAcuChart.series[6].tooltip.valueSuffix = "십억원";
            state.kospiMarketIndexAcuChart.series[7].tooltip.valueSuffix = "십억원";
            state.kospiMarketIndexAcuChart.series[8].tooltip.valueSuffix = "십억원";
            state.kospiMarketIndexAcuChart.series[9].tooltip.valueSuffix = "십억원";
            state.kospiMarketIndexAcuChart.series[10].tooltip.valueSuffix = "십억원";
            state.kospiMarketIndexAcuChart.series[11].tooltip.valueSuffix = "십억원";
            state.kospiMarketIndexAcuChart.series[12].tooltip.valueSuffix = "십억원";

            state.kospiMarketIndexDispersionChart.series[0].data = commonUtil.changeDate(response.indiDispersionArr);
            state.kospiMarketIndexDispersionChart.series[1].data = commonUtil.changeDate(response.foreignerDispersionArr);
            state.kospiMarketIndexDispersionChart.series[2].data = commonUtil.changeDate(response.financeInvestDispersionArr);
            state.kospiMarketIndexDispersionChart.series[3].data = commonUtil.changeDate(response.insuranceDispersionArr);
            state.kospiMarketIndexDispersionChart.series[4].data = commonUtil.changeDate(response.assetManageDispersionArr);
            state.kospiMarketIndexDispersionChart.series[5].data = commonUtil.changeDate(response.bankDispersionArr);
            state.kospiMarketIndexDispersionChart.series[6].data = commonUtil.changeDate(response.etcFinanceDispersionArr);
            state.kospiMarketIndexDispersionChart.series[7].data = commonUtil.changeDate(response.pensionFundDispersionArr);
            state.kospiMarketIndexDispersionChart.series[8].data = commonUtil.changeDate(response.governmentDispersionArr);
            state.kospiMarketIndexDispersionChart.series[9].data = commonUtil.changeDate(response.etcCoporDispersionArr);
            state.kospiMarketIndexDispersionChart.series[10].data = commonUtil.changeDate(response.etcForeignerDispersionArr);
            state.kospiMarketIndexDispersionChart.series[11].data = commonUtil.changeDate(response.privateEquityDispersionArr);
            state.kospiMarketIndexDispersionChart.series[12].data = commonUtil.changeDate(response.grossSumDispersionArr);  
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

        callKospiMarketIndexFlow: ({commit}, payload) => {
            console.log('action callKospiMarketIndexFlow passed!');
            axios.post(
                `${constants.URL}${'kospiIndexAnalysis/'}`
                , {
                    headers: {
                      'Content-Type': 'application/json',
                      'Authorization': 'JWT fefege...'
                    }
                , payload})
            .then(function(response) {
                console.log('action callKospiMarketIndexFlow response;;;;;', response);
                commit('callKospiMarketIndexFlow', response.data);
            });
        },

        
    },

});


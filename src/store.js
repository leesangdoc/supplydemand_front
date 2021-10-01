import Vuex from 'vuex'
import Vue from 'vue'
import {CommonUtil} from './CommonUtil';
import axios from "axios";
import constants from "./Constants";
import chartSetting from "./ChartSetting"
import gridSetting from "./GridSetting"

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
        // [종료] 지수흐름
        , averagePriceGraphColumns: gridSetting.averagePriceGraphColumns
        , supplyDemandGraphColumns: gridSetting.supplyDemandGraphColumns
        // 지수흐름(코스피)
        , kospiMarketIndexFlow: {}

        // 지수흐름(코스닥)
        , kosdaqMarketIndexFlow: {}
        // [종료] 지수흐름
        , industryHeroRankingColumns: gridSetting.industryHeroRankingColumns
        , industryRankingColumns: gridSetting.industryRankingColumns
        , industryCashFlowColumns: gridSetting.industryCashFlowColumns

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
        }
        , changeKospiIndustryRankingData: (state, payload)=>{
            state.kospiIndustryRankingRowData = state.kospiIndustryRankingArr[payload];
        }
        , changeKospiIndustryCashFlowData: (state, payload)=>{
            state.kospiIndustryCashFlowRowData = state.kospiIndustryCashFlowArr[payload];
        }
        , changeKospiIndustryHeroRankingData: (state, payload)=>{
            state.kospiIndustryHeroRankingRowData = state.kospiIndustryRankingArr[payload];
        }
        , changeKosdaqIndustryRankingData: (state, payload)=>{
            state.kosdaqIndustryRankingRowData = state.kosdaqIndustryRankingArr[payload];
        }
        , changeKosdaqIndustryCashFlowData: (state, payload)=>{
            state.kosdaqIndustryCashFlowRowData = state.kosdaqIndustryCashFlowArr[payload];
        }
        , changeKosdaqIndustryHeroRankingData: (state, payload)=>{
            state.kosdaqIndustryHeroRankingRowData = state.kosdaqIndustryRankingArr[payload];
        }
        , callKosdaqIndustryRanking:(state, payload)=>{
            state.kosdaqIndustryRankingArr = payload;
        }
        , callKospiIndustryRanking:(state, payload)=>{
            state.kospiIndustryRankingArr = payload;
        }
        , callKospiMarketIndexFlow: (state, payload)=>{
            state.kospiMarketIndexFlow = payload;
            let response = payload;
            state.kospiMarketIndexAcuChart.title.text = "매집금액";
            state.kospiMarketIndexAcuChart.yAxis.title.text = "매집량 공식 적용";
            let acuChartInfo = [response.acuIndividualStkInfo, response.acuForeignerStkInfo, response.acuFinanceStkInfo
                                , response.acuInsuranceStkInfo, response.acuInvestmentStkInfo, response.acuBankStkInfo
                                , response.acuEtcFinanceStkInfo, response.acuPensionFundStkInfo, response.acuGovernmentStkInfo
                                , response.acuEtcCorpStkInfo, response.acuEtcForeignerStkInfo, response.acuPrivateEquityStkInfo
                                , response.acuGrossSumStkInfo];
            
            let dispersionInfo = [  response.indiDispersionArr, response.foreignerDispersionArr, response.financeInvestDispersionArr
                                    , response.insuranceDispersionArr, response.assetManageDispersionArr, response.bankDispersionArr
                                    , response.etcFinanceDispersionArr, response.pensionFundDispersionArr, response.governmentDispersionArr
                                    , response.etcCoporDispersionArr, response.etcForeignerDispersionArr, response.privateEquityDispersionArr
                                    , response.grossSumDispersionArr];

            for(let i=0; i < acuChartInfo.length; i++){
                state.kospiMarketIndexAcuChart.series[i].data = commonUtil.changeDate(acuChartInfo[i]);
                state.kospiMarketIndexDispersionChart.series[i].data = commonUtil.changeDate(dispersionInfo[i]);
                state.kospiMarketIndexAcuChart.series[i].tooltip.valueSuffix = "십억원";
            }

        } , callKosdaqIndustryCashFlow: (state, payload)=>{
            state.kosdaqIndustryCashFlowArr = payload;
        }, callKospiIndustryCashFlow: (state, payload)=>{
            state.kospiIndustryCashFlowArr = payload;
        }
    },
    // 
    actions: {
        // 액션 함수명... 뮤테이션과는 다르나 이름을 매치시켜야 구분하기 쉬움.
        emptyRowData: ({commit}, payload) => {
            commit('emptyRowData', payload);
        }
        , changeKospiIndustryRankingData: ({commit}, payload) => {
            commit('changeKospiIndustryRankingData', payload);
        }
        , changeKospiIndustryCashFlowData: ({commit}, payload) => {
            commit('changeKospiIndustryCashFlowData', payload);
        }
        , changeKospiIndustryHeroRankingData: ({commit}, payload) => {
            commit('changeKospiIndustryHeroRankingData', payload);
        }

        , changeKosdaqIndustryRankingData: ({commit}, payload) => {
            commit('changeKosdaqIndustryRankingData', payload);
        }
        , changeKosdaqIndustryCashFlowData: ({commit}, payload) => {
            commit('changeKosdaqIndustryCashFlowData', payload);
        }
        , changeKosdaqIndustryHeroRankingData: ({commit}, payload) => {
            commit('changeKosdaqIndustryHeroRankingData', payload);
        }

        , callKospiMarketIndexFlow: ({commit}, payload) => {
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
        }

        , callKosdaqIndustryCashFlow: ({commit}, payload) => {
            let postData = {
                _val: payload,
            };
            let ths = this;
            axios.post(
                `${constants.URL}${'kosdaqIndustryCashFlowResultList/'}`
                , {
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': 'JWT fefege...'
                }, postData})
            .then(function(response) {
                commit('callKosdaqIndustryCashFlow', response.data);
            })
            .then(function() {
                commit('changeKosdaqIndustryCashFlowData', payload.hero);
            })
            .catch(function(error) {
                ths.error = true;
                console.log(error);
            })
            .finally(()=>{});
        }, callKosdaqIndustryRanking: ({commit}, payload) => {
            let postData = {
                _val: payload,
            };
            let ths = this;
            axios.post(`${constants.URL}${'kosdaqIndustryRankingResultList/'}`
            , {
                headers: {
                    'Content-Type': 'application/json'
                    , 'Authorization': 'JWT fefege...'
            }, postData})
            .then(function(response) {
                commit('callKosdaqIndustryRanking', response.data);
            })
            .then(function() {
                commit('changeKosdaqIndustryRankingData', payload.hero);
                commit('changeKosdaqIndustryHeroRankingData', 'rank');
            })
            .catch(function(error) {
                ths.error = true;
                console.log(error);
            })
            .finally(()=>{
    
            });
        }, callKospiIndustryCashFlow: ({commit}, payload) => {
            let postData = {};
            axios.post(`${constants.URL}${'kospiIndustryCashFlowResultList/'}`,
            {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'JWT fefege...'
            }, postData})
            .then(function(response) {
                commit('callKospiIndustryCashFlow', response.data);
            })
            .then(function() {
                commit('changeKospiIndustryCashFlowData', payload.hero);
            })
            .catch(function(error) {
                console.log(error);
            })
            .finally(()=>{});
        }, callKospiIndustryRanking: ({commit}, payload) => {
            let postData = {
                _val: payload,
            };
            let ths = this;
            axios.post(`${constants.URL}${'kospiIndustryRankingResultList/'}`
            , {
                headers: {
                    'Content-Type': 'application/json'
                    , 'Authorization': 'JWT fefege...'
            }, postData})
            .then(function(response) {
                commit('callKospiIndustryRanking', response.data);
            })
            .then(function() {
                commit('changeKospiIndustryRankingData', payload.hero);
                commit('changeKospiIndustryHeroRankingData', 'rank');
            })
            .catch(function(error) {
                ths.error = true;
                console.log(error);
            })
            .finally(()=>{
    
            });
        }
    }
    

});


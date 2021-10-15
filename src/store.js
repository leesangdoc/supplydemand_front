import Vuex from 'vuex'
import Vue from 'vue'
import {CommonUtil} from './CommonUtil';
import axios from "axios";
import constants from "./Constants";
import chartSettingInOne from "./ChartSettingInOne"
import chartSettingKospiIndex from "./ChartSettingKospiIndex"
import chartSettingKosdaqIndex from "./ChartSettingKosdaqIndex"
import gridSetting from "./GridSetting"

Vue.use(Vuex);

const commonUtil = new CommonUtil();
const unvisibleArr = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
export default new Vuex.Store({
   
    // data
    state: {
      spinnerLoading: false 
      , quickInterestStockRightStockInfoChart: chartSettingInOne.closePriceChartOptions
      , quickInterestStockRightStockInfoHcInstance: chartSettingInOne.hcInstance

      , quickInterestStockRightAcuChart: chartSettingInOne.acuChartOptions
      , quickInterestStockRightAcuHcInstance: chartSettingInOne.hcInstance

      , quickInterestStockRightDispersionChart: chartSettingInOne.dsprChartOptions
      , quickInterestStockRightDispersionHcInstance: chartSettingInOne.hcInstance
      

      // [시작] 지수흐름
      , kospiMarketIndexAcuChart: chartSettingKospiIndex.acuChartOptions
      , kospiMarketIndexAcuHcInstance: chartSettingKospiIndex.hcInstance
      , kospiMarketIndexDispersionChart: chartSettingKospiIndex.dsprChartOptions
      , kospiMarketIndexDispersionHcInstance: chartSettingKospiIndex.hcInstance

      , kosdaqMarketIndexAcuChart: chartSettingKosdaqIndex.acuChartOptions
      , kosdaqMarketIndexAcuHcInstance: chartSettingKosdaqIndex.hcInstance
      , kosdaqMarketIndexDispersionChart: chartSettingKosdaqIndex.dsprChartOptions
      , kosdaqMarketIndexDispersionHcInstance: chartSettingKosdaqIndex.hcInstance

      // [종료] 지수흐름
      , averagePriceGraphColumns: gridSetting.averagePriceGraphColumns
      , supplyDemandGraphColumns: gridSetting.supplyDemandGraphColumns
      // 지수흐름(코스피)
      , kospiMarketIndexFlow: {}
      , kosdaqMarketIndexFlow: {}

      , industryHeroRankingColumns: gridSetting.industryHeroRankingColumns
      , industryRankingColumns: gridSetting.industryRankingColumns
      , industryCashFlowColumns: gridSetting.industryCashFlowColumns
      , quickInterestStockLeftGridColumns: gridSetting.quickInterestStockLeftGridColumns

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
        callInOnLftRowData: (state, payload)=> {
            state.inOnLftRowData  = payload;
        }, 
        callRowData: (state, payload)=> {
            state.rowData = payload;
        }, 
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
        callKosdaqIndustryRanking:(state, payload)=>{
            state.kosdaqIndustryRankingArr = payload;
        }, 
        callKospiIndustryRanking:(state, payload)=>{
            state.kospiIndustryRankingArr = payload;
        }, 
        callKospiMarketIndexFlow: (state, payload)=>{
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

            state.kospiMarketIndexAcuChart.rangeSelector.selected = 5;
            state.kospiMarketIndexDispersionChart.rangeSelector.selected = 5;

            for(let i = 0; i < unvisibleArr.length; i++){
              state.kospiMarketIndexAcuChart.series[unvisibleArr[i]].visible = false;
              state.kospiMarketIndexDispersionChart.series[unvisibleArr[i]].visible = false;
            }
            
        }, 
        callKosdaqMarketIndexFlow: (state, payload)=>{
            state.kodaqiMarketIndexFlow = payload;
            let response = payload;
            state.kosdaqMarketIndexAcuChart.title.text = "매집금액";
            state.kosdaqMarketIndexAcuChart.yAxis.title.text = "매집량 공식 적용";
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
                state.kosdaqMarketIndexAcuChart.series[i].data = commonUtil.changeDate(acuChartInfo[i]);
                state.kosdaqMarketIndexDispersionChart.series[i].data = commonUtil.changeDate(dispersionInfo[i]);
                state.kosdaqMarketIndexAcuChart.series[i].tooltip.valueSuffix = "십억원";
            }

            state.kosdaqMarketIndexAcuChart.rangeSelector.selected = 5;
            state.kosdaqMarketIndexDispersionChart.rangeSelector.selected = 5;

            for(let i = 0; i < unvisibleArr.length; i++){
              state.kosdaqMarketIndexAcuChart.series[unvisibleArr[i]].visible = false;
              state.kosdaqMarketIndexDispersionChart.series[unvisibleArr[i]].visible = false;
            }
            
        }, 
        callKosdaqIndustryCashFlow: (state, payload)=>{
            state.kosdaqIndustryCashFlowArr = payload;
        }, 
        callKospiIndustryCashFlow: (state, payload)=>{
            state.kospiIndustryCashFlowArr = payload;
        }, 
        callSpinnerLoading: (state, payload)=>{
          state.spinnerLoading = payload.val;
        }, 
        callQuickInterestStockRight: (state, payload)=>{
            state.quickInterestStockRightStockInfoChart.series[0].data = commonUtil.changeDate(payload.resultStockInfo);
            state.quickInterestStockRightStockInfoChart.series[1].data = commonUtil.changeDate(payload.ma005);
            state.quickInterestStockRightStockInfoChart.series[2].data = commonUtil.changeDate(payload.ma010);
            state.quickInterestStockRightStockInfoChart.series[3].data = commonUtil.changeDate(payload.ma020);
            state.quickInterestStockRightStockInfoChart.series[4].data = commonUtil.changeDate(payload.ma060);
            state.quickInterestStockRightStockInfoChart.series[5].data = commonUtil.changeDate(payload.ma100);
            state.quickInterestStockRightStockInfoChart.series[6].data = commonUtil.changeDate(payload.ma200);
            state.quickInterestStockRightStockInfoChart.title.text = payload.stockName;
            state.quickInterestStockRightStockInfoChart.series[0].name = payload.stockName;
            state.quickInterestStockRightStockInfoChart.rangeSelector.selected = 5;
            state.quickInterestStockRightStockInfoChart.series[1].visible = false;
            state.quickInterestStockRightStockInfoChart.series[3].visible = false;
            state.quickInterestStockRightStockInfoChart.series[5].visible = false;
        }, 
        setInOnLftClkStkNm: (state, payload)=>{
            state.inOnLftClkStkNm = payload;
        },
        callAcuDispersionChartData: (state, payload)=>{
            let response = payload;
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
            state.quickInterestStockRightAcuChart.yAxis.title.text = "매집량";
            for(let i=0; i < acuChartInfo.length; i++){
                state.quickInterestStockRightAcuChart.series[i].data = commonUtil.changeDate(acuChartInfo[i]);
                state.quickInterestStockRightDispersionChart.series[i].data = commonUtil.changeDate(dispersionInfo[i]);
                state.quickInterestStockRightAcuChart.series[i].tooltip.valueSuffix = "주";
            }
            state.resultRowData = response.resultRowData;
            state.averagePriceRowData = response.averagePriceRowData;

            
            state.quickInterestStockRightAcuChart.rangeSelector.selected = 5;
            state.quickInterestStockRightDispersionChart.rangeSelector.selected = 5;

            for(let i = 0; i < unvisibleArr.length; i++){
              state.quickInterestStockRightAcuChart.series[unvisibleArr[i]].visible = false;
              state.quickInterestStockRightDispersionChart.series[unvisibleArr[i]].visible = false;
            }
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
            commit('callSpinnerLoading', {val: true});
            axios.post(
                `${constants.URL}${'kospiIndexAnalysis/'}`
                , {
                    headers: {
                      'Content-Type': 'application/json',
                      'Authorization': 'JWT fefege...'
                    }
                , payload})
            .then(function(response) {
                commit('callKospiMarketIndexFlow', response.data);
                commit('callSpinnerLoading', {val: false});
            })
            .catch(function(error) {
                console.log(error);
                commit('callSpinnerLoading', {val: false});
            })
            .finally(()=>{
                commit('callSpinnerLoading', {val: false});
            });
        }

        , callKosdaqMarketIndexFlow: ({commit}, payload) => {
            commit('callSpinnerLoading', {val: true});
            axios.post(
                `${constants.URL}${'kosdaqIndexAnalysis/'}`
                , {
                    headers: {
                      'Content-Type': 'application/json',
                      'Authorization': 'JWT fefege...'
                    }
                , payload})
            .then(function(response) {
                commit('callKosdaqMarketIndexFlow', response.data);
                commit('callSpinnerLoading', {val: false});
            })
            .catch(function(error) {
                console.log(error);
                commit('callSpinnerLoading', {val: false});
            })
            .finally(()=>{
                commit('callSpinnerLoading', {val: false});
            });
        }






        , callKosdaqIndustryCashFlow: ({commit}, payload) => {
            let postData = {
                _val: payload,
            };
            commit('callSpinnerLoading', {val: true});
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
                commit('callSpinnerLoading', {val: false});
            })
            .catch(function(error) {
                console.log(error);
            })
            .finally(()=>{
                commit('callSpinnerLoading', {val: false});
            });
        }
        
        
        
        
        
        
        , callKosdaqIndustryRanking: ({commit}, payload) => {
            let postData = {
                _val: payload,
            };
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
                console.log(error);
            })
            .finally(()=>{
                commit('callSpinnerLoading', {val: false});
            });
        }
        
        
        
        
        
        , callKospiIndustryCashFlow: ({commit}, payload) => {
            let postData = {};
            commit('callSpinnerLoading', {val: true});
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
                commit('callSpinnerLoading', {val: false});
            })
            .catch(function(error) {
                console.log(error);
            })
            .finally(()=>{
                commit('callSpinnerLoading', {val: false});
            });
        }
        
        
        
        


        , callKospiIndustryRanking: ({commit}, payload) => {
            let postData = {
                _val: payload,
            };
            commit('callSpinnerLoading', {val: true});
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
                commit('callSpinnerLoading', {val: false});
            })
            .catch(function(error) {
                console.log(error);
                commit('callSpinnerLoading', {val: false});
            })
            .finally(()=>{
                commit('callSpinnerLoading', {val: false});
            });
        }
        




        , callQuickInterestStockLeft: ({commit}, payload) => {
            commit('callSpinnerLoading', {val: true});
            let postData = {
                fromdate: payload.fromdate
                , todate: payload.todate
                , checkbx: payload.checkbx
            };
            axios.post(`${constants.URL}${'leftFastList/'}`
            , {
                headers: {
                'Content-Type': 'application/json',
                'Authorization': 'JWT fefege...'
            }, postData})
            .then(function(response) {
                commit('callInOnLftRowData', response.data);
                commit('callRowData', response.data);  
                commit('callSpinnerLoading', {val: false});
            })
            .catch(function(error) {
                console.log(error);
                commit('callSpinnerLoading', {val: false});
            })
            .finally(()=>{
                commit('callSpinnerLoading', {val: false});
            });
        }
        




        , callQuickInterestStockRight: ({commit}, payload) => {
            commit('callSpinnerLoading', {val: true});
            let resData = {};
            let postData = {
                csvFileName: payload.csvFileName
                , fromdate: payload.fromdate
                , todate: payload.todate
            };
            axios.post(`${constants.URL}${'rightChartList/'}`
            , {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'JWT fefege...'
            }, postData})
            .then(function(response) {
                console.log(response);
                resData = {
                    resultStockInfo: response.data.resultStockInfo,
                    ma005: response.data.ma005,
                    ma010: response.data.ma010,
                    ma020: response.data.ma020,
                    ma060: response.data.ma060,
                    ma100: response.data.ma100,
                    ma200: response.data.ma200,
                    stockName: payload.stockName,
                };
                commit('callQuickInterestStockRight', resData);
                commit('setInOnLftClkStkNm', payload.stockName);
                commit('callAcuDispersionChartData', response.data);
                commit('callSpinnerLoading', {val: false});
            })
            .catch(function(error) {
                console.log(error);
                commit('callSpinnerLoading', {val: false});
            })
            .finally(function(){
                commit('callSpinnerLoading', {val: false});
            });
        }
    }
    

});


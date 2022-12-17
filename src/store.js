import Vuex from 'vuex'
import Vue from 'vue'
import {CommonUtil} from './CommonUtil';
import axios from "axios";
import constants from "./Constants";
import chartSettingInOne from "./ChartSettingInOne"
import chartSettingKospiIndex from "./ChartSettingKospiIndex"
import chartSettingKosdaqIndex from "./ChartSettingKosdaqIndex"
import chartSettingSupplyDemandAnalysisGraph from "./ChartSettingSupplyDemandAnalysisGraph"
import gridSetting from "./GridSetting"
import router from '@/router';

Vue.use(Vuex);

const commonUtil = new CommonUtil();
const unvisibleArr = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
export default new Vuex.Store({
   
    // data
    state: {
      spinnerLoading: false
      , isLogin: false
      , supplyDemandAnalysisGraphRowData: []
      , interestValue: 'interestOne'
      , industries: []
      , supplyDemandAnalysisGraphAutoCompleteSelectBox: []
      , sendIndustry: ''
      , sendStockObject: ''
      , supplyDemandAnalysisGraphStockName: ''
      , sendAvgCross: {text: '골든크로스', value: 'avgUp'}
      , sendBuySubject: {text: '세력합', value: 'grossSum'}


      , quickInterestStockRightStockInfoChart: chartSettingInOne.closePriceChartOptions
      , quickInterestStockRightStockInfoHcInstance: chartSettingInOne.hcInstance

      , quickInterestStockRightVolumeChart: chartSettingInOne.volumeChartOptions
      , quickInterestStockRightVolumeHcInstance: chartSettingInOne.hcInstance

      , quickInterestStockRightAcuChart: chartSettingInOne.acuChartOptions
      , quickInterestStockRightAcuHcInstance: chartSettingInOne.hcInstance

      , quickInterestStockRightDispersionChart: chartSettingInOne.dsprChartOptions
      , quickInterestStockRightDispersionHcInstance: chartSettingInOne.hcInstance

      , shortSellingChart: chartSettingInOne.shortSellingOptions
      , shortSellingHcInstance: chartSettingInOne.hcInstance

      , loanTransactionChart: chartSettingInOne.loanTransactionChartOptions
      , loanTransactionHcInstance: chartSettingInOne.hcInstance

      , supplyDemandAnalysisGraphStockInfoChart: chartSettingSupplyDemandAnalysisGraph.closePriceChartOptions
      , supplyDemandAnalysisGraphStockInfoHcInstance: chartSettingSupplyDemandAnalysisGraph.hcInstance

      , supplyDemandAnalysisGraphAcuChart: chartSettingSupplyDemandAnalysisGraph.acuChartOptions
      , supplyDemandAnalysisGraphAcuHcInstance: chartSettingSupplyDemandAnalysisGraph.hcInstance

      , supplyDemandAnalysisGraphDispersionChart: chartSettingSupplyDemandAnalysisGraph.dsprChartOptions
      , supplyDemandAnalysisGraphDispersionHcInstance: chartSettingSupplyDemandAnalysisGraph.hcInstance

      , supplyDemandAnalysisGraphShortSellingChart: chartSettingSupplyDemandAnalysisGraph.shortSellingOptions
      , supplyDemandAnalysisGraphShortSellingHcInstance: chartSettingSupplyDemandAnalysisGraph.hcInstance

      , supplyDemandAnalysisGraphLoanTransactionChart: chartSettingSupplyDemandAnalysisGraph.loanTransactionChartOptions
      , supplyDemandAnalysisGraphLoanTransactionHcInstance: chartSettingSupplyDemandAnalysisGraph.hcInstance
      
      , supplyDemandAnalysisGraphVolumeChart: chartSettingSupplyDemandAnalysisGraph.volumeChartOptions
      , supplyDemandAnalysisGraphVolumeHcInstance: chartSettingSupplyDemandAnalysisGraph.hcInstance

      // [시작] 지수흐름
      , kospiMarketIndexAcuChart: chartSettingKospiIndex.acuChartOptions
      , kospiMarketIndexAcuHcInstance: chartSettingKospiIndex.hcInstance
      , kospiMarketIndexDispersionChart: chartSettingKospiIndex.dsprChartOptions
      , kospiMarketIndexDispersionHcInstance: chartSettingKospiIndex.hcInstance
      , kospiMarketIndexChart: chartSettingKospiIndex.kospiMarketChartOptions

      , kospiMarketBigCompanyIndexChart: chartSettingKospiIndex.bigCompanyChartOptions
      , kospiMarketMiddleCompanyIndexChart: chartSettingKospiIndex.middleCompanyChartOptions
      , kospiMarketSmallCompanyIndexChart: chartSettingKospiIndex.smallCompanyChartOptions
      , kospiMarketBeverageFoodIndexChart: chartSettingKospiIndex.beverageFoodChartOptions
      , kospiMarketFiberClothIndexChart: chartSettingKospiIndex.fiberClothChartOptions
      , kospiMarketPaperWoodIndexChart: chartSettingKospiIndex.paperWoodChartOptions
      , kospiMarketChemicalIndexChart: chartSettingKospiIndex.chemicalChartOptions
      , kospiMarketMedicineIndexChart: chartSettingKospiIndex.medicineChartOptions
      , kospiMarketNonmetallicMineralIndexChart: chartSettingKospiIndex.nonmetallicMineralChartOptions
      , kospiMarketSteelMetallicMineralIndexChart: chartSettingKospiIndex.steelMetallicMineralChartOptions
      , kospiMarketMerchineIndexChart: chartSettingKospiIndex.merchineChartOptions
      , kospiMarketElectricalElectronicsIndexChart: chartSettingKospiIndex.electricalElectronicsChartOptions
      , kospiMarketMedicalPrecisionIndexChart: chartSettingKospiIndex.medicalPrecisionChartOptions
      , kospiMarketTransportationEquipmentIndexChart: chartSettingKospiIndex.transportationEquipmentChartOptions
      , kospiMarketDistributionIndustryIndexChart: chartSettingKospiIndex.distributionIndustryIndexChartOptions
      , kospiMarketElectricGasIndexChart: chartSettingKospiIndex.electricGasIndexChartOptions
      , kospiMarketConstructionIndexChart: chartSettingKospiIndex.constructionChartOptions
      , kospiMarketTransportWarehouseIndexChart: chartSettingKospiIndex.transportWarehouseChartOptions
      , kospiMarketNetworkingBusinessIndexChart: chartSettingKospiIndex.networkingBusinessChartOptions
      , kospiMarketFinanceIndexChart: chartSettingKospiIndex.financeChartOptions
      , kospiMarketBankIndexChart: chartSettingKospiIndex.bankChartOptions
      , kospiMarketStockSecurityIndexChart: chartSettingKospiIndex.stockSecurityChartOptions
      , kospiMarketInsuranceIndexChart: chartSettingKospiIndex.insuranceChartOptions
      , kospiMarketServiceIndexChart: chartSettingKospiIndex.serviceChartOptions
      , kospiMarketManufacturingIndexChart: chartSettingKospiIndex.manufacturingChartOptions
      , kospiMarketKospi200IndexChart: chartSettingKospiIndex.kospi200ChartOptions
      , kospiMarketIndexHcInstance: chartSettingKospiIndex.hcInstance

      , kosdaqMarketIndexAcuChart: chartSettingKosdaqIndex.acuChartOptions
      , kosdaqMarketIndexAcuHcInstance: chartSettingKosdaqIndex.hcInstance
      , kosdaqMarketIndexDispersionChart: chartSettingKosdaqIndex.dsprChartOptions
      , kosdaqMarketIndexDispersionHcInstance: chartSettingKosdaqIndex.hcInstance
      , kosdaqMarketIndexChart: chartSettingKosdaqIndex.kosdaqMarketChartOptions

      , kosdaq100IndexChart: chartSettingKosdaqIndex.kosdaq100ChartOptions
      , kosdaqMid300IndexChart: chartSettingKosdaqIndex.kosdaqMid300ChartOptions
      , kosdaqSmallIndexChart: chartSettingKosdaqIndex.kosdaqSmallChartOptions
      , kosdaqEtcIndexChart: chartSettingKosdaqIndex.kosdaqEtcChartOptions
      , kosdaqItTotalIndexChart: chartSettingKosdaqIndex.kosdaqItTotalChartOptions
      , kosdaqDistributionIndustryIndexChart: chartSettingKosdaqIndex.distributionIndustryChartOptions
      , kosdaqTransportationIndexChart: chartSettingKosdaqIndex.transportationChartOptions
      , kosdaqFinanceIndexChart: chartSettingKosdaqIndex.financeChartOptions
      , kosdaqLeisureCultureIndexChart: chartSettingKosdaqIndex.leisureCultureChartOptions
      , kosdaqNetworkBroadcastingServiceIndexChart: chartSettingKosdaqIndex.networkBroadcastingServiceChartOptions
      , kosdaqItSoftwareSvcIndexChart: chartSettingKosdaqIndex.itSoftwareSvcChartOptions
      , kosdaqItHardwareIndexChart: chartSettingKosdaqIndex.itHardwareChartOptions
      , kosdaqBeverageFoodCigaretteIndexChart: chartSettingKosdaqIndex.beverageFoodCigaretteChartOptions
      , kosdaqFiberClothEquipmentIndexChart: chartSettingKosdaqIndex.fiberClothChartOptions
      , kosdaqPaperWoodIndexChart: chartSettingKosdaqIndex.paperWoodChartOptions
      , kosdaqPublishingMediaCopyIndexChart: chartSettingKosdaqIndex.publishingMediaCopyChartOptions
      , kosdaqChemicalIndexChart: chartSettingKosdaqIndex.chemicalChartOptions
      , kosdaqMedicineIndexChart: chartSettingKosdaqIndex.medicineChartOptions
      , kosdaqNonmetallicMineralIndexChart: chartSettingKosdaqIndex.nonmetallicMineralChartOptions
      , kosdaqMetallicMineralIndexChart: chartSettingKosdaqIndex.metallicMineralChartOptions
      , kosdaqMerchineEquipmentIndexChart: chartSettingKosdaqIndex.merchineEquipmentChartOptions
      , kosdaqGeneralElectricalElectronicsIndexChart: chartSettingKosdaqIndex.generalElectricalElectronicsChartOptions
      , kosdaqMedicalPrecisionMerchineryIndexChart: chartSettingKosdaqIndex.medicalPrecisionMerchineryChartOptions
      , kosdaqTransportationEquipmentComponentIndexChart: chartSettingKosdaqIndex.transportationEquipmentComponentChartOptions
      , kosdaqEtcMenufacturingIndexChart: chartSettingKosdaqIndex.etcMenufacturingChartOptions
      , kosdaqNetworkingServiceIndexChart: chartSettingKosdaqIndex.networkingServiceChartOptions
      , kosdaqMediaServiceIndexChart: chartSettingKosdaqIndex.mediaServiceChartOptions
      , kosdaqInternetIndexChart: chartSettingKosdaqIndex.internetChartOptions
      , kosdaqDigitalContentsIndexChart: chartSettingKosdaqIndex.digitalContentsChartOptions
      , kosdaqSoftwareIndexChart: chartSettingKosdaqIndex.softwareChartOptions
      , kosdaqComputerServiceIndexChart: chartSettingKosdaqIndex.computerServiceChartOptions
      , kosdaqNetworkingEquipmentIndexChart: chartSettingKosdaqIndex.networkingEquipmentIndexChartOptions
      , kosdaqInformationMerchineryIndexChart: chartSettingKosdaqIndex.informationMerchineryChartOptions
      , kosdaqSemiconductorIndexChart: chartSettingKosdaqIndex.semiconductorChartOptions
      , kosdaqItComponentIndexChart: chartSettingKosdaqIndex.itComponentChartOptions
      , kosdaqBestCompanyIndexChart: chartSettingKosdaqIndex.bestCompanyChartOptions
      , kosdaqVentureCompanyIndexChart: chartSettingKosdaqIndex.ventureCompanyChartOptions
      , kosdaqMiddleCompanyIndexChart: chartSettingKosdaqIndex.middleCompanyChartOptions
      , kosdaqTechGrowingCompanyIndexChart: chartSettingKosdaqIndex.techGrowingCompanyChartOptions
      , kosdaqMenufacturingIndexChart: chartSettingKosdaqIndex.menufacturingChartOptions
      , kosdaqConstructionIndexChart: chartSettingKosdaqIndex.constructionChartOptions
      , kosdaqMarketIndexHcInstance: chartSettingKosdaqIndex.hcInstance
      , kospiIndexData: []
      , kosdaqIndexData: []

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
      , supplyDemandAnalysisGridColumns: gridSetting.supplyDemandAnalysisGridColumns
      , kospiIndustryFlowStockLeftGridColumns: gridSetting.kospiIndustryFlowStockLeftGridColumns
      , kospiIndustryFlowStockLeftRowData: []
      , kosdaqIndustryFlowStockLeftGridColumns: gridSetting.kosdaqIndustryFlowStockLeftGridColumns
      , kosdaqIndustryFlowStockLeftRowData: []

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

      // 코스피 종목 더블클릭하고 넘어오는 곳
      // 그리드
      , kospiEachIndustryRowData: []
      , kospiIndustryStockLength: 0
      , kospiIndustryName: ''
      , kospiStockIndustryPeriod: ''
      , kospiIndustryFlowStockName: ''
      , kospiIndustryFlowStockRightInfoChart: chartSettingInOne.kospiIndustryFlowStockRightInfoChartOptions
      , kospiIndustryFlowStockRightInfoChartHcInstance: chartSettingInOne.hcInstance
      , kospiIndustryFlowStockRightAcuChart: chartSettingInOne.kospiIndustryFlowStockRightAcuChartOptions
      , kospiIndustryFlowStockRightAcuChartHcInstance: chartSettingInOne.hcInstance
      , kospiIndustryFlowStockRightDispersionChart: chartSettingInOne.kospiIndustryFlowStockRightDispersionChartOptions
      , kospiIndustryFlowStockRightDispersionChartHcInstance: chartSettingInOne.hcInstance
      , kospiIndustryFlowStockRightResultRowData: []
      , kospiIndustryFlowStockRightAveragePriceRowData: []
      // 공매도 차트
      , kospiIndustryFlowStockRightShortSellingChart: chartSettingInOne.kospiIndustryFlowStockRightShortSellingChartOptions
      , kospiIndustryFlowStockRightShortSellingHcInstance: chartSettingInOne.hcInstance
      // 코스피 거래량 차트
      , kospiIndustryFlowStockRightVolumeChart: chartSettingInOne.kospiIndustryFlowStockRightVolumeChartOptions
      , kospiIndustryFlowStockRightVolumeHcInstance: chartSettingInOne.hcInstance
      // 대차잔고 차트
      , kospiIndustryFlowStockRightLoanTransactionChart: chartSettingInOne.kospiIndustryFlowStockRightLoanTransactionChartOptions
      , kospiIndustryFlowStockRightLoanTransactionHcInstance: chartSettingInOne.hcInstance

      // 코스닥 종목 더블클릭하고 넘어오는 곳
      // 그리드
      , kosdaqEachIndustryRowData: []
      , kosdaqIndustryStockLength: 0
      , kosdaqIndustryName: ''
      , kosdaqStockIndustryPeriod: ''
      , kosdaqIndustryFlowStockName: ''
      , kosdaqIndustryFlowStockRightInfoChart: chartSettingInOne.kosdaqIndustryFlowStockRightInfoChartOptions
      , kosdaqIndustryFlowStockRightInfoChartHcInstance: chartSettingInOne.hcInstance
      , kosdaqIndustryFlowStockRightAcuChart: chartSettingInOne.kosdaqIndustryFlowStockRightAcuChartOptions
      , kosdaqIndustryFlowStockRightAcuChartHcInstance: chartSettingInOne.hcInstance
      , kosdaqIndustryFlowStockRightDispersionChart: chartSettingInOne.kosdaqIndustryFlowStockRightDispersionChartOptions
      , kosdaqIndustryFlowStockRightDispersionChartHcInstance: chartSettingInOne.hcInstance
      , kosdaqIndustryFlowStockRightResultRowData: []
      , kosdaqIndustryFlowStockRightAveragePriceRowData: []

      , supplyDemandAnalysisGraphResultRowData: []
      , supplyDemandAnalysisGraphAveragePriceRowData: []

      // 공매도 차트
      , kosdaqIndustryFlowStockRightShortSellingChart: chartSettingInOne.kosdaqIndustryFlowStockRightShortSellingChartOptions
      , kosdaqIndustryFlowStockRightShortSellingHcInstance: chartSettingInOne.hcInstance
      // 코스닥 거래량 차트
      , kosdaqIndustryFlowStockRightVolumeChart: chartSettingInOne.kosdaqIndustryFlowStockRightVolumeChartOptions
      , kosdaqIndustryFlowStockRightVolumeHcInstance: chartSettingInOne.hcInstance
      // 대차잔고 차트
      , kosdaqIndustryFlowStockRightLoanTransactionChart: chartSettingInOne.kosdaqIndustryFlowStockRightLoanTransactionChartOptions
      , kosdaqIndustryFlowStockRightLoanTransactionHcInstance: chartSettingInOne.hcInstance
      , stockClosePriceAxisLength: 0
      , avgLineList: '111,222,333,444'
      // 서버에서 넘어온 관심2 이평선 리스트 정보
      , getAvgList: []
      // 이평선 골든크로스 데드크로스
      , avgCross: [{text: '골든크로스', value: 'avgUp'}, {text: '데드크로스', value: 'avgDown'}]
      , buySubject: [{text: '세력합', value: 'grossSum'}, {text: '개인', value: 'individual'}]

      , id: ''
      , password: ''
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
        setSDAGAutoComplete: (state, payload)=> {
            state.sendStockObject = payload;
        }
        , validationCheckAvgLineList: (state, {payload, callback})=> {
            let payload2 = payload;
            // console.log('payload2;;;;;', payload2);
            // console.log('typeof payload2;;;;;', typeof payload2);
            if (Array.isArray(payload2)){
                callback(true);
                return;
            }
            state.avgLineList = new Array();
            let temp = payload2.split(',');
            for(let ele = 0; ele < temp.length; ele++){
                // console.log('ele;;;', ele);
                if(isNaN(temp[ele])){
                    state.avgLineList = [];
                    alert('숫자를 입력해주세요!');
                    callback(false);
                    return;
                } else { 
                    // console.log('temp[ele].trim();;;;;', temp[ele].trim());
                    if( temp[ele].trim() === '' ){
                        // || temp[ele].trim() === '5'
                        // || temp[ele].trim() === '10'
                        // || temp[ele].trim() === '20'
                        // || temp[ele].trim() === '60'
                        // || temp[ele].trim() === '100'
                        // || temp[ele].trim() === '200'
                        continue;
                    }
                    state.avgLineList.push(new Number(temp[ele].trim()));
                }
            }

            let filtered = state.avgLineList.filter((element) => element !== 0);
            state.avgLineList = filtered;
            state.avgLineList = state.avgLineList.sort(function(a, b){
                return a - b;
            });
            callback(true);
            return;
        }
        , setInterestValue: (state, payload)=> {
            state.interestValue = payload;
            // console.log('state.interestValue;;;;;', state.interestValue)
        },
        setSendIndustry: (state, payload)=> {
            state.sendIndustry = payload;
            // console.log('state.sendIndustry;;;;;', state.sendIndustry)
        }
        , setSendAvgCross: (state, payload)=> {
            state.sendAvgCross = payload;
            // console.log('state.sendAvgCross;;;;;', state.sendAvgCross)
        }
        , setSendBuySubject: (state, payload)=> {
            state.sendBuySubject = payload;
            // console.log('state.sendAvgCross;;;;;', state.sendAvgCross)
        }
        , callInOnLftRowData: (state, payload)=> {
            state.inOnLftRowData  = payload;
        } 
        , setIsLogin: (state, payload)=> {
           // console.log('setIsLogin;;;', payload);
            state.isLogin  = payload.val;
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
                state.kosdaqMarketIndexAcuChart.series[i].tooltip.valueSuffix = "억원";
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

        setStockClosePriceAxisLength: (state, payload)=>{
            state.stockClosePriceAxisLength = payload;
            // console.log('state.stockClosePriceAxisLength;;;', state.stockClosePriceAxisLength);
        } 
        , setAvgLineList: (state, payload)=>{
            state.avgLineList = payload;
            // console.log('state.avgLineList;;;', state.avgLineList);
        }
        , callStockRight: (state, payload)=>{
            state.quickInterestStockRightStockInfoChart.series[0].data = commonUtil.changeDate(payload.resultStockInfo);
            state.quickInterestStockRightStockInfoChart.series[1].data = commonUtil.changeDate(payload.ma005);
            state.quickInterestStockRightStockInfoChart.series[2].data = commonUtil.changeDate(payload.ma010);
            state.quickInterestStockRightStockInfoChart.series[3].data = commonUtil.changeDate(payload.ma020);
            state.quickInterestStockRightStockInfoChart.series[4].data = commonUtil.changeDate(payload.ma060);
            state.quickInterestStockRightStockInfoChart.series[5].data = commonUtil.changeDate(payload.ma100);
            state.quickInterestStockRightStockInfoChart.series[6].data = commonUtil.changeDate(payload.ma200);
            state.quickInterestStockRightStockInfoChart.series[7].data = commonUtil.changeDate(payload.volumeLst);
            
            state.quickInterestStockRightStockInfoChart.series[1].visible = false;
            state.quickInterestStockRightStockInfoChart.series[2].visible = false;
            state.quickInterestStockRightStockInfoChart.series[3].visible = false;
            state.quickInterestStockRightStockInfoChart.series[4].visible = false;
            state.quickInterestStockRightStockInfoChart.series[5].visible = false;
            state.quickInterestStockRightStockInfoChart.series[6].visible = false;
            /*
                1. 만들 이평선 갯수
                2. 몇 일선인지
             */
            
            if(state.interestValue === 'interestTwo'){
                if(state.getAvgList.length > 0){
                    state.quickInterestStockRightStockInfoChart.series.splice(state.stockClosePriceAxisLength, state.getAvgList.length);
                }

                if(payload.addAvgList.length > 0){
                    state.getAvgList = payload.addAvgList;
                    let startIndex = 7;
                    const colorHexCodeArr = ['#F661D7', '#83D6A2', '#FFFED0', '#7692DF'];
                    for(let i = 0; i < payload.addAvgList.length; i++){
                        let newSeries = commonUtil.addArrSeriesData((payload.addAvgList[i].substring(2)+"일선"),colorHexCodeArr[i]);
                        state.quickInterestStockRightStockInfoChart.series[startIndex] = newSeries;
                        state.quickInterestStockRightStockInfoChart.series[startIndex].data = commonUtil.changeDate(payload[payload.addAvgList[i]]);
                        startIndex++;
                    }
                }

                if(payload.avgLineList.length > 0){
                    for(let i = 0; i < payload.avgLineList.length; i++){
                        if(payload.avgLineList[i] == 5){
                            state.quickInterestStockRightStockInfoChart.series[1].visible = true;
                            continue;
                        }

                        if(payload.avgLineList[i] == 10){
                            state.quickInterestStockRightStockInfoChart.series[2].visible = true;
                            continue;
                        }

                        if(payload.avgLineList[i] == 20){
                            state.quickInterestStockRightStockInfoChart.series[3].visible = true;
                            continue;
                        }

                        if(payload.avgLineList[i] == 60){
                            state.quickInterestStockRightStockInfoChart.series[4].visible = true;
                            continue;
                        }

                        if(payload.avgLineList[i] == 100){
                            state.quickInterestStockRightStockInfoChart.series[5].visible = true;
                            continue;
                        }

                        if(payload.avgLineList[i] == 200){
                            state.quickInterestStockRightStockInfoChart.series[6].visible = true;
                            continue;
                        }
                    }
                }
                
            } else if(state.interestValue === 'interestOne'){
                state.quickInterestStockRightStockInfoChart.series.splice(state.stockClosePriceAxisLength, state.getAvgList.length);
                
            }
            state.quickInterestStockRightStockInfoChart.title.text = payload.stockName;
            state.quickInterestStockRightStockInfoChart.series[0].name = payload.stockName;
            
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
        },
        callKospiMarketIndexCandleChartData: (state, payload)=>{
            state.kospiMarketIndexChart.series[0].data = commonUtil.changeDate(payload);
            state.kospiMarketIndexChart.rangeSelector.selected = 5;
        },
        callKosdaqMarketIndexCandleChartData: (state, payload)=>{
            state.kosdaqMarketIndexChart.series[0].data = commonUtil.changeDate(payload);
            state.kosdaqMarketIndexChart.rangeSelector.selected = 5;
        },
        callShortSelling: (state, payload)=>{
            state.shortSellingChart.series[0].data = commonUtil.changeDate(payload.shortSellingQuantity);
            state.shortSellingChart.series[1].data = commonUtil.changeDate(payload.shortSellingPercentage);
            state.shortSellingChart.series[2].data = commonUtil.changeDate(payload.shortSellingTransactionAmount);
            state.shortSellingChart.series[1].visible = false;
            state.shortSellingChart.series[2].visible = false;
            state.shortSellingChart.rangeSelector.selected = 5;
        },
        callLoanTransaction: (state, payload)=>{
            state.loanTransactionChart.series[0].data = commonUtil.changeDate(payload.loanStockQuantity);
            state.loanTransactionChart.series[1].data = commonUtil.changeDate(payload.loanPayBack);
            state.loanTransactionChart.series[2].data = commonUtil.changeDate(payload.loanBalanceFluctuation);
            state.loanTransactionChart.series[3].data = commonUtil.changeDate(payload.loanBalanceStockQuantity);
            state.loanTransactionChart.series[4].data = commonUtil.changeDate(payload.loanBalanceAmount);
            state.loanTransactionChart.series[0].visible = false;
            state.loanTransactionChart.series[1].visible = false;
            state.loanTransactionChart.series[2].visible = false;
            state.loanTransactionChart.series[4].visible = false;
            state.loanTransactionChart.rangeSelector.selected = 5;
        },
        callKosdaqMarketIndustryIndexCandleChartData: (state, payload)=>{
            state.kosdaq100IndexChart.series[0].data = commonUtil.changeDate(payload.kosdaq100);
            state.kosdaq100IndexChart.rangeSelector.selected = 5;

            state.kosdaqMid300IndexChart.series[0].data = commonUtil.changeDate(payload.kosdaqMid300);
            state.kosdaqMid300IndexChart.rangeSelector.selected = 5;

            state.kosdaqSmallIndexChart.series[0].data = commonUtil.changeDate(payload.kosdaqSmall);
            state.kosdaqSmallIndexChart.rangeSelector.selected = 5;

            state.kosdaqEtcIndexChart.series[0].data = commonUtil.changeDate(payload.kosdaqEtc);
            state.kosdaqEtcIndexChart.rangeSelector.selected = 5;

            state.kosdaqItTotalIndexChart.series[0].data = commonUtil.changeDate(payload.kosdaqItTotal);
            state.kosdaqItTotalIndexChart.rangeSelector.selected = 5;

            state.kosdaqDistributionIndustryIndexChart.series[0].data = commonUtil.changeDate(payload.distributionIndustry);
            state.kosdaqDistributionIndustryIndexChart.rangeSelector.selected = 5;

            state.kosdaqTransportationIndexChart.series[0].data = commonUtil.changeDate(payload.transportation);
            state.kosdaqTransportationIndexChart.rangeSelector.selected = 5;

            state.kosdaqFinanceIndexChart.series[0].data = commonUtil.changeDate(payload.finance);
            state.kosdaqFinanceIndexChart.rangeSelector.selected = 5;

            state.kosdaqLeisureCultureIndexChart.series[0].data = commonUtil.changeDate(payload.leisureCulture);
            state.kosdaqLeisureCultureIndexChart.rangeSelector.selected = 5;

            state.kosdaqNetworkBroadcastingServiceIndexChart.series[0].data = commonUtil.changeDate(payload.networkBroadcastingService);
            state.kosdaqNetworkBroadcastingServiceIndexChart.rangeSelector.selected = 5;

            state.kosdaqItSoftwareSvcIndexChart.series[0].data = commonUtil.changeDate(payload.itSoftwareSvc);
            state.kosdaqItSoftwareSvcIndexChart.rangeSelector.selected = 5;

            state.kosdaqItHardwareIndexChart.series[0].data = commonUtil.changeDate(payload.itHardware);
            state.kosdaqItHardwareIndexChart.rangeSelector.selected = 5;

            state.kosdaqBeverageFoodCigaretteIndexChart.series[0].data = commonUtil.changeDate(payload.beverageFoodCigarette);
            state.kosdaqBeverageFoodCigaretteIndexChart.rangeSelector.selected = 5;

            state.kosdaqFiberClothEquipmentIndexChart.series[0].data = commonUtil.changeDate(payload.fiberCloth);
            state.kosdaqFiberClothEquipmentIndexChart.rangeSelector.selected = 5;

            state.kosdaqPaperWoodIndexChart.series[0].data = commonUtil.changeDate(payload.paperWood);
            state.kosdaqPaperWoodIndexChart.rangeSelector.selected = 5;

            state.kosdaqPublishingMediaCopyIndexChart.series[0].data = commonUtil.changeDate(payload.publishingMediaCopy);
            state.kosdaqPublishingMediaCopyIndexChart.rangeSelector.selected = 5;

            state.kosdaqChemicalIndexChart.series[0].data = commonUtil.changeDate(payload.chemical);
            state.kosdaqChemicalIndexChart.rangeSelector.selected = 5;

            state.kosdaqMedicineIndexChart.series[0].data = commonUtil.changeDate(payload.medicine);
            state.kosdaqMedicineIndexChart.rangeSelector.selected = 5;

            state.kosdaqNonmetallicMineralIndexChart.series[0].data = commonUtil.changeDate(payload.nonmetallicMineral);
            state.kosdaqNonmetallicMineralIndexChart.rangeSelector.selected = 5;

            state.kosdaqMetallicMineralIndexChart.series[0].data = commonUtil.changeDate(payload.metallicMineral);
            state.kosdaqMetallicMineralIndexChart.rangeSelector.selected = 5;

            state.kosdaqMerchineEquipmentIndexChart.series[0].data = commonUtil.changeDate(payload.merchineEquipment);
            state.kosdaqMerchineEquipmentIndexChart.rangeSelector.selected = 5;

            state.kosdaqGeneralElectricalElectronicsIndexChart.series[0].data = commonUtil.changeDate(payload.generalElectricalElectronics);
            state.kosdaqGeneralElectricalElectronicsIndexChart.rangeSelector.selected = 5;

            state.kosdaqMedicalPrecisionMerchineryIndexChart.series[0].data = commonUtil.changeDate(payload.medicalPrecisionMerchinery);
            state.kosdaqMedicalPrecisionMerchineryIndexChart.rangeSelector.selected = 5;

            state.kosdaqTransportationEquipmentComponentIndexChart.series[0].data = commonUtil.changeDate(payload.transportationEquipmentComponent);
            state.kosdaqTransportationEquipmentComponentIndexChart.rangeSelector.selected = 5;

            state.kosdaqEtcMenufacturingIndexChart.series[0].data = commonUtil.changeDate(payload.etcMenufacturing);
            state.kosdaqEtcMenufacturingIndexChart.rangeSelector.selected = 5;

            state.kosdaqNetworkingServiceIndexChart.series[0].data = commonUtil.changeDate(payload.networkingService);
            state.kosdaqNetworkingServiceIndexChart.rangeSelector.selected = 5;

            state.kosdaqMediaServiceIndexChart.series[0].data = commonUtil.changeDate(payload.mediaService);
            state.kosdaqMediaServiceIndexChart.rangeSelector.selected = 5;

            state.kosdaqInternetIndexChart.series[0].data = commonUtil.changeDate(payload.internet);
            state.kosdaqInternetIndexChart.rangeSelector.selected = 5;

            state.kosdaqDigitalContentsIndexChart.series[0].data = commonUtil.changeDate(payload.digitalContents);
            state.kosdaqDigitalContentsIndexChart.rangeSelector.selected = 5;

            state.kosdaqSoftwareIndexChart.series[0].data = commonUtil.changeDate(payload.software);
            state.kosdaqSoftwareIndexChart.rangeSelector.selected = 5;

            state.kosdaqComputerServiceIndexChart.series[0].data = commonUtil.changeDate(payload.computerService);
            state.kosdaqComputerServiceIndexChart.rangeSelector.selected = 5;

            state.kosdaqNetworkingEquipmentIndexChart.series[0].data = commonUtil.changeDate(payload.networkingEquipment);
            state.kosdaqNetworkingEquipmentIndexChart.rangeSelector.selected = 5;

            state.kosdaqInformationMerchineryIndexChart.series[0].data = commonUtil.changeDate(payload.informationMerchinery);
            state.kosdaqInformationMerchineryIndexChart.rangeSelector.selected = 5;

            state.kosdaqSemiconductorIndexChart.series[0].data = commonUtil.changeDate(payload.semiconductor);
            state.kosdaqSemiconductorIndexChart.rangeSelector.selected = 5;

            state.kosdaqItComponentIndexChart.series[0].data = commonUtil.changeDate(payload.itComponent);
            state.kosdaqItComponentIndexChart.rangeSelector.selected = 5;

            state.kosdaqBestCompanyIndexChart.series[0].data = commonUtil.changeDate(payload.bestCompany);
            state.kosdaqBestCompanyIndexChart.rangeSelector.selected = 5;

            state.kosdaqVentureCompanyIndexChart.series[0].data = commonUtil.changeDate(payload.ventureCompany);
            state.kosdaqVentureCompanyIndexChart.rangeSelector.selected = 5;

            state.kosdaqMiddleCompanyIndexChart.series[0].data = commonUtil.changeDate(payload.middleCompany);
            state.kosdaqMiddleCompanyIndexChart.rangeSelector.selected = 5;

            state.kosdaqTechGrowingCompanyIndexChart.series[0].data = commonUtil.changeDate(payload.techGrowingCompany);
            state.kosdaqTechGrowingCompanyIndexChart.rangeSelector.selected = 5;

            state.kosdaqMenufacturingIndexChart.series[0].data = commonUtil.changeDate(payload.menufacturing);
            state.kosdaqMenufacturingIndexChart.rangeSelector.selected = 5;

            state.kosdaqConstructionIndexChart.series[0].data = commonUtil.changeDate(payload.construction);
            state.kosdaqConstructionIndexChart.rangeSelector.selected = 5;
        }
        , callKospiMarketIndustryIndexCandleChartData: (state, payload)=>{
            state.kospiMarketBigCompanyIndexChart.series[0].data = commonUtil.changeDate(payload.bigCompany);
            state.kospiMarketBigCompanyIndexChart.rangeSelector.selected = 5;

            state.kospiMarketMiddleCompanyIndexChart.series[0].data = commonUtil.changeDate(payload.middleCompany);
            state.kospiMarketMiddleCompanyIndexChart.rangeSelector.selected = 5;

            state.kospiMarketSmallCompanyIndexChart.series[0].data = commonUtil.changeDate(payload.smallCompany);
            state.kospiMarketSmallCompanyIndexChart.rangeSelector.selected = 5;

            state.kospiMarketBeverageFoodIndexChart.series[0].data = commonUtil.changeDate(payload.beverageFood);
            state.kospiMarketBeverageFoodIndexChart.rangeSelector.selected = 5;

            state.kospiMarketFiberClothIndexChart.series[0].data = commonUtil.changeDate(payload.fiberCloth);
            state.kospiMarketFiberClothIndexChart.rangeSelector.selected = 5;

            state.kospiMarketPaperWoodIndexChart.series[0].data = commonUtil.changeDate(payload.paperWood);
            state.kospiMarketPaperWoodIndexChart.rangeSelector.selected = 5;

            state.kospiMarketChemicalIndexChart.series[0].data = commonUtil.changeDate(payload.chemical);
            state.kospiMarketChemicalIndexChart.rangeSelector.selected = 5;

            state.kospiMarketMedicineIndexChart.series[0].data = commonUtil.changeDate(payload.medicine);
            state.kospiMarketMedicineIndexChart.rangeSelector.selected = 5;

            state.kospiMarketNonmetallicMineralIndexChart.series[0].data = commonUtil.changeDate(payload.nonmetallicMineral);
            state.kospiMarketNonmetallicMineralIndexChart.rangeSelector.selected = 5;

            state.kospiMarketSteelMetallicMineralIndexChart.series[0].data = commonUtil.changeDate(payload.steelMetallicMineral);
            state.kospiMarketSteelMetallicMineralIndexChart.rangeSelector.selected = 5;

            state.kospiMarketMerchineIndexChart.series[0].data = commonUtil.changeDate(payload.merchine);
            state.kospiMarketMerchineIndexChart.rangeSelector.selected = 5;

            state.kospiMarketElectricalElectronicsIndexChart.series[0].data = commonUtil.changeDate(payload.electricalElectronics);
            state.kospiMarketElectricalElectronicsIndexChart.rangeSelector.selected = 5;

            state.kospiMarketMedicalPrecisionIndexChart.series[0].data = commonUtil.changeDate(payload.medicalPrecision);
            state.kospiMarketMedicalPrecisionIndexChart.rangeSelector.selected = 5;

            state.kospiMarketTransportationEquipmentIndexChart.series[0].data = commonUtil.changeDate(payload.transportationEquipment);
            state.kospiMarketTransportationEquipmentIndexChart.rangeSelector.selected = 5;

            state.kospiMarketDistributionIndustryIndexChart.series[0].data = commonUtil.changeDate(payload.distributionIndustry);
            state.kospiMarketDistributionIndustryIndexChart.rangeSelector.selected = 5;

            state.kospiMarketElectricGasIndexChart.series[0].data = commonUtil.changeDate(payload.electricGas);
            state.kospiMarketElectricGasIndexChart.rangeSelector.selected = 5;

            state.kospiMarketConstructionIndexChart.series[0].data = commonUtil.changeDate(payload.construction);
            state.kospiMarketConstructionIndexChart.rangeSelector.selected = 5;

            state.kospiMarketTransportWarehouseIndexChart.series[0].data = commonUtil.changeDate(payload.transportWarehouse);
            state.kospiMarketTransportWarehouseIndexChart.rangeSelector.selected = 5;

            state.kospiMarketNetworkingBusinessIndexChart.series[0].data = commonUtil.changeDate(payload.networkingBusiness);
            state.kospiMarketNetworkingBusinessIndexChart.rangeSelector.selected = 5;

            state.kospiMarketFinanceIndexChart.series[0].data = commonUtil.changeDate(payload.finance);
            state.kospiMarketFinanceIndexChart.rangeSelector.selected = 5;

            state.kospiMarketBankIndexChart.series[0].data = commonUtil.changeDate(payload.bank);
            state.kospiMarketBankIndexChart.rangeSelector.selected = 5;

            state.kospiMarketStockSecurityIndexChart.series[0].data = commonUtil.changeDate(payload.stockSecurity);
            state.kospiMarketStockSecurityIndexChart.rangeSelector.selected = 5;

            state.kospiMarketInsuranceIndexChart.series[0].data = commonUtil.changeDate(payload.insurance);
            state.kospiMarketInsuranceIndexChart.rangeSelector.selected = 5;

            state.kospiMarketServiceIndexChart.series[0].data = commonUtil.changeDate(payload.service);
            state.kospiMarketServiceIndexChart.rangeSelector.selected = 5;

            state.kospiMarketManufacturingIndexChart.series[0].data = commonUtil.changeDate(payload.manufacturing);
            state.kospiMarketManufacturingIndexChart.rangeSelector.selected = 5;

            state.kospiMarketKospi200IndexChart.series[0].data = commonUtil.changeDate(payload.kospi200);
            state.kospiMarketKospi200IndexChart.rangeSelector.selected = 5;

        }

        , callKospiEachIndustryStock: (state, payload)=>{
            state.kospiIndustryFlowStockLeftRowData = payload.kospiIndustryStock;
            state.kospiIndustryStockLength = payload.kospiIndustryStockLength;
            state.kospiIndustryName = payload.kospiIndustryName;
            state.kospiStockIndustryPeriod = payload.kospiStockIndustryPeriod;
        }

        , callKospiIndustryFlowStockRight: (state, payload)=>{
            state.kospiIndustryFlowStockRightInfoChart.series[0].data = commonUtil.changeDate(payload.resultStockInfo);
            state.kospiIndustryFlowStockRightInfoChart.series[1].data = commonUtil.changeDate(payload.ma005);
            state.kospiIndustryFlowStockRightInfoChart.series[2].data = commonUtil.changeDate(payload.ma010);
            state.kospiIndustryFlowStockRightInfoChart.series[3].data = commonUtil.changeDate(payload.ma020);
            state.kospiIndustryFlowStockRightInfoChart.series[4].data = commonUtil.changeDate(payload.ma060);
            state.kospiIndustryFlowStockRightInfoChart.series[5].data = commonUtil.changeDate(payload.ma100);
            state.kospiIndustryFlowStockRightInfoChart.series[6].data = commonUtil.changeDate(payload.ma200);
            state.kospiIndustryFlowStockRightInfoChart.series[7].data = commonUtil.changeDate(payload.volumeLst);

            state.kospiIndustryFlowStockRightInfoChart.title.text = payload.stockName;
            state.kospiIndustryFlowStockRightInfoChart.series[0].name = payload.stockName;
            state.kospiIndustryFlowStockRightInfoChart.rangeSelector.selected = 5;
            state.kospiIndustryFlowStockRightInfoChart.series[1].visible = false;
            state.kospiIndustryFlowStockRightInfoChart.series[2].visible = false;
            state.kospiIndustryFlowStockRightInfoChart.series[3].visible = false;
            state.kospiIndustryFlowStockRightInfoChart.series[4].visible = false;
            state.kospiIndustryFlowStockRightInfoChart.series[5].visible = false;
            state.kospiIndustryFlowStockRightInfoChart.series[6].visible = false;
        } 
        , setKospiIndustryFlowStockName: (state, payload)=>{
            state.kospiIndustryFlowStockName = payload;
        }
        , callKospiIndustryAcuDispersionChartData: (state, payload)=>{
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
            state.kospiIndustryFlowStockRightAcuChart.yAxis.title.text = "매집량";
            for(let i=0; i < acuChartInfo.length; i++){
                state.kospiIndustryFlowStockRightAcuChart.series[i].data = commonUtil.changeDate(acuChartInfo[i]);
                state.kospiIndustryFlowStockRightDispersionChart.series[i].data = commonUtil.changeDate(dispersionInfo[i]);
                state.kospiIndustryFlowStockRightAcuChart.series[i].tooltip.valueSuffix = "주";
            }
            state.kospiIndustryFlowStockRightResultRowData = response.resultRowData;
            state.kospiIndustryFlowStockRightAveragePriceRowData = response.averagePriceRowData;

            
            state.kospiIndustryFlowStockRightAcuChart.rangeSelector.selected = 5;
            state.kospiIndustryFlowStockRightDispersionChart.rangeSelector.selected = 5;

            for(let i = 0; i < unvisibleArr.length; i++){
              state.kospiIndustryFlowStockRightAcuChart.series[unvisibleArr[i]].visible = false;
              state.kospiIndustryFlowStockRightDispersionChart.series[unvisibleArr[i]].visible = false;
            }
        }
        , callKospiIndustryFlowStockRightShortSelling: (state, payload)=>{
            // console.log('payload;;;;', payload);
            if(Object.keys(payload).length === 0){
                return;
            }
            if(Object.prototype.hasOwnProperty.call(payload, 'shortSellingQuantity')){
                state.kospiIndustryFlowStockRightShortSellingChart.series[0].visible = false;
                if(payload.shortSellingQuantity.length > 0){
                    state.kospiIndustryFlowStockRightShortSellingChart.series[0].data = commonUtil.changeDate(payload.shortSellingQuantity);
                } else {
                    state.kospiIndustryFlowStockRightShortSellingChart.series[0].data = [];
                }
            } else {
                state.kospiIndustryFlowStockRightShortSellingChart.series[0].data = [];
            }

            if(Object.prototype.hasOwnProperty.call(payload, 'shortSellingPercentage')){
                if(payload.shortSellingPercentage.length > 0){
                    state.kospiIndustryFlowStockRightShortSellingChart.series[1].data = commonUtil.changeDate(payload.shortSellingPercentage);
                } else {
                    state.kospiIndustryFlowStockRightShortSellingChart.series[1].data = [];
                }
            } else {
                state.kospiIndustryFlowStockRightShortSellingChart.series[1].data = [];
            }

            if(Object.prototype.hasOwnProperty.call(payload, 'shortSellingTransactionAmount')){
                state.kospiIndustryFlowStockRightShortSellingChart.series[2].visible = false;
                if(payload.shortSellingTransactionAmount.length > 0){
                    state.kospiIndustryFlowStockRightShortSellingChart.series[2].data = commonUtil.changeDate(payload.shortSellingTransactionAmount);
                } else {
                    state.kospiIndustryFlowStockRightShortSellingChart.series[2].data = [];
                }
            } else {
                state.kospiIndustryFlowStockRightShortSellingChart.series[2].data = [];
            }
            
            // state.kospiIndustryFlowStockRightShortSellingChart.series[0].data = commonUtil.changeDate(payload.shortSellingQuantity);
            // state.kospiIndustryFlowStockRightShortSellingChart.series[1].data = commonUtil.changeDate(payload.shortSellingPercentage);
            // state.kospiIndustryFlowStockRightShortSellingChart.series[2].data = commonUtil.changeDate(payload.shortSellingTransactionAmount);
            // state.kospiIndustryFlowStockRightShortSellingChart.series[1].visible = false;
            // state.kospiIndustryFlowStockRightShortSellingChart.series[2].visible = false;
            state.kospiIndustryFlowStockRightShortSellingChart.rangeSelector.selected = 5;
        }

        , callKospiIndustryFlowStockRightVolume: (state, payload)=>{
            state.kospiIndustryFlowStockRightVolumeChart.series[0].data = commonUtil.changeDate(payload.volumeLst);
            state.kospiIndustryFlowStockRightVolumeChart.series[1].data = commonUtil.changeDate(payload.volumeMa5);
            state.kospiIndustryFlowStockRightVolumeChart.series[2].data = commonUtil.changeDate(payload.volumeMa20);
            state.kospiIndustryFlowStockRightVolumeChart.rangeSelector.selected = 5;
        }

        , callKosdaqIndustryFlowStockRightVolume: (state, payload)=>{
            state.kosdaqIndustryFlowStockRightVolumeChart.series[0].data = commonUtil.changeDate(payload.volumeLst);
            state.kosdaqIndustryFlowStockRightVolumeChart.series[1].data = commonUtil.changeDate(payload.volumeMa5);
            state.kosdaqIndustryFlowStockRightVolumeChart.series[2].data = commonUtil.changeDate(payload.volumeMa20);
            state.kosdaqIndustryFlowStockRightVolumeChart.rangeSelector.selected = 5;
        }

        , callSupplyDemandAnalysisGraphVolume: (state, payload)=>{
            state.supplyDemandAnalysisGraphVolumeChart.series[0].data = commonUtil.changeDate(payload.volumeLst);
            state.supplyDemandAnalysisGraphVolumeChart.series[1].data = commonUtil.changeDate(payload.volumeMa5);
            state.supplyDemandAnalysisGraphVolumeChart.series[2].data = commonUtil.changeDate(payload.volumeMa20);
            state.supplyDemandAnalysisGraphVolumeChart.rangeSelector.selected = 5;
        }

        , callKospiIndustryFlowStockRightLoanTransaction: (state, payload)=>{
            console.log('payload;;;;;', payload);
            if(Object.keys(payload).length === 0){
                return;
            }
            if(Object.prototype.hasOwnProperty.call(payload, 'loanStockQuantity')){
                state.kospiIndustryFlowStockRightLoanTransactionChart.series[0].visible = false;
                if(payload.loanStockQuantity.length > 0){
                    state.kospiIndustryFlowStockRightLoanTransactionChart.series[0].data = commonUtil.changeDate(payload.loanStockQuantity);
                } else {
                    state.kospiIndustryFlowStockRightLoanTransactionChart.series[0].data = [];
                }
            } else {
                state.kospiIndustryFlowStockRightLoanTransactionChart.series[0].data = [];
            }

            if(Object.prototype.hasOwnProperty.call(payload, 'loanPayBack')){
                state.kospiIndustryFlowStockRightLoanTransactionChart.series[1].visible = false;
                if(payload.loanPayBack.length > 0){
                    state.kospiIndustryFlowStockRightLoanTransactionChart.series[1].data = commonUtil.changeDate(payload.loanPayBack);
                } else {
                    state.kospiIndustryFlowStockRightLoanTransactionChart.series[1].data = [];
                }
            } else {
                state.kospiIndustryFlowStockRightLoanTransactionChart.series[1].data = [];
            }

            if(Object.prototype.hasOwnProperty.call(payload, 'loanBalanceFluctuation')){
                state.kospiIndustryFlowStockRightLoanTransactionChart.series[2].visible = false;
                if(payload.loanBalanceFluctuation.length > 0){
                    state.kospiIndustryFlowStockRightLoanTransactionChart.series[2].data = commonUtil.changeDate(payload.loanBalanceFluctuation);
                } else {
                    state.kospiIndustryFlowStockRightLoanTransactionChart.series[2].data = [];
                }
            } else {
                state.kospiIndustryFlowStockRightLoanTransactionChart.series[2].data = [];
            }

            if(Object.prototype.hasOwnProperty.call(payload, 'loanBalanceStockQuantity')){
                if(payload.loanBalanceStockQuantity.length > 0){
                    state.kospiIndustryFlowStockRightLoanTransactionChart.series[3].data = commonUtil.changeDate(payload.loanBalanceStockQuantity);
                } else {
                    state.kospiIndustryFlowStockRightLoanTransactionChart.series[3].data = [];
                }
            } else {
                state.kospiIndustryFlowStockRightLoanTransactionChart.series[3].data = [];
            }

            if(Object.prototype.hasOwnProperty.call(payload, 'loanBalanceAmount')){
                state.kospiIndustryFlowStockRightLoanTransactionChart.series[4].visible = false;
                if(payload.loanBalanceAmount.length > 0){
                    state.kospiIndustryFlowStockRightLoanTransactionChart.series[4].data = commonUtil.changeDate(payload.loanBalanceAmount);
                } else {
                    state.kospiIndustryFlowStockRightLoanTransactionChart.series[4].data = [];
                }
            } else {
                state.kospiIndustryFlowStockRightLoanTransactionChart.series[4].data = [];
            }

            // state.kospiIndustryFlowStockRightLoanTransactionChart.series[0].data = commonUtil.changeDate(payload.loanStockQuantity);
            // state.kospiIndustryFlowStockRightLoanTransactionChart.series[1].data = commonUtil.changeDate(payload.loanPayBack);
            // state.kospiIndustryFlowStockRightLoanTransactionChart.series[2].data = commonUtil.changeDate(payload.loanBalanceFluctuation);
            // state.kospiIndustryFlowStockRightLoanTransactionChart.series[3].data = commonUtil.changeDate(payload.loanBalanceStockQuantity);
            // state.kospiIndustryFlowStockRightLoanTransactionChart.series[4].data = commonUtil.changeDate(payload.loanBalanceAmount);
            // state.kospiIndustryFlowStockRightLoanTransactionChart.series[0].visible = false;
            // state.kospiIndustryFlowStockRightLoanTransactionChart.series[1].visible = false;
            // state.kospiIndustryFlowStockRightLoanTransactionChart.series[2].visible = false;
            // state.kospiIndustryFlowStockRightLoanTransactionChart.series[4].visible = false;
            state.kospiIndustryFlowStockRightLoanTransactionChart.rangeSelector.selected = 5;
        }


        , callKosdaqEachIndustryStock: (state, payload)=>{
            state.kosdaqIndustryFlowStockLeftRowData = payload.kosdaqIndustryStock;
            state.kosdaqIndustryStockLength = payload.kosdaqIndustryStockLength;
            state.kosdaqIndustryName = payload.kosdaqIndustryName;
            state.kosdaqStockIndustryPeriod = payload.kosdaqStockIndustryPeriod;
        }

        , callKosdaqIndustryFlowStockRight: (state, payload)=>{
            state.kosdaqIndustryFlowStockRightInfoChart.series[0].data = commonUtil.changeDate(payload.resultStockInfo);
            state.kosdaqIndustryFlowStockRightInfoChart.series[1].data = commonUtil.changeDate(payload.ma005);
            state.kosdaqIndustryFlowStockRightInfoChart.series[2].data = commonUtil.changeDate(payload.ma010);
            state.kosdaqIndustryFlowStockRightInfoChart.series[3].data = commonUtil.changeDate(payload.ma020);
            state.kosdaqIndustryFlowStockRightInfoChart.series[4].data = commonUtil.changeDate(payload.ma060);
            state.kosdaqIndustryFlowStockRightInfoChart.series[5].data = commonUtil.changeDate(payload.ma100);
            state.kosdaqIndustryFlowStockRightInfoChart.series[6].data = commonUtil.changeDate(payload.ma200);
            state.kosdaqIndustryFlowStockRightInfoChart.series[7].data = commonUtil.changeDate(payload.volumeLst);
            state.kosdaqIndustryFlowStockRightInfoChart.title.text = payload.stockName;
            state.kosdaqIndustryFlowStockRightInfoChart.series[0].name = payload.stockName;
            state.kosdaqIndustryFlowStockRightInfoChart.rangeSelector.selected = 5;
            state.kosdaqIndustryFlowStockRightInfoChart.series[1].visible = false;
            state.kosdaqIndustryFlowStockRightInfoChart.series[2].visible = false;
            state.kosdaqIndustryFlowStockRightInfoChart.series[3].visible = false;
            state.kosdaqIndustryFlowStockRightInfoChart.series[4].visible = false;
            state.kosdaqIndustryFlowStockRightInfoChart.series[5].visible = false;
            state.kosdaqIndustryFlowStockRightInfoChart.series[6].visible = false;
            
        } 

        , setKosdaqIndustryFlowStockName: (state, payload)=>{
            state.kosdaqIndustryFlowStockName = payload;
        }

        , callKosdaqIndustryAcuDispersionChartData: (state, payload)=>{
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
            state.kosdaqIndustryFlowStockRightAcuChart.yAxis.title.text = "매집량";
            for(let i=0; i < acuChartInfo.length; i++){
                state.kosdaqIndustryFlowStockRightAcuChart.series[i].data = commonUtil.changeDate(acuChartInfo[i]);
                state.kosdaqIndustryFlowStockRightDispersionChart.series[i].data = commonUtil.changeDate(dispersionInfo[i]);
                state.kosdaqIndustryFlowStockRightAcuChart.series[i].tooltip.valueSuffix = "주";
            }
            state.kosdaqIndustryFlowStockRightResultRowData = response.resultRowData;
            state.kosdaqIndustryFlowStockRightAveragePriceRowData = response.averagePriceRowData;

            
            state.kosdaqIndustryFlowStockRightAcuChart.rangeSelector.selected = 5;
            state.kosdaqIndustryFlowStockRightDispersionChart.rangeSelector.selected = 5;

            for(let i = 0; i < unvisibleArr.length; i++){
              state.kosdaqIndustryFlowStockRightAcuChart.series[unvisibleArr[i]].visible = false;
              state.kosdaqIndustryFlowStockRightDispersionChart.series[unvisibleArr[i]].visible = false;
            }
        }

        , callKosdaqIndustryFlowStockRightShortSelling: (state, payload)=>{
            state.kosdaqIndustryFlowStockRightShortSellingChart.series[0].data = commonUtil.changeDate(payload.shortSellingQuantity);
            state.kosdaqIndustryFlowStockRightShortSellingChart.series[1].data = commonUtil.changeDate(payload.shortSellingPercentage);
            state.kosdaqIndustryFlowStockRightShortSellingChart.series[2].data = commonUtil.changeDate(payload.shortSellingTransactionAmount);
            state.kosdaqIndustryFlowStockRightShortSellingChart.series[1].visible = false;
            state.kosdaqIndustryFlowStockRightShortSellingChart.series[2].visible = false;
            state.kosdaqIndustryFlowStockRightShortSellingChart.rangeSelector.selected = 5;
        }

        , callKosdaqIndustryFlowStockRightLoanTransaction: (state, payload)=>{
            state.kosdaqIndustryFlowStockRightLoanTransactionChart.series[0].data = commonUtil.changeDate(payload.loanStockQuantity);
            state.kosdaqIndustryFlowStockRightLoanTransactionChart.series[1].data = commonUtil.changeDate(payload.loanPayBack);
            state.kosdaqIndustryFlowStockRightLoanTransactionChart.series[2].data = commonUtil.changeDate(payload.loanBalanceFluctuation);
            state.kosdaqIndustryFlowStockRightLoanTransactionChart.series[3].data = commonUtil.changeDate(payload.loanBalanceStockQuantity);
            state.kosdaqIndustryFlowStockRightLoanTransactionChart.series[4].data = commonUtil.changeDate(payload.loanBalanceAmount);
            state.kosdaqIndustryFlowStockRightLoanTransactionChart.series[0].visible = false;
            state.kosdaqIndustryFlowStockRightLoanTransactionChart.series[1].visible = false;
            state.kosdaqIndustryFlowStockRightLoanTransactionChart.series[2].visible = false;
            state.kosdaqIndustryFlowStockRightLoanTransactionChart.series[4].visible = false;
            state.kosdaqIndustryFlowStockRightLoanTransactionChart.rangeSelector.selected = 5;
        }

        , callSupplyDemandAnalysisGraphStock: (state, payload)=>{
            state.supplyDemandAnalysisGraphStockInfoChart.series[0].data = commonUtil.changeDate(payload.resultStockInfo);
            state.supplyDemandAnalysisGraphStockInfoChart.series[1].data = commonUtil.changeDate(payload.ma005);
            state.supplyDemandAnalysisGraphStockInfoChart.series[2].data = commonUtil.changeDate(payload.ma010);
            state.supplyDemandAnalysisGraphStockInfoChart.series[3].data = commonUtil.changeDate(payload.ma020);
            state.supplyDemandAnalysisGraphStockInfoChart.series[4].data = commonUtil.changeDate(payload.ma060);
            state.supplyDemandAnalysisGraphStockInfoChart.series[5].data = commonUtil.changeDate(payload.ma100);
            state.supplyDemandAnalysisGraphStockInfoChart.series[6].data = commonUtil.changeDate(payload.ma200);
            state.supplyDemandAnalysisGraphStockInfoChart.series[7].data = commonUtil.changeDate(payload.volumeLst);
            state.supplyDemandAnalysisGraphStockInfoChart.title.text = payload.stockName;
            state.supplyDemandAnalysisGraphStockInfoChart.series[0].name = payload.stockName;
            state.supplyDemandAnalysisGraphStockInfoChart.rangeSelector.selected = 5;
            state.supplyDemandAnalysisGraphStockInfoChart.series[1].visible = false;
            state.supplyDemandAnalysisGraphStockInfoChart.series[2].visible = false;
            state.supplyDemandAnalysisGraphStockInfoChart.series[3].visible = false;
            state.supplyDemandAnalysisGraphStockInfoChart.series[4].visible = false;
            state.supplyDemandAnalysisGraphStockInfoChart.series[5].visible = false;
            state.supplyDemandAnalysisGraphStockInfoChart.series[6].visible = false;
        }

        , setSupplyDemandAnalysisGraphStockName: (state, payload)=>{
            state.supplyDemandAnalysisGraphStockName = payload;
        }

        , callSupplyDemandAnalysisGraphChartData: (state, payload)=>{
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
            state.supplyDemandAnalysisGraphAcuChart.yAxis.title.text = "매집량";
            for(let i=0; i < acuChartInfo.length; i++){
                state.supplyDemandAnalysisGraphAcuChart.series[i].data = commonUtil.changeDate(acuChartInfo[i]);
                state.supplyDemandAnalysisGraphDispersionChart.series[i].data = commonUtil.changeDate(dispersionInfo[i]);
                state.supplyDemandAnalysisGraphAcuChart.series[i].tooltip.valueSuffix = "주";
            }
            state.supplyDemandAnalysisGraphResultRowData = response.resultRowData;
            state.supplyDemandAnalysisGraphAveragePriceRowData = response.averagePriceRowData;

            
            state.supplyDemandAnalysisGraphAcuChart.rangeSelector.selected = 5;
            state.supplyDemandAnalysisGraphDispersionChart.rangeSelector.selected = 5;

            for(let i = 0; i < unvisibleArr.length; i++){
              state.supplyDemandAnalysisGraphAcuChart.series[unvisibleArr[i]].visible = false;
              state.supplyDemandAnalysisGraphDispersionChart.series[unvisibleArr[i]].visible = false;
            }
        }

        , callSupplyDemandAnalysisGraphShortSelling: (state, payload)=>{
            state.supplyDemandAnalysisGraphShortSellingChart.series[0].data = commonUtil.changeDate(payload.shortSellingQuantity);
            state.supplyDemandAnalysisGraphShortSellingChart.series[1].data = commonUtil.changeDate(payload.shortSellingPercentage);
            state.supplyDemandAnalysisGraphShortSellingChart.series[2].data = commonUtil.changeDate(payload.shortSellingTransactionAmount);
            state.supplyDemandAnalysisGraphShortSellingChart.series[1].visible = false;
            state.supplyDemandAnalysisGraphShortSellingChart.series[2].visible = false;
            state.supplyDemandAnalysisGraphShortSellingChart.rangeSelector.selected = 5;
        }
        
        , callSupplyDemandAnalysisGraphLoanTransaction: (state, payload)=>{
            state.supplyDemandAnalysisGraphLoanTransactionChart.series[0].data = commonUtil.changeDate(payload.loanStockQuantity);
            state.supplyDemandAnalysisGraphLoanTransactionChart.series[1].data = commonUtil.changeDate(payload.loanPayBack);
            state.supplyDemandAnalysisGraphLoanTransactionChart.series[2].data = commonUtil.changeDate(payload.loanBalanceFluctuation);
            state.supplyDemandAnalysisGraphLoanTransactionChart.series[3].data = commonUtil.changeDate(payload.loanBalanceStockQuantity);
            state.supplyDemandAnalysisGraphLoanTransactionChart.series[4].data = commonUtil.changeDate(payload.loanBalanceAmount);
            state.supplyDemandAnalysisGraphLoanTransactionChart.series[0].visible = false;
            state.supplyDemandAnalysisGraphLoanTransactionChart.series[1].visible = false;
            state.supplyDemandAnalysisGraphLoanTransactionChart.series[2].visible = false;
            state.supplyDemandAnalysisGraphLoanTransactionChart.series[4].visible = false;
            state.supplyDemandAnalysisGraphLoanTransactionChart.rangeSelector.selected = 5;
        }

        , callQuickInterestTwoIndustrySelectBox: (state, payload)=>{
            state.industries = payload.interestTwoIndustrySelectBox;
            state.sendIndustry = payload.interestTwoIndustrySelectBox[0];
        }

        , callSupplyDemandGraphSelectBox: (state, payload)=>{
            state.supplyDemandAnalysisGraphAutoCompleteSelectBox = payload.supplyDemandAnalysisGraphAutoCompleteSelectBox;
            state.sendStockCode = payload.supplyDemandAnalysisGraphAutoCompleteSelectBox[0];
        }

        , callSupplyDemandAnalysisGraphRowData: (state, payload)=>{
            state.supplyDemandAnalysisGraphRowData = payload;
        }

        , setId: (state, payload)=>{
            state.id = payload;
            // console.log('state.avgLineList;;;', state.avgLineList);
        }
        
        , setPassword: (state, payload)=>{
            state.password = payload;
            // console.log('state.avgLineList;;;', state.avgLineList);
        }

        , callVolume: (state, payload)=>{
            state.quickInterestStockRightVolumeChart.series[0].data = commonUtil.changeDate(payload.volumeLst);
            state.quickInterestStockRightVolumeChart.series[1].data = commonUtil.changeDate(payload.volumeMa5);
            state.quickInterestStockRightVolumeChart.series[2].data = commonUtil.changeDate(payload.volumeMa20);
            state.quickInterestStockRightVolumeChart.series[3].data = commonUtil.changeDate(payload.volumeMa50);
            state.quickInterestStockRightVolumeChart.series[4].data = commonUtil.changeDate(payload.volumeMa200);
            state.quickInterestStockRightVolumeChart.rangeSelector.selected = 5;
        },

    },

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
        , callStockRight: ({commit}, payload) => {
            commit('callSpinnerLoading', {val: true});
            let resData = {};
            let postData = {
                csvFileName: payload.csvFileName
                , radioBoxKind: payload.radioBoxKind
                , avgLineList: payload.avgLineList
            };
            axios.post(`${constants.URL}${'rightChartList/'}`
            , {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'JWT fefege...'
            }, postData})
            .then(function(response) {
                console.log(response);
                let addAvgObject = new Object();
                let addAvgList = new Array();
                if(payload.radioBoxKind === 'interestTwo'){
                    let key1 = Object.keys(response.data);
                    console.log(key1);
                    addAvgList = response.data.addAvg;
                    if(addAvgList.length > 0){
                        for(let i = 0; i < addAvgList.length; i++){
                            addAvgObject[addAvgList[i]] = response.data[addAvgList[i]];
                        }
                    }
                }
                resData = {
                    // resultStockInfo: response.data.resultStockInfo,
                    resultStockInfo: response.data.candleChart,
                    ma005: response.data.ma005,
                    ma010: response.data.ma010,
                    ma020: response.data.ma020,
                    ma060: response.data.ma060,
                    ma100: response.data.ma100,
                    ma200: response.data.ma200,
                    stockName: payload.stockName,
                    avgLineList: response.data.avgLineList,
                    addAvgList: addAvgList,
                    volumeLst: response.data.volumeLst,
                };
                if(Object.keys(addAvgObject).length > 0){
                    Object.assign(resData, addAvgObject);
                }
                console.log('resData;;;', resData);
                if(payload.category == 'quickOne'){
                    commit('callStockRight', resData);
                    commit('setInOnLftClkStkNm', payload.stockName);
                    commit('callAcuDispersionChartData', response.data);
                } else if(payload.category == 'kospiIndustry'){
                    commit('callKospiIndustryFlowStockRight', resData);
                    commit('setKospiIndustryFlowStockName', payload.stockName);
                    commit('callKospiIndustryAcuDispersionChartData', response.data);
                } else if(payload.category == 'kosdaqIndustry'){
                    commit('callKosdaqIndustryFlowStockRight', resData);
                    commit('setKosdaqIndustryFlowStockName', payload.stockName);
                    commit('callKosdaqIndustryAcuDispersionChartData', response.data);
                } else if(payload.category == 'supplyDemandAnalysisGraph'){
                    commit('callSupplyDemandAnalysisGraphStock', resData);
                    commit('setSupplyDemandAnalysisGraphStockName', payload.stockName);
                    commit('callSupplyDemandAnalysisGraphChartData', response.data);
                }
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
        , callKospiMarketIndexCandleChartData: ({commit}, payload) => {
            commit('callSpinnerLoading', {val: true});
            axios.post(
                `${constants.URL}${'kospiIndexCandleChartAnalysis/'}`
                , {
                    headers: {
                      'Content-Type': 'application/json',
                      'Authorization': 'JWT fefege...'
                    }
                , payload})
            .then(function(response) {
                commit('callKospiMarketIndexCandleChartData', response.data);
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

        , callKosdaqMarketIndexCandleChartData: ({commit}, payload) => {
            commit('callSpinnerLoading', {val: true});
            axios.post(
                `${constants.URL}${'kosdaqIndexCandleChartAnalysis/'}`
                , {
                    headers: {
                      'Content-Type': 'application/json',
                      'Authorization': 'JWT fefege...'
                    }
                , payload})
            .then(function(response) {
                commit('callKosdaqMarketIndexCandleChartData', response.data);
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
        , callShortSelling: ({commit}, payload) => {
            commit('callSpinnerLoading', {val: true});
            let postData = {
                csvFileName: payload.csvFileName,
            };
            axios.post(`${constants.URL}${'shortSellingChartAnalysis/'}`
            , {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'JWT fefege...'
            }, postData})
            .then(function(response) {
                if(payload.category === 'quickOne'){
                    commit('callShortSelling', response.data);
                } else if (payload.category === 'kospiIndustry'){
                    commit('callKospiIndustryFlowStockRightShortSelling', response.data);
                } else if (payload.category === 'kosdaqIndustry'){
                    commit('callKosdaqIndustryFlowStockRightShortSelling', response.data);
                } else if (payload.category === 'supplyDemandAnalysisGraph'){
                    commit('callSupplyDemandAnalysisGraphShortSelling', response.data);
                }
                
            })
            .catch(function(error) {
                console.log(error);
                commit('callSpinnerLoading', {val: false});
            })
            .finally(function(){
                commit('callSpinnerLoading', {val: false});
            });
        }
        , callLoanTransaction: ({commit}, payload) => {
            commit('callSpinnerLoading', {val: true});
            let postData = {
                csvFileName: payload.csvFileName,
            };
            axios.post(`${constants.URL}${'loanTransactionChartAnalysis/'}`
            , {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'JWT fefege...'
            }, postData})
            .then(function(response) {
                if (payload.category === 'quickOne'){
                    commit('callLoanTransaction', response.data);
                } else if (payload.category === 'kospiIndustry'){
                    commit('callKospiIndustryFlowStockRightLoanTransaction', response.data);
                } else if (payload.category === 'kosdaqIndustry'){
                    commit('callKosdaqIndustryFlowStockRightLoanTransaction', response.data);
                } else if (payload.category === 'supplyDemandAnalysisGraph'){
                    commit('callSupplyDemandAnalysisGraphLoanTransaction', response.data);
                }
            })
            .catch(function(error) {
                console.log(error);
                commit('callSpinnerLoading', {val: false});
            })
            .finally(function(){
                commit('callSpinnerLoading', {val: false});
            });
        }
        , callKospiMarketIndustryIndexCandleChartData: ({commit}, payload) => {
            commit('callSpinnerLoading', {val: true});
            axios.post(
                `${constants.URL}${'kospiMarketIndustryIndexCandleChartAnalysis/'}`
                , {
                    headers: {
                      'Content-Type': 'application/json',
                      'Authorization': 'JWT fefege...'
                    }
                , payload})
            .then(function(response) {
                commit('callKospiMarketIndustryIndexCandleChartData', response.data);
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
        , callKosdaqMarketIndustryIndexCandleChartData: ({commit}, payload) => {
            commit('callSpinnerLoading', {val: true});
            axios.post(
                `${constants.URL}${'kosdaqMarketIndustryIndexCandleChartAnalysis/'}`
                , {
                    headers: {
                      'Content-Type': 'application/json',
                      'Authorization': 'JWT fefege...'
                    }
                , payload})
            .then(function(response) {
                commit('callKosdaqMarketIndustryIndexCandleChartData', response.data);
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

        , callEachIndustryStock: ({commit}, payload) => {
            commit('callSpinnerLoading', {val: true});
            axios.post(
                `${constants.URL}${'callEachIndustryStock/'}`
                , {
                    headers: {
                      'Content-Type': 'application/json',
                      'Authorization': 'JWT fefege...'
                    }
                , payload})
            .then(function(response) {
                if(payload.category === 'kospi'){
                    commit('callKospiEachIndustryStock', response.data);
                    commit('callSpinnerLoading', {val: false});
                    alert('종목 검색이 끝났습니다. 업종흐름종목(코스피)로 가서 확인해보세요!');
                } else if(payload.category === 'kosdaq'){
                    commit('callKosdaqEachIndustryStock', response.data);
                    commit('callSpinnerLoading', {val: false});
                    alert('종목 검색이 끝났습니다. 업종흐름종목(코스피)로 가서 확인해보세요!');
                }
            })
            .catch(function(error) {
                console.log(error);
                commit('callSpinnerLoading', {val: false});
            })
            .finally(()=>{
                commit('callSpinnerLoading', {val: false});
            });
        }


        , callQuickInterestTwoStockLeft:({commit}, payload) => {
            commit('callSpinnerLoading', {val: true});
            axios.post(
                `${constants.URL}${'callQuickInterestTwoStockLeft/'}`
                , {
                    headers: {
                      'Content-Type': 'application/json',
                      'Authorization': 'JWT fefege...'
                    }
                , payload})
            .then(function(response) {
                commit('callRowData', response.data.grossSumGridData);
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

        // 관심2 셀렉트박스 호출
        , callQuickInterestTwoIndustrySelectBox:({commit}, payload) => {
            commit('callSpinnerLoading', {val: true});
            axios.post(
                `${constants.URL}${'callQuickInterestTwoIndustrySelectBox/'}`
                , {
                    headers: {
                      'Content-Type': 'application/json',
                      'Authorization': 'JWT fefege...'
                    }
                , payload})
            .then(function(response) {
                console.log('selectBox: ', response);
                commit('callQuickInterestTwoIndustrySelectBox', response.data);
                commit('callSupplyDemandGraphSelectBox', response.data);

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

        , validationCheckAvgLineList:({commit}, payload) => {
            return new Promise((resolve) => {
                commit('validationCheckAvgLineList', {payload, callback: resolve});
              });
        }

        , callSupplyDemandAnalysisGraph:({commit}, payload) => {
            commit('callSpinnerLoading', {val: true});
            axios.post(
                `${constants.URL}${'callSupplyDemandAnalysisGraph/'}`
                , {
                    headers: {
                      'Content-Type': 'application/json',
                      'Authorization': 'JWT fefege...'
                    }
                , payload})
            .then(function(response) {
                console.log('callSupplyDemandAnalysisGraph: ', response);
                commit('callSupplyDemandAnalysisGraphRowData', response.data.supplyDemandAnalysisGraphRowData);
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

        , callAuthIdPw:({commit}, payload) => {
            commit('callSpinnerLoading', {val: true});
            axios.post(
                `${constants.AUTHURL}${'user/'}`
                , {
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': 'JWT fefege...'
                    }
                , payload})
            .then(function(response) {
                console.log(response)
                commit('callSpinnerLoading', {val: false});
                if (response.data.success == true) {
                    localStorage.setItem('jwt', response.data.token);
                    commit('setIsLogin', {val: true});
                    router.push({ name : 'MainTask' })
                } else {
                    alert('관리자 아이디와 비번을 확인해주세요.');
                }
            })
            .catch(function(error) {
                console.log(error);
                commit('callSpinnerLoading', {val: false});
            })
            .finally(()=>{
                commit('callSpinnerLoading', {val: false});
            });
        }

        , callInitializeStockData:({commit}, payload) => {
            commit('callSpinnerLoading', {val: true});
            axios.post(
                `${constants.URL}${'callInitializeStockData/'}`
                , {
                    headers: {
                      'Content-Type': 'application/json',
                      'Authorization': 'JWT fefege...'
                    }
                , payload})
            .then(function(response) {
                console.log('callInitializeStockData: ', response);
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

        , callVolume: ({commit}, payload) => {
            commit('callSpinnerLoading', {val: true});
            let postData = {
                csvFileName: payload.csvFileName,
            };
            axios.post(`${constants.URL}${'volumeChartAnalysis/'}`
            , {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'JWT fefege...'
            }, postData})
            .then(function(response) {
                console.log('volume response', response);
                if(payload.category === 'quickOne'){
                    commit('callVolume', response.data);
                } else if (payload.category === 'kospiIndustry'){
                    commit('callKospiIndustryFlowStockRightVolume', response.data);
                } else if (payload.category === 'kosdaqIndustry'){
                    commit('callKosdaqIndustryFlowStockRightVolume', response.data);
                } else if (payload.category === 'supplyDemandAnalysisGraph'){
                    commit('callSupplyDemandAnalysisGraphVolume', response.data);
                }
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


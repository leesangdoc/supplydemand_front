import {CommonUtil} from './CommonUtil';

const commonUtil = new CommonUtil(); 
export default {
    quickInterestStockLeftGridColumns: [
        { headerName: '종목명', field: 'stockName', sortable: true, filter: true, width: 250,},
        { headerName: '개인', field: 'individual', sortable: true, filter: true, valueFormatter: commonUtil.curruncyFormatter, cellStyle: commonUtil.cellStyleFormatter, width: 120,},
        { headerName: '세력합', field: 'grossSum', sortable: true, filter: true, valueFormatter: commonUtil.curruncyFormatter, cellStyle: commonUtil.cellStyleFormatter, width: 120,},
        { headerName: '외국인', field: 'foreigner', sortable: true, filter: true, valueFormatter: commonUtil.curruncyFormatter, cellStyle: commonUtil.cellStyleFormatter, width: 120,},
        { headerName: '금융', field: 'finance', sortable: true, filter: true, valueFormatter: commonUtil.curruncyFormatter, cellStyle: commonUtil.cellStyleFormatter, width: 120,},
        { headerName: '보험', field: 'insurance', sortable: true, filter: true, valueFormatter: commonUtil.curruncyFormatter, cellStyle: commonUtil.cellStyleFormatter, width: 120,},
        { headerName: '투신', field: 'investment', sortable: true, filter: true, valueFormatter: commonUtil.curruncyFormatter, cellStyle: commonUtil.cellStyleFormatter, width: 120,},
        { headerName: '은행', field: 'bank', sortable: true, filter: true, valueFormatter: commonUtil.curruncyFormatter, cellStyle: commonUtil.cellStyleFormatter, width: 120,},
        { headerName: '기타금융', field: 'etcFinance', sortable: true, filter: true, valueFormatter: commonUtil.curruncyFormatter, cellStyle: commonUtil.cellStyleFormatter, width: 120,},
        { headerName: '연기금', field: 'pensionFund', sortable: true, filter: true, valueFormatter: commonUtil.curruncyFormatter, cellStyle: commonUtil.cellStyleFormatter, width: 120,},
        { headerName: '국가(지자체)', field: 'government', sortable: true, filter: true, valueFormatter: commonUtil.curruncyFormatter, cellStyle: commonUtil.cellStyleFormatter, width: 120,},
        { headerName: '기타외인', field: 'etcForeigner', sortable: true, filter: true, valueFormatter: commonUtil.curruncyFormatter, cellStyle: commonUtil.cellStyleFormatter, width: 120,},
        { headerName: '사모펀드', field: 'privateEquity', sortable: true, filter: true, valueFormatter: commonUtil.curruncyFormatter, cellStyle: commonUtil.cellStyleFormatter, width: 120,},
        { headerName: '파일명', field: 'fileTitle', sortable: true, filter: true, hide: true }
    ] 
    , supplyDemandGraphColumns : [
      { headerName: '기간', field: 'period', sortable: true, filter: true},
      { headerName: '종가', field: 'closePrice', sortable: true, filter: true},
      { headerName: '개인', field: 'individual', sortable: true, filter: true, valueFormatter: commonUtil.curruncyFormatter, cellStyle: commonUtil.cellStyleFormatter, },
      { headerName: '세력합', field: 'grossSum', sortable: true, filter: true, valueFormatter: commonUtil.curruncyFormatter, cellStyle: commonUtil.cellStyleFormatter, },
      { headerName: '외국인', field: 'foreigner', sortable: true, filter: true, valueFormatter: commonUtil.curruncyFormatter, cellStyle: commonUtil.cellStyleFormatter, },
      { headerName: '금융', field: 'finance', sortable: true, filter: true, valueFormatter: commonUtil.curruncyFormatter, cellStyle: commonUtil.cellStyleFormatter, },
      { headerName: '보험', field: 'insurance', sortable: true, filter: true, valueFormatter: commonUtil.curruncyFormatter, cellStyle: commonUtil.cellStyleFormatter, },
      { headerName: '투신', field: 'investment', sortable: true, filter: true, valueFormatter: commonUtil.curruncyFormatter, cellStyle: commonUtil.cellStyleFormatter, },
      { headerName: '은행', field: 'bank', sortable: true, filter: true, valueFormatter: commonUtil.curruncyFormatter, cellStyle: commonUtil.cellStyleFormatter, },
      { headerName: '기타금융', field: 'etcFinance', sortable: true, filter: true, valueFormatter: commonUtil.curruncyFormatter, cellStyle: commonUtil.cellStyleFormatter, },
      { headerName: '연기금', field: 'pensionFund', sortable: true, filter: true, valueFormatter: commonUtil.curruncyFormatter, cellStyle: commonUtil.cellStyleFormatter, },
      { headerName: '국가(지자체)', field: 'government', sortable: true, filter: true, valueFormatter: commonUtil.curruncyFormatter, cellStyle: commonUtil.cellStyleFormatter, },
      { headerName: '기타법인', field: 'etcCorp', sortable: true, filter: true, valueFormatter: commonUtil.curruncyFormatter, cellStyle: commonUtil.cellStyleFormatter, },
      { headerName: '기타외인', field: 'etcForeigner', sortable: true, filter: true, valueFormatter: commonUtil.curruncyFormatter, cellStyle: commonUtil.cellStyleFormatter, },
      { headerName: '사모펀드', field: 'privateEquity', sortable: true, filter: true, valueFormatter: commonUtil.curruncyFormatter, cellStyle: commonUtil.cellStyleFormatter, },
    ],
    averagePriceGraphColumns : [
        { headerName: '평균단가', field: 'period',},
        { headerName: '개인', field: 'individual', valueFormatter: commonUtil.curruncyFormatter, },
        { headerName: '세력합', field: 'grossSum', valueFormatter: commonUtil.curruncyFormatter, },
        { headerName: '외국인', field: 'foreigner', valueFormatter: commonUtil.curruncyFormatter, },
        { headerName: '금융', field: 'finance', valueFormatter: commonUtil.curruncyFormatter, },
        { headerName: '보험', field: 'insurance', valueFormatter: commonUtil.curruncyFormatter, },
        { headerName: '투신', field: 'investment', valueFormatter: commonUtil.curruncyFormatter, },
        { headerName: '은행', field: 'bank', valueFormatter: commonUtil.curruncyFormatter, },
        { headerName: '기타금융', field: 'etcFinance', valueFormatter: commonUtil.curruncyFormatter, },
        { headerName: '연기금', field: 'pensionFund', valueFormatter: commonUtil.curruncyFormatter, },
        { headerName: '국가(지자체)', field: 'government', valueFormatter: commonUtil.curruncyFormatter, },
        { headerName: '기타법인', field: 'etcCorp', valueFormatter: commonUtil.curruncyFormatter, },
        { headerName: '기타외인', field: 'etcForeigner', valueFormatter: commonUtil.curruncyFormatter, },
        { headerName: '사모펀드', field: 'privateEquity', valueFormatter: commonUtil.curruncyFormatter, },
    ]
    , industryHeroRankingColumns : [
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
        , { headerName: '1위', field: 'No1', width: 200}
        , { headerName: '2위', field: 'No2', width: 200}
        , { headerName: '3위', field: 'No3', width: 200}
        , { headerName: '4위', field: 'No4', width: 200}
        , { headerName: '5위', field: 'No5', width: 200}
        , { headerName: '6위', field: 'No6', width: 200}
        , { headerName: '7위', field: 'No7', width: 200}
        , { headerName: '8위', field: 'No8', width: 200}
        , { headerName: '9위', field: 'No9', width: 200}
        , { headerName: '10위', field: 'No10', width: 200}
        , { headerName: '11위', field: 'No11', width: 200}
        , { headerName: '12위', field: 'No12', width: 200}
        , { headerName: '13위', field: 'No13', width: 200}
        , { headerName: '14위', field: 'No14', width: 200}
        , { headerName: '15위', field: 'No15', width: 200}
        , { headerName: '16위', field: 'No16', width: 200}
        , { headerName: '17위', field: 'No17', width: 200}
        , { headerName: '18위', field: 'No18', width: 200}
        , { headerName: '19위', field: 'No19', width: 200}
        , { headerName: '20위', field: 'No20', width: 200}
        , { headerName: '21위', field: 'No21', width: 200}
        , { headerName: '22위', field: 'No22', width: 200}
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
}
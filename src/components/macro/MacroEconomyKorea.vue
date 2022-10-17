<template>  
  <v-card flat>
    <v-card-text>
      <h1>미국 거시경제 분석입니다...{{globalCode}}</h1>
      <br/>
      <v-simple-table>
      <template v-slot:default>
        <thead>
          <tr>
            <th class="text-middle">
              Title
            </th>
            <th class="text-middle">
              Contents
            </th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in resultList" :key="item.title">
            <td>
              <span v-html="item.title"></span>
            </td>
            <td>
              <span v-html="item.contents"></span>
            </td>
          </tr>
        </tbody>
      </template>
    </v-simple-table>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  title: 'HelloWorld'
  // 이게 액션기능인듯...
  , methods: {
    
  }
  , props: ['globalCode']
  , data: function() {
    console.log('macroKorea this.globalCode;;;', this.globalCode);
    return {
      hero: this.globalCode
      /*
      미국 버핏지수 
      https://www.currentmarketvaluation.com/models/buffett-indicator.php
      */
      ,  resultList: [
        {
          title: '금리',
          contents: '<a target="_blank" href="https://www.bok.or.kr/portal/singl/baseRate/list.do?dataSeCd=01&menuNo=200643">금리</a>',
        },
        {
          title: '원달러_환율',
          contents: '<a target="_blank" href="https://finance.naver.com/marketindex/exchangeDetail.nhn?marketindexCd=FX_USDKRW#">환율</a>',
        },
        {
          title: '가계신용동향',
          contents: '<a target="_blank" href="https://www.index.go.kr/potal/main/EachDtlPageDetail.do?idx_cd=1076&param=003">가계부채</a>',
        },
        {
          title: '가계부채비율(가구처분가능소득 대비)',
          contents: '<a target="_blank" href="https://www.index.go.kr/unify/idx-info.do?idxCd=5054">가구처분가능소득</a>',
        },
        {
          title: '가구순자산',
          contents: '<a target="_blank" href="https://www.index.go.kr/unify/idx-info.do?idxCd=5054">가구순자산</a>',
        },
        {
          title: '버핏지수(한국)',
          contents: '<a target="_blank" href="https://www.gurufocus.com/global-market-valuation.php?country=KOR">버핏지수</a>',
        },
        {
          title: '통화량추이',
          contents: '<a target="_blank" href="https://www.index.go.kr/potal/main/EachDtlPageDetail.do?idx_cd=1072">통화량</a>',
        },
        {
          title: '금융투자협회<br/>(투자자예탁금, 신용거래융자, 예탁증권담보융자)',
          contents: '<a target="_blank" href="https://freesis.kofia.or.kr/"> 자본시장통계에서, 주식→ 증시자금추이 또는 주식 → 신용공여현황</a>',
        },
        {
          title: '부동산 거래현황',
          contents: '<a target="_blank" href="https://www.reb.or.kr/r-one/cm/cntnts/cntntsView.do?mi=10113&cntntsId=1409">부동산거래량</a>',
        },
        {
          title: '소비자물가지수',
          contents: '<a target="_blank" href="http://kostat.go.kr/incomeNcpi/cpi/cpi_td/2/1/index.action?bmode=cpidtval">소비자물가지수</a>',
        },
        {
          title: '생산자물가지수',
          contents: '<a target="_blank" href="https://www.index.go.kr/potal/main/EachDtlPageDetail.do?idx_cd=1061">생산자물가지수</a>',
        },
        {
          title: 'KIET 경제동향',
          contents: '<a target="_blank" href="https://www.kiet.re.kr/trends/ecotrendsList">경제동향(거시지표)</a>',
        },
        {
          title: 'KIET 산업동향',
          contents: '<a target="_blank" href="https://www.kiet.re.kr/trends/indbriefList">산업동향</a>',
        },
        {
          title: '전산업생산지수',
          contents: '<a target="_blank" href="https://www.index.go.kr/potal/main/EachDtlPageDetail.do?idx_cd=2838">전산업생산지수</a>',
        },
        {
          title: '경기종합지수',
          contents: '<a target="_blank" href="https://www.index.go.kr/potal/main/EachDtlPageDetail.do?idx_cd=1057">경기종합지수</a>',
        },
        {
          title: '외환보유액',
          contents: '<a target="_blank" href="https://www.index.go.kr/potal/main/EachDtlPageDetail.do?idx_cd=1067">통계표목록 클릭</a>',
        },
        {
          title: '',
          contents: '',
        },
        {
          title: '',
          contents: '',
        },
        {
          title: '',
          contents: '',
        },
        {
          title: '',
          contents: '',
        },
      ],
    }
  }
}
</script>

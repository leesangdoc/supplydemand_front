<template>  
  <v-card flat>
    <v-card-text>
      <h1>한국 거시경제 분석입니다...{{globalCode}}</h1>
      <h3>경제용어 해설</h3>
      <h5>
        내구재: 한번사면 존나게 오래쓰는거...<br/>
        은 금 보석류  자본설비, 공장건물 등, <br/>
        일반적인 개인들에게는 냉장고나 TV, 세탁기, 주택 등이 대표적인 내구재에 해당. <br/>
      </h5>
      <h5>
        준내구재: 1년 이상 사용이 가능하나 주로 저가인 상품을 말한다. 의복, 신발, 가방, 운동용품, 오락용품 등이 해당...<br/>
      </h5>
      <h5>
        비내구재: 주로 1년 미만 사용되는 상품이 해당된다. 음식료품, 의약품, 화장품, 서적 및 문구, 차량연료 등이 해당...<br/>
      </h5>
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
          title: '통계청 소비동향',
          contents: '<a target="_blank" href="https://www.index.go.kr/potal/main/EachDtlPageDetail.do?idx_cd=1054">통계청 소비동향</a>',
        },
        {
          title: '한국은행 소비자동향',
          contents: '<a target="_blank" href="https://www.bok.or.kr/portal/bbs/P0000559/list.do?menuNo=200690&searchWrd=%EC%86%8C%EB%B9%84%EC%9E%90%EB%8F%99%ED%96%A5&searchCnd=1&sdate=&edate=">한국은행 소비자동향</a>',
        },
        {
          title: '서비스업동향조사',
          contents: '<a target="_blank" href="https://kosis.kr/serviceInfo/newContrainDataDetail.do?boardIdx=1999001&boardOrgId=101">서비스업동향</a>',
        },
        {
          title: '실질 국민 총소득',
          contents: '<a target="_blank" href="https://www.index.go.kr/unify/idx-info.do?idxCd=4221">1인당_실질_국민_총소득</a>',
        },
        {
          title: '소비자동향지수(CSI)',
          contents: '<a target="_blank" href="https://www.index.go.kr/potal/main/EachDtlPageDetail.do?idx_cd=1058">소비자동향지수</a>',
        },
        {
          title: '가계신용 동향',
          contents: '<a target="_blank" href="https://www.index.go.kr/potal/main/EachDtlPageDetail.do?idx_cd=1076&param=003">가계신용동향</a>',
        },
        {
          title: '담보대출(우리은행)',
          contents: '<a target="_blank" href="https://spot.wooribank.com/pot/Dream?withyou=POLON0070">담보대출(우리은행)</a>',
        },
        {
          title: '경제활동인구조사',
          contents: '<a target="_blank" href="https://kostat.go.kr/portal/korea/kor_nw/1/3/2/index.board">고용동향</a>',
        },
        {
          title: '국가지표체계(고용률)',
          contents: '<a target="_blank" href="https://www.index.go.kr/unify/idx-info.do?idxCd=4212">고용률</a>',
        },
        {
          title: '산업연구원(민간소비 검색)',
          contents: '<a target="_blank" href="https://www.kiet.re.kr/searchAll?collection=ALL&category=kiet_communicate&query=%EB%AF%BC%EA%B0%84%EC%86%8C%EB%B9%84&sort=DATE&listCount=10&startCount=0">민간소비</a>',
        },
        {
          title: '설비투자동향',
          contents: '<a target="_blank" href="https://www.index.go.kr/potal/main/EachDtlPageDetail.do?idx_cd=1055">설비투자동향</a>',
        },
        {
          title: '설비투자지수(방향성 추이를 볼것)',
          contents: '<a target="_blank" href="https://kosis.kr/statHtml/statHtml.do?conn_path=K2&tblId=DT_1F70011&orgId=101">설비투자지수</a>',
        },
        {
          title: '설비투자지수(보도자료)',
          contents: '<a target="_blank" href="https://kostat.go.kr/understand/info/info_kost/1/index.action?bmode=read&cd=S010002">설비투자지수(보도자료)</a>',
        },
        {
          title: '건설투자 동향',
          contents: '<a target="_blank" href="https://www.index.go.kr/potal/main/EachDtlPageDetail.do?idx_cd=1056">건설투자 동향<a/>',
        },
        {
          title: '건설기성액',
          contents: '<a target="_blank" href="https://kosis.kr/search/search.do?query=%EA%B1%B4%EC%84%A4%EA%B8%B0%EC%84%B1%EC%95%A1">건설기성액<a/>',
        },
        {
          title: '건설경기동향조사',
          contents: '<a target="_blank" href="https://kostat.go.kr/understand/info/info_kost/1/index.action?bmode=read&cd=S007001">건설경기동향조사</a>',
        },
        {
          title: '수출입동향',
          contents: '<a target="_blank" href="https://www.index.go.kr/potal/main/EachDtlPageDetail.do?idx_cd=1066">수출입동향</a>',
        },
        {
          title: '한국무역현황(코브라)',
          contents: '<a target="_blank" href="https://www.kotra.or.kr/bigdata/visualization/korea#search/ALL/ALL/2022/8/exp">쌩까면 안되는 국가목록 싸바싸바</a>',
        },
        {
          title: '경상수지 및 무역수지',
          contents: '<a target="_blank" href="https://www.index.go.kr/potal/main/EachDtlPageDetail.do?idx_cd=2735">경상수지 및 무역수지</a>',
        },
        {
          title: '한국 10대 수출입 품목',
          contents: '<a target="_blank" href="https://www.index.go.kr/potal/main/EachDtlPageDetail.do?idx_cd=2455">증가율은 엑셀에 붙여서 파악한다</a>',
        },
        {
          title: '한국무역협회자료',
          contents: '<a target="_blank" href="https://www.kita.net/cmmrcInfo/rsrchReprt/rsrchReprt/rsrchReprtList.do">자료</a>',
        },
        {
          title: '한국무역협회 통계',
          contents: '<a target="_blank" href="https://stat.kita.net/">무역협회통계</a>',
        },
        {
          title: 'i-KIET 산업경제이슈',
          contents: '<a target="_blank" href="https://www.kiet.re.kr/research/issueList">산업경제이슈</a>',
        },
        {
          title: '취업자 수/실업률 추이',
          contents: '<a target="_blank" href="https://www.index.go.kr/potal/main/EachDtlPageDetail.do?idx_cd=1063">취업자 수/실업률 추이</a>',
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

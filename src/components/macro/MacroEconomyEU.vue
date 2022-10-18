<template>  
  <v-card flat>
    <v-card-text>
      <h1>전체 참조사이트 거시경제 분석입니다...{{globalCode}}</h1>
      <br/>
      <h2>주요 경제지표</h2>
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
    console.log('macroReferenceSite this.globalCode;;;', this.globalCode);
    return {
      hero: this.globalCode
      ,  resultList: [
        {
          title: '유럽주요지수',
          contents: '<a target="_blank" href="https://kr.investing.com/indices/european-indices?&majorIndices=on&additionalIndices=on">유럽주요지수</a>',
        },
        
        {
          title: '유로존 금리',
          contents: '<a target="_blank" href="https://kr.investing.com/economic-calendar/interest-rate-decision-164">유럽금리</a>',
        },
        {
          title: '유로달러_환율',
          contents: '<a target="_blank" href="https://kr.investing.com/currencies/eur-usd">유로달러</a>',
        },
        {
          title: '버핏지수_독일',
          contents: '<a target="_blank" href="https://www.gurufocus.com/global-market-valuation.php?country=DEU">버핏지수_독일</a>',
        },
        {
          title: '버핏지수_프랑스',
          contents: '<a target="_blank" href="https://www.gurufocus.com/global-market-valuation.php?country=FRA">버핏지수_프랑스</a>',
        },
        {
          title: '유럽 주요경제지표',
          contents: '<a target="_blank" href="https://ko.tradingeconomics.com/european-union/indicators">유럽_경제지표(상단탭-분야별 개작살남)</a>',
        },
        {
          title: '나라별 유럽 통계청 정보',
          contents: '<a target="_blank" href="https://kostat.go.kr/portal/korea/kor_ko/7/4/2/index.action">유럽 나라별 통계청 목록</a>',
        },
        {
          title: '유럽연합 통계청',
          contents: '<a target="_blank" href="https://ec.europa.eu/eurostat">유럽연합 통계청</a>',
        },
        {
          title: '네덜란드 CPB 유럽경제정책분석',
          contents: '<a target="_blank" href="https://www.cpb.nl/en">유럽경제정책분석</a>',
        },
        {
          title: '유럽 부동산거래량',
          contents: '<a target="_blank" href="https://www.google.com/search?q=%EC%9C%A0%EB%9F%BD+%EB%B6%80%EB%8F%99%EC%82%B0%EA%B1%B0%EB%9E%98%EB%9F%89&newwindow=1&sxsrf=ALiCzsYawVUId-jMEYZOJF9ddiektRsH4w:1666109757706&source=lnt&tbs=qdr:m&sa=X&ved=2ahUKEwi-647Clur6AhWJRN4KHTAIBcMQpwV6BAgCEBw&biw=1396&bih=656&dpr=1.38">유럽부동산거래량</a>',
        },
        {
          title: '유럽 물가지수',
          contents: '<a target="_blank" href="https://www.google.com/search?q=%EC%9C%A0%EB%9F%BD+%EB%AC%BC%EA%B0%80%EC%A7%80%EC%88%98&newwindow=1&biw=1396&bih=656&tbs=qdr%3Am&sxsrf=ALiCzsboAwFAn1jdMaBlsvTR6MSKaz4IpQ%3A1666110331053&ei=e9NOY93FAtD7-QastZOgDw&ved=0ahUKEwid78DTmOr6AhXQfd4KHazaBPQQ4dUDCA8&uact=5&oq=%EC%9C%A0%EB%9F%BD+%EB%AC%BC%EA%B0%80%EC%A7%80%EC%88%98&gs_lcp=Cgdnd3Mtd2l6EAMyBQgAEIAEMgYIABAHEB4yCAgAEAcQHhAPOggIABCABBCwAzoJCAAQCBAeELADOgkIABAHEB4QsAM6BggAEB4QDToECAAQQzoKCAAQgAQQhwIQFDoKCAAQCBAHEB4QD0oECEEYAUoECEYYAFCKDFivFWCjF2gEcAB4AYAByAGIAfoHkgEFMC42LjGYAQCgAQHIAQPAAQE&sclient=gws-wiz">유럽 물가지수</a>',
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

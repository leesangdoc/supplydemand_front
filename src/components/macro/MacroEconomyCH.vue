<template>  
  <v-card flat>
    <v-card-text>
      <h1>
        중국 거시경제 분석입니다...{{globalCode}}<br/>
        주로 봐야할거: 실질 GDP, 산업생산, 고정투자, 소매판매, 소비자물가, 수출(무역수지)
      </h1>
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
      , resultList: [
        {
          title: '중국 주가지수',
          contents: '<a target="_blank" href="https://kr.investing.com/indices/china-indices">주가지수</a>',
        },
        {
          title: '중국 금리',
          contents: '<a target="_blank" href="https://ko.tradingeconomics.com/china/interest-rate">금리</a>',
        },
        {
          title: '위안달러_환율',
          contents: '<a target="_blank" href="https://kr.investing.com/currencies/usd-cny">금리</a>',
        },
        {
          title: '중국 버핏지수',
          contents: '<a target="_blank" href="https://www.gurufocus.com/global-market-valuation.php?country=CHN">중국 버핏지수</a>',
        },
        {
          title: '중국 주요경제지표',
          contents: '<a target="_blank" href="https://ko.tradingeconomics.com/china/indicators">경제지표(상단탭-분야별 개작살남)</a>',
        },
        {
          title: '중국_국가_통계국',
          contents: '<a target="_blank" href="http://www.stats.gov.cn/english/">안좋은건 곱하기 2.5로 보기(공산당이니까 ^o^)</a>',
        },
        {
          title: '중국_부동산거래량',
          contents: '<a target="_blank" href="https://www.google.com/search?q=%EC%A4%91%EA%B5%AD+%EB%B6%80%EB%8F%99%EC%82%B0%EA%B1%B0%EB%9E%98%EB%9F%89&newwindow=1&biw=1396&bih=656&tbs=qdr%3Am&sxsrf=ALiCzsZ9to-1J7O-5u7r0MRXCGv64cBWqg%3A1666109762050&ei=QtFOY_DRAummwAOk3KOQCQ&oq=%E3%85%88+%EB%B6%80%EB%8F%99%EC%82%B0%EA%B1%B0%EB%9E%98%EB%9F%89&gs_lcp=Cgdnd3Mtd2l6EAMYADIICCEQwwQQoAFKBAhBGABKBAhGGABQAFgAYOENaABwAXgAgAGtAYgBrQGSAQMwLjGYAQCgAQHAAQE&sclient=gws-wiz">중국 부동산거래량</a>',
        },
        {
          title: '중국_물가지수',
          contents: '<a target="_blank" href="https://www.google.com/search?q=%EC%A4%91%EA%B5%AD+%EB%AC%BC%EA%B0%80%EC%A7%80%EC%88%98&newwindow=1&biw=1396&bih=656&tbs=qdr%3Am&sxsrf=ALiCzsakPDuRYcQ0_qtThZnB4M_pyBSpkQ%3A1666110182618&ei=5tJOY-ymJY2T1e8P5JKn-AE&ved=0ahUKEwjssd2MmOr6AhWNSfUHHWTJCR8Q4dUDCA8&uact=5&oq=%EC%A4%91%EA%B5%AD+%EB%AC%BC%EA%B0%80%EC%A7%80%EC%88%98&gs_lcp=Cgdnd3Mtd2l6EAMyBQgAEIAEMgYIABAIEB4yBggAEAUQHjoKCAAQRxDWBBCwAzoHCCMQ6gIQJzoECCMQJzoRCC4QgAQQsQMQgwEQxwEQ0QM6CwgAEIAEELEDEIMBOg4ILhCABBCxAxCDARDUAjoQCC4QgAQQhwIQsQMQ1AIQFDoRCC4QgAQQsQMQgwEQxwEQrwE6CwguEIAEELEDEIMBOgQIABBDOgoILhCxAxDUAhBDOhAIABCABBCHAhCxAxCDARAUOgcIABCABBADOgQIABAeOgYIABAeEA9KBAhBGABKBAhGGABQkgdYmRZgqBhoB3ABeAOAAYcBiAHhDpIBBDAuMTaYAQCgAQGwAQrIAQrAAQE&sclient=gws-wiz">중국_물가지수</a>',
        },
        {
          title: '중국 월별 취업자수',
          contents: '<a target="_blank" href="https://www.google.com/search?q=%EC%A4%91%EA%B5%AD+%EC%9B%94%EB%B3%84+%EC%B7%A8%EC%97%85%EC%9E%90%EC%88%98&newwindow=1&biw=1396&bih=656&tbs=qdr%3Am&sxsrf=ALiCzsZJABokz4AzF2FAmF7DIYie3MAvNw%3A1666110773940&ei=NdVOY4TxOMHy-Qb23rvADw&ved=0ahUKEwjE39immur6AhVBed4KHXbvDvgQ4dUDCA8&uact=5&oq=%EC%A4%91%EA%B5%AD+%EC%9B%94%EB%B3%84+%EC%B7%A8%EC%97%85%EC%9E%90%EC%88%98&gs_lcp=Cgdnd3Mtd2l6EAMyBwgAEB4QogQyBQgAEKIEMgUIABCiBDIHCAAQHhCiBDIFCAAQogQ6CggAEEcQ1gQQsAM6BAgAEB46CAghEMMEEKABSgQIQRgASgQIRhgAUKUJWNoQYNcSaAFwAXgAgAGEAYgBwweSAQMwLjiYAQCgAQHIAQHAAQE&sclient=gws-wiz">중국_월별취업자수</a>',
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

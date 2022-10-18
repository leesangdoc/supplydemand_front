<template>  
  <v-card flat>
    <v-card-text>
      <h1>미국 거시경제 분석입니다...{{globalCode}}</h1>
      <br/>
      <h3>
        <strong>내구재주문</strong>은 경기선행지표라고 할 수 있다. 주문량이 계속해서 증가하는 추세를 보이고 있다면 앞으로 경기가<br/>
         좋아질 것이므로 주식과 같은 위험자산에 적극 투자를 고려해보는 것이 좋다. <br/>
         전반적으로 낙관적인 분위기이므로 주가지수에 투자하는 것도 괜찮은 방법이겠고, <br/>
         종목 선정에 관한 안목이 있다면 직접적으로 연관이 큰 '내구재'사업을 하고 있는 산업을 선별해 골라내면 <br/>
         더 좋을 것이다. <br/>
         반대로 계속해서 주문량이 줄어드는 추세에 접어드는 것이 확인되면 빨리 위험자산을 정리해야 한다.<br/>
      </h3>
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
          title: '미국_다우존스지수',
          contents: '<a target="_blank" href="https://kr.investing.com/indices/us-30">다우존스지수</a>',
        },
        {
          title: '미국_나스닥지수',
          contents: '<a target="_blank" href="https://kr.investing.com/indices/nasdaq-composite">나스닥지수</a>',
        },
        {
          title: '미국 금리',
          contents: '<a target="_blank" href="https://ko.tradingeconomics.com/united-states/interest-rate">금리</a>',
        },
        {
          title: '버핏지수(미국)',
          contents: '<a target="_blank" href="https://www.gurufocus.com/stock-market-valuations.php">미국 버핏지수</a>',
        },
        {
          title: '미국 경제성장률',
          contents: '<a target="_blank" href="https://ko.tradingeconomics.com/united-states/gdp-growth">GDP 성장률</a>',
        },
        {
          title: '미국 주요경제지표',
          contents: '<a target="_blank" href="https://ko.tradingeconomics.com/united-states/indicators">경제지표(상단탭-분야별 개작살남)</a>',
        },
        {
          title: '미국 주요경제지표',
          contents: '<a target="_blank" href="https://ko.tradingeconomics.com/united-states/indicators">경제지표(상단탭-분야별 개작살남)</a>',
        },
        {
          title: '미국 내구재 주문(kr-investing)',
          contents: '<a target="_blank" href="https://kr.investing.com/economic-calendar/durable-goods-orders-86">미국 내구재 주문(kr-investing)</a>',
        },
        {
          title: '미국 내구재 주문(macrotrends)',
          contents: '<a target="_blank" href="https://www.macrotrends.net/2582/durable-goods-orders-historical-chart">미국 내구재 주문(macrotrends)</a>',
        },
        {
          title: '미국 부동산거래량',
          contents: '<a target="_blank" href="https://www.google.com/search?q=%EB%B6%80%EB%8F%99%EC%82%B0%EA%B1%B0%EB%9E%98%EB%9F%89+%EB%AF%B8%EA%B5%AD&oq=%EB%B6%80%EB%8F%99%EC%82%B0%EA%B1%B0%EB%9E%98%EB%9F%89+%EB%AF%B8%EA%B5%AD&aqs=chrome..69i57j33i160.3960j0j4&sourceid=chrome&ie=UTF-8">부동산거래량_미국</a>',
        },
        {
          title: '미국 월별 취업자수',
          contents: '<a target="_blank" href="https://www.google.com/search?q=%EB%AF%B8%EA%B5%AD+%EC%9B%94%EB%B3%84+%EC%B7%A8%EC%97%85%EC%9E%90%EC%88%98&newwindow=1&biw=1396&bih=656&tbs=qdr%3Am&sxsrf=ALiCzsbsqBi5VQ-NTL2Fi_k_wF1CofOhew%3A1666110915113&ei=w9VOY7i-BsyOoATls7noDw&ved=0ahUKEwj4q4Hqmur6AhVMB4gKHeVZDv0Q4dUDCA8&uact=5&oq=%EB%AF%B8%EA%B5%AD+%EC%9B%94%EB%B3%84+%EC%B7%A8%EC%97%85%EC%9E%90%EC%88%98&gs_lcp=Cgdnd3Mtd2l6EAMyBQgAEKIEMgUIABCiBDIFCAAQogQyBwgAEB4QogQyBQgAEKIEOgoIABBHENYEELADOggIIRDDBBCgAUoECEEYAEoECEYYAFD6mAFYqpwBYI-fAWgDcAF4AYABgwGIAdMEkgEDMC41mAEAoAEByAEBwAEB&sclient=gws-wiz">미국 월별취업자수</a>',
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
        {
          title: '',
          contents: '',
        },
      ],
    }
  }
}

</script>



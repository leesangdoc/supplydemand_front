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

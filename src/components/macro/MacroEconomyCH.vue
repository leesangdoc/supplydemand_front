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
      ,  resultList: [
        {
          title: '중국 주요경제지표',
          contents: '<a target="_blank" href="https://ko.tradingeconomics.com/china/indicators">경제지표(상단탭-분야별 개작살남)</a>',
        },
        {
          title: '중국_국가_통계국',
          contents: '<a target="_blank" href="http://www.stats.gov.cn/english/">안좋은건 곱하기 2.5로 보기(공산당이니까 ^o^)</a>',
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

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
          title: '미국 경제성장률',
          contents: '<a target="_blank" href="https://ko.tradingeconomics.com/united-states/gdp-growth">GDP 성장률</a>',
        },
        {
          title: '미국 주요경제지표',
          contents: '<a target="_blank" href="https://ko.tradingeconomics.com/united-states/indicators">경제지표(상단탭-분야별 개작살남)</a>',
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

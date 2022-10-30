<template>  
  <v-card flat>
    <v-card-text>
      <h1>철강 분석입니다...{{industryCode}}</h1>
      
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
  , props: ['industryCode']
  , data: function() {
    console.log('industryCode this.industryCode;;;', this.industryCode);
    return {
      hero: this.industryCode
      , resultList: [
        {
          title: '주요 원자재 가격 동향(철강분야)',
          contents: '<a target="_blank" href="https://www.index.go.kr/potal/main/EachDtlPageDetail.do?idx_cd=1143">주요원자재가격동향(철강분야)</a>',
        },
        {
          title: '철강생산통계',
          contents: '<a target="_blank" href="https://www.kosa.or.kr/statistics/principal_2011.jsp?ITEM_NAME=%ED%98%95%EA%B0%95">철강생산통계</a>',
        },
        {
          title: '한국철강협회',
          contents: '<a target="_blank" href="https://www.kosa.or.kr/">한국철강협회</a>',
        },
        {
          title: '',
          contents: '<a target="_blank" href=""></a>',
        },
        {
          title: '',
          contents: '<a target="_blank" href=""></a>',
        },
        {
          title: '',
          contents: '<a target="_blank" href=""></a>',
        },
        {
          title: '',
          contents: '<a target="_blank" href=""></a>',
        },
        {
          title: '',
          contents: '<a target="_blank" href=""></a>',
        },
        {
          title: '',
          contents: '<a target="_blank" href=""></a>',
        },
        {
          title: '',
          contents: '<a target="_blank" href=""></a>',
        },
        {
          title: '',
          contents: '<a target="_blank" href=""></a>',
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

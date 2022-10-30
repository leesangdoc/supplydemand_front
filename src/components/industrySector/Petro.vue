<template>  
  <v-card flat>
    <v-card-text>
      <h1>석유 분석입니다...{{industryCode}}</h1>
      
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
          title: '',
          contents: '<a target="_blank" href=""></a>',
        },
        {
          title: '석유화학제품통계',
          contents: '<a target="_blank" href="https://www.kpia.or.kr/petrochemical-industry/statistics">석유화학제품통계</a>',
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

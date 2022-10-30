<template>  
  <v-card flat>
    <v-card-text>
      <h1>반도체 분석입니다...{{industryCode}}</h1>
      
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
          title: '전세계 반도체 판매추이',
          contents: '<a target="_blank" href="https://www.semiconductors.org/news-events/latest-news/">worldwide semiconductor revenue</a>',
        },
        {
          title: '반도체협회(미국)',
          contents: '<a target="_blank" href="https://www.semiconductors.org/">반도체정보</a>',
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

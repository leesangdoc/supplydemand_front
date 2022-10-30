<template>  
  <v-card flat>
    <v-card-text>
      <h1>경제사이클 분석입니다...{{industryCode}}</h1>
      
      <br/>
      <v-treeview :items="resultList"></v-treeview>

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
          id: 1,
          name: 'Applications1 :',
          children: [
            { id: 2, name: 'Calendar : app' },
            { id: 3, name: 'Chrome : app' },
            { id: 4, name: 'Webstorm : app' },
          ],
        },
        {
          id: 2,
          name: 'Applications2 :',
          children: [
            { id: 2, name: 'Calendar : app' },
            { id: 3, name: 'Chrome : app' },
            { id: 4, name: 'Webstorm : app' },
          ],
        },
      ],
    }
  }
}
</script>

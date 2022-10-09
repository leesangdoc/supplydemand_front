<template>  
  <v-card flat>
    <v-card-text>
      <h1>MacroEconomyKorea 거시경제분석입니다.;;;{{globalCode}}</h1>
      <div v-if="globalCode === KR">
        <MacroEconomyKorea/>
      </div>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  name: 'HelloWorld'
  // 이게 액션기능인듯...
  , methods: {
    
  }
  , props: ['globalCode']
  , data: function() {
    console.log('macroKorea this.globalCode;;;', this.globalCode);
    return {
      hero: this.globalCode
    }
  }
}
</script>

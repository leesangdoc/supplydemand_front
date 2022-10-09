<template>
  
  <v-card flat>
    <v-card-text>
      <h1>MacroEconomyAnalysis 거시경제분석입니다.{{globalCode}}</h1>
      <div v-if="globalCode === KR">
        <MacroEconomyKorea :globalCode ="globalCode"/>
      </div>
    </v-card-text>
  </v-card>
</template>

<script>
import MacroEconomyKorea from './macro/MacroEconomyKorea';
export default {
  name: 'HelloWorld'
  // 이게 액션기능인듯...
  , methods: {
    
  }
  , props: ['globalCode']
  , data: function() {
    console.log('macro this.globalCode;;;', this.globalCode);
    return {
      hero: this.globalCode
    }
  }
  ,  components: {
    MacroEconomyKorea
  }
}
</script>

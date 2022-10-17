<template>
  
  <v-card flat>
      <div v-if="globalCode === 'KR'">
        <MacroEconomyKorea :globalCode ="globalCode"/>
      </div>
      <div v-if="globalCode === 'US'">
        <MacroEconomyUSA :globalCode ="globalCode"/>
      </div>
      <div v-if="globalCode === 'EU'">
        <MacroEconomyEU :globalCode ="globalCode"/>
      </div>
      <div v-if="globalCode === 'ReferenceSite'">
        <MacroEconomyRF :globalCode ="globalCode"/>
      </div>
      
  </v-card>
</template>

<script>
import MacroEconomyKorea from './macro/MacroEconomyKorea';
import MacroEconomyUSA from './macro/MacroEconomyUSA.vue';
import MacroEconomyRF from './macro/MacroEconomyRF.vue';
import MacroEconomyEU from './macro/MacroEconomyEU.vue';
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
    MacroEconomyKorea,
    MacroEconomyUSA,
    MacroEconomyRF,
    MacroEconomyEU
}
}
</script>

<template>
  <v-card flat>
    
    <div v-if="industryCode === 'semiconductor'">
      <Semiconductor :industryCode ="industryCode"/>
    </div>
    <div v-if="industryCode === 'steel'">
      <Steel :industryCode ="industryCode"/>
    </div>
    <div v-if="industryCode === 'petro'">
      <Petro :industryCode ="industryCode"/>
    </div>
    <div v-if="industryCode === 'businessCycle'">
      <BusinessCycle :industryCode ="industryCode"/>
    </div>
  </v-card>
</template>

<script>
import Semiconductor from '@/components/industrySector/Semiconductor';
import Steel from './industrySector/Steel.vue';
import Petro from './industrySector/Petro.vue';
import BusinessCycle from './industrySector/BusinessCycle.vue';

export default {
  name: 'HelloWorld'
  // 이게 액션기능인듯...
  , methods: {
    
  }
  , props: ['industryCode']
  , data: function() {
    console.log('macro this.industryCode;;;', this.industryCode);
    return {
      hero: this.industryCode
    }
  }
  , components: {
    Semiconductor,
    Steel,
    Petro,
    BusinessCycle
}
}
</script>

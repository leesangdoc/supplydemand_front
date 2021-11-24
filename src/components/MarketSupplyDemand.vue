<template>
  <v-app>
    <h1>수급분석표입니다.</h1>
    <v-autocomplete 
      clearable solo
      full-width
      :menu-props="{ maxHeight: '300' }"
      :items="this.$store.state.selectCompanyAutoComplete"
      label="Select"
      @change="selectCompanyAutoCompleteChange"
      @keydown="selectCompanyAutoCompleteKeydown"
      open-on-clear
      return-object
      rounded
      :value="this.$store.state.companyAutoComplete"
    >
    </v-autocomplete>
  </v-app>
</template>

<script>
export default {
  name: 'HelloWorld',
  // 이게 액션기능인듯...
  methods: {
    
  },
  data: () => ({
    
  }),
}
</script>

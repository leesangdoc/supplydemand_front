<template>
  <div>
     
      <!-- <form @submit="onSubmit">
          <input placeholder="Enter your ID" v-model="uid">
          <input placeholder="Enter your password" v-model="password">
          <button type="submit">Login</button>
      </form> -->
       <v-app id="inspire">
          
    <v-form>
      <v-container>
        <v-row>
            <v-col cols="12" sm="12"><h2>수급분석 Log in</h2></v-col>
            <v-col cols="12" sm="12" >
              <v-text-field
                label="id"
                clearable
                class="input-group--focused"
                :value="this.$store.state.id"
                @change = "changeId"
              >
              </v-text-field>
            </v-col>
            <v-col cols="12" sm="12" >
              <v-text-field
                type='password'
                label="password"
                class="input-group--focused"
                name="input-10-2"
                append-icon='mdi-eye-off'
                :value="this.$store.state.password"
                @change = "changePassword"
              >
              </v-text-field>
            </v-col>
            <v-col cols="12" sm="12" >
              <v-btn
                x-large
                color="success"
                dark
                @click="checkLogin"
              >
                로그인
              </v-btn>
            </v-col>

           </v-row>
      </v-container>
    </v-form>
  </v-app>
  </div>
</template>

<script>
export default {
  name: 'Login',
  data: () => ({
    uid: '',
    password: ''
  }),
  created() {     
    //  console.log('created');
    
  },
  mounted(){
    if (this.$store.state.isLogin == true  
        && localStorage.getItem('jwt') != ''
        && localStorage.getItem('jwt') != null
        && localStorage.getItem('jwt') != undefined){
      this.$router.push({name : 'MainTask'})
    }
  }
  , methods: {
    onSubmit () {
      console.log(this.uid)
      console.log(this.password)
    }
    , checkLogin(){
      let postData = { 
        id: this.$store.state.id
        , password: this.$store.state.password
      };
      this.$store.dispatch('callAuthIdPw', postData);
    }
    , changeId(e){
      this.$store.commit('setId', e);
    }

    , changePassword(e){
      this.$store.commit('setPassword', e);
    }
  }
}
</script>

<style>

</style>
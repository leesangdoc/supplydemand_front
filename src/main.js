import Vue from 'vue'
import Vuex from 'vuex'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import store from './store';
import vueMoment from 'vue-moment'
import moment from "moment";
import VueRouter from "vue-router"

Vue.config.productionTip = false
Vue.use(vueMoment, moment, VueRouter, store, Vuex)
 
const router = new VueRouter({
  mode: 'history'
});

new Vue({
  vuetify
  , router
  , store

  , render: h => h(App)
}).$mount('#app')

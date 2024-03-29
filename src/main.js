import Vue from 'vue';
import Vuex from 'vuex';
import App from './App.vue';
import vuetify from './plugins/vuetify';
import store from './store';
import vueMoment from 'vue-moment';
import moment from "moment";
import router from './router'

Vue.config.productionTip = false;
Vue.config.silent = false;
Vue.use(vueMoment, moment, store, Vuex);
 
// const router = new VueRouter({
//   mode: 'history'

// });

new Vue({
  vuetify
  , router
  , store
  , render: h => h(App)
  , theme: { dark: true } // light { dark: true }
}).$mount('#app');

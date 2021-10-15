import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import store from './store';
import vueMoment from 'vue-moment'
import moment from "moment";

Vue.config.productionTip = false
Vue.use(vueMoment, moment)
// export const EventBus = new Vue();

new Vue({
  vuetify,
  store,
  render: h => h(App)
}).$mount('#app')

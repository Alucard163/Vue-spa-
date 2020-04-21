import Vue from 'vue'
import App from './App.vue'
import store from './store'
import Vuetify from "vuetify";
import router from './router'
import vuetify from './plugins/vuetify';
Vue.use(Vuetify);

Vue.config.productionTip = false;

new Vue({
  store,
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')

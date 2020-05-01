import Vue from 'vue'
import App from './App.vue'
import store from './store'
import Vuetify from "vuetify";
import router from './router'
import vuetify from './plugins/vuetify';
import * as fb from 'firebase';
Vue.use(Vuetify);

Vue.config.productionTip = false;

new Vue({
  store,
  router,
  vuetify,
  created () {
    fb.initializeApp( {
      apiKey: 'AIzaSyCuAK_BOzh-hjTK__cfxAGJmuQY8NtjQKM',
      authDomain: 'vue-ads-9f8f8.firebaseapp.com',
      databaseURL: 'https://vue-ads-9f8f8.firebaseio.com',
      projectId: 'vue-ads-9f8f8',
      storageBucket: 'vue-ads-9f8f8.appspot.com',
      messagingSenderId: '545255814909',
      appId: '1:545255814909:web:f352de1eab961247b7f094',
      measurementId: 'G-CJX5L1QRQ3'
    });
  },
  render: h => h(App)
}).$mount('#app')

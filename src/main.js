import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App.vue';
import {store} from './store/index.js';

Vue.config.productionTip = false;
Vue.use(VueRouter);

new Vue({
  render: h => h(App),
  store,
}).$mount('#app')

import Vue from 'vue';
import axios from 'axios'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import App from './App.vue';
import router from '@/router';

Vue.config.productionTip = false;
Vue.use(ElementUI);
// Vue.use(axios);
Vue.prototype.$http = axios;

new Vue({
  el: '#app',
  router,
  render: h => h(App),
}).$mount('#app');
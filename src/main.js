import Vue from 'vue'
import App from './App.vue'
import store from './store'
import axios from 'axios'
Vue.prototype.$axios = axios
Vue.config.productionTip = false
axios.defaults.timeout=5000;
new Vue({
  render: h => h(App),
  store,
}).$mount('#app')

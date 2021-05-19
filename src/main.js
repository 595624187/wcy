import Vue from 'vue'
import App from './App.vue'
import store from "@/store";
import axios from 'axios'
import message from "@/components/common/myMsg/index"

Vue.prototype.$axios = axios
Vue.use(message.register)
Vue.config.productionTip = false
new Vue({
  render: h => h(App),
  store,
}).$mount('#app')

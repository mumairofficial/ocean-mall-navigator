import Vue from 'vue'
import axios from 'axios'

import App from './App'
import router from './router'
import store from './store'

import '@/assets/js/jquery.min.js'
import '@/assets/js/hammer.min.js'
import '@/assets/js/jquery.easing.js'
import '@/assets/js/jquery.mousewheel.js'
import '@/assets/js/smoothscroll.js'
import '@/assets/mapplic/mapplic.js'

import '@/assets/css/style.css'
import '@/assets/css/map.css'
// import '@/assets/mapplic/mapplic.css'

if (!process.env.IS_WEB) Vue.use(require('vue-electron'))
Vue.http = Vue.prototype.$http = axios
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  components: { App },
  router,
  store,
  template: '<App/>'
}).$mount('#app')

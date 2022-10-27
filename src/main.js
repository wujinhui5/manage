import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import './js/login.js'
import './mock'
import router from './router'
import store from './store'

Vue.use(ElementUI)

new Vue({
  el: '#app',
  render: h => h(App),
  router,
  store
})
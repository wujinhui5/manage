import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import "@/elementUi"
import './js/login.js'
import './mock'

new Vue({
  el: '#app',
  render: h => h(App),
  router,
  store
})
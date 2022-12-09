import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './js/login'
import './mock'
import "@/elementUi"
import "@/assets/less/base.less"
import "@/assets/less/comman.less"
import "@/assets/less/elementUi.less"

new Vue({
  el: '#app',
  render: h => h(App),
  router,
  store
})
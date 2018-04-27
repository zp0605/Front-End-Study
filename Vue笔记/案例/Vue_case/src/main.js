import Vue from 'vue'
import router from './router'
import app from './components/app.vue'

new Vue({
  el: '#app',
  render: h => h(app),
  router  // 使用路由器
})
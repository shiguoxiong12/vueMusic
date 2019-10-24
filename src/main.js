/*
 * @Author: shiguoxiong
 * @Date: 2019-09-21 20:26:58
 * @Description: 
 */
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'lib-flexible'
import './font/iconfont.css'
import './scss/index.scss'
import vant from 'vant';
import 'vant/lib/index.css';
import './gloab'

import VueLazyload from 'vue-lazyload'
Vue.prototype.$log = window.console.log;//场景:在Vue开发过程中, 经常会遇到template模板渲染时JavaScript变量出错的问题, 此时也许你会通过console.log来进行调试 这时可以在开发环境挂载一个 log 函数
Vue.use(VueLazyload,{
  preLoad: 1.3,
  error: 'error.jpg',
  loading: 'loading.gif',
  attempt: 1
})
Vue.use(vant);
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

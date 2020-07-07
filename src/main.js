/*
 * @Author: shiguoxiong
 * @Date: 2019-09-21 20:26:58
 * @Description: 
 */
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/index.js'
import 'lib-flexible'
import './font/iconfont.css'
import './scss/index.scss'
import vant from 'vant';
import 'vant/lib/index.css';
import './gloab'
import alert from '../component-study/alert/index.js'
import message from '../component-study/message/index.js'
import vconsole from 'vconsole'
import VueLazyload from 'vue-lazyload'
import FastClick from 'fastclick';
import LightTimeline from 'vue-light-timeline';
 
Vue.use(LightTimeline);
//Vue.prototype.$log = window.console.log;//场景:在Vue开发过程中, 经常会遇到template模板渲染时JavaScript变量出错的问题, 此时也许你会通过console.log来进行调试 这时可以在开发环境挂载一个 log 函数
//let Vconsole=new vconsole()
Vue.use(VueLazyload,{
  preLoad: 1.3,
  error: 'error.jpg',
  loading: 'loading.gif',
  attempt: 1
})
FastClick.attach(document.body);
Vue.use(vant);
Vue.component("aaaa",{
  template:"<div>a</div>"
})
Vue.use(alert).use(message)
Vue.config.productionTip = false
Vue.config.performance = true;  //开启Vue性能模式(适用于开发模式)
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')


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
Vue.use(vant);
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

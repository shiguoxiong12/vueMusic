/*
 * @Author: shiguoxiong
 * @Date: 2019-09-21 20:26:58
 * @Description: 
 */
import Vue from 'vue'
import Router from 'vue-router'
import recommend from './views/recommend.vue'
import ranking from './views/ranking.vue'
import search from './views/search.vue'
import singers from './views/singers.vue'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect:'/recommend'
    },
    {
      path: '/recommend',
      component:recommend
    },
    {
      path: '/ranking',
      component:ranking
    },
    {
      path: '/search',
      component:search
    },
    {
      path: '/singers',
      component:singers
    }
  ]
})

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
import singersDetail from './views/singersDetail.vue'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name:'/',
      redirect:'/recommend'
    },
    {
      path: '/recommend',
      name:'recommend',
      component:recommend
    },
    {
      path: '/ranking',
      name:'ranking',
      component:ranking
    },
    {
      path: '/search',
      name:'search',
      component:search
    },
    {
      path: '/singers',
      name:'singers',
      component:singers,
      children:[
        {
          path:':id',
          component:singersDetail,
        }
      ]
    }
  ]
})

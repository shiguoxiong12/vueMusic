/*
 * @Author: shiguoxiong
 * @Date: 2019-09-27 11:14:42
 * @Description: 
 */
export default[
    {
        path:'/news',
        component:()=>import(/* webpack:*news */ '@/views/news/index.vue')
    }
]
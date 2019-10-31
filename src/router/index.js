/********
 * 根據業務功能實現拆分路由
 * *************/

 //根index.js 導入 所有子模塊
 import Vue from 'vue';
 import newsRouterConfig from './news'  
 import Router from 'vue-router';
 Vue.use(Router)
 //1.手動加載子模塊路由
 const routes=[...newsRouterConfig]

 
//2 自動加載 路由文件,無需 import newsRouterConfig from './news'  
// let routes=[]
// const routerConfig=require.context("./",true,"/index\.js$/")
// routerConfig.keys().forEach(router => {
//     if(router.startWidth('./index')){
//         return
//     }
//     const routerModul=routerConfig(router)
//     /***********兼容 inport export 和 require module.export*******************/
//     routes=[...routes,...(routerModul.default || routerModul)]
// });
 export default new Router({
     mode:'history',
     base:process.env.BASE_URL,
     routes:routes
 })
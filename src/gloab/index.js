/*
 * @Author: shiguoxiong
 * @Date: 2019-09-27 10:46:18
 * @Description: 
 */
import Vue from 'vue'  //統一創建全局組件

const componentsContext=require.context('./module',true,/\.js$/)
componentsContext.keys().forEach(element => {
    const componentConfig=componentsContext(element);
    const ctrl=componentConfig.default || componentConfig;
    Vue.component(ctrl.name,ctrl)
});
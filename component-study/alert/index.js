import Alert from './index.vue'
const  obj={};
obj.install=function(Vue){
    const alertObj=Vue.extend(Alert);
    const alert=new alertObj();
    alert.$mount(document.createElement('div'));
    document.body.appendChild(alert.$el);
    Vue.prototype.$alert=alert;
}
export default obj;
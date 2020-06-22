import Index from './index.vue'
import Vue from 'vue'
let messageInstance = null
let constructorMessage=Vue.extend(Index);
let init=()=>{
     if(!messageInstance){
        messageInstance=new constructorMessage();
        messageInstance.$mount();
        document.body.appendChild(messageInstance.$el)
     }
}
 
let cacle=(option)=>{   
   if(!messageInstance){
       init()
   }
   messageInstance.addNotes(option)
}
export default{
    install(Vue){
        Vue.prototype.$Message=cacle;
    }
}
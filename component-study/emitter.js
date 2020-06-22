/****
 * 
 *实现  dispatch   与  broadcast
 */
//dispatch  向上派发个事件
 function dispatch(components,eventName,parames){
     var parent=this.$parent || this.$root;
     while(parent && (!name || name!=components)){
        parent=parent.$parent;
        if(parent){
            name=parent.name;
        }
     }
      if (parent) {
        parent.$emit.apply(parent, [eventName].concat(params));
      }
 }

 function broadcast(components,eventName,parames){
     this.$children.forEach(function(child){
        var name=child.$options.name;
        if(name==components){
          //  child.$emit(eventName,parames)
           child.$emit.apply(child, [eventName].concat(params));
        }else{
            broadcast.apply(child, [componentName, eventName].concat([params]));
        }
     })
 }

//  export default{
//     dispatch, 
//     broadcast
//  }
export default {
    methods: {
      dispatch(componentName, eventName, params) {
        let parent = this.$parent || this.$root;
        let name = parent.$options.name;
  
        while (parent && (!name || name !== componentName)) {
          parent = parent.$parent;
  
          if (parent) {
            name = parent.$options.name;
          }
        }
        if (parent) {
          parent.$emit.apply(parent, [eventName].concat(params));
        }
      },
      broadcast(componentName, eventName, params) {
        broadcast.call(this, componentName, eventName, params);
      }
    }
  };
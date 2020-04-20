console.log(Vue)
Vue.component("selectm",{
   name:"selectm",
   props:{
    label:{
        default:""
    },
    selectOption:{
        type:Array,
        default:function(){
            return[
            {
                name:"语文",
                id:1,
                check:false
            }
        ]}
    }
   },
   data:function(){
       return{
        show:true,
        defaultProps:{
            width:'200px',
        }
       }
      
   },
   render:function(h){
       var that=this;
       function mapC(m,h){
        console.log( m.selectOption)
          return m.selectOption.map(function(item){
              return h("option",item.name)
          })
       }
       function mapCDom(m,h){
        console.log( m.selectOption)
          return m.selectOption.map(function(item,index){
              return h("li",[h("input",{
                attrs:{
                      type:"checkbox",
                      id:"checkbox"+index
                  }
              }),h('label',{
                attrs:{
                    for:"checkbox"+index
                }
              },item.name)])
          })
       }
       return  h("div", {
            style:{
                height: '34px',
                background: 'orange',
                fontSize: '16px'
            },
            attr:{
               id:"aa"
            },
            on:{
            //    "click":function(){
            //        alert(12)
            //    }
            },
            class: {
                foo: true,
                baz: false
            },
           },[
               h('label', this.label), 
               h('select',{style:{display:'none'}}, mapC(this,h)), 
               h("div",{
                   attrs:{
                       id:"select"
                   },
                   class:{
                     selectComponents:true
                   },
                   style:{
                       width:'200px'
                   }
               },[
                h('input',{
                    on:{
                      "blur":function(){
                        // that.show=false
                         that.$forceUpdate();
                      },
                      "focus":function(){
                         that.show=true;
                         that.$forceUpdate();
                       },
                    },
                    style:{
                        width:'200px',
                        height:'20px'
                    }
                },''), 
                h('ul',{
                    style:{
                        display:that.show ? "block" : "none", 
                       width:that.defaultProps
                 }
                },mapCDom(this,h)), 
               ])
              
            ]
        )
   }
})
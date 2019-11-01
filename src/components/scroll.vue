<template>
  <div class="scroll" ref='ScrollDom'>
      <slot></slot>
  </div>
</template>
<script>
    import BScroll from 'better-scroll'
    export default {
        props:{
            data:{
                type:Object
            }
        },
        watch:{
          data(){
               setTimeout(()=>{
                  this._initScroll()
              },100)
          }
        },
        data(){
            return{
               scroll:{}
            }
        },
        mounted(){
            setTimeout(()=>{
               this._initScroll()
            },100)
            
            
        },
        methods:{
            _initScroll(){
                let wrapper =this.$refs.ScrollDom;
                if(wrapper){
                    this.scroll = new BScroll(wrapper,{
                        scrollY: true,
                        probeType:3,
                        click: true
                    })
                     this.scroll.on("scroll",e=>{
                         console.log(e)
                        // if(e.y<-80){
                        //      this.$emit("trigerHide",true)
                        //  }else if(e.y>0){
                        //      this.$emit("trigerHide",false)
                        //  }
                         this.$emit("trigerHide",e)
                     })
                }
            }
        }
    }
</script>
<style lang="scss" scoped>
.scroll{
   width:100%;
   height:100%;
  // overflow: hidden;
}
</style>
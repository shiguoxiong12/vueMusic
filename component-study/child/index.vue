<template>
    <div class="child">
        <div style="color:blue;text-align:center">我是子级</div>
       
         {{me}}
       {{$attrs}}
      
      current : {{current}}
        <label>
            
          {{$attrs.placeholder}}

            </label>
       
        <input type="text" v-bind="$attrs" v-on="$listeners"/>


        <div>
            <h1>下面是slot 用法</h1>
            <slot></slot>
    
            <div class="header">
                    <slot name="header" v-bind:user="{user}"></slot>
            </div>
            <div class="footer">
                <slot name="footer"></slot>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
         inheritAttrs: true,
         props: ['me'],
         data(){
               return{
                   user:"guoxiong",
                   header:{
                       title:'header title'
                   }
               }
         },
         computed:{
          current:function(){
              return this.$attrs.number
          }
         },
         beforeCreate(){
            console.log("child 开始创建")
         },
         created(){
          console.log("child 创建了");
           console.log("&&&&&&&&",this.$parent)

         },
         beforeMount(){
            console.log("child 开始挂载")
         },
         mounted(){
             console.log("child 挂载了")
             console.log("******************")
             console.log(this.$attrs)
              console.log(this.$listeners)
               console.log("******************")
               this.$emit("qal")
         },
         beforeUpdate(){

         },
         updated(){

         },
         beforeDestory(){

         },
         destroyed(){

         }
    }
</script>

<style lang="css" scoped>
.child{

    width:200px;
    height:60px;
    border:1px solid red;
    margin:0 auto
}
</style>
<template>
    <div style="margin:0 auto;border:1px solid pink">
       <p style="color:red;text-align:center">我是爸爸</P>
       {{$listeners}}
       {{$attrs}}
       
       <br/>
       <br/>
       <br/>
       <child name="史国雄" v-bind="$attrs" v-on="$listeners">
            <div>我是插入的slot</div>
            <template #header="{user}">
                 <div>11{{user}}</div>
            </template>
             <template #footer>
                <div>footer</div>
             </template>
       </child>
    </div>
</template>

<script>
    import child from '../child/index.vue';
    export default {
        inheritAttrs: true,
       // props:["me"],
        data(){
          return {
              message:'2312',
              
          }
        },
         beforeCreate(){
            console.log("parents 开始创建")
         },
         methods:{
             closep(){
                 console.log("关闭弹窗")
             }
         },
         created(){
          console.log("parents 创建了")
         },
         beforeMount(){
            console.log("parents 开始挂载")
         },
        components:{child},
        mounted(){
          
        }
    }
</script>

<style lang="css" scoped>

</style>
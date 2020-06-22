<template>
    <div>
        <div style="color:blue;text-align:center">我是爷爷</div>
        <button @click="add">增加</button>
        {{current}}
        <parents me="dd" @hook:mounted="mm()" :number="current" @qal="as()" style12="font-size:30px"/>
    </div>
</template>

<script>
import  parents from '../parents/index.vue'
    export default {
        data(){
            return{
                current:0
            }
        },
        components:{
            parents
        },
        mounted(){
          
        },
        methods:{
            mm(){
               console.log("父亲出生了")
            },
            as:function(){
                console.log(12)
            },
            add(){
                this.current++
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>
<template>
    <div>
        <h2>测试练习</h2>
        <button @click="showAlert">点击</button>
    </div>
</template>

<script>
    import Alert from '../components2/Alert'
    import create from '../components2/index'
   
  
    //loading.hide() // 关闭
    export default {
        methods:{
            showAlert(){
                 const loading = create(Alert, {})
                 console.log(loading)
                loading.show() // 显示
                setTimeout(function(){
                   loading.hide() // 显示
                },1000)
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>
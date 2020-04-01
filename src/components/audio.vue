<template>
    <div class="audio" preload>
         <audio :src="url">
            您的浏览器不支持 audio 标签。
         </audio>
    </div>
</template>

<script>
    export default {
        props:{
            url:{
                type:String
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>
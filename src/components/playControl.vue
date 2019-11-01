<template>
    <div class="playControl">
         <div class="prev iconfont icon-shangyishou"></div>
         <div :class="[getPlay ? 'icon-zantingbofang' : 'icon-bofang']" class="play iconfont " @click="play()"></div>
         <div class="next iconfont icon-xiayishou"></div>
    </div>
</template>

<script>
    import {mapGetters} from "vuex"
    export default {
        computed:{
           ...mapGetters(["getPlay"])
        },
        methods:{
            play(){
                let status=!this.getPlay;
                this.$emit("play",status)
            }
        }
    }
</script>

<style lang="scss" scoped>
.playControl{
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    height: 40px;
    line-height: 40px;
    color: #fff;
}
.iconfont{
    font-size: 30px;
}
</style>
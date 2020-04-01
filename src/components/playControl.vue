<template>
    <div class="playControl">
         <div class="prev iconfont icon-shangyishou" @click="selectSong('prev')"></div>
         <div :class="[getPlay ? 'icon-zantingbofang' : 'icon-bofang']" class="play iconfont " @click="play()"></div>
         <div class="next iconfont icon-xiayishou"  @click="selectSong('next')"></div>
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
            },
            selectSong(type){
                this.$emit("selectSong",type)
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
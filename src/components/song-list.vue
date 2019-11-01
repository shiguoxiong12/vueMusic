<template>
    <div class="songs">
         <slot></slot>
         <ul class="song-Wraper">
              <router-link v-for="(item,index) in songs"  tag="li" :to="{path:'/singers/play/' +item.id }" :key="index" @click="selectSong(item)" class="list">
                  <div class="songName">{{item.name}}</div>
                  <div class="songAuthors">{{item.singer}}</div>
              </router-link> 
         </ul>
         <van-loading size="12px" type="spinner" color="#1989fa" class="Loadding" v-if="songs.length==0">
               加载中...
         </van-loading>
    </div>
</template>

<script>
    export default {
        props:{
            songs:{
                type:Array,
               
            }
        },
        computed:{
            playUrl(){
                return 
            }
        },
        methods:{
           
        },
        mounted(){
            
           
        }
    }
</script>

<style lang="scss" scoped>
.songs{
    background: rgba(1, 17, 27, 1);
    width:100%;
    box-sizing: border-box;
    position: relative;
    padding-left: 20px;
    padding-top:20px;
    .Loadding{
        position: fixed;
        top:50%;
        left:50%;
        transform: translate(-50%,-50%);
    }
    .song-Wraper{
        .list{
            margin-bottom:20px;
            .songName{color:#fff;font-size: 15px;}
            .songAuthors{color:antiquewhite;font-size: 12px;}
        }
    }
}
</style>
<template>
    <div class="songs">
         <ul class="song-Wraper">
              <li v-for="(item,index) in songs" :key="index" class="list">
                  <div class="songName">{{item.name}}</div>
                  <div class="songAuthors">{{item.singer}}</div>
             </li> 
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
        mounted(){
            
           
        }
    }
</script>

<style lang="scss" scoped>
.songs{
    background: #ccc;
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
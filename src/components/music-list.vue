<template>
    <div class="music-list">
          <header class="top">
              <div class="back font-color iconfont icon-nextstep" @click="goBack()"></div>
              <div class="singerName font-color">{{singerDetail.singer_name}}</div>
          </header>
          <div class="singerImg" :style="bg" ref="singerImg">
                <div class="filter"></div>
          </div>
          <div ref='list' class="scrollDIV">
              <Scroll @trigerHide="trigerHide">
               <div class="songs-scroll">
                  <songList :songs="songs"  ref="songWraper"></songList>
               </div>
             </Scroll>
             
          </div>
    </div>
</template>

<script>
    import songList from '@/components/song-list'
    import Scroll from '@/components/scroll'
    export default {
        props:{
           avtor:{
               type:String
           },
           songs:{
               type:Array
           },
           singerDetail:{

           }
        },
        mounted(){
             this.$refs.list.style.top=this.$refs.singerImg.clientHeight+"px"
             console.log(this.$refs.songWraper)
              this.$refs.songWraper.$el.style.paddingBottom=this.$refs.singerImg.clientHeight/2+"px";
        },
        components:{
            songList,
            Scroll
        },
        computed:{
          bg(){
              return `background-image:url('${this.avtor}')`
          }
        },
         watch:{
           "$route.fullPath":function(){
               console.log("改變了")
           }
        },
        methods:{
            trigerHide(e){
                if(e.y<-80){
                    this.$refs.list.style.overflow="hidden";
                    this.$refs.list.style.top='80px'
                    this.$refs.songWraper.$el.style.paddingBottom="80px";
                    this.$refs.list.style.transition=""
                }else{
                     this.$refs.list.style.overflow="";
                     this.$refs.list.style.transition="all .2s linear"
                     this.$refs.list.style.top='160px'
                     
                }
              //  e==true ?  this.$refs.list.style.overflow="hidden" : this.$refs.list.style.overflow="auto"
              
            },
            goBack(){
                this.$router.push({
                    path:'/singers'
                })
            },
        }
    }
</script>

<style lang="scss" scoped>
.music-list{
    height:100%
}
  .top{
        height:40px;
        display: flex;
        position: absolute;
        top:0;
        width: 100%;
        flex-direction: row;
        align-items: center;
        .icon-nextstep{
              text-align: center;
              width: 40px;
              position: absolute;
              z-index: 9000;
              height:40px;
              line-height: 40px;
        }
        .singerName{
              text-align: center;
              position: absolute;
              width: 100%;
              z-index:1000;
              height:40px;
              line-height: 40px;
        }
    }
    .singerImg{
        width:100%;
        height: 0;
        position: relative;
        padding-bottom: 50%;
        background-repeat: no-repeat;
        background-size: cover;
        background-origin: center;
        transform-origin: top;
        .filter{
            position: absolute;
            width:100%;
            left:0;
            top:0;
            height:100%;
            background: rgba(1,17,27,0.4)
        }
    }
    .scrollDIV{
         position: fixed;
         top:0;
         left:0;
         width:100%;
         height:100%;
         
    }
    .songs-scroll{
        width: 100%;
        box-sizing: border-box;
    }
</style>
<template>
    <div id="play">
         <div class="back font-color iconfont icon-nextstep" @click="goBack()">&nbsp;&nbsp;返回</div>
       <div class="songImage" :class='{"active":running}'>
           <img :src="currentSongDetail.image"/>
           <i class="iconfont icon-bofang"></i>
          
       </div>
       
       <div class="desc">
             <p class="songname font-color">{{currentSongDetail.name}}</p>
              <lyric :lyric="lyric" :currentIndex="currentIndex"/>
             <p class="songsinger">{{currentSongDetail.singer}}</p>
       </div>
       <div class="play_control">
          <v-Play 
            style="display:none"
           :autoplay="false"
           :controls='false'
           :music="palyResource"
            @play="onPlayerPlay($event)"
            @pause="onPlayerPause($event)"
            @error="onError($event)"
            :narrow="false" theme="#b7daff" mode="circulation"  list-max-height='96px' ref="player"
          ></v-Play>
          <playControl @play="playSong"></playControl>
       </div>
       
       <div class="songs-list" ref="songsList">
           
            <Scroll @trigerHide="trigerHide" :data="getSongList">              
            <songList :songs="getSongList"  ref="songplayWraper"
                >
                     <div class="font-color"
                     style="
                        height: 40px;
                        line-height: 40px;
                        font-size: 30px;
                        margin-bottom: 10px;
                     "
                     >歌單</div>
                </songList>
            </Scroll>
       </div>
    </div>
</template>

<script>
    import {mapGetters,mapMutations} from 'vuex'
    import {formatSong} from "@/util/parseSong.js"
    import Aplayer from 'vue-aplayer'
    import lyric from '@/components/lyric'
    import Lyric from 'lyric-parser'
     import Scroll from '@/components/scroll'
    import songList from '@/components/song-list'
    import playControl from '@/components/playControl'
    export default {
        data(){
            return {
                currentSongId:null,
                running:false,
                lyric:{},
                currentIndex:0
            }
        },
        beforeRouteEnter:(to,from,next)=>{
            next(vm => {
                 vm.change(false)
            })
        },
         watch:{
        //    "$route.fullPath":{
        //        handler:function(){
        //             let id=this.$route.params.id;
        //             this.currentSongId=id;
        //             if( this.$refs.player){
        //                  this.playSong(false);
        //             }
                  
        //             this.lyric.stop();
        //             this.$nextTick(()=>{
        //             let data=formatSong(this.currentSongDetail.lyric);
        //             this.lyric=new Lyric(data,this.handleLyric)
        //             console.log(this.lyric)
        //             })
        //       },
        //       immediate: true
        //    }
           
        },
        components:{
            vPlay:Aplayer,
            songList,
            Scroll,
            lyric,
            playControl
        },
        computed:{
            ...mapGetters(["getSongList"]),
            currentSongDetail(){
                console.log(this.getSongList)
                return this.getSongList.find((item)=> {
                     return item.id==this.currentSongId;
               })
            },
            palyResource(){
                return {
                    src:this.currentSongDetail.url,
                    title:this.currentSongDetail.name,
                    pic:this.currentSongDetail.image,
                    artist:this.currentSongDetail.singer,
                }
            }
        },
        methods:{
            ...mapMutations({
                 "change":'change_play'
            }),
            playSong(e){
                 this.running=e;
                 this.running ? this.$refs.player.play() : this.$refs.player.pause()
                 this.change(false);
                 this.lyric.togglePlay()
           },
            onPlayerPlay(){
               this.running=true;
               this.change(true)
            },
            goBack(){
                this.$router.back(-1)
            },
            onPlayerPause(){ //暫停
                this.running=false;
                this.change(false)
            },
            onPlayerEnd(){  //結束

            },
             handleLyric({lineNum, txt}) {  
                 console.log(lineNum)
                 console.log(this.lyric)
                 this.currentIndex = lineNum  
                // // 若当前行大于5,开始滚动,以保歌词显示于中间位置  
                // if (lineNum > 5) {  
                // let lineEl = this.$refs.lyricLine[lineNum - 5]  
                // // 结合better-scroll，滚动歌词  
                // this.$refs.lyricList.scrollToElement(lineEl, 1000)  
                // } else {  
                // this.$refs.lyricList.scrollToElement(0, 0, 1000)  
                // }  
            }, 
             trigerHide(e){
                 console.log(e.y<-200)
                if(e.y<-200){
                    console.log(this.$refs.songsList)
                    this.$refs.songsList.style.overflow="hidden";
                     this.$refs.songsList.style.position="fixed";
                    this.$refs.songsList.style.top='200px'
                   
                    //this.$refs.songWraper.$el.style.paddingBottom="80px";
                    this.$refs.songsList.style.transition=""
                }else{
                     this.$refs.songsList.style.overflow="";
                     this.$refs.songsList.style.position="";
                     this.$refs.songsList.style.transition="all .2s linear"
                     this.$refs.songsList.style.top='0px'
                      
                     
                }
             }
        },
         mounted(){
            this.$nextTick(()=>{
              let data=formatSong(this.currentSongDetail.lyric);
              this.lyric=new Lyric(data,this.handleLyric)
              console.log(this.lyric)
            })
            this.currentSongId=this.$route.params.id;
        }
    }
</script>

<style lang="scss" scoped>
#play{
    width:100vw;
    height:100vh;
    position: fixed;
    top:0;
    left:0;
    background: rgba(1, 17, 27, 1);
    .back{
        height: 60px;
        line-height:60px;
        padding-left: 20px;
    }
    .songImage{
       width:200px;
       height:200px;
       margin:0 auto;
       display: flex;
       flex-direction: column;
       justify-content: center;
       align-items: center;
       background-origin: center;
       border-radius: 50%;
       &.active{
           background-image: url(http://img2.imgtn.bdimg.com/it/u=1773187225,2535312605&fm=16&gp=0.jpg);
           img{
                animation-play-state:running;
                -webkit-animation-play-state:running; /* Safari 和 Chrome */
           }
       }
       img{
           width: 150px;
           height:150px;
           border-radius: 50%;
           animation: rotate 5s linear 0s infinite;
           animation-play-state:paused;
           -webkit-animation-play-state:paused; /* Safari 和 Chrome */
           
       }
    }
    .desc{
        p{
            text-align: center;
            margin-top: 20px;
            &.songname{
                font-size: 30px;
            }
            &.songsinger{
               color:#ccc;
            }
        }

    }
    .play_control{
            width: 94%;
            margin: 20px auto 0 auto;
    }
    .songs-list{
        width:100%;
        height:100vh;
        
    }
}
</style>
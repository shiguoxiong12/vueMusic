<!--
 * @Author: shiguoxiong
 * @Date: 2019-10-22 11:06:10
 * @Description: 
 -->
<template>
    <div id="singerDetail">
        <musicList :avtor="avtor" :singerDetail='singerDetail' :songs='songList'/>
    </div>
</template>

<script>
    import {getSingerDetail,getSongKey} from '@/api/singers.js'
    import Scroll from '@/components/scroll'
    import musicList from '@/components/music-list'
    import {mapMutations,mapActions} from 'vuex';
    import createSong from '@/common/song'
    export default {
         data(){
             return{
                singerDetail:{},
                songList:[]
             }
        },
        mounted(){
            console.log(this.$route)
        },
        computed:{
           avtor(){
              return "https://y.gtimg.cn/music/photo_new/T001R150x150M000"+this.singerDetail.singer_mid+".jpg?max_age=2592000"
           }
        },
        created(){
           this._getSingerDetail();
        },
        components:{
            Scroll,
            musicList
        },
        methods:{
            ...mapMutations({
               setSinger:'SET_SINGER',
              
            }),
            ...mapActions({
                 selectSongList:"SET_SongLIST"
            }),
            goBack(){
                this.$router.push({
                    path:'/singers'
                })
            },
            _innormalSong(songList){
               let list=[];
               songList.map(item=>{
                  let {musicData}=item;
                  getSongKey(musicData.songmid).then(data=>{
                       const vkey=data.data.data.items[0].vkey;
                       list.push(createSong(musicData,vkey))
                  })
                 
               })
               return list;
            },
            _getSingerDetail(){
                let id=this.$route.params.id;
                getSingerDetail(id).then(response=>{
                    if(response.code==0){
                       this.singerDetail=response.data;
                       this.setSinger(response.data);
                       this.songList=this._innormalSong(response.data.list);
                       setTimeout(()=>{
                           this.selectSongList(this.songList)
                       },1000)
                       
                        console.log(this.songList)
                    }
                })
            }
        }
    }
</script>

<style lang="scss" scoped>
#singerDetail{
    position:fixed;
    width:100%;
    background: rgba(1, 17, 27, 1);
    top:0;
    left:0;
    right:0;
    bottom:0;
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
              z-index: 900;
              height:40px;
               line-height: 40px;
        }
        .singerName{
              text-align: center;
              position: absolute;
              width: 100%;
              height:40px;
              line-height: 40px;
        }
    }
    .singerImg{
        width:100%;
        height:200px;
        img{
            width:100%;
            height:100%;
        }
    }
}

.fade-enter-active, .fade-leave-active {
  transition: opacity 5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
.songsList{
    background: blue;
    height:calc(100vh-100px)
}
</style>
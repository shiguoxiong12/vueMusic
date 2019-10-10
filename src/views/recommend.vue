<!--
 * @Author: shiguoxiong
 * @Date: 2019-09-22 15:11:14
 * @Description: 
 -->
<template>
<div>
    <buttonaaa/>
    <!-- <bar/> -->
    <div class="recommend" v-show="bannerList.length>0">
         <banner :bannerlist="bannerList"/>
       
         <div class="list">
        
             <layout>
                    <h4 class="" slot="title">電台</h4>
                    <div slot="content" class="wrape">

                    <div class='wrape-item' v-for="(item) in radioList" :key="item.radioid">
                    <div class="">
                        <div class="image">
                            <img :src="item.picUrl"/>
                        </div>
                        <p>{{item.Ftitle}}</p>
                    </div>
                        </div>
                    </div>
               </layout>
                <layout>
                    <h4 class="" slot="title">熱門歌單</h4>
                    <div slot="content" class="wrape">

                    <div class='wrape-item' v-for="(item) in SongList" :key="item.id">
                    <div class="">
                        <div class="image">
                            <img :src="item.picUrl"/>
                        </div>
                        <p class="songListDesc">{{item.songListDesc}}</p>
                        <p>{{item.songListAuthor}}</p>
                        <p class="desc">
                            <i class="iconfont icon-erji"></i>
                            {{item.accessnum | componentFilter}}
                            <i class="iconfont icon-bofang" style="float:right"></i>
                        </p>
                    </div>
                        </div>
                    </div>
               </layout>
           </div> 
          
        </div>
         <!--_getSongList<div v-show='bannerList.length==0' class="loading">
               <van-loading  class='spinner'  type="spinner" color="#1989fa">
                   加载中...
               </van-loading>
              <loading2></loading2>
           </div>-->
</div>
</template>

<script>
    import {getRecommend,getSongList} from '@/api/recommend.js'
    import banner from '@/components/banner'
    import layout from '@/components/layout'
    import loading2 from '@/components/loading'
    import bar from '@/components/bar'
    export default {
         created(){
             this._getRecommend()
             this._getSongList()
         },
         components:{
            banner,
            layout,
            loading2,
            bar
         },
         data(){
            return {
                bannerList:[],
                SongList:[],
                radioList:[]
            }
         },
        filters:{
            componentFilter:function(value){
                if(parseInt(value/10000)>0){
                     return (value/10000).toFixed(1)+"萬"
                }else{
                    return value;
                }
            }
        },
         methods:{
            _getRecommend(){
                getRecommend().then((res)=>{
                    if(res.code==0){
                         this.bannerList=res.data.slider;
                         this.radioList=res.data.radioList;
                         this.SongList=res.data.songList;
                    }
                 })
            },
            _getSongList(){
                getSongList().then((res)=>{
                   if(res.code==0){
                        this.SongList=res.data.playlist.data.v_playlist;
                   }
                 }).catch((err)=>{
                     console.log(err)
                 })
            }
        }
    }
</script>

<style lang="scss" scoped>
.recommend{
    .title{
        text-align: center;
        height:20px;
        line-height: 20px;
    }
    .list{
        padding: 0 4px;
    }
    
}
.loading{
        position:fixed;
        width: 100%;
        height:100%;
        top:0;
        background: rgba(12,34,56,.3);
        display: flex;
        flex-direction: column;
        justify-content: center;
        .spinner{
            text-align: center;
        }
    }
</style>
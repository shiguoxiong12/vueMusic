<!--
 * @Author: shiguoxiong
 * @Date: 2019-09-22 15:35:58
 * @Description: 
 -->
<template>
  <div>
    <div class="singers wrapper" ref="Scroll">
         <ul class="content" ref="content">
            <li v-for="(item,index) in singerList" :key="index" class="first_floor" ref='first_floor'>
                <h3 class="IndexKey">{{item.title}}</h3>
                <ul class="sub">
                     <li v-for="(item2,key2) in item.items" :key="key2" @click="selectItem(item2)" class="second_floor">
                         <div class="singerImg">
                             <img v-lazy="item2.avtor"/>
                         </div>
                         <div class="singer_name">
                             {{item2.name}}
                         </div>
                     </li>
                </ul>
            </li>
        </ul>
       <!-- <transition name="fade">-->
         <div class="hoverTitle" v-show="hoverTitle">
            <h2>{{hoverIndex}}</h2>
         </div>
       <!-- </transition>-->
        <div class="fdIndex">
            <ul>
                 <li v-for="(item,index) in singerList" :key="index" class="throld_floor" :class="{'active':currentIndex==index}" 
                   @click="goPage(index)"
                 >
                    {{item.title}}
                 </li>
            </ul>
        </div>
    </div>
     <transition name="slide">
         <!-- <keep-alive key="$4">
            <router-view v-if="$route.meta.keepAlive" :key="$route.name"/>
         </keep-alive> -->
         <router-view   :key="$route.name"></router-view>
     </transition>
  </div>
</template>

<script>
import BScroll from 'better-scroll'
import {getSingers} from '@/api/singers.js'
import Singer from '@/common/singer.js'
    export default {
         data(){
             return{
                 singerList:[],
                 currentIndex:0,
                 subTop:[],
                 hoverIndex:"",
                 scroll:{},
                 hoverTitle:false
             }
         },
         created(){
             this._getSingers()
         },
         mounted(){
             let wrapper =this.$refs.Scroll;
             this.scroll = new BScroll(wrapper,{
                  scrollY: true,
                  probeType:3,
                  click: true
             })
             this.scroll.on('scroll',({x,y})=>{
                 console.log(this)
                 if(y<0 && Math.abs(y)>80){
                     this.hoverTitle=true;
                 }else{
                      this.hoverTitle=false;
                 }
                 //let index=this.getIndex(this.subTop,Math.abs(y))  
                 this.currentIndex=this.getIndex(this.subTop,Math.abs(y))//getIndex 獲取滾動頁面index
                 this.hoverIndex=this.singerList[this.currentIndex].title
             })
            this._getDomOffsetTop().then(data=>{
               this.subTop=data;
            })
         },
         computed:{
             currentSingerList:function(){
                let obj={};
                let curr=[...this.singerList];
                console.log(this.singerList)
                curr.sort((a,b)=>{
                   return a>b
               })
               for(let i=0;i<curr.length;i++){
                    if(!obj.hasOwnProperty(curr[i].Findex)){
                        obj[curr[i].Findex]=[]
                    }else{
                        obj[curr[i].Findex].push(curr[i])
                    }
                }
                
                 return obj;
             }   
         },
         methods:{
             goPage(index){
                 this.currentIndex=index;
                 if(this.currentIndex>0){
                     this.hoverTitle=true;
                 }
                 this.scroll.scrollToElement(this.$refs.first_floor[index], 2000, 0, 0);
                 this.hoverIndex=this.singerList[this.currentIndex].title
             },
             selectItem(obj){
               this.$router.push({
                   path:`/singers/songs/${obj.singermid}`
               })
              
              

             },
             getIndex(timeArr,time) {
                var timeIndex = -1;
                for(let index=0;index<timeArr.length;index++){
                    if(timeArr[index]>time){
                        timeIndex = index;
                        break;
                    }
                }
                 return timeIndex;
            },
             _getDomOffsetTop(){
                  let arr=[];
                 return new Promise((resolve,reject)=>{
                     this.$nextTick(()=>{
                       setTimeout(()=>{
                           let cont=this.$refs.content.querySelectorAll('.first_floor');
                           cont.forEach((e)=>{
                               let height=e.offsetTop+e.scrollHeight;
                               arr.push(height);
                           })
                           resolve(arr);
                        },500)
                   })
                 }) 
             },
             _getSingers(){
                 getSingers().then(res=>{
                     if(res.code==0){
                         this.singerList=this._normalizeSinger(res.data.list);
                         this.hoverIndex=this.singerList[0].title
                     }
                 })
             },
             _normalizeSinger(list){
                 const map={
                      hot:{
                          title:"熱門",
                          items:[]
                      }
                 }
                 list.forEach((item,index) => {
                      if(index<10){  
                          map.hot.items.push(new Singer (
                             item.Fsinger_id,
                             item.Fsinger_mid,
                             item.Fsinger_name,
                          ))
                      }
                      const key=item.Findex;
                      if(!map[key]){
                          map[key]={
                              title:key,
                              items:[]
                          } 
                      }
                      map[key].items.push(new Singer (
                             item.Fsinger_id,
                             item.Fsinger_mid,
                             item.Fsinger_name,
                      ))
                 });
                  const hot=[];
                      const ret=[];
                      for(let k in map){
                          if(map[k].title.match(/[a-zA-Z]/)){
                              ret.push(map[k])
                          }
                          if(map[k].title=="熱門"){
                              hot.push(map[k])
                          }
                      }
                      ret.sort((a,b)=>{
                           return a.title.charCodeAt(0) - b.title.charCodeAt(0)
                      })
                      return hot.concat(ret);
             }
         }
    }
</script>

<style lang="scss" scoped>
.singers{  //這個佈局很好用
    position: fixed;
    width:100%;
    bottom:0;
    top:80px;
    overflow: hidden;
    .content{
       .first_floor{
           .IndexKey{
              height:40px;
              line-height: 40px;
              padding-left: 40px;
              background: darksalmon;
           }
           .sub{
                padding: 0 10px;
               .second_floor{
                   padding: 10px;
                   display: flex;
                   flex-direction: row;
                   justify-content: space-around;
                   .singerImg{
                       width:60px;
                       img{
                           width:100%;
                           border-radius: 50%;
                       }
                   }
                   .singer_name{
                       flex:1;
                      display: flex;
                      flex-direction: column;
                      justify-content: center;
                      padding-left: 10px;
                   }
               }
           }
       }
    }
    .hoverTitle{
         position: fixed;
         top:76px;
         height:30px;
         width:100%;
         line-height: 30px;
         padding-left: 40px;
         background: darksalmon;
    }
    .fdIndex{
        position: fixed;
        top:50%;
        right:5px;
        transform: translateY(-50%);
        ul{
            .throld_floor{
                text-align: center;
                &.active{
                    color:red
                }
            }
        }
    }
}
.slide-enter-active,.slide-leave-active{
    transition: all .3s;   
}
.slide-leave-to,.slide-enter{
    transform: translate3d(100%,0,0);
}
//.slide-enter{
 //   transform: translate3d(100%,0,0);
 // }
</style>
<!--
 * @Author: shiguoxiong
 * @Date: 2019-09-22 15:55:55
 * @Description: 
 -->
<template>
    <div class="banner">
          <swiper :options="swiperOption" ref="mySwiper" @someSwiperEvent="">
            <swiper-slide v-for='(item,index) in bannerlist' :key='index'>
                <a :href='item.linkUrl'>
                   <img :src="item.picUrl" alt="" :id="item.id">
                </a> 
            </swiper-slide>
            <div class="swiper-pagination"  slot="pagination"></div>
        </swiper>
    </div>
</template>

<script>
    import 'swiper/dist/css/swiper.css'
    import { swiper, swiperSlide } from 'vue-awesome-swiper'
    export default {
        components:{
            swiper,
            swiperSlide
        },
        props:{
           bannerlist:{
               type:Array,
               default: function () {
                    return []
                }
           }
        },
        data() {
            return {
                swiperOption: {
                   notNextTick: true,
 
//循环
 
loop: true,
 
//设定初始化时slide的索引
 
initialSlide: 0,
 
//自动播放
 
autoplay: {
 
delay: 1500,
loop:true,
 
stopOnLastSlide: false,
 
disableOnInteraction: false
 
},
 
//滑动速度
 
speed: 800,
 
//滑动方向
 
direction: "horizontal",
 
//小手掌抓取滑动
 
grabCursor: true,

                pagination: {
                    el: '.swiper-pagination',
                },
                }
            }
            },
            computed: {
            swiper() {
                return this.$refs.mySwiper.swiper
            }
            },
            mounted() {
            // current swiper instance
            // 然后你就可以使用当前上下文内的swiper对象去做你想做的事了
            console.log('this is current swiper instance object', this.swiper)
            this.swiper.slideTo(3, 1000, false)
            }
    }
</script>

<style lang="scss" scoped>
.banner{
    height:120px;
}
.swiper-pagination {
     /deep/.swiper-pagination-bullet{
                  width:5px;
                  height:5px;
     }
     
}
.swiper-pagination-bullets{
         bottom:2px;
}
img{height:120px;width: 100%;}
</style>
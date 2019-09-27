<!--
 * @Author: shiguoxiong
 * @Date: 2019-09-22 15:35:58
 * @Description: 
 -->
<template>
    <div class="singers">
       <van-index-bar>
            <div v-for="(item,key,index) in currentSingerList" :key='index'>
                 <van-index-anchor :index='key' />
                 <van-cell v-for="(item2,index2) in item" :key="index2" :title="item2.Fsinger_name" />
                

               </div>
        
       


</van-index-bar>
    </div>
</template>

<script>
import {getSingers} from '@/api/singers.js'

    export default {
         data(){
             return{
                 singerList:[]
             }
         },
         created(){
             this._getSingers()
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
                 console.log(obj)
                 return obj;
             }
            
         },
         components:{
            
         },
         methods:{
             _getSingers(){
                 getSingers().then(res=>{
                     if(res.code==0){
                         this.singerList=res.data.list;
                         console.log(this.singerList)
                        // alert(23)
                     }
                 })
             }
         }
    }
</script>

<style lang="scss" scoped>

</style>
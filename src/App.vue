<!--
 * @Author: shiguoxiong
 * @Date: 2019-09-21 20:26:58
 * @Description: 
 -->
<template>
  <div id="app">
    <Header/>
    <div id="nav">
       <Tab/>
    </div>
    <hamburger/>
    <buttonaaa122/>
    <button @click='success()'>成功</button>
   <!-- <keep-alive>
      <router-view :key="$route.fullPath"/>
     </keep-alive>-->
     <grandfather/>
  </div>
</template>
<script>
import { getAllRoles } from "@/mock/user";
import Tab from '@/components/tab'
import Header from '@/components/header'
import hamburger from '@/components/hamburger'
import grandfather from '../component-study/grandfather/index.vue'
export default {
  components:{
    Header,
     Tab,
     hamburger,
     grandfather
  },
  mounted(){
    console.log(this.$alert)
   
  },
  methods:{
    success(){
        this.$Message({
          content:"ha"
        })
    }
  },
  created(){
    console.log("created ......")
    getAllRoles().then(function(){
       console.log("haha")
    }).catch(function(){
       console.log("haha12")
    })
   
  }
}
</script>

<style lang="scss">
#app{
  font-size: 10px;
}

</style>

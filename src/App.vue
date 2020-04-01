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
    <keep-alive>
      <router-view/>
     </keep-alive>
  </div>
</template>
<script>
import { getAllRoles } from "@/mock/user";
import Tab from '@/components/tab'
import Header from '@/components/header'
export default {
  components:{
    Header,
     Tab
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

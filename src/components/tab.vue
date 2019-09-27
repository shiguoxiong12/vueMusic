<!--
 * @Author: shiguoxiong
 * @Date: 2019-09-22 15:33:34
 * @Description: 
 -->
<template>
    <div class="tab">
        <ul class="tab-item">
            <router-link tag='div' to='/recommend'>推薦</router-link>
            <router-link tag='div' to='/singers'>歌手</router-link>
            <router-link tag='div' to='/ranking'>排行</router-link>
            <router-link tag='div' to='/search'>搜索</router-link>
        </ul>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>
.tab{
    .tab-item{
         display: flex;
         flex-direction: row;
         justify-content: space-around;
         align-items: center;
         height:40px;
         .router-link-active{
             color:blue;
         }
    }
}
  
</style>
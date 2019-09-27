<!--
 * @Author: shiguoxiong
 * @Date: 2019-09-23 16:44:36
 * @Description: 
 -->
<template>
 
     <div class="loading">
           <div class="content">
               <div class="line">
                <div class="sp sp1"></div>
                <div class="sp sp2"></div>
                <div class="sp sp3"></div>
                <div class="sp sp4"></div>
                <div class="sp sp5"></div>
                </div>
                <p style="color:#ccc;">正在加載...</p>
           </div>
      </div>
     
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>
.content{
    height:100px;
    text-align: center;
    position: relative;
    .line{
        height:50%;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
       .sp{
        display: inline-block;
       // position: absolute;
      //  bottom:0px;
        width:3px;
        height:100%;
        background:red;
        margin-right: 8px;
        border-radius: 5px;
        animation: dan 1.5s linear 0s infinite ;
      }
      .sp1{
         // left:10px;
          animation-delay:.3s
      }
       .sp2{
         // left:20px;
          animation-delay:.6s
      }
       .sp3{
         // left:30px;
           animation-delay:.9s
      }
       .sp4{
        //  left:40px;
          animation-delay:1.2s
      }
       .sp5{
        //  left:50px;
          animation-delay:1.5s
      }
    }
   
}
@keyframes dan {
    0%{
       height:10%;  
    }
    25%{
       height:25%;  
    }
    50%{
       height:50%;  
    }
    75%{
         height:25%; 
    }
    100%{
          height:10%; 
    }
}
</style>
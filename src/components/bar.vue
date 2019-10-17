<!--
 * @Author: shiguoxiong
 * @Date: 2019-09-28 15:22:45
 * @Description: 
 -->
<template>
    <div style="width:100vw;height:100vh;background:radial-gradient(ellipse at bottom, #1B2735 0%, #090A0F 100%);">
         <div id="start1"></div>
         <div id="start2"></div>
         <div id="start3"></div>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>
$width:1;
@mixin text-overflow($properties...){
    $lists: ();
    @for $i from 1 through length($properties){
        $lists: join($lists, #{nth($properties, $i)}, comma);
    }
    box-shadow: $lists;
}
@for $i from 1 through 5{
    .item#{$i}{
        width:2%*$i
    }
}
    #start1{
        width:1px;
        height:1px;
        @include text-overflow(200px 0px #fff, 100px 25px #fff,
        123px 20px #fff, 20px 23px #fff,
        278px 40px #fff, 30px 24px #fff,
        600px 50px #fff, 40px 26px #fff,
        400px 60px #fff, 50px 24px #fff,
        345px 70px #fff, 60px 25px #fff,
        233px 80px #fff, 70px 24px #fff,
        129px 90px #fff, 80px 25px #fff
        );
        animation: animStar 100s linear infinite;
       // animation-delay: -10s;
    }
    #start2{
        width:1px;
        height:1px;
        @include text-overflow(200px 0px #fff, 100px 25px #fff,
        123px 20px #fff, 20px 23px #fff,
        278px 40px #fff, 30px 24px #fff,
        600px 50px #fff, 40px 26px #fff,
        400px 60px #fff, 50px 24px #fff,
        345px 70px #fff, 60px 25px #fff,
        233px 80px #fff, 70px 24px #fff,
        129px 90px #fff, 80px 25px #fff
        );
        animation: animStar 100s linear infinite;
        //animation-delay: -8s;
    }
    #start3{
        width:2px;
        height:2px;
        @include text-overflow(200px 0px #fff, 100px 25px #fff,
        123px 20px #fff, 20px 23px #fff,
        278px 40px #fff, 30px 24px #fff,
        600px 50px #fff, 40px 26px #fff,
        400px 60px #fff, 50px 24px #fff,
        345px 70px #fff, 60px 25px #fff,
        233px 80px #fff, 70px 24px #fff,
        129px 90px #fff, 80px 25px #fff
        );
        animation: animStar 100s linear infinite;
       // animation-delay: -5s;
    }
    @keyframes animStar {
        from{
            transform: translateY(1000px)
        }
        to{
            transform: translateY(-2000px)
        }
    }
</style>
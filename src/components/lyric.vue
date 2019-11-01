<template>
    <div class="lyric">  
         <div v-if="lyric && lyric.lines.length>0">
            <p v-for="(line,index) in lyric.lines" 
            :key="index" ref="lyricLine" 
            :class="{'current font-color':currentIndex==index}"  
             class="text">
                {{line.txt}}
            </p>  
         </div>
         <div v-else class="font-color" style="text-align:center;">暫無歌詞...</div>
    </div>  
</template>
<script>
    export default {
        props:{
            lyric:{
                type:Object
            },
            currentIndex:{
                type:Number
            }
        }
    }
</script>

<style lang="scss" scoped>
.lyric{
    margin-top:20px;
}
.text{
    display: none;
    text-align: center;
}
.current{
    display: block;
}
</style>
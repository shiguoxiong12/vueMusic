<!--
 * @Author: shiguoxiong
 * @Date: 2019-09-22 18:24:16
 * @Description: 
 -->
<template>
    <div class="layout">
         <div class="ly-title">
              <slot name='title'></slot>
         </div>
         <div class="ly-content">
              <slot name='content' class="wrape"></slot>
         </div>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>
.layout{
    .ly-title{
        height:10px;
        margin-bottom:5px;
        line-height: 10px;
    }
    .ly-content{
        .icon{
            width: 100px;
            img{
                 width: 100px;
            }
        }
        .wrape{
            display: flex;
            flex-direction: row;
            justify-content: space-around;
            flex-wrap: wrap;
        }
        .wrape-item{
            width: 48%;
            position: relative;
            img{
                width: 100%;
               
            }
            .songListDesc{
                 overflow: hidden;/*超出部分隐藏*/
                text-overflow:ellipsis;/* 超出部分显示省略号 */
                white-space: nowrap;/*规定段落中的文本不进行换行 */
               // width: 250px;/*需要配合宽度来使用*/
               // border: 1px solid red;
               // font-size: 30px;
            }
            .desc{
                position: absolute;
                bottom:20px;
                width: 100%;
                box-sizing: border-box;
                padding: 0 4px;
                color:#fff;
            }
        }
    }
}
</style>
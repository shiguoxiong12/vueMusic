<template>
    <div>
       <div class="ham">
           <span 
             class="ham-line"
             v-for="(line,index) in hamLine"
             :key="index"
             :style="{
                 width:line.width,
                 top:line.top,
                 transform:line.transform,
                 opacity:line.opacity,
                 transition:'all .3s'
             }"
           ></span>
       </div>
       <div>
           <span v-for="(item,index) in lineStyle" :key="index" @click="change(item)" class="list">
             {{index}}
           </span>
       </div>
    </div>
</template>

<script>
    export default {
        name:'hamburger',
        data(){
            return{
               lineStyle:{
                   normalLine:[
                       {
                           width:'100%',
                           top:'0px',
                           transform:'rotateZ(0deg)',
                           opacity:'1'
                       },{
                           width:'100%',
                           top:'0px',
                           transform:'rotateZ(0deg)',
                            opacity:'1'
                       },{
                           width:'100%',
                           top:'0px',
                           transform:'rotateZ(0deg)',
                            opacity:'1'
                       }
                   ],
                   style1:[
                       {
                           width:'100%',
                           top:'15px',
                           transform:'rotate(-45deg)',
                            opacity:'1'
                       },
                       {
                           width:'100%',
                           top:'0px',
                           transform:'rotateZ(0deg)',
                           opacity:'0'
                       },
                       {
                           width:'100%',
                           top:'-15px',
                           transform:'rotate(45deg)',
                           opacity:'1'
                       }
                   ],
                   style2:[
                       {
                           width:'100%',
                           top:'6px',
                           transform:'translateY(10px)',
                           opacity:'1'
                       },
                        {
                           width:'100%',
                           top:'0px',
                           transform:'rotateZ(0deg)',
                           opacity:'0'
                       },
                        {
                           width:'100%',
                           top:'-6px',
                           transform:'translateY(-10px)',
                           opacity:'1'
                       }
                   ],
                   style3:[
                        {
                           width:'100%',
                           top:'0px',
                           transform:'translateX(-10px) rotate(-43deg)',
                           opacity:'1'
                       },
                        {
                           width:'100%',
                           top:'0px',
                           transform:'rotateZ(0deg)',
                           opacity:'1'
                       },
                        {
                           width:'100%',
                           top:'0px',
                           transform:'translateX(-10px) rotate(43deg)',
                           opacity:'1'
                       }
                   ],
                    style4:[
                        {
                           width:'100%',
                           top:'0px',
                           transform:'translateX(10px) rotate(43deg)',
                           opacity:'1'
                       },
                        {
                           width:'100%',
                           top:'0px',
                           transform:'rotateZ(0deg)',
                           opacity:'1'
                       },
                        {
                           width:'100%',
                           top:'0px',
                           transform:'translateX(10px) rotate(-43deg)',
                           opacity:'1'
                       }
                   ]
               },
               hamLine:[],
               mobileMenu:false
            }
        },
        created(){
            this.hamLine=this.lineStyle.normalLine
        },
        methods:{
            change(item){
                this.mobileMenu=!this.mobileMenu;
                this.hamLine=this.mobileMenu ? item : this.lineStyle.normalLine;
            }
        }
    }
</script>

<style lang="css" scoped>
.ham{
    width:50px;
    height:50px;
    cursor: pointer;
    line-height: 0;
    margin:30px auto;
}
.ham-line{
    position: relative;
    display: inline-block;
    vertical-align: top;
    width: 100%;
    height:5px;
    margin-top: 10px;
    background-color: rgb(247,239,239)
}
.list{
    color:red;
    padding:5px;
    cursor: pointer;

}
.list:first-child{
    display: none;
}
</style>
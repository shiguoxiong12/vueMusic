<template>
    <div>
        <span class="totar" v-show='flag' :class="color">
            我是弹窗
        </span>
    </div>
</template>

<script>
    export default {
        data(){
            return{
                message:'',
                flag:false,
                color:'',
            }
        },
        methods:{
            success(message,durition){
                     console.log(this)
                this.flag=true;
                this.color = 'green';
                this.message=message;
                let _this=this;
                console.log(this)
                setTimeout(()=>{
                     _this.flag=false;
                     _this.message=""
                },durition)
            }
        }
    }
</script>

<style lang="css" scoped>
.green{
    background: rgb(240, 249, 235);
}
.totar{
    position: fixed;
    width: 100%;
    height:100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    left:0%;
    top:-30px;
    z-index: 999;
       top: 50%;
    transform: translateY(-50%);
    text-align: center;
    animation: animate;
    animation-duration: 1s;
    animation-fill-mode:forwards;
}
@keyframes animate {
  0% {
    opacity: 0;
   
  }
  100% {
    opacity: 1;
 
  }
}

</style>
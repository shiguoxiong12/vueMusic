<template>
    <div class="wrap">
      <div v-for="(item,index) in content" :key="index">
          {{item.content}}
      </div>
    </div>
</template>

<script>
    // 默认选项
   const DefaultOptions = {
    duration: 1000,
    type: 'info',
    content: '这是一条提示信息！',
   }
    let _mid = 0
    export default {
        data(){
            return{
                  content:[]
            }
           
        },
        methods:{
            addNotes(options){
                 let _name=this.getName();
               options=Object.assign(_name,DefaultOptions,options);
              
               this.content.push(options);
                setTimeout(() => {
                    this.removeNotice(_name)
                }, options.duration)
            },
            getName(){
                return 'mess_'+(_mid++)
            },
            removeNotice(_name) {
                 let index = this.content.findIndex(item => item._name === _name)
                 this.content.splice(index, 1)
            }

        }
    }
</script>

<style lang="css" scoped>
.wrap {
    position: fixed;
    top: 50px;
    left: 50%;
    display: flex;
    flex-direction: column;
    align-items: center;
    transform: translateX(-50%);
}

.message {
    --borderWidth: 3px;
    min-width: 240px;
    max-width: 500px;
    margin-bottom: 10px;
    border-radius: 3px;
    box-shadow: 0 0 8px #ddd;
    overflow: hidden;
}

.content {
    padding: 8px;
    line-height: 1.3;
}

.message.info {
    border-left: var(--borderWidth) solid #909399;
    background: #F4F4F5;
}

.message.success {
    border-left: var(--borderWidth) solid #67C23A;
    background: #F0F9EB;
}

.message.error {
    border-left: var(--borderWidth) solid #F56C6C;
    background: #FEF0F0;
}

.message.warning {
    border-left: var(--borderWidth) solid #E6A23C;
    background: #FDF6EC;
}
</style>
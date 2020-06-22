<template>
    <div class="form">
        <slot></slot>
    </div>
</template>

<script>

    export default {
        name:'Iform',
        provide() {
            return {
            Iform : this
            };
        },
        data(){
            return{
                lifeList:[]
            }
        },
        props:{
            formLines:{
                type:Object
            },
            ruleLine:{
                type:Object
            }
        },
        created(){
            this.$on('test',function(p){
                 lifeList.push()
            })
        }
    }
</script>

<style lang="scss" scoped>

</style>
<template>
    <div>
         <Iform :ruleLine="ruleLine">
             <formItem prop="name"></formItem>
         </Iform>
    </div>
</template>

<script>
import Iform from './form/form/Iform'
import formItem from './form/formItem/formItem'
    export default {
        name:'index',
        components:{
            Iform,
            formItem
        },
        data(){
            return{
                ruleLine:[
                    {
                        name:{
                            required:true,
                            messageText:""
                        }
                    }
                ]
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>
<template>
    <div class="formItem">
         <label for="">{{label}}</label>
         <div>
             <slot></slot>
         </div>
    </div>
</template>

<script>
    import emitter from '../../emitter.js'
    console.log(emitter);
    
    export default {
        name:'iFormItem',
        mixins:[emitter],
        inject:['Iform'],
        props:{
            label:{
                type:String
            },
            prop:{
                  type:String
            }
        },
        data(){
            return{
                isRequired: false,  // 是否为必填
                validateState: '',  // 校验状态
                validateMessage: '',  // 校验不通过时的提示信息
            }
        },
        mounted(){
            if (this.prop) {
                 this.dispatch('Iform', "test", this);
                 this.setRules()
            }
            console.log(this.Iform)
          
        },
         methods: {
            setRules () {
            this.$on('on-form-blur', this.onFieldBlur);
            this.$on('on-form-change', this.onFieldChange);
            },
            getRule(){
               let rules=this.Iform.ruleLine;
               rules=rules ?  rules[this.prop] : [];
               return [].concat(rules || []);
            },
            validate(type){

            },
            onFieldBlur() {
                this.validate('blur');
                },
            onFieldChange() {
                this.validate('change');
                }
        },
        beforeDestroy () {
          this.dispatch('Iform', 'on-form-item-remove', this);
        }
    }
</script>

<style lang="scss" scoped>

</style>
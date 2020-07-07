<template>
   <div style="color:pink;">
  <div v-for="(item,index) in lists" :key="index" :class="`${index}_group`">{{item}}</div>
  </div>
</template>

<script>
export default {
name:'list',
data(){
return {
     lists:[
         1,
         2,
         3,
         4
     ]
}
},
mounted() {
}

}

</script>
<style>
</style>
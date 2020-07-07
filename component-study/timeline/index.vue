<template>
  <div id="timeline">
       <light-timeline :items='items'>
            <template v-slot:date="{item}">
                 {{item.date}}
            </template>
            <template v-slot:symbol="{item}">
                  <div class="my_icon_class"><i :class="item.class"></i></div>
           </template>
            <template v-slot:content="{item}">
                 {{item.content}}
            </template>
           
  </light-timeline>
  </div>
</template>

<script>
export default {
data(){
return {
    items: [
        {
          tag: '2019-02-12',
          content: '测试内容',
          name:"国雄1",
          class: 'fas fa-star',
          htmlMode: true,
        },
        {
          tag: '2019-02-13',
          type: 'circle',
          content: '练习内容',
           class: 'fas fa-star',
           name:"国雄2"
        }
      ]
}
},
mounted() {
}

}

</script>
<style>
</style>
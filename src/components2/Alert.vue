<template>
  <div class="loading-wrapper" v-show="visible">
    加载中
  </div>
</template>
<script>
export default {
  name: 'Loading',
  data () {
    return {
      visible: false
    }
  },
  methods: {
    show () {
      this.visible = true
    },
    hide () {
      this.visible = false
    }
  }
}
</script>
<style lang="css" scoped>
.loading-wrapper {
  position: absolute;
  top: 0;
  bottom: 0;
  width: 100%;
  background-color: rgba(0, 0, 0, .4);
  z-index: 999;
}
</style>

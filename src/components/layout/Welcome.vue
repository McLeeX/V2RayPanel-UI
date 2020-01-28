<template>
  <span>欢迎使用</span>
</template>
<script>
  export default {
    name: 'Welcome',
    data() {
      return {}
    },
    methods: {},
    mounted() {
      this.$store.commit('menu', {
        activeMenu: 'home',
        openMenu: 'home'
      });
    }
  }
</script>

<style lang="less" scoped>

</style>

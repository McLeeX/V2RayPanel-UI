<template>
  <span>修改密码</span>
</template>
<script>
  export default {
    name: 'MeChangePassword',
    data() {
      return {}
    },
    methods: {},
    mounted() {
      this.$store.commit('menu', {
        activeMenu: 'meChangePassword',
        openMenu: ['me']
      });
    }
  }
</script>

<style lang="less" scoped>

</style>

<template>
  <span>变更邮箱</span>
</template>
<script>
  export default {
    name: 'MeChangeEmail',
    data() {
      return {}
    },
    methods: {},
    mounted() {
      this.$store.commit('menu', {
        activeMenu: 'meChangeEmail',
        openMenu: ['me']
      });
    }
  }
</script>

<style lang="less" scoped>

</style>

<template>
  <span>账户详情</span>
</template>
<script>
  export default {
    name: 'MeDetails',
    data() {
      return {}
    },
    methods: {},
    mounted() {
      this.$store.commit('menu', {
        activeMenu: 'meDetails',
        openMenu: ['me']
      });
    }
  }
</script>

<style lang="less" scoped>

</style>

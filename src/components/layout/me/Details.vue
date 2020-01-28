<template>
  <div class="me-details">

  </div>
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
  .me-details {
    width: 100%;
    height: 100%;
    border: 1px #ccc dashed;
  }
</style>

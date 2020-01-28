<template>
  <div id="me" class="me">
    <router-view/>
  </div>
</template>

<script>
  export default {
    name: 'Me'
  }
</script>

<style lang="less" scoped>
  #me {
    width: 100%;
    height: 100%;
  }
</style>

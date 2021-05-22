<template>
  <div class="main">
    <router-view />
  </div>
</template>

<script>
export default {
}
</script>

<style scoped>
.main {
  background-color: #dadada;
  min-height: 100vh;
  display: grid;
  place-items: center;
  overflow: hidden;
  position: relative;
}
</style>
<template>
  <div class="header">
    <router-link :to="{ name: 'Login' }">
      <button class="btn btn_white btn_out">Выйти</button>
    </router-link>
  </div>
</template>

<style scoped>
div {
  background-color: #1690c3;
}
.header {
  display: flex;
  align-items: center;
  justify-content: flex-end;
}
.btn_out {
  margin-right: 15px;
}
a {
  text-decoration: none;
}
</style>

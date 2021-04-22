<template>
  <div class="header">
    <router-link :to="{ name: 'Login' }">
      <button class="btn btn_white btn_out">Выйти</button>
    </router-link>
  </div>
</template>

<style scoped>
div {
  background: rgb(238,174,202);
  background: radial-gradient(circle, rgba(238,174,202,1) 0%, rgba(148,187,233,1) 100%);
  /* background-color: #1690c3; */
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

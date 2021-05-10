<template>
  <div class="main" :class="{ showToast: toast.toast }">
    <span class="text">{{toast.text}}</span>
  </div>
</template>

<script>
export default {
  name: "Toast",
  props: {
    toast: Object,
  },
};
</script>

<style scoped>
.main {
  background: linear-gradient(to right, #8ca6db, #b993d6);
  border-radius: 10px;
  border: 1px solid #fff;
  padding: 10px 20px;
  position: absolute;
  top: 40px;
  right: -50vw;
  z-index: 10;
  transition: 0.7s;
}
.text {
  color: #fff;
  font-weight: bold;
}
.showToast {
  right: 10vw;
}
</style>

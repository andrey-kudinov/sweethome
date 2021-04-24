<template>
  <div class="main" :class="{ showToast: toast.toast }">
    <!-- <img
            class="attencion"
            :src="require('@/assets/img/welcome/attencion.svg')"
            alt=""
        /> -->
    <span class="text">Сохранено</span>
    <!-- <img
            class="close"
            :src="require('@/assets/img/welcome/close.svg')"
            alt=""
            @click="hiddenWindow"
        /> -->
  </div>
</template>

<script>
export default {
  name: "Toast",
  props: {
    toast: Object,
  },
  methods: {
    // hiddenWindow: function() {
    //   document
    //     .querySelector(".reg__content-window")
    //     .classList.add("animation-displayNone");
    //   setTimeout(() => {
    //     document.querySelector(".reg__content-window").style.display = "none";
    //   }, 600);
    // },
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
  right: -200px;
  z-index: 10;
  transition: 0.5s;
}
.text {
  color: #fff;
  font-weight: bold;
}
.showToast {
  right: 20px;
}
</style>

<template>
  <transition name="fade">
    <div class="main" v-if="modal.modal">
      <div class="close" @click="modal.modal = false">
        <img :src="require('@/assets/img/close.svg')" alt="" />
      </div>
      <div class="img">
        <img :src="modal.src" alt="" />
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  props: {
    modal: Object,
  },
};
</script>

<style scoped>
.main {
  background: linear-gradient(to right, #8ca6db, #b993d6);
  border-radius: 10px;
  border: 1px solid #fff;
  padding: 20px;
  position: absolute;
  top: 140px;
  left: 50%;
  transform: translate(-50%, 0);
  z-index: 10;
  transition: 0.7s;
  display: grid;
  place-items: center;
  z-index: 4;
}
.close {
  position: absolute;
  right: 20px;
  top: 20px;
  width: 20px;
  overflow: hidden;
  cursor: pointer;
  filter: invert();
  opacity: 0.5;
  transition: 0.3s ease;
}
.close:hover {
  opacity: 1;
}
.img {
  width: 400px;
  border-radius: 50%;
  overflow: hidden;
}
.img img,
.close img {
  object-fit: cover;
  object-position: center;
  width: 100%;
  height: 100%;
}
@media all and (max-width: 768px) {
  .main {
    top: 200px;
  }
  .img {
    width: 70vw;
  }
}
</style>

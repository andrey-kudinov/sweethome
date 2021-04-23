<template>
  <div class="wrap">
    <router-link
      class="link"
      v-for="link in links"
      :key="link.url"
      tag="li"
      active-class="active"
      :to="link.url"
      :exact="link.exact"
      :class="{ 'router-link-hide': isFull }"
    >
      <a href="#" >{{ link.title }}</a>
    </router-link>
    <div class="arrow" :class="{ 'rotate': isFull }" @click="$emit('expand')">
      <img :src="require('@/assets/img/arrow.svg')" alt="">
    </div>
  </div>
</template>

<script>
export default {
  props: {
    isFull: Boolean,
  },
  data: () => ({
    links: [
      { title: "Добавить", url: "/", exact: true },
      { title: "История", url: "/history" },
      // { title: "Планирование", url: "/planning" },
      // { title: "Новая запись", url: "/record" },
      // { title: "Категории", url: "/categories" },
    ],
  }),
};
</script>

<style scoped>
.wrap {
  background: #b993d6; /* fallback for old browsers */
  background: -webkit-linear-gradient(
    to right,
    #8ca6db,
    #b993d6
  ); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(
    to right,
    #8ca6db,
    #b993d6
  ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

  /* background-color: #1690c3;
  border: 1px solid #0a467e; */
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  position: relative;
}
.link {
  background: #b993d6; /* fallback for old browsers */
  background: -webkit-linear-gradient(
    to right,
    #8ca6db,
    #b993d6
  ); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(
    to right,
    #8ca6db,
    #b993d6
  ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  border-radius: 15px;
  padding: 10px;
  border: 1px solid #fff;
  width: 250px;
  margin: 5px 0;
  text-decoration: none;
}
li a {
  text-decoration: none;
}
li {
  list-style-type: none;
  transition: .3s;
}
.router-link-hide {
  position: absolute;
  transform: translateX(-300px);
}
.arrow {
  position: absolute;
  width: 50px;
  height: 50px;
  right: -60px;
  transition: .3s;
  cursor: pointer;
  transform: rotate(-180deg);
}
.arrow img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
}
.rotate {
  transform: rotate(0);
}
</style>

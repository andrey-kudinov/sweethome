<template>
  <div class="wrap">
    <router-link
      v-for="link in links"
      :key="link.url"
      tag="li"
      active-class="active"
      :to="link.url"
      :exact="link.exact"
      :class="{ 'router-link-hide': isFull }"
    >
      <a href="#">{{ link.title }}</a>
    </router-link>
    <div class="arrow" :class="{ rotate: isFull }" @click="$emit('expand')">
      <!-- <img :src="require('@/assets/img/arrow.svg')" alt="" /> -->
      <svg
        version="1.1"
        id="Layer_1"
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
        x="0px"
        y="0px"
        viewBox="0 0 512 512"
        style="enable-background:new 0 0 512 512;"
        xml:space="preserve"
      >
        <g>
          <g>
            <path
              class="svg"
              d="M203.6,491.6L203.6,491.6c-18.8-18.8-18.8-49.3,0-68l121.9-121.9c25.4-25.4,25.4-66.5,0-91.8l-122-122
			c-18.8-18.8-18.8-49.2,0-68l0,0c18.8-18.8,49.2-18.8,68,0l206.6,206.6c16.2,16.2,16.2,42.5,0,58.7L271.6,491.6
			C252.9,510.4,222.4,510.4,203.6,491.6z"
            />
          </g>
          <g>
            <path
              class="svg"
              d="M35.1,395.9L35.1,395.9c-18.8-18.8-18.8-49.2,0-68l39.2-39.2c18.2-18.2,18.2-47.7,0-65.9l-39.2-39.2
			c-18.8-18.8-18.8-49.2,0-68h0c18.8-18.8,49.2-18.8,68,0L214,226.3c16.2,16.2,16.2,42.5,0,58.7L103.2,395.9
			C84.4,414.7,53.9,414.7,35.1,395.9z"
            />
          </g>
        </g>
      </svg>
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
      { title: "Профиль", url: "/profile" },
      { title: "Статистика", url: "/stats" },
      { title: "Описание", url: "/info" },
      // { title: "Планирование", url: "/planning" },
      // { title: "Новая запись", url: "/record" },
      // { title: "Категории", url: "/categories" },
    ],
  }),
};
</script>

<style scoped>
.wrap {
  background: linear-gradient(to right, #8ca6db, #b993d6);
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  position: relative;
}
li {
  list-style-type: none;
  transition: transform 0.5s ease-out;
  opacity: 1;
}
a {
  background: linear-gradient(to right, #8ca6db, #b993d6);
  padding: 10px;
  border: 1px solid #fff;
  border-radius: 15px;
  width: 250px;
  margin: 5px 0;
  display: block;
  text-decoration: none;
  font-weight: bold;
  position: relative;
  overflow: hidden;
  transition: background 0.3s ease-in;
  color: #0a467e;
}
a:before {
  content: "";
  position: absolute;
  z-index: 1;
  left: 125px;
  right: 125px;
  top: 0;
  background: #fff;
  height: 45px;
  transition: 0.4s;
  opacity: 0.3;
}
a:hover:before {
  left: 0;
  right: 0;
}
a:hover {
  /* border: 1px solid #b993d6; */
}
.active a {
  background: #fff;
}
.active a:before {
  content: "";
  position: absolute;
  z-index: 1;
  left: 125px;
  right: 125px;
  top: 0;
  background: linear-gradient(to right, #8ca6db, #b993d6);
  height: 45px;
  transition: 0.4s;
  opacity: 0.3;
}
.active a:hover:before {
  left: 0;
  right: 0;
}
.active a:hover {
  border: 1px solid #b993d6;
}
.active a {
  background: #fff;
}
a:active {
  color: #fff;
}
.router-link-hide {
  position: absolute;
  transform: translateX(-300px);
  opacity: 0;
}
.arrow {
  position: absolute;
  width: 50px;
  height: 50px;
  right: -60px;
  transition: 0.3s;
  cursor: pointer;
  transform: rotate(-180deg);
  z-index: 2;
}
.arrow svg {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
}
@media all and (max-width: 768px) {
  .arrow {
    right: 20px;
    width: 15px;
    height: 15px;
    filter: brightness(0.8);
    top: 8px;
  }
  .arrow svg {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
  }
}
.svg {
  fill: #b993d6;
}
.rotate {
  transform: rotate(0);
}
</style>

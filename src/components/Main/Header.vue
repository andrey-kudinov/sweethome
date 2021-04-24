<template>
  <div class="header">
    <div class="time">{{ date | date("datetime") }}</div>

    <div class="profiles">
      <div class="profile">
        <div class="name">Nyuta</div>
      <div class="avatar">
        <img :src="require('@/assets/img/cat.svg')" alt="">
      </div>
      </div>
      
      <div class="profile">
        <div class="name">Andrey</div>
      <div class="avatar">
        <img :src="require('@/assets/img/circle_blue.svg')" alt="">
      </div>
      </div>
    </div>

    <div class="buttons">
      <!-- <button class="btn btn_white btn_change" @click="changeFavicon">Сменить иконку</button> -->
      <router-link :to="{ name: 'Login' }">
        <button class="btn btn_white btn_out">Выйти</button>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      date: new Date(),
      interval_1: null,
      interval_2: null,
    };
  },
  mounted() {
    this.interval_1 = setInterval(() => {
      this.date = new Date();
    }, 1000);
    this.interval_2 = setInterval(() => {
      this.changeFavicon()
    }, 10000);
  },
  beforeDestroy() {
    clearInterval(this.interval_1);
    clearInterval(this.interval_2);
  },
  methods: {
    changeFavicon() {
      const favicon = document.getElementById("favicon");
      const href = [
        // "/favicon.ico",
        "/orange.svg",
        "/cherry.svg",
        "/chock.svg",
        "/ice.svg",
        "/laptop.svg",
        "/balloon.svg",
        "/teddy.svg",
        "/present.svg",
        "/pie.svg",
        "/bird.svg",
        "/photo.svg",
        "/home.svg",
      ];
      favicon.href = href[Math.floor(Math.random() * href.length)];
    }
  }
};
</script>

<style scoped>
.header {
  background: radial-gradient(
    circle,
    rgba(238, 174, 202, 1) 0%,
    rgba(148, 187, 233, 1) 100%
  );
}
.time {
  background: radial-gradient(
    circle,
    rgba(238, 174, 202, 1) 0%,
    rgba(148, 187, 233, 1) 100%
  );
  margin-left: 30px;
  padding: 15px;
  color: #0a467e;
  font-weight: bold;
  border-radius: 15px;
}
.header {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.buttons {
  display: flex;
  margin-right: 15px;
}
.btn_change {
  margin-right: 15px;
}
.btn_out {
}
a {
  text-decoration: none;
}
.profiles {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
}
.profile {
  display: flex;
  align-items: center;
}
.name{
  color: #0a467e;
  font-weight: bold;
  margin-right: 15px;
}
.avatar {
  width: 40px;
  height: 40px;
}
.avatar img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
}
</style>

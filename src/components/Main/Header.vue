<template>
  <div class="header">
    <div class="time">
      {{ date | date("datetime") }}, <br v-if="isMobile" />{{ userEmail }}
    </div>

    <div class="profiles">
      <div class="profile">
        <div class="name">
          {{ $root.user_1.name ? $root.user_1.name : "User_1" }}
        </div>
        <Loader v-if="loading_1" class="img-loader" />
        <div class="avatar avatar_1" v-if="!loading_1">
          <img
            :src="
              $root.user_1.avatar
                ? $root.user_1.avatar
                : require('@/assets/img/circle_blue.svg')
            "
            alt=""
          />
          <div class="tooltip tooltip_1">
            <img :src="$root.user_1.avatar || require('@/assets/img/circle_blue.svg')" alt="" />
          </div>
        </div>
      </div>

      <div class="profile">
        <div class="name">
          {{ $root.user_2.name ? $root.user_2.name : "User_2" }}
        </div>
        <Loader v-if="loading_2" class="img-loader" />

        <div class="avatar avatar_2" v-if="!loading_2">
          <img
            :src="
              $root.user_2.avatar
                ? $root.user_2.avatar
                : require('@/assets/img/cat.svg')
            "
            alt=""
          />
          <div class="tooltip tooltip_2">
            <img :src="$root.user_2.avatar || require('@/assets/img/cat.svg')" alt="" />
          </div>
        </div>
      </div>
    </div>

    <div class="switchs">
      <div class="switch switch_1">
        <div class="switch__selection-controls__input">
          <input
            type="checkbox"
            class="switch__check"
            v-model="$root.user_1.isShow"
            @click="$root.user_1.isShow = !$root.user_1.isShow"
          />
          <div
            class="switch__track"
            :class="{
              'is-actived': $root.user_1.isShow,
            }"
          ></div>
          <div
            class="switch__thumb"
            :class="{
              'is-actived': $root.user_1.isShow,
            }"
          >
            {{ $root.user_1.isShow ? "Вкл" : "Выкл" }}
          </div>
        </div>
      </div>

      <div class="switch switch_2">
        <div class="switch__selection-controls__input">
          <input
            type="checkbox"
            class="switch__check"
            v-model="$root.user_2.isShow"
            @click="$root.user_2.isShow = !$root.user_2.isShow"
          />
          <div
            class="switch__track"
            :class="{
              'is-actived': $root.user_2.isShow,
            }"
          ></div>
          <div
            class="switch__thumb"
            :class="{
              'is-actived': $root.user_2.isShow,
            }"
          >
            {{ $root.user_2.isShow ? "Вкл" : "Выкл" }}
          </div>
        </div>
      </div>
    </div>

    <div class="buttons">
      <!-- <button class="btn btn_white btn_change" @click="changeFavicon">Сменить иконку</button> -->
      <button class="btn btn_white btn_out" @click="exit">Выйти</button>
    </div>
  </div>
</template>

<script>
import Loader from "@/components/Loader";
import { mapActions } from "vuex";

export default {
  components: {
    Loader,
  },
  data() {
    return {
      date: new Date(),
      interval_1: null,
      interval_2: null,
      switch_1: true,
      switch_2: true,
      userName: { user_1: null, user_2: null },
      userEmail: "",
      isMobile: false,
      loading_1: true,
      loading_2: true,
    };
  },
  async mounted() {
    await this.start();
    this.changeFavicon();
    this.interval_1 = setInterval(() => {
      this.date = new Date();
    }, 1000);
    this.interval_2 = setInterval(() => {
      this.changeFavicon();
    }, 10000);
    if (localStorage.avatar_1) {
      this.$root.user_1.avatar = localStorage.avatar_1;
    }
    if (localStorage.avatar_2) {
      this.$root.user_2.avatar = localStorage.avatar_2;
    }
    this.userEmail = localStorage.getItem("user") || "";
    this.isMobile = window.innerWidth < 768 ? true : false;
  },
  beforeDestroy() {
    clearInterval(this.interval_1);
    clearInterval(this.interval_2);
  },
  methods: {
    ...mapActions(["fetchUserInfo", "fetchUserAvatar"]),
    async start() {
      this.userName.user_1 = await this.fetchUserInfo("user_1");
      this.userName.user_2 = await this.fetchUserInfo("user_2");
      this.$root.user_1.name =
        this.userName.user_1.filter((el) => el.id == "name")[0].name || "";
      this.$root.user_2.name =
        this.userName.user_2.filter((el) => el.id == "name")[0].name || "";
      if (!localStorage.avatar_1) {
        console.log(1);
        localStorage.avatar_1 =
          (await this.fetchUserAvatar("user_1")) || "";
        this.loading_1 = false;
      } else {
        this.loading_1 = false;
      }
      if (!localStorage.avatar_2) {
        localStorage.avatar_2 =
          (await this.fetchUserAvatar("user_2")) || "";
        this.loading_2 = false;
      } else {
        this.loading_2 = false;
      }
    },
    changeFavicon() {
      const favicon = document.getElementById("favicon");
      const href = [
        // "/favicon.ico",
        "/sweethome/orange.svg",
        "/sweethome/cherry.svg",
        "/sweethome/chock.svg",
        "/sweethome/ice.svg",
        "/sweethome/laptop.svg",
        "/sweethome/balloon.svg",
        "/sweethome/teddy.svg",
        "/sweethome/present.svg",
        "/sweethome/pie.svg",
        "/sweethome/bird.svg",
        "/sweethome/photo.svg",
        "/sweethome/home.svg",
      ];
      favicon.href = href[Math.floor(Math.random() * href.length)];
    },
    async exit() {
      await this.$store.dispatch("logout");
      this.$root.user_1.avatar = "";
      this.$root.user_2.avatar = "";
      localStorage.clear();
      this.$router.push("/login");
    },
  },
};
</script>

<style scoped>
.header {
  background: radial-gradient(
    circle,
    rgba(238, 174, 202, 1) 0%,
    rgba(148, 187, 233, 1) 100%
  );
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
@media all and (max-width: 767px) {
  .header {
    display: grid;
    grid-template-columns: 1fr;
    place-items: center;
    row-gap: 10px;
    padding: 20px 0;
  }
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
@media all and (max-width: 767px) {
  .time {
    text-align: left;
    padding: 0px;
    padding-left: 15px;
    padding-right: 15px;
    line-height: 20px;
    width: auto;
    justify-self: start;
  }
}
.buttons {
  display: flex;
  margin-right: 15px;
}
@media all and (max-width: 767px) {
  .buttons {
    margin: 0;
    margin-top: 5px;
    position: absolute;
    right: 15px;
    top: 16px;
  }
}
.btn_change {
  margin-right: 15px;
}
.btn_out {
  width: 180px;
}
@media all and (max-width: 767px) {
  .btn_out {
    width: auto;
    padding-right: 15px;
    padding-left: 15px;
  }
}
a {
  text-decoration: none;
}
.profiles {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
}
.switchs {
  display: none;
}
@media all and (max-width: 767px) {
  .switchs {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 20px;
    width: 180px;
  }
}
.switch_1,
.switch_2 {
  grid-column: span 1;
  display: flex;
}
.profile {
  display: flex;
  align-items: center;
}
.name {
  color: #0a467e;
  font-weight: bold;
  margin-right: 15px;
  width: 80px;
  text-align: right;
}
@media all and (max-width: 767px) {
  .time,
  .profiles {
    margin: 0;
  }
}
.avatar {
  width: 40px;
  height: 40px;
  overflow: hidden;
  border-radius: 50%;
  cursor: pointer;
  box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.1);
}
.avatar img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
}
.tooltip {
  position: absolute;
  bottom: -510px;
  transform: translate(-50%, 0);
  z-index: 1;
  width: 500px;
  height: 500px;
  background: linear-gradient(
    rgba(148, 187, 233, 1) 0%,
    rgba(238, 174, 202, 1) 100%
  );
  border-radius: 50%;
  overflow: hidden;
  transition: 1s ease-in-out;
}
.tooltip img {
  width: 90%;
  height: 90%;
  object-fit: cover;
  object-position: center;
  border-radius: 50%;
  overflow: hidden;
  margin-top: 5%;
}
.tooltip_1,
.tooltip_2 {
  opacity: 0;
  left: -100%;
}
.avatar_1:hover .tooltip_1,
.avatar_2:hover .tooltip_2 {
  opacity: 1;
  left: 50%;
}
@media all and (max-width: 767px) {
  .tooltip {
    width: 90%;
    height: auto;
    bottom: -310px;
  }
  .tooltip img {
    margin-bottom: 5%;
  }
}
.switch__selection-controls__input {
  display: flex;
  align-items: center;
  width: 100%;
  position: relative;
  height: 25px;
  transition: 0.3s cubic-bezier(0.25, 0.8, 0.5, 1);
}
.switch__check {
  position: absolute;
  opacity: 0;
  width: 100%;
  height: 100%;
  cursor: pointer;
  z-index: 2;
}
.switch__track {
  border-radius: 100px;
  width: 80px;
  height: 25px;
  left: 2px;
  position: absolute;
  /* opacity: 0.6; */
  right: 2px;
  top: calc(50% - 12px);
  background-color: #dadada;
  pointer-events: none;
  transition: inherit;
  box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.1);
}
.switch__thumb {
  border: 1px solid #dadada;
  border-radius: 100px;
  top: calc(50% - 12px);
  height: 25px;
  position: relative;
  width: 42px;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: 0.3s cubic-bezier(0.25, 0.8, 0.5, 1);
  background-color: #fff;
  font-size: 12px;
  color: #0a467e;
  font-weight: bold;
}
.switch__track.is-actived {
  background: rgba(148, 187, 233, 1);
}
.switch__thumb.is-actived {
  transform: translate(40px, 0);
}
.switcher-wrap {
  display: flex;
  align-items: center;
}
.img-loader {
  transform: rotate(45deg) scale(0.5);
  margin-bottom: 4px;
  width: 40px;
  left: -20px;
}
@media all and (max-width: 767px) {
  .img-loader {
    height: 40px;
    top: -20px;
  }
}
</style>

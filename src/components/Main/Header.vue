<template>
  <div class="header">
    <div class="time">{{ date | date("datetime") }}</div>

    <div class="profiles">
      <div class="profile">
        <div class="name">
          {{ $root.user_1.name ? $root.user_1.name : "Nyuta" }}
        </div>
        <div class="avatar avatar_1">
          <img
            :src="
              $root.user_1.avatar
                ? $root.user_1.avatar
                : require('@/assets/img/cat.svg')
            "
            alt=""
          />
          <div class="tooltip tooltip_1">
            <img :src="$root.user_1.avatar" alt="" />
          </div>
        </div>
      </div>

      <div class="profile">
        <div class="name">
          {{ $root.user_2.name ? $root.user_2.name : "Andrey" }}
        </div>
        <div class="avatar avatar_2">
          <img
            :src="
              $root.user_2.avatar
                ? $root.user_2.avatar
                : require('@/assets/img/circle_blue.svg')
            "
            alt=""
          />
          <div class="tooltip tooltip_2">
            <img :src="$root.user_2.avatar" alt="" />
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
// import { mapActions } from "vuex";

export default {
  data() {
    return {
      date: new Date(),
      interval_1: null,
      interval_2: null,
    };
  },
  mounted() {
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
  },
  beforeDestroy() {
    clearInterval(this.interval_1);
    clearInterval(this.interval_2);
  },
  methods: {
    // ...mapActions(["fetchUserInfo"]),
    // async start() {
    //   this.info = await this.fetchNotes();
    //   this.notesAndrey = this.notes.filter((note) => note.name == "Andrey");
    //   this.notesNyuta = this.notes.filter((note) => note.name == "Nyuta");
    //   this.notesAndrey.forEach((element) => {
    //     element.textHTML = element.text.replace(/(\r\n|\n|\r)/gm, "<br>");
    //   });
    //   this.notesNyuta.forEach((element) => {
    //     element.textHTML = element.text.replace(/(\r\n|\n|\r)/gm, "<br>");
    //   });
    //   setTimeout(() => {
    //     // ! дать насладиться лоадером
    //     this.loading = false;
    //   }, 3000);
    // },
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
      await this.$store.dispatch('logout')
      this.$root.user_1.avatar = ''
      this.$root.user_2.avatar = ''
      localStorage.clear();
      this.$router.push('/login')
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
  width: 180px;
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
.name {
  color: #0a467e;
  font-weight: bold;
  margin-right: 15px;
}
.avatar {
  width: 40px;
  height: 40px;
  overflow: hidden;
  border-radius: 50%;
  cursor: pointer;
}
.avatar img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
}
.tooltip {
  position: absolute;
  /* left: 50%; */
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
  left: -25%;
}
.avatar_1:hover .tooltip_1,
.avatar_2:hover .tooltip_2 {
  opacity: 1;
  left: 50%;
}
</style>

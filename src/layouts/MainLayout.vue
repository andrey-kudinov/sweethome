<template>
  <div class="main">
    <Header class="header" />

    <main class="content">
      <Sidebar
        class="sidebar"
        :class="{ 'sidebar-hide': isFull }"
        :isFull="isFull"
        @expand="expand"
      />
      <div class="page" :class="{ 'page-full': isFull }">
        <transition name="fade" mode="out-in">
          <router-view />
        </transition>
      </div>
    </main>

    <Footer class="footer" />
  </div>
</template>

<script>
import Header from "@/components/Main/Header";
import Sidebar from "@/components/Main/Sidebar";
import Footer from "@/components/Main/Footer";

export default {
  name: "main-layout",
  components: {
    Header,
    Sidebar,
    Footer,
  },
  data() {
    return {
      isFull: false,
    };
  },
  methods: {
    expand() {
      this.isFull = !this.isFull;
    },
  },
};
</script>

<style scoped>
.main {
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-auto-rows: auto 1fr auto;
  grid-template-areas:
    "hd hd hd hd hd hd hd hd hd hd hd hd"
    "main main main main main main main main main main main main"
    /* "sd sd sd sd main main main main main main main main" */
    "ft ft ft ft ft ft ft ft ft ft ft ft";
  min-height: 100vh;
  overflow: hidden;
}
.header {
  grid-area: hd;
  height: 100px;
}
@media all and (max-width: 767px) {
  .header {
    height: auto;
  }
}
.footer {
  grid-area: ft;
  height: 100px;
}
.content {
  grid-area: main;
  display: flex;
}
@media all and (max-width: 767px) {
  .content {
    flex-direction: column;
  }
}
.sidebar {
  grid-area: sd;
  width: 25%;
  transition: 0.3s;
}
@media all and (max-width: 767px) {
  .sidebar {
    width: 100%;
    transition: 0.7s ease;
  }
}
.sidebar-hide {
  width: 0;
}
@media all and (max-width: 767px) {
  .sidebar-hide {
    border-radius: 10px;
    padding: 8px 31px 25px 25px;
    margin-top: 10px;
    /* background: #fff; */
  }
}
.page {
  width: 75%;
  display: grid;
  place-items: center;
  transition: 0.3s;
}
@media (max-width: 767px) {
  .page {
    width: 100%;
  }
}
.page-full {
  width: 100%;
}

@media (max-width: 767px) {
  .main {
    grid-template-areas:
      "hd hd hd hd hd hd hd hd hd hd hd hd"
      /* "sd sd sd sd sd sd sd sd sd sd sd sd" */
      "main main main main main main main main main main main main"
      "ft ft ft ft ft ft ft ft ft ft ft ft";
  }
}
</style>

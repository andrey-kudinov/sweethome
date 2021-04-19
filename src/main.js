import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "/src/assets/styles/styles.css";
import Vuetify from "vuetify";
import "vuetify/dist/vuetify.min.css";

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  Vuetify,
  render: (h) => h(App),
}).$mount("#app");

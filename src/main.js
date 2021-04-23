import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "/src/assets/styles/styles.css";
import Vuetify from "vuetify";
import "vuetify/dist/vuetify.min.css";
import dateFilter from '@/filters/date.filter'
import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";

Vue.config.productionTip = false;

Vue.filter('date', dateFilter)


const firebaseConfig = {
  apiKey: "AIzaSyBNnu_cP9p67yVXRatnH3WUC0nmfdOCjbY",
  authDomain: "sweethome-km12.firebaseapp.com",
  databaseURL: "https://sweethome-km12-default-rtdb.firebaseio.com",
  projectId: "sweethome-km12",
  storageBucket: "sweethome-km12.appspot.com",
  messagingSenderId: "562209642420",
  appId: "1:562209642420:web:d598a900cdebf6cacd04e1",
  measurementId: "G-82HRYSQ442",
};

firebase.initializeApp(firebaseConfig);

let app;

firebase.auth().onAuthStateChanged(() => {
  if (!app) {
    app = new Vue({
      router,
      store,
      Vuetify,
      render: (h) => h(App),
    }).$mount("#app");
  }
});

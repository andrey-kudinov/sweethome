<template>
  <div class="">
    <link
      href="https://cdn.jsdelivr.net/npm/animate.css@3.5.1"
      rel="stylesheet"
      type="text/css"
    />
    <transition
      name="custom-classes-transition"
      enter-active-class="animated tada"
      leave-active-class="animated bounceOutRight"
    >
      <section class="form" v-if="!isReg">
        <input type="email" class="email" v-model="email" />
        <input type="text" class="password" v-model="password" />
        <button class="btn btn_ligth-blue submit" @click="auth">Войти</button>
        <button class="btn btn_white submit" @click="isReg = !isReg">
          Перейти к регистрации
        </button>
      </section>
    </transition>
    <transition
      name="custom-classes-transition"
      enter-active-class="animated tada"
      leave-active-class="animated bounceOutRight"
    >
      <section class="form" v-if="isReg">
        <input type="email" class="email" v-model="regEmail"/>
        <input type="text" class="password" v-model="regPassword"/>
        <button class="btn btn_ligth-blue submit" @click="reg">Создать</button>
        <button class="btn btn_white submit" @click="isReg = !isReg">
          Назад
        </button>
      </section>
    </transition>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "Login",
  data() {
    return {
      isReg: false,
      email: "",
      password: "",
      regEmail: "",
      regPassword: "",
    };
  },
  methods: {
    ...mapActions(["logIn", "register"]),
    async auth() {
      const formData = {
        email: this.email,
        password: this.password,
      };
      try {
        await this.logIn(formData);
        this.$router.push("/");
      } catch (e) {
        console.log("auth e -", e);
      }
    },
    async reg() {
      const formData = {
        email: this.regEmail,
        password: this.regPassword,
      };
      try {
        await this.register(formData);
        this.$router.push("/");
      } catch (e) {console.log("reg e -", e);}
    },
  },
};
</script>

<style scoped>
.form {
  width: 500px;
  background-color: #fff;
  padding: 30px;
  display: grid;
  gap: 15px;
  border-radius: 5px;
  margin-bottom: 50px;
}
.form > * {
  grid-row: span 1;
}
input {
  border: 1px solid #dadada;
  box-sizing: border-box;
  border-radius: 3px;
  width: 70%;
  height: 45px;
  padding-left: 15px;
  font-family: "Source Sans Pro";
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 22px;
  color: #56565a;
  background: #fff;
}
</style>

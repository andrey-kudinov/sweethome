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
      <section class="form" v-if="!register">
        <input type="email" class="email" />
        <input type="text" class="password" />
        <button class="btn btn_ligth-blue submit" @click="toHome">Войти</button>
        <button class="btn btn_white submit" @click="register = !register">
          Зарегистрироваться
        </button>
      </section>
    </transition>
    <transition
      name="custom-classes-transition"
      enter-active-class="animated tada"
      leave-active-class="animated bounceOutRight"
    >
      <section class="form" v-if="register">
        <input type="email" class="email" />
        <input type="text" class="password" />
        <button class="btn btn_ligth-blue submit">Создать</button>
        <button class="btn btn_white submit" @click="register = !register">
          Назад
        </button>
      </section>
    </transition>
  </div>
</template>

<script>
export default {
  name: "Login",
  data() {
    return {
      register: false,
    };
  },
  methods: {
    toHome() {
      this.$router.push("/");
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

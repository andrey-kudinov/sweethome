<template>
  <div class="login">
    <div class="btn btn_white btn_test" @click="loginTestUser">
      Войти за тестового пользователя
    </div>
    <link
      href="https://cdn.jsdelivr.net/npm/animate.css@3.5.1"
      rel="stylesheet"
      type="text/css"
    />
    <Toast :toast="toast" :class="{ showToast: toast.toast }" />
    <transition
      name="custom-classes-transition"
      enter-active-class="animated tada"
      leave-active-class="animated bounceOutRight"
    >
      <form class="form" v-if="!isReg" :class="{ 'check-false': shake }">
        <div class="loader-wrap" v-if="loading"><Loader v-if="loading" /></div>
        <div class="input-wrap">
          <input
            type="email"
            class="email"
            v-model="email"
            placeholder="электронная почта"
            @blur="checkEmail"
            autocomplete="email"
            name="email" id="email"
          />
          <hr class="hr" hr-false :class="{ 'hr-false': !isEmail }" />
        </div>
        <span class="email-false" :class="{ 'text-false': !isEmail }"
          >Введите валидную электронную почту</span
        >
        <div class="input-wrap">
          <input
            type="password"
            class="password"
            v-model="password"
            placeholder="пароль"
            @blur="checkPassword"
            autocomplete="current-password"
            name="password" id="password"
          />
          <hr class="hr" hr-false :class="{ 'hr-false': !isPassword }" />
          <div class="img">
            <img
              :src="require('@/assets/img/key.svg')"
              alt=""
              @mouseover="mouseoverPass"
              @mouseleave="mouseoutPass"
            />
          </div>
        </div>
        <span class="email-false" :class="{ 'text-false': !isPassword }"
          >Введите пароль (минимум 8 символов)</span
        >
        <button class="btn btn_ligth-blue submit" @click.prevent="auth" type="submit">
          Войти
        </button>
        <button class="btn btn_white submit" @click="isReg = !isReg">
          Перейти к регистрации
        </button>
      </form>
    </transition>
    <transition
      name="custom-classes-transition"
      enter-active-class="animated tada"
      leave-active-class="animated bounceOutRight"
    >
      <section class="form" v-if="isReg">
        <div class="input-wrap">
          <input
            type="email"
            class="email"
            v-model="regEmail"
            placeholder="электронная почта"
            @blur="checkRegEmail"
          />
          <hr class="hr" hr-false :class="{ 'hr-false': !isRegEmail }" />
        </div>
        <span class="email-false" :class="{ 'text-false': !isRegEmail }"
          >Введите валидную электронную почту</span
        >
        <div class="input-wrap">
          <input
            type="password"
            class="password"
            v-model="regPassword"
            placeholder="пароль"
            @blur="checkRegPassword"
          />
          <hr class="hr" hr-false :class="{ 'hr-false': !isRegPassword }" />
          <div class="img">
            <img
              :src="require('@/assets/img/key.svg')"
              alt=""
              @mouseover="mouseoverPass"
              @mouseleave="mouseoutPass"
            />
          </div>
        </div>
        <span class="email-false" :class="{ 'text-false': !isRegPassword }"
          >Введите пароль (минимум 8 символов)</span
        >
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
import Toast from "@/components/Toast";
import Loader from "@/components/Loader";

export default {
  name: "Login",
  components: {
    Toast,
    Loader,
  },
  data() {
    return {
      isReg: false,
      email: "",
      password: "",
      regEmail: "",
      regPassword: "",
      isEmail: true,
      isPassword: true,
      isRegEmail: true,
      isRegPassword: true,
      shake: false,
      toast: {
        toast: false,
      },
      loading: false,
    };
  },
  methods: {
    ...mapActions(["logIn", "register"]),
    checkEmail() {
      // * валидация email
      if (!this.email.length) {
        this.isEmail = true;
        return;
      }
      this.isEmail =
        this.email.length > 7 &&
        this.email.match(
          /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
        )
          ? true
          : false;
    },
    checkPassword() {
      // * валидация password
      if (!this.password.length) {
        this.isPassword = true;
        return;
      }
      this.isPassword = this.password.length > 7 ? true : false;
    },
    async auth() {
      if (!this.email.length || !this.isEmail) {
        this.isEmail = false;
        this.shake = true;
        setTimeout(() => {
          this.shake = false;
        }, 1000);
        setTimeout(() => {
          this.isEmail = true;
        }, 3000);
      }
      if (!this.password.length || !this.isPassword) {
        this.isPassword = false;
        this.shake = true;
        setTimeout(() => {
          this.shake = false;
        }, 1000);
        setTimeout(() => {
          this.isPassword = true;
        }, 3000);
        return;
      }
      this.checkEmail();
      this.checkPassword();
      // * аутентификация
      if (this.isEmail && this.isEmail) {
        const formData = {
          email: this.email,
          password: this.password,
        };
        try {
          this.loading = true;
          await this.logIn(formData);
          sessionStorage.setItem("email", this.email);
          this.$router.push("/");
        } catch (e) {
          this.loading = false;
          this.toast.toast = true;
          this.toast.text = e.code;
          setTimeout(() => {
            this.toast.toast = false;
          }, 5000);
          console.log("auth e -", e);
        }
      } else {
        this.shake = true;
        setTimeout(() => {
          this.shake = false;
        }, 1000);
      }
    },
    checkRegEmail() {
      // * валидация regEmail
      if (!this.regEmail.length) {
        this.isRegEmail = true;
        return;
      }
      this.isRegEmail =
        this.regEmail.length > 5 &&
        this.regEmail.match(
          /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
        )
          ? true
          : false;
    },
    checkRegPassword() {
      // * валидация regPassword
      if (!this.regPassword.length) {
        this.isRegPassword = true;
        return;
      }
      this.isRegPassword = this.regPassword.length > 7 ? true : false;
    },
    async reg() {
      if (!this.regEmail.length || !this.isRegEmail) {
        this.isRegEmail = false;
        this.shake = true;
        setTimeout(() => {
          this.shake = false;
        }, 1000);
        setTimeout(() => {
          this.isRegEmail = true;
        }, 3000);
      }
      if (!this.regPassword.length || !this.isRegPassword) {
        this.isRegPassword = false;
        this.shake = true;
        setTimeout(() => {
          this.shake = false;
        }, 1000);
        setTimeout(() => {
          this.isRegPassword = true;
        }, 3000);
        return;
      }
      this.checkRegEmail();
      this.checkRegPassword();
      // * регистрация
      const formData = {
        email: this.regEmail,
        password: this.regPassword,
      };
      try {
        this.loading = true;
        await this.register(formData);
        sessionStorage.setItem("email", this.regEmail);
        this.$router.push("/");
      } catch (e) {
        this.loading = false;
        this.toast.toast = true;
        this.toast.text = e.code;
        setTimeout(() => {
          this.toast.toast = false;
        }, 5000);
        console.log("reg e -", e);
      }
    },
    mouseoverPass() {
      document.querySelector(".password").type = "text";
    },
    mouseoutPass() {
      document.querySelector(".password").type = "password";
    },
    async loginTestUser() {
      let email = "9277949997@bk.ru";
      let password = "test1234";
      const formData = {
        email: email,
        password: password,
      };
      try {
        this.loading = true;
        await this.logIn(formData);
        sessionStorage.setItem("email", email);
        this.$router.push("/");
      } catch (e) {
        this.toast.toast = true;
        this.toast.text = e.code;
        setTimeout(() => {
          this.toast.toast = false;
        }, 5000);
        console.log("auth e -", e);
      }
    },
  },
};
</script>

<style scoped>
.showToast {
  right: 30px;
  top: 30px;
}
.login {
  position: relative;
}
@media (max-width: 768px) {
  .login {
    position: static;
  }
}
.form {
  width: 500px;
  background-color: #fff;
  padding: 30px;
  display: grid;
  gap: 8px;
  border-radius: 5px;
  box-shadow: 0 2.8px 2.2px rgba(0, 0, 0, 0.02),
    0 6.7px 5.3px rgba(0, 0, 0, 0.028), 0 12.5px 10px rgba(0, 0, 0, 0.035),
    0 22.3px 17.9px rgba(0, 0, 0, 0.042), 0 41.8px 33.4px rgba(0, 0, 0, 0.05),
    0 100px 80px rgba(0, 0, 0, 0.07);
}
.form > * {
  grid-row: span 1;
}
input {
  border-bottom: 1px solid #dadada;
  box-sizing: border-box;
  /* border-radius: 3px; */
  width: 100%;
  height: 35px;
  padding-left: 15px;
  font-family: "Source Sans Pro";
  font-style: normal;
  font-weight: normal;
  font-size: 20px;
  line-height: 22px;
  color: #56565a;
  background: #fff;
  position: relative;
}
.hr {
  color: red;
  height: 2px;
  border-width: 0;
  background: red;
  position: absolute;
  left: 51%;
  right: 51%;
  transition: 0.4s;
  bottom: 0;
}
.hr-false {
  left: 0;
  right: 0;
}
input::placeholder {
  color: #8f8f8f;
}
.input-wrap {
  position: relative;
  display: flex;
  justify-content: start;
  width: 70%;
}
.img {
  position: absolute;
  right: 6px;
  bottom: 10px;
  height: 20px;
  width: 20px;
  cursor: pointer;
}
.img img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
}
.password::-ms-reveal {
  background: #c00;
  color: #fff;
  text-shadow: 1px 1px 1px rgba(127, 127, 127, 0.3);
  letter-spacing: 12px;
}
span {
  text-align: left;
  font-size: 16px;
  line-height: 18px;
  color: red;
  opacity: 0;
  transition: 0.3s ease;
}
.text-false {
  opacity: 1;
}
@media (max-width: 768px) {
  .form {
    width: 90vw;
  }
  span {
    font-size: 12px;
    line-height: 14px;
  }
  .input-wrap {
    width: 100%;
  }
}
.check-false {
  animation: shake 0.82s cubic-bezier(0.36, 0.07, 0.19, 0.97) both;
}
@keyframes shake {
  10%,
  90% {
    transform: translate3d(-1px, 0, 0);
  }

  20%,
  80% {
    transform: translate3d(2px, 0, 0);
  }

  30%,
  50%,
  70% {
    transform: translate3d(-4px, 0, 0);
  }

  40%,
  60% {
    transform: translate3d(4px, 0, 0);
  }
}
.btn_test {
  position: absolute;
  left: 50%;
  bottom: -50%;
  transform: translate(-50%, 0%);
  padding: 0 20px;
  width: auto;
  white-space: nowrap;
  cursor: pointer;
}
@media (max-width: 768px) {
  .btn_test {
    right: 0;
    bottom: 0;
    margin-right: 5vw;
    margin-bottom: 20vw;
    transform: translate(0, 0%);
    height: auto;
    padding: 10px 20px;
    white-space: normal;
  }
}
.loader-wrap {
  position: absolute;
  left: calc(50% + 125px);
  top: 50%;
  transform: translate(0, -50%);
}
@media (max-width: 768px) {
  .loader-wrap {
    left: 50%;
    top: 10%;
    transform: translate(-50%, -25%);
  }
}
</style>

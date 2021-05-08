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
      <section class="form" v-if="!isReg" :class="{ 'check-false': shake }">
        <div class="input-wrap">
          <input
            type="email"
            class="email"
            v-model="email"
            placeholder="электронная почта"
            @blur="checkEmail"
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

export default {
  name: "Login",
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
          await this.logIn(formData);
          localStorage.email = this.regEmail;
          this.$router.push("/");
        } catch (e) {
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
        await this.register(formData);
        localStorage.email = this.regEmail;
        this.$router.push("/");
      } catch (e) {
        console.log("reg e -", e);
      }
    },
    mouseoverPass() {
      document.querySelector(".password").type = "text";
    },
    mouseoutPass() {
      document.querySelector(".password").type = "password";
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
  gap: 8px;
  border-radius: 5px;
  margin-bottom: 50px;
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
</style>

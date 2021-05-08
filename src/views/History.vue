<template>
  <div class="home">
    <transition name="fade">
      <div class="overlay" v-if="toast.toast"></div>
    </transition>
    <Toast :toast="toast" />
    <link
      href="https://cdn.jsdelivr.net/npm/animate.css@3.5.1"
      rel="stylesheet"
      type="text/css"
    />
    <transition name="fade">
      <div class="cards cards_first" v-if="$root.user_2.isShow">
        <Loader v-if="loading" />
        <div
          class="card card_first"
          v-for="(note, i) in notesAndrey"
          :key="i"
          :class="{ mh0: !note.enable, op1: !loading }"
        >
          <transition
            name="custom-classes-transition"
            enter-active-class="animated fadeInDown"
            leave-active-class="animated fadeOutDown"
            mode="out-in"
          >
            <div class="del-overlay" v-if="delOverlay && edit_1 == i"></div>
          </transition>
          <transition name="fade">
            <div class="card__wrap" v-if="note.enable">
              <div class="pen" @click="toEdit_1(i)">
                <img :src="require('@/assets/img/pencil.svg')" alt="" />
              </div>
              <transition
                name="custom-classes-transition"
                enter-active-class="animated bounceInRight"
                leave-active-class="animated bounceOutLeft"
              >
                <div class="delete" v-if="edit_1 == i" @click="del(note.id)">
                  <img :src="require('@/assets/img/delete.svg')" alt="" />
                </div>
              </transition>
              <div class="desc">
                <div class="smile">
                  <img
                    :src="
                      $root.user_1.avatar ||
                        require('@/assets/img/circle_blue.svg')
                    "
                    alt=""
                  />
                </div>
              </div>
              <div class="date">{{ note.date }}</div>
              <transition
                name="custom-classes-transition"
                enter-active-class="animated bounceInRight"
                leave-active-class="animated bounceOutLeft"
              >
                <div
                  class="text"
                  v-html="note.textHTML"
                  v-if="edit_1 != i"
                ></div>
              </transition>

              <transition
                name="custom-classes-transition"
                enter-active-class="animated bounceInRight"
                leave-active-class="animated bounceOutRight"
              >
                <textarea
                  name=""
                  id=""
                  class="textarea"
                  v-text="note.text"
                  v-if="edit_1 == i"
                  v-model="note.text"
                ></textarea>
              </transition>

              <transition
                name="custom-classes-transition"
                enter-active-class="animated bounceInLeft"
                leave-active-class="animated bounceOutLeft"
              >
                <button
                  v-if="edit_1 == i"
                  class="btn btn_white btn_add"
                  @click="update(note.id, note.text)"
                >
                  {{ !btnLoading ? "Сохранить" : "" }}
                  <Loader
                    v-if="btnLoading"
                    :class="{ 'btn-loader': btnLoading }"
                  />
                </button>
              </transition>
            </div>
          </transition>
        </div>
      </div>
    </transition>

    <transition name="fade">
      <div class="cards cards_second" v-if="$root.user_1.isShow">
        <Loader v-if="loading" />
        <div
          class="card card_second"
          v-for="(note, i) in notesNyuta"
          :key="i"
          :class="{ mh0: !note.enable, op1: !loading }"
        >
          <transition
            name="custom-classes-transition"
            enter-active-class="animated fadeInDown"
            leave-active-class="animated fadeOutDown"
            mode="out-in"
          >
            <div class="del-overlay" v-if="delOverlay && edit_2 == i"></div>
          </transition>
          <transition name="fade">
            <div class="card__wrap" v-if="note.enable">
              <div class="pen" @click="toEdit_2(i)">
                <img :src="require('@/assets/img/pencil.svg')" alt="" />
              </div>
              <transition
                name="custom-classes-transition"
                enter-active-class="animated bounceInRight"
                leave-active-class="animated bounceOutLeft"
              >
                <div class="delete" v-if="edit_2 == i" @click="del(note.id)">
                  <img :src="require('@/assets/img/delete.svg')" alt="" />
                </div>
              </transition>
              <div class="desc">
                <div class="smile">
                  <img
                    :src="
                      $root.user_2.avatar || require('@/assets/img/cat.svg')
                    "
                    alt=""
                  />
                </div>
              </div>
              <div class="date text-rose">{{ note.date }}</div>
              <transition
                name="custom-classes-transition"
                enter-active-class="animated bounceInRight"
                leave-active-class="animated bounceOutLeft"
              >
                <div
                  class="text text-rose"
                  v-html="note.textHTML"
                  v-if="edit_2 != i"
                ></div>
              </transition>

              <transition
                name="custom-classes-transition"
                enter-active-class="animated bounceInRight"
                leave-active-class="animated bounceOutRight"
              >
                <textarea
                  name=""
                  id=""
                  class="textarea"
                  v-text="note.text"
                  v-if="edit_2 == i"
                  v-model="note.text"
                ></textarea>
              </transition>

              <transition
                name="custom-classes-transition"
                enter-active-class="animated bounceInLeft"
                leave-active-class="animated bounceOutLeft"
              >
                <button
                  v-if="edit_2 == i"
                  class="btn btn_white btn_add"
                  @click="update(note.id, note.text)"
                >
                  Сохранить
                </button>
              </transition>
            </div>
          </transition>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import Toast from "@/components/Toast";
import Loader from "@/components/Loader";

export default {
  components: {
    Toast,
    Loader,
  },
  data() {
    return {
      notes: [],
      notesAndrey: [],
      notesNyuta: [],
      edit_1: null,
      edit_2: null,
      text: "",
      toast: {
        toast: false,
      },
      loading: true,
      btnLoading: false,
      delOverlay: false,
    };
  },
  mounted() {
    this.start();
  },
  methods: {
    ...mapActions(["fetchNotes", "updateNote", "disableNote"]),
    async start() {
      this.notes = await this.fetchNotes();
      this.notesAndrey = this.notes.filter((note) => note.name == "Andrey").reverse();
      this.notesNyuta = this.notes.filter((note) => note.name == "Nyuta").reverse();
      this.notesAndrey.forEach((element) => {
        element.textHTML = element.text.replace(/(\r\n|\n|\r)/gm, "<br>");
      });
      this.notesNyuta.forEach((element) => {
        element.textHTML = element.text.replace(/(\r\n|\n|\r)/gm, "<br>");
      });
      setTimeout(() => {
        // ! дать насладиться лоадером
        this.loading = false;
      }, 1000);
    },
    toEdit_1(i) {
      if (this.edit_1 == i) {
        this.edit_1 = null;
        return;
      }
      this.edit_1 = i;
    },
    toEdit_2(i) {
      if (this.edit_2 == i) {
        this.edit_2 = null;
        return;
      }
      this.edit_2 = i;
    },
    async update(userId, userText) {
      try {
        const noteData = {
          id: userId,
          text: userText,
        };
        this.btnLoading = true;
        setTimeout(async () => {
          // ! дать насладиться лоадером в кнопке
          await this.updateNote(noteData);
          this.start();
          this.edit_1 = null;
          this.edit_2 = null;
          this.toast.toast = true;
          setTimeout(() => {
            // ! убрать тост через 2 секунды
            this.toast.toast = false;
            this.btnLoading = false;
          }, 2000);
        }, 1000);
      } catch (e) {
        console.log("updateNote e -", e);
      }
    },
    async del(userId, userEnable = false) {
      this.delOverlay = true;
      try {
        const noteData = {
          id: userId,
          enable: userEnable,
        };
        await this.disableNote(noteData);
        this.$root.user_1.counter = 0;
        this.$root.user_2.counter = 0;
        this.start();
        setTimeout(() => {
          this.delOverlay = false;
        }, 3000);
      } catch (e) {
        console.log("updateNote e -", e);
      }
    },
  },
};
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 1.5s;
}
.home {
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: 1fr minmax(350px, 1fr) minmax(350px, 1fr) 1fr;
  grid-template-rows: auto;
  column-gap: 40px;
  row-gap: 20px;
  padding: 40px 0;
  position: relative;
}
@media all and (max-width: 768px) {
  .home {
    /* min-height: 100vh; */
    padding: 20px 0;
  }
}
@media all and (max-width: 768px) {
  .home {
    grid-template-columns: 1fr;
    place-items: center;
  }
}
.overlay {
  background: #fff;
  position: absolute;
  box-sizing: content-box;
  z-index: 10;
  opacity: 0.3;
  transition: 0.5s ease-in-out;
  width: 100vw;
  height: 100%;
  display: block;
}
.del-overlay {
  background: rgba(255, 255, 255, 0.425);
  position: absolute;
  top: 0;
  left: 0;
  box-sizing: content-box;
  z-index: 10;
  width: 100%;
  height: 100%;
  display: block;
}
.cards {
  display: flex;
  flex-direction: column;
}
.cards_first {
  grid-column: 2/3;
}
.cards_second {
  grid-column: 3/4;
}
@media all and (max-width: 768px) {
  .cards_first {
    grid-column: span 1;
  }
  .cards_second {
    grid-column: span 1;
  }
}
.card {
  width: 350px;
  max-height: 350px;
  display: flex;
  flex-direction: column;
  padding: 15px;
  padding-bottom: 0;
  margin-bottom: 20px;
  background: linear-gradient(to right, #8ca6db, #b993d6);
  border-radius: 15px;
  overflow: hidden;
  position: relative;
  transition: 0.5s ease-in;
  opacity: 0;
}
@media all and (max-width: 768px) {
  .card {
    width: 80vw;
    padding: 10px;
  }
}
.pen {
  width: 25px;
  height: 25px;
  position: absolute;
  right: -5px;
  cursor: pointer;
  transition: 0.3s ease-in;
  opacity: 0;
}
.delete {
  width: 30px;
  height: 30px;
  left: 20px;
  top: 20px;
  position: absolute;
  cursor: pointer;
}
.pen img,
.delete img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
}
.card:hover .pen {
  right: 25px;
  opacity: 1;
}
.desc {
  display: flex;
}
.smile {
  width: 40px;
  height: 40px;
  margin: 0 auto;
  margin-bottom: 10px;
}
.smile img {
  object-fit: cover;
  object-position: center;
  width: 100%;
  height: 100%;
  border-radius: 50%;
}
.date {
  color: #0a467e;
  font-weight: bold;
  margin-bottom: 10px;
}
.text {
  color: #0a467e;
  font-weight: bold;
  margin-bottom: 10px;
  text-align: left;
  padding: 0 10px;
}
.text-rose {
  color: #7e0a7b;
}
.textarea {
  width: 100%;
  height: 100px;
  resize: none;
  margin-bottom: 15px;
  background-color: #fff;
  padding: 10px;
  border-radius: 5px;
}
.btn_add {
  width: 100%;
  margin-bottom: 15px;
}
.mh0 {
  padding: 0;
  margin: 0;
  max-height: 0;
  box-shadow: none;
  transition: 0.3s ease-out;
}
.op1 {
  opacity: 1;
}
.btn-loader {
  transform: rotate(45deg) scale(0.5);
  margin-bottom: 4px;
}
</style>

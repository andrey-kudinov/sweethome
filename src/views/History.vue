<template>
  <div class="home">
    <link
      href="https://cdn.jsdelivr.net/npm/animate.css@3.5.1"
      rel="stylesheet"
      type="text/css"
    />
    <div class="cards cards_first">
      <div class="card card_first" v-for="(note, i) in notesAndrey" :key="i">
        <div class="desc">
          <div class="smile">
            <img :src="require('@/assets/img/circle_blue.svg')" alt="" />
          </div>
        </div>
        <div class="date">{{ note.date }}</div>
        <transition
          name="custom-classes-transition"
          enter-active-class="animated tada"
          leave-active-class="animated bounceOutLeft"
        >
          <div class="text" v-html="note.textHTML" v-if="edit != i"></div>
        </transition>

        <transition
          name="custom-classes-transition"
          enter-active-class="animated tada"
          leave-active-class="animated bounceInRight"
        >
          <textarea
            name=""
            id=""
            class="textarea"
            v-text="note.text"
            v-if="edit == i"
            v-model="note.text"
          ></textarea>
        </transition>

        <transition
          name="custom-classes-transition"
          enter-active-class="animated tada"
          leave-active-class="animated bounceOutRight"
        >
          <button
            class="btn btn_white btn_add"
            v-if="edit != i"
            @click="toEdit(i)"
          >
            Редактировать
          </button>
        </transition>
        <transition
          name="custom-classes-transition"
          enter-active-class="animated tada"
          leave-active-class="animated bounceInLeft"
        >
          <button
            v-if="edit == i"
            class="btn btn_white btn_add"
            @click="edit = -1"
          >
            Сохранить
          </button>
        </transition>
      </div>
    </div>

    <div class="cards cards_second">
      <div class="card card_second" v-for="(card, i) in 2" :key="i">
        <div class="desc">
          <div class="smile">
            <img :src="require('@/assets/img/cat.svg')" alt="" />
          </div>
        </div>
        <textarea name="" id="" class="textarea"></textarea>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  data() {
    return {
      notes: [],
      notesAndrey: [],
      notesNyuta: [],
      edit: null,
    };
  },
  async mounted() {
    this.notes = await this.fetchNotes();
    this.notesAndrey = this.notes.filter((note) => note.name == "Andrey");
    this.notesNyuta = this.notes.filter((note) => note.name == "Nyuta");
    this.notesAndrey.forEach((element) => {
      element.textHTML = element.text.replace(/(\r\n|\n|\r)/gm, "<br>");
    });
  },
  methods: {
    ...mapActions(["fetchNotes"]),
    toEdit(i) {
      this.edit = i
    }
  },
};
</script>

<style scoped>
.home {
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: auto;
  column-gap: 40px;
  row-gap: 20px;
  padding: 40px 0;
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
.card {
  width: 350px;
  max-height: 350px;
  display: flex;
  flex-direction: column;
  padding: 15px;
  padding-bottom: 0;
  margin-bottom: 20px;
  background: #b993d6; /* fallback for old browsers */
  background: -webkit-linear-gradient(
    to right,
    #8ca6db,
    #b993d6
  ); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(
    to right,
    #8ca6db,
    #b993d6
  ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  border-radius: 15px;
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
</style>

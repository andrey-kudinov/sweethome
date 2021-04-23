<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <div class="cards cards_first">
      <div class="card card_first" v-for="(card, i) in 1" :key="i">
        <div class="desc">
          <div class="smile">
            <img :src="require('@/assets/img/circle_blue.svg')" alt="" />
          </div>
        </div>
        <textarea name="" id="" cols="30" rows="10" class="textarea" v-model="text_1"></textarea>
        <button class="btn btn_white btn_add" v-if="isAdd" @click="add(name_1, text_1)">
          Добавить
        </button>
        <button class="btn btn_white btn_add" v-else>Редактировать</button>
      </div>
    </div>
    <div class="cards cards_second">
      <div class="card card_second" v-for="(card, i) in 1" :key="i">
        <div class="desc">
          <div class="smile">
            <img :src="require('@/assets/img/cat.svg')" alt="" />
          </div>
        </div>
        <textarea name="" id="" class="textarea" v-model="text_2"></textarea>
        <button class="btn btn_white btn_add" v-if="isAdd" @click="add(name_2, text_2)">Добавить</button>
        <button class="btn btn_white btn_add" v-else>Редактировать</button>
      </div>
    </div>
  </div>
</template>

<script>
// import HelloWorld from '@/components/HelloWorld.vue'
import dateFilter from "@/filters/date.filter";
import { mapActions } from "vuex";

export default {
  name: "Home",
  data() {
    return {
      isAdd: true,
      name_1: "Andrey",
      name_2: "Nyuta",
      text_1: "",
      text_2: "",
      date: new Date(),
    };
  },
  methods: {
    ...mapActions(["createNote"]),
    async add(userName, userText) {
      try {
        const note = await this.createNote({
          name: userName,
          text: userText,
          date: dateFilter(this.date, "date"),
        });
        console.log("note -", note);
      } catch (e) {
        console.log('add e -', e);
      }
    },
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
}
</style>

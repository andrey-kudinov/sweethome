<template>
  <div class="stats">
    <div class="bar_1"><div class="bar_1-line"></div></div>
    <div class="counter">
      {{ Math.round(($root.user_1.counter / $root.user_1.goal) * 100) }}% ({{
        $root.user_1.counter
      }}
      из {{ $root.user_1.goal }})
    </div>
    <div class="bar_2"><div class="bar_2-line"></div></div>
    <div class="counter">
      {{ Math.round(($root.user_2.counter / $root.user_2.goal) * 100) }}% ({{
        $root.user_2.counter
      }}
      из {{ $root.user_2.goal }})
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  mounted() {
    this.start();
    this.bar();
  },
  methods: {
    ...mapActions(["fetchNotes"]),
    async start() {
      this.notes = await this.fetchNotes();
      this.notesAndrey = this.notes.filter((note) => note.name == "Andrey");
      this.notesNyuta = this.notes.filter((note) => note.name == "Nyuta");
      this.notesAndrey.forEach((element) => {
        element.textHTML = element.text.replace(/(\r\n|\n|\r)/gm, "<br>");
      });
      this.notesNyuta.forEach((element) => {
        element.textHTML = element.text.replace(/(\r\n|\n|\r)/gm, "<br>");
      });
      // ! подсчет дел
      this.$root.user_1.counter = this.notesAndrey.filter(
        (note) => note.enable
      ).length;
      this.notesAndrey
        .filter((note) => note.enable)
        .forEach((element) => {
          if (!element.textHTML.match("<br>")) return;
          this.$root.user_1.counter += element.textHTML.match(/<br>/g).length;
        });
      this.$root.user_2.counter = this.notesNyuta.filter(
        (note) => note.enable
      ).length;
      this.notesNyuta
        .filter((note) => note.enable)
        .forEach((element) => {
          if (!element.textHTML.match("<br>")) return;
          this.$root.user_2.counter += element.textHTML.match(/<br>/g).length;
        });
    },
    bar() {
      document.querySelector(".bar_1-line").style.width = `${Math.round(
        (this.$root.user_1.counter / this.$root.user_1.goal) * 100
      )}%`;
      document.querySelector(".bar_2-line").style.width = `${Math.round(
        (this.$root.user_2.counter / this.$root.user_2.goal) * 100
      )}%`;
    },
  },
};
</script>

<style scoped>
.stats {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 500px;
  font-family: "Source Sans Pro";
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 20px;
  color: #0a467e;
  padding: 80px 0;
  height: 100%;
}
@media all and (max-width: 768px) {
  .stats {
    padding: 0;
    padding-top: 20px;
    width: 90%;
  }
}
.bar_1,
.bar_2 {
  height: 20px;
  width: 100%;
  background: #dadada;
  position: relative;
  border-radius: 10px;
  margin-bottom: 10px;
  overflow: hidden;
}
.bar_1-line,
.bar_2-line {
  height: 20px;
  width: 0%;
  left: 0;
  right: 0;
  background: radial-gradient(
    circle,
    rgba(238, 174, 202, 1) 0%,
    rgba(148, 187, 233, 1) 100%
  );
  position: absolute;
  border-radius: 10px;
  transition: 0.3s ease;
}
.counter {
  margin-bottom: 20px;
}
</style>

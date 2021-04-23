<template>
  <div class="header">
    <div class="time">{{date | date('datetime')}}</div>
    <router-link :to="{ name: 'Login' }">
      <button class="btn btn_white btn_out">Выйти</button>
    </router-link>
  </div>
</template>

<script>
export default {
  data() {
    return {
      date: new Date(),
      
    }
  },
  mounted() {
    this.interval = setInterval(() => {
      this.date = new Date()
    }, 1000);
  },
  beforeDestroy() {
    clearInterval(this.interval)
  },
}
</script>

<style scoped>
div {
  background: rgb(238,174,202);
  background: radial-gradient(circle, rgba(238,174,202,1) 0%, rgba(148,187,233,1) 100%);
  /* background-color: #1690c3; */
}
.time {
  margin-left: 30px;
  padding: 10px;
  color: #0a467e;
  font-weight: bold;
  border-radius: 15px;
}
.header {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.btn_out {
  margin-right: 15px;
}
a {
  text-decoration: none;
}
</style>

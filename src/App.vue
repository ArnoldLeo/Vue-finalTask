<template>
  <div class="main">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "App",
  created() {
    // localStorage.setItem("cart", JSON.stringify([]));
    let userData = localStorage.getItem("userData");
    if (!userData) {
      this.$router.push({ name: "login" });
    }
  },
};
</script>

<style>
* {
  margin: 0;
  box-sizing: border-box;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
/* .main {
  margin: 20px;
} */
</style>

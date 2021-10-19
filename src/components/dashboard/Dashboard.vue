<template>
  <div class="conatiner--main">
    <div class="profile--image">
      <div class="card">
        <img class="profile--pic" :src="userAvatar" />
        <p class="email">{{ info[0].mail }}</p>
      </div>
    </div>
    <h1 style="text-align: center">
      Welcome to Shopping Mart {{ info && info[0].fname }}
    </h1>
  </div>
</template>

<script>
export default {
  name: "dashboard",
  data() {
    return {
      info: "",
      userAvatar: require("../../assets/user-avatar.png"),
    };
  },
  created() {
    let inf = JSON.parse(localStorage.getItem("userData"));
    console.log("infoe", inf[0].fname);
    this.info = inf;
  },
};
</script>

<style scoped>
h1{
  color: darkorange;
}
.profile--image {
  text-align: center;
  float: left;
  position: absolute;
  left: -107px;
}
.profile--pic {
  border-radius: 50%;
  width: 45px;
  margin-left: 50px;
}
.card {
  margin-left: 88%;
  text-align: center;
}
</style>
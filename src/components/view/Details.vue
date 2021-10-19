<template>
  <div class="container">
    <div class="card">
      <button class="backbtn" @click="this.$router.back()">Back</button>
      <div class="info">
        <img :src="apiData1.image" alt="images" />
        <div class="content">
          <p class="name"><b> Name:</b> {{ apiData1.title }}</p>
          <br />
          <p><b>Price:</b> {{ apiData1.price }}$</p>
          <br />
          <p><b>Description:</b> {{ apiData1.description }}</p>
          <br />
          <p><b>Category: </b> {{ apiData1.category }}</p>
          <br />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "details",
  data() {
    return {
      individualDetails: "",
      apiData1: [],
    };
  },
  created() {
    console.log("main");
    this.individualDetails = this.$route.params.id;
    console.log("user", this.individualDetails);
    fetch(`https://fakestoreapi.com/products/${this.individualDetails}`)
      .then((response) => response.json())
      // console.log("result", result);
      .then((data) => (this.apiData1 = data));
    console.log("apiData", this.apiData1);
  },
};
</script>

<style scoped>
.container {
  margin: 0 auto;
  width: 90%;
  text-align: initial;
}
.info {
  display: flex;
}
.card {
  border: 2px solid grey;
  margin: 30px auto;
  background-color: darkslategrey;
  border-radius: 15px;

  box-shadow: 0 4px 8px 0 rgba(114, 86, 86, 0.623),
    0 6px 20px 0 rgba(0, 0, 0, 0.19);
}
@media screen and(max-width:500px) {
  .card {
    display: inline-block;
  }
}
img {
  margin: 30px auto;
  width: 400px;
  height: 400px;
  padding-right: 94px;
  border-right: 2px solid sandybrown;
  flex: wrap;
}
.content {
  background-color: white;
  width: 50%;
  height: 50%;
  /* margin: 0 auto; */
  border: 2px solid chocolate;
  border-radius: 10px;
  margin: 30px auto;
  margin-left: 0;
  flex: wrap;
}
p {
  margin: 5px 22px;
  font-size: larger;
}
.name {
  margin-top: 30px;
}
.backbtn {
  display: inline-block;
  border: none;
  background-color: greenyellow;
  padding: 10px;
  border-radius: 10px;
  color: white;
  cursor: pointer;
  margin: 10px 10px;
}
</style>
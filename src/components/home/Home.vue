<template>
  <div class="container">
    <dashboard/>
    <navBar/>
    <h1>PRODUCTS</h1>
    <div class="container-main">
      <div
        class="box"
        v-for="(user, index) in apiData"
        :key="index"
        @click="getDetails(user), scrollToTop()"
        
      >
        <img :src="user.image" />
        <div class="info">
        <p class="title">{{ user.title }}</p>
        <p class="price">{{ user.price }}<span>&#36;</span></p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import dashboard from '../dashboard/Dashboard.vue'
import navBar from '../home/Nav.vue'
export default {
  name: "home",
  data() {
    return {
      apiData: [],
    };
  },
components:{
  dashboard,
  navBar
},
  methods: {
    getDetails(user) {
      this.$router.push({
        name: "details",
        params: { id: user.id, details: JSON.stringify(user) },
      });
    },
    scrollToTop() {
      window.scrollTo(0, 0);
    },
  },

  async created() {
    console.log("main");
    const response = await fetch(" https://fakestoreapi.com/products");
    const result = await response.json();
    console.log("result", result);
    this.apiData = result;
    console.log("apiData", this.apiData);
  },
};
</script>

<style scoped>
* {
  box-sizing: border-box;
}
.container{
  margin: 20px;
  width: fit-content;
}
.container-main {
  /* display: grid;
  grid-template-columns: repeat(4, 1fr); */
  /* padding-left: 60px; */
  margin:20px 20px;
}
@media screen and (min-width:500px){
  .container-main {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
}}
@media screen and (min-width:800px){
  .container-main {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
}
}
.box {
  cursor: pointer;
  width: 280px;
  height: 370px;
  border: 2px solid grey;
  border-radius: 5%;
  margin: 10px;
  align-items: center;
  /* background-color: beige; */
  
  /* box-shadow: 0 4px 8px 0 rgba(114, 86, 86, 0.623),
    0 6px 20px 0 rgba(0, 0, 0, 0.19); */
}
.box:hover{
    box-shadow: 12px 8px 18px 8px rgba(0, 0, 0, 0.712);
}
img {
  width: 160px;
  height:200px;
  margin: 40px auto;
  margin-bottom: 20px;
}
.title{
  white-space: nowrap;
  overflow: hidden;
  margin:0 auto;
  margin-bottom:10px;
  width:220px;
  /* text-overflow: clip; */
}
.title:hover{
  overflow: visible;
  white-space: normal;
  text-overflow: clip;
  /* margin-bottom: 0px; */
}
.price {
  color: grey;
  font-size: 22px;}
</style>
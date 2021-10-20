<template>
  <div>
    <span><button class="backbtn" @click="home()">Home</button></span>
    <Success />
    <div class="head">
      <h1>Order Placed Successfully!!</h1>
      <h2>Order Details:</h2>
    </div>
    <div v-for="c of cart" :key="c.id">
      <div class="card">
        <div>
          <img :src="c.image" />
        </div>
        <div class="data">
          <p><b>Name:</b> {{ c.name }}</p>
          <p><b>Price:</b> {{ c.price }} <span>&#36;</span></p>
          <p><b>Quantity:</b> {{ c.quantity }}</p>
          <p><b>Amount:</b> {{ c.total }} <span>&#36;</span></p>
        </div>
      </div>
    </div>
    <div class="shipDetails">
      <h2>Shipping Details:</h2>
      <p><b>Name:</b>{{ details[0].fname }} {{ details[0].lname }}</p>
      <p><b>Mobile Number:</b>{{ details[0].phone }}</p>
      <p><b>Email:</b>{{ details[0].mail }}</p>
      <p><b>Address:</b>{{ address }}</p>
    </div>
  </div>
</template>

<script>
import Success from "../svg/Success.vue";
export default {
  components: { Success },
  name: "checkout",
  data() {
    return {
      showCart: false,
      address: "",
      details: "",
      add: "",
      cart: "",
      see: "",
    };
  },
  watch() {
    // console.log("for loop",see)
  },
  compnents: {
    Success,
  },
  created() {
    let order = JSON.parse(localStorage.getItem("cart"));
    this.cart = order;
    this.add = JSON.parse(localStorage.getItem("address"));
    let data = JSON.parse(localStorage.getItem("userData"));
    let d = Object.values(this.add[0]);
    this.details = data;
    console.log("values", Object.values(this.add[0]));
    for (let i = 0; i < d.length; i++) {
      this.address += " " + d[i];
    }
    console.log("order", this.cart);
  },
  methods: {
    home() {
      localStorage.removeItem("cart");
      this.$router.push({ name: "home" });
    },
  },
};
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
}
.container {
  width: 900px;
  margin: 10px auto;
  justify-content: center;
}
.head {
  margin: 10px;
  line-height: 50px;
}
card {
  box-shadow: 0px 2px 5px 1px;
  margin: 60px auto;
  display: grid;
  width: 70%;
  border: 5px solid beige;
  /* width: 500px; */
  margin: 10px auto;
}
.data {
  padding: 20px;
}
img {
  width: 250px;
  height: 250px;
  /* float: left; */
  background-size: cover;
  padding: 30px;
  box-shadow: 0px 8px 12px 0px rgba(0, 0, 0, 0.13);
}
.shipDetails {
  text-align: left;
  margin: 20px 100px;
  line-height: 40px;
  padding-left: 50px;
  border: 2px solid yellow;
}
.backbtn {
  float: left;
  position: relative;
  left: 20px;
  padding: 10px;
}
</style>
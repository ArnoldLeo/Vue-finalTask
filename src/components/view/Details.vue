<template>
  <div class="container">
    <div class="card">
      <navBar />
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
          <div class="butt">
            <button
              v-if="isInCart(apiData1.id)"
              @click="removeFromCart(apiData1.id)"
            >
              remove from cart
            </button>
            <button @click="addToCart()" v-else>add to cart</button>
          </div>
          <!-- <div class="quantity-toggle" v-show="show">
              <button @click="updateCart(apiData1, 'subtract')">&mdash;</button>
              <span class="cart__quantity">{{ apiData1.quantity }}</span>
              <button @click="updateCart(apiData1, 'add')">&#xff0b;</button>
            </div> -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import navBar from "../home/Nav.vue";
export default {
  name: "details",
  data() {
    return {
      individualDetails: "",
      show: false,
      apiData1: [],
      cart: [],
      items: [],
    };
  },
  components: {
    navBar,
  },

  async created() {
    this.apiData1= this.$route.params.details
      ? JSON.parse(this.$route.params.details)
      : null;
    console.log("userdetails||", this.apiData1);
    // this.individualDetails = this.$route.params.id;
    // console.log("user", this.individualDetails);
    // const response = await fetch(
    //   `https://fakestoreapi.com/products/${this.individualDetails}`
    // );
    // const result = await response.json();
    // this.apiData1 = result;
    this.apiData1.quantity = 1;
    console.log("apiData1", this.apiData1);
  },

  methods: {
   isInCart(itemId) {
      if (!localStorage.getItem("cart")) {
        localStorage.setItem("cart", JSON.stringify([]));
      }
      else{
        this.cart = JSON.parse(localStorage.getItem("cart")); 
      }

      console.log(itemId);
      const cartItem = this.cart.find(({id}) => id == itemId);
      console.log(Boolean(cartItem));
      return Boolean(cartItem);
    },

    addToCart() {
      this.show = !this.show;
      const item = this.apiData1.id;
      const itemname = this.apiData1.title;
      const itemimage = this.apiData1.image;
      const itemprice = this.apiData1.price;
      const itemquantity = 1;

      console.log("addto cart", localStorage.getItem("cart"));
      if (!localStorage.getItem("cart")) {
        localStorage.setItem("cart", JSON.stringify([]));
      }
      const cartItems = JSON.parse(localStorage.getItem("cart"));
      cartItems.push({
        id: item,
        name: itemname,
        image: itemimage,
        total: 0,
        price: itemprice,
        quantity: itemquantity,
      });
      localStorage.setItem("cart", JSON.stringify(cartItems));
      this.cart = JSON.parse(localStorage.getItem("cart"));
      // console.log("cart||", this.cart);
    },
   removeFromCart(itemId) {
      const cartItems = JSON.parse(localStorage.getItem("cart"));
      const index = cartItems.findIndex((id) => id === itemId);
      cartItems.splice(index, 1);
      localStorage.setItem("cart", JSON.stringify(cartItems));
      this.cart = JSON.parse(localStorage.getItem("cart"));
    },
  }
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
  position: absolute;
  top: 60px;
}
.butt  {
  text-align: center;
  margin: 10px 50px;
}
</style>
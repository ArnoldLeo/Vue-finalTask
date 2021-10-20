<template>
  <div class="container">
    <h1>CART</h1>
    <span><button class="backbtn" @click="this.$router.push({name:'home'})" >Home</button></span>
    <div v-for="(c, index) of cart" :key="c.id">
      <div class="card">
          <div>
            <img :src="c.image" />
          </div>
          <div class="data">
            <p><b>Name:</b> {{ c.name }}</p>
            <p><b>Price:</b> {{ c.price }} <span>&#36;</span></p>
            <button @click="removeFromCart(index)">remove from cart</button>
            <div class="quantity-toggle">
              <button @click="updateCart(c, 'subtract')">&mdash;</button>
              <span class="cart__quantity">{{ c.quantity }}</span>
              <button @click="updateCart(c, 'add')">&#xff0b;</button>
            </div>
          </div>
      </div>
    </div>

    {{ totalPrice() }}
    <div class="nav__cart">
      <span class="total-quantity"
        >Quantity:{{ totalQuantity }}</span
      ><br>

      <span class="total-quantity"> Total: {{ finalPrice }} &#36;</span>
    </div>
    <button class="checkout" @click="checkout()">Checkout</button>
  </div>
</template>

<script>
export default {
  name: "Cart",
  data() {
    return {
      cart: [],
      totalAmount:"",
      totalQuants:"",
    };
  },
  computed: {
    totalQuantity() {
      return this.cart.reduce((total, product) => total + product.quantity, 0);
    },
    finalPrice() {
      return this.cart.reduce((total, product) => total + product.total, 0);
    },
  },
  created() {
    console.log("Cart created");
  },
  methods: {
    removeFromCart(itemId) {
      const cartItems = JSON.parse(localStorage.getItem("cart"));
      const index = cartItems.findIndex((id) => id === itemId);
      cartItems.splice(index, 1);
      localStorage.setItem("cart", JSON.stringify(cartItems));
      this.cart = JSON.parse(localStorage.getItem("cart"));
    },
    getCart() {
      if (!localStorage.getItem("cart")) {
        localStorage.setItem("cart", JSON.stringify([]));
      }
      this.cart = JSON.parse(localStorage.getItem("cart"));
      //   console.log(this.cart.length)
    },
    updateCart(product, updateType) {
      console.log(product.id);
      for (let i = 0; i < this.cart.length; i++) {
        console.log(this.cart[i].id);
        if (this.cart[i].id === product.id) {
          if (updateType == "subtract") {
            if (this.cart[i].quantity != 0) {
              this.cart[i].quantity--;
              
            }
          } else if (updateType == "add") {
            this.cart[i].quantity++;
            // localStorage.setItem("cart",JSON.stringify(this.cart[i]))
            // console.log(this.cart[i])
          } else {
            this.cart[i].quantity = 0;
          }
          break;
        }
      }
    },
    totalPrice() {
      for (let i = 0; i < this.cart.length; i++) {
        this.cart[i].total = this.cart[i].quantity * this.cart[i].price;
      }
      console.log();
    },
    checkout() {
      if(this.cart==""){
        alert("Cart is Empty!!");
      }else{
         localStorage.setItem("cart",JSON.stringify(this.cart))
      this.$router.push({ name: "checkout" });
     
      }
    },
  },
  beforeMount() {
      this.getCart();
    },
    // onUnmounted(){
    //   console.log("unmounted"),
    //   localStorage.setItem("cart",JSON.stringify(this.cart))
    // }
};
</script>

<style scoped>
.card {
  box-shadow: 0px 2px 5px 1px;
  margin: 60px auto;
  display: grid;
  width: 70%;
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
@media screen and(min-width:500px){
  img{
    float:left;
  }
}
.total-quantity{
  font-size: 30px;
  font-weight:bold ;
}
.nav__cart{
  text-align: center;
}
.backbtn{
  float: left;
    /* display: inline-block; */
    position: relative;
    left: 21px;
    top: -50px;
}
</style>
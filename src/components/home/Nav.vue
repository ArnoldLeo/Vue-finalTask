<template>
  <div class="nav__cart">
    <img :src="image" class="cartBtn" @click="goCart()" />
  </div>
</template>

<script>
export default {
  name: "nav",
  data() {
    return {
      image: require("@/assets/shopping-cart.png"),
    };
  },
  methods: {
    goCart() {
      this.$router.push({
        name: "Cart",
      });
    },
  },
};
</script>

<style>
.nav__cart {
  margin: 0 auto;
  text-align: right;
}
.cartBtn {
  margin: 10px;
  padding: 10px 20px;
  display: inline-block;
  width: 80px;
  height: 60px;
  border: 1px solid grey;
  border-radius: 30px;
  background: ghostwhite;
  cursor: pointer;
}
.cart-dropdown {
  background: white;
  border: 1px solid lightgray;
  border-radius: 10px;
  box-shadow: 0 0 2px rgba(0, 0, 0, 0.2);
  color: #333;
  font-size: 1.3rem;
  overflow: auto;
  padding: 0 1rem;
  width: 70%;
  margin: 0 auto;
}
.cart-dropdown__list {
  margin: 10px;
}
.cart__quantity {
  border: 2px solid grey;
  padding: 20px;
  border-radius: 100%;
}
button {
  margin: 10px 0;
  padding: 10px;
  cursor: pointer;
  font-size: 15px;
  font-weight: bold;
  background-color: crimson;
  border-style: none;
  color: white;
  border-radius: 5px;
}
button:hover {
  background-color: orange;
}
</style>
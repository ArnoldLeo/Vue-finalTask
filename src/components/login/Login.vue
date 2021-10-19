<template>
  <div class="login--main">
    <h1>Login Page</h1>
     <div class="name">
      <p>First Name</p>
      <input v-model="firstName" type="text" placeholder="Enter your First Name" autofocus />
    </div>
     <div class="name">
      <p>Last Name</p>
      <input v-model="lastName" type="text" placeholder="Enter your Last Name" />
    </div>
    <div class="address">
      <p>Address:</p>
      <input v-model="area" type="text" placeholder="Enter your Area and Street" />
      <input v-model="district" type="text" placeholder="City/District/Town" />
      <input v-model="state" type="text" placeholder="Enter your State" />
      <input v-model="pincode" type="number" placeholder="Enter your Pincode" />
    </div>
    <div class="conatctNumber">
      <p>Mobile Number:</p>
      <input v-model="contact" type="number" placeholder="Enter Mobile Number" />
    </div>
    <div class="email--main">
      <p>Email:</p>
      <input v-model="email" type="email" placeholder="Enter your email id" />
      <p class="errMsg" v-if="emailErrMsg">Enter Valid Email</p>
    </div>
    <div class="passwd--main">
      <p>Password:</p>
      <input v-model="password" type="password" placeholder="Enter your password" />
      <p class="errMsg" v-if="passwordErrMsg">
        Password length should be between 8 to 16 characters
      </p>
    </div>
    <button class="login--btn" @click="loginFunc">Login</button>
  </div>
</template>

<script>
import Mixins from "@/mixins";
export default {
  name: "login",
  data() {
    return {
      // details:[],
      email: "",
      password: "",
      emailErrMsg: true,
      passwordErrMsg: true,
      firstName:"",
      lastName:"",
      area:"",
      district:"",
      state:"",
      contact:"",
      pincode:""
    };
  },
  watch: {
    email(value) {
      this.emailErrMsg = this.emailValidation(value);
      // this.details.push({email:value});
    },
    password(value) {
      if (value.length >= 8 && value.length <= 16) {
        this.passwordErrMsg = false;
      } else {
        this.passwordErrMsg = true;
      }
    },
    // firstName(value){
    //   this.details.push({firstName:value});
    // },
    // lastName(value){
    //   this.details.push({lastName:value});
    // },
    // area(value){
    //   this.details.push({Address:value});
    // },
    // district(value){
    //   this.details.push({Address:value});
    // },
    // state(value){
    //   this.details.push({Address:value});
    // },
    // pincode(value){
    //   this.details.push({Address:value});
    // }
  },

  methods: {
    loginFunc() {
      console.log("login");
      if (!this.passwordErrMsg && !this.emailErrMsg) {
        // localStorage.setItem("userData", this.email);
        localStorage.setItem("userDetails", JSON.stringify({email:this.email},{fname:this.firstName}));
        console.log("details",this.details)
        this.$router.push({ name: "home" });
      } else {
        alert("login failed");
      }
    },
  },
  mixins: [Mixins],
};
</script>

<style scoped>
.login--main {
  /* text-align: center; */
  box-shadow: 0 4px 8px 0 rgb(0 0 0 / 20%), 0 6px 20px 0 rgb(0 0 0 / 19%);
  /* padding: 40px; */
  /* margin: auto 30%; */
  /* transform: translateY(20%); */
  height: 120vh;
}
h1{
  color: blue;
}
.name{
      display: inline-block;
    margin: 10px;
}
p {
  padding: 10px;
  font-weight: 700;
}
input,textarea {
  text-align: center;
  border: 0;
  border-bottom: 1px solid black;
  outline: none;
  margin-bottom: 10px;
}
.address{
  display: inline-block;
}
.address>input{
  margin: 10px;
}
.login--btn {
  border: 0px;
  margin-top: 20px;
  padding: 10px;
  background: lightskyblue;
  border-radius: 10px;
  width: 50%;
  cursor: pointer;
}
.errMsg {
  color: red;
  font-size: 10px;
}
.google--icon {
  margin-top: 10px;
}
::placeholder{
  text-align: center;
}
@media screen and (min-width:600px){
  .login--main {
  /* text-align: center; */
  /* box-shadow: 0 4px 8px 0 rgb(0 0 0 / 20%), 0 6px 20px 0 rgb(0 0 0 / 19%); */
  padding: 40px;
  margin: auto 25%;
  /* transform: translateY(20%); */
  /* height: 150vh; */
}
}
</style>
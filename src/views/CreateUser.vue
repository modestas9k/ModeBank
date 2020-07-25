<template>
  <div id="createUser">
    <div class="wrapper">
      <div>
        <h3>{{ errorMessage }}</h3>
      </div>
      <form name="createAccount" v-on:submit.prevent="create">
        <h1>Create Account</h1>
        <div class="inputBox">
          <label for="email">Email</label>
          <input
            v-model="email"
            type="email"
            id="email"
            name="email"
            placeholder="Enter Your Email"
            required
          />
        </div>
        <div class="inputBox">
          <label for="password">Password</label>
          <input
            v-model="password"
            type="password"
            id="password"
            name="password"
            placeholder="Enter Your Password"
            required
          />
        </div>
        <div class="text-align">
          <button type="submit">Create</button>
        </div>
        <div>
          <h4>Or</h4>
          <router-link to="/login">Login</router-link>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import * as firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

export default {
  name: "createUser",

  data() {
    return {
      email: "",
      password: "",
      errorMessage: ""
    };
  },
  methods: {
    create() {
      firebase
        .auth()
        .createUserWithEmailAndPassword(this.email, this.password)
        .catch(error => {
          // Handle Errors here.
          var errorCode = error.code;
          this.errorMessage = error.message;
          console.log(errorCode);
          console.log(this.errorMessage);
          // ...
        });
    }
  }
};
</script>

<style scoped>
form {
  background: rgb(240, 240, 240);
  display: flex;
  flex-direction: column;
  max-width: 700px;
  margin: 50px auto 50px auto;
  border-radius: 10px;
  padding: 20px;
  align-content: center;
  box-shadow: 9px 10px 20px -13px rgba(0, 0, 0, 0.68);
}
* {
  box-sizing: border-box;
}
.inputBox {
  width: 250px;
  margin: 10px auto;
  text-align: start;
}
input,
label {
  width: 100%;
}
input {
  padding: 10px 5px;
  border-radius: 5px;
  border: none;
  margin-top: 3px;
}
button {
  padding: 10px 30px;
  border-radius: 50px;
  border: none;
  background: orangered;
  color: white;
  font-weight: 700;
  margin-top: 15px;
}
button:hover {
  background: rgb(192, 57, 8);
}
.text-align {
  text-align: center;
}
</style>

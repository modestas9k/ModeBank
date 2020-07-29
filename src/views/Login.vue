<template>
  <div id="createUser" class="section">
    <div class="container">
      <form class="box field" name v-on:submit.prevent="signIn()">
        <h1 class="title">Login</h1>
        <div class="control">
          <label class="label is-pulled-left" for="email">Email</label>
          <input
            class="input"
            v-model="email"
            type="email"
            id="email"
            name="email"
            placeholder="Enter Your Email"
            required
          />
          <div class="help is-danger">{{ errorMessage }}</div>
        </div>
        <div class="control">
          <label class="label is-pulled-left" for="password">Password</label>
          <input
            class="input"
            v-model="password"
            type="password"
            id="password"
            name="password"
            placeholder="Enter Your Password"
            required
          />
          <div class="help is-danger">{{ errorPassword }}</div>
        </div>
        <div class="buttons is-centered">
          <button class="button is-primary mt-4" type="submit">Login</button>
        </div>
        <div>
          <h4 class="label">Or</h4>
          <router-link to="/createUser">Create Account</router-link>
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
      errorMessage: "",
      errorPassword: "",
    };
  },
  methods: {
    signIn() {
      firebase
        .auth()
        .signInWithEmailAndPassword(this.email, this.password)
        .then(() => {
          this.$router.push("home");
        })
        .catch((error) => {
          if (error.code === "auth/wrong-password") {
            this.errorPassword = error.message;
          } else {
            this.errorMessage = error.message;
          }
        });
    },
  },
};
</script>

<style scoped>
form {
  max-width: 600px;
  margin: 0 auto;
}
</style>

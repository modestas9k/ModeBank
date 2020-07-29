<template>
  <div id="createUser" class="section">
    <div class="container">
      <form name="createAccount" v-on:submit.prevent="create" class="box field">
        <h1 class="title">Create Account</h1>
        <label for="email" class="label is-pulled-left">Email</label>
        <div class="control">
          <input
            class="input"
            v-model="email"
            type="email"
            id="email"
            name="email"
            placeholder="Enter Your Email"
            required
          />
          <p class="help is-danger">{{ errorMessage }}</p>
        </div>
        <label for="password" class="label is-pulled-left">Password</label>
        <div class="control">
          <input
            class="input"
            v-model="password"
            type="password"
            id="password"
            name="password"
            placeholder="Enter Your Password"
            required
          />
          <p class="help is-danger">{{ errorPassword }}</p>
        </div>
        <div class="buttons is-centered">
          <button type="submit" class="button is-primary mt-4">Create</button>
        </div>
        <div>
          <h4 class="label">Or</h4>
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
      errorMessage: "",
      errorPassword: "",
    };
  },
  methods: {
    create() {
      firebase
        .auth()
        .createUserWithEmailAndPassword(this.email, this.password)
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

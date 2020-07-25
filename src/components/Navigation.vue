<template>
  <div id="Navigation">
    <div class="wrapper">
      <img src="../assets/Logo.png" alt="logo" />
      <nav>
        <router-link to="/home">Home</router-link>
        <router-link to="/about">About</router-link>
        <div class="flex" v-if="!loggedIn">
          <router-link to="/Login">Login</router-link>
        </div>
        <div class="flex" v-else>
          <router-link to="/account">Account</router-link>
          <button @click="logout()">Log Out</button>
        </div>
      </nav>
    </div>
  </div>
</template>

<script>
import * as firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
export default {
  name: "Navigation",
  data() {
    return {
      loggedIn: false
    };
  },
  beforeMount() {
    firebase
      .auth()
      .onAuthStateChanged(user =>
        user ? (this.loggedIn = true) : (this.loggedIn = false)
      );
  },

  methods: {
    logout() {
      firebase.auth().signOut();
    }
  }
};
</script>

<style scoped>
img {
  height: 60px;
  margin-bottom: 4px;
}
#Navigation {
  background: #eee;
  box-shadow: 9px 10px 10px -13px rgba(0, 0, 0, 0.68);
}
.wrapper {
  display: flex;
  max-width: 960px;
  margin: 0 auto;
  justify-content: space-between;
  align-items: center;
}
nav {
  padding: 30px;
  flex-direction: row;
  display: flex;
  align-items: center;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
  margin-left: 20px;
  text-decoration: none;
}

nav .router-link-exact-active {
  color: #42b983;
}
.flex {
  display: flex;
  align-items: center;
}
button {
  padding: 10px 20px;
  border-radius: 20px;
  border: none;
  background: orangered;
  color: white;
  font-weight: 700;
  margin-left: 20px;
}
</style>

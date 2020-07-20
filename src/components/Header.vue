<template>
    <div id="Header">
        <div class="wrapper">
            <img src="../assets/Logo.png" alt="logo" />
            <nav>
                <router-link to="/">Home</router-link>
                <router-link to="/about">About</router-link>
                <router-link to="/Login" v-if="logetIn()">Login</router-link>
                <router-link to="/CreateUser" v-if="logetIn()">
                    Sign in
                </router-link>
                <router-link to="/" v-if="logetIn()">Account</router-link>
                <router-link to="/" v-if="logetIn()">Log Out</router-link>
            </nav>
        </div>
    </div>
</template>

<script>
import * as firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

export default {
    name: "Header",
    data() {
        return {
            user: firebase.userCredential.user.uid,
        };
    },
    methods: {
        logetIn() {
            if (this.user.userCredential.user.uid != "") {
                return true;
            }
        },
    },
};
</script>

<style scoped>
img {
    height: 60px;
    margin-bottom: 4px;
}
#Header {
    background: #eee;
    box-shadow: 9px 10px 10px -13px rgba(0, 0, 0, 0.68);
}
.wrapper {
    display: flex;
    width: 960px;
    margin: 0 auto;
    justify-content: space-between;
    align-items: center;
}
nav {
    padding: 30px;
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
</style>

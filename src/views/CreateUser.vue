<template>
    <div id="createUser" class="section">
        <div class="container">
            <div>
                <h3>{{ errorMessage }}</h3>
            </div>
            <form
                name="createAccount"
                v-on:submit.prevent="create"
                class="box field "
            >
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
                    <p class="help"></p>
                </div>
                <label for="password" class="label is-pulled-left">
                    Password
                </label>
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
                    <p class="help"></p>
                </div>
                <div class="buttons is-centered">
                    <button type="submit" class="button is-primary mt-4">
                        Create
                    </button>
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
        };
    },
    methods: {
        create() {
            firebase
                .auth()
                .createUserWithEmailAndPassword(this.email, this.password)
                .catch((error) => {
                    // Handle Errors here.
                    var errorCode = error.code;
                    this.errorMessage = error.message;
                    console.log(errorCode);
                    console.log(this.errorMessage);
                    // ...
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

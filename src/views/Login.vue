<template>
    <div id="login">
        <div class="wrapper">
            <form name="login">
                <h1>Login</h1>
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
                    <button v-on:click="login" type="submit">Login</button>
                </div>
                <div>
                    <h4>Or</h4>
                    <a href="#">Create Account</a>
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
    name: "Login",

    data() {
        return {
            email: "",
            password: "",
        };
    },
    methods: {
        login() {
            firebase
                .auth()
                .signInWithEmailAndPassword(this.email, this.password)
                .then(() => {
                    console.log("pavyko");
                });
        },
    },
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
    box-shadow: 9px 10px 33px -2px rgba(0, 0, 0, 0.68);
    -webkit-box-shadow: 9px 10px 33px -2px rgba(0, 0, 0, 0.68);
    -moz-box-shadow: 9px 10px 33px -2px rgba(0, 0, 0, 0.68);
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

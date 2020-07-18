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
                        type="password"
                        id="password"
                        name="password"
                        placeholder="Enter Your Password"
                        required
                    />
                </div>
                <div class="text-align">
                    <button type="submit">Login</button>
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
// import * as firebase from "firebase/app";
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
};
</script>

<style scoped>
form {
    background: #eee;
    display: flex;
    flex-direction: column;
    max-width: 700px;
    margin: 50px auto 50px auto;
    border-radius: 10px;
    padding: 20px;
    align-content: center;
}
.inputBox {
    max-width: 250px;
    margin: 10px auto;
    text-align: start;
}
input,
label {
    width: 100%;
}
input {
    padding: 10px 3px;
}
button {
    padding: 10px 30px;
    border-radius: 5px;
}
.text-align {
    text-align: center;
}
</style>

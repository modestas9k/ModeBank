import Vue from "vue";
import App from "./App.vue";

// Your web app's Firebase configuration
var firebase = require("firebase");
firebase.initializeApp({
    apiKey: "AIzaSyC8WaAxzhhGlH-pzpWjLwDBTVeQKo7pN7s",
    authDomain: "modebank-28b46.firebaseapp.com",
    databaseURL: "https://modebank-28b46.firebaseio.com",
    projectId: "modebank-28b46",
    storageBucket: "modebank-28b46.appspot.com",
    messagingSenderId: "993536198049",
    appId: "1:993536198049:web:78d4cec86b153e28f7b7e0",
});

Vue.config.productionTip = false;

new Vue({
    render: (h) => h(App),
}).$mount("#app");

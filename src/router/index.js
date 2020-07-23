import Vue from "vue";
import VueRouter from "vue-router";
import firebase from "firebase/app";
import Login from "../views/Login.vue";
import Account from "../views/Account.vue";

Vue.use(VueRouter);

const routes = [
    {
        path: "/",
        redirect: "/home",
    },
    {
        path: "/home",
        name: "Home",
        component: () =>
            import(/* webpackChunkName: "home" */ "../views/Home.vue"),
    },
    {
        path: "/about",
        name: "About",
        component: () =>
            import(/* webpackChunkName: "about" */ "../views/About.vue"),
    },
    {
        path: "/login",
        name: "Login",
        component: Login,
    },
    {
        path: "/account",
        name: "Account",
        component: Account,
    },
    {
        path: "/createUser",
        name: "createUser",
        component: () =>
            import(/* webpackChunkName: "about" */ "../views/CreateUser.vue"),
    },
];

const router = new VueRouter({
    mode: "history",
    base: process.env.BASE_URL,
    routes,
});

router.beforeEach((to, from, next) => {
    firebase.auth().onAuthStateChanged((user) => {
        if (!user && to.matched.some((record) => record.meta.requiresAuth)) {
            next({
                path: "/login",
            });
        } else {
            next();
        }
    });
});

export default router;

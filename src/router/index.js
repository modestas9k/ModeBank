import Vue from "vue";
import VueRouter from "vue-router";
import firebase from "firebase/app";
import Login from "../views/Login.vue";
import Account from "../views/Account.vue";
import "../../node_modules/bulma/css/bulma.min.css";

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
        meta: {
            noRequiresAuth: true,
        },
    },
    {
        path: "/account",
        name: "Account",
        component: Account,
        meta: { requiresAuth: true },
    },
    {
        path: "/createUser",
        name: "createUser",
        component: () =>
            import(/* webpackChunkName: "about" */ "../views/CreateUser.vue"),
        meta: {
            noRequiresAuth: true,
        },
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
        } else if (
            user &&
            to.matched.some((record) => record.meta.noRequiresAuth)
        ) {
            next("/home");
        } else {
            next();
        }
    });
});

export default router;

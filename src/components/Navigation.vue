<template>
    <div id="Navigation">
        <nav class="navbar" role="navigation" aria-label="main navigation">
            <div class="navbar-brand">
                <router-link class="navbar-item" to="/home">
                    <img src="../assets/Logo.png" />
                </router-link>

                <a
                    role="button"
                    class="navbar-burger burger"
                    aria-label="menu"
                    aria-expanded="false"
                    data-target="navbarBasicExample"
                    @click="burgerMenuOpen = !burgerMenuOpen"
                    :class="{ 'is-active': burgerMenuOpen }"
                >
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                </a>
            </div>

            <div
                id="navbarBasicExample"
                class="navbar-menu"
                :class="{ 'is-active': burgerMenuOpen }"
            >
                <div class="navbar-start">
                    <router-link to="/home" class="navbar-item">
                        Home
                    </router-link>

                    <router-link to="/about" class="navbar-item">
                        About
                    </router-link>
                </div>

                <div class="navbar-end">
                    <div class="navbar-item" v-if="!loggedIn">
                        <div class="buttons">
                            <router-link
                                to="/createUser"
                                class="button is-primary"
                            >
                                <strong>Sign up</strong>
                            </router-link>
                            <router-link to="/login" class="button is-light">
                                Log in
                            </router-link>
                        </div>
                    </div>
                    <div class="navbar-item" v-else>
                        <div class="buttons">
                            <router-link
                                to="/account"
                                class="button is-primary"
                            >
                                <strong>Account</strong>
                            </router-link>
                            <button @click="logout()" class="button is-light">
                                Log Out
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
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
            loggedIn: false,
            burgerMenuOpen: false,
        };
    },
    beforeMount() {
        firebase
            .auth()
            .onAuthStateChanged((user) =>
                user ? (this.loggedIn = true) : (this.loggedIn = false)
            );
    },

    methods: {
        logout() {
            firebase.auth().signOut();
        },
    },
};
</script>

<style scoped>
.navbar-item img {
    max-height: 3.75rem;
    margin-bottom: 4px;
}
.navbar-brand {
    align-items: center;
    justify-content: center;
}
#Navigation {
    background: #eee;
    box-shadow: 0px 10px 10px -13px rgba(0, 0, 0, 0.68);
}
</style>

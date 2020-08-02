<template>
    <div class="accout section">
        <div class="container">
            <div class="box">
                <h1 class="title">Account</h1>
                <div v-if="change" class="field has-addons ">
                    <div class=" control ">
                        <span class="subtitle mr-3">
                            {{ name }}
                        </span>
                    </div>
                    <div class="control">
                        <button
                            type="button"
                            v-on:click="change = !change"
                            class="button  "
                        >
                            Change
                        </button>
                    </div>
                </div>
                <div v-else class="field has-addons">
                    <div class="control">
                        <input type="text" v-model="name" class="input" />
                    </div>
                    <div class="control">
                        <button
                            type="button"
                            v-on:click="update"
                            class="button is-primary"
                        >
                            Change
                        </button>
                    </div>
                </div>
                <div class="field">
                    <span class="subtitle">Balance: {{ balance }} €</span>
                </div>
                <div class="buttons is-centered">
                    <button type="button" class="button is-primary">
                        Add money
                    </button>
                    <button type="button" class="button is-primary">
                        Send money
                    </button>
                    <button type="button" class="button is-primary">
                        Withdraw money
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
export default {
    name: "Account",
    data() {
        return {
            name: "",
            change: true,
            balance: 0,
        };
    },
    methods: {
        update() {
            firebase
                .firestore()
                .collection("users")
                .doc(firebase.auth().currentUser.uid)
                .update({ name: this.name });
            this.change = true;
        },
    },
    beforeMount() {
        firebase
            .firestore()
            .collection("users")
            .doc(firebase.auth().currentUser.uid)
            .get()
            .then(
                (item) => (
                    (this.name = item.data().name),
                    (this.balance = item.data().balance)
                )
            );
    },
};
</script>

<style scoped>
.box {
    max-width: 600px;
    margin: 0 auto;
}
.align-center {
    justify-content: center;
    align-items: center;
    flex-direction: row;
}
</style>

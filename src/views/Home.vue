<template>
    <div class="home">
        <Header />
        <h1>This is home page</h1>
    </div>
</template>

<script>
import Header from "../components/Header.vue";
// @ is an alias to /src
export default {
    name: "Home",
    components: { Header },
};
</script>

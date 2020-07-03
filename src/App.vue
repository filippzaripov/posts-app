<template>
    <div id="app">
        <Navbar></Navbar>
        <div class="container">
            <router-view></router-view>
        </div>
    </div>
</template>
<script>
    import Navbar from "./components/Navbar";
    export default {
        components: {
            Navbar
        },
        computed: {
            username() {
                return this.$store.getters.username
            }

        },
        mounted() {
            this.checkLoggedIn();
        },
        methods: {
            checkLoggedIn() {
                if (!this.username) {
                    this.$router.push('/login')
                }
            }
        }
    }
</script>
<style lang="scss">
    @import "~materialize-css/dist/css/materialize.min.css";
</style>

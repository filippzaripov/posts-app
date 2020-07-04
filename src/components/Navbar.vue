<template>
    <nav class="blue darken-3">
<!--        <div class="nav-wrapper">-->
<!--            <a href="/" class="brand-logo">Logo</a>-->
<!--            <ul v-if="username" class="right hide-on-med-and-down">-->
<!--                <li><a href="/add" class="waves-effect waves-light btn">Add Post</a></li>-->
<!--                <li><a class="waves-effect waves-light btn" @click="logout">Logout</a></li>-->

<!--            </ul>-->
<!--        </div>-->
        <div class="nav-wrapper ">

            <router-link to="#" class="brand-logo">Posts App</router-link>

            <ul v-if="username" id="nav-mobile" class="right hide-on-med-and-down">

                <router-link
                        class="waves-effect waves-light btn"
                        to="/add"
                        tag="button"
                        exact
                        active-class="active"
                >
                    Add Post
                </router-link>
                <li><a class="waves-effect waves-light btn" @click="logout">Logout</a></li>
                <span style="margin-left: 7px" v-if="username">Hello, {{username}}</span>
            </ul>
        </div>
    </nav>
</template>

<script>
    export default {
        name: "Navbar",
        computed:{
            username(){
                return this.$store.getters.username
            }
        },
        methods:{
            logout(){
                this.$store.dispatch('setName', null)
                this.$router.push('/login')
            }
        }
    }
</script>

<style lang="scss" scoped>
    nav{
        padding: 0 2rem;
    }
</style>
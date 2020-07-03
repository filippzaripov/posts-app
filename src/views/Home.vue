<template>
    <div>

        <template v-for="post in posts">
            <Post :post="post"></Post>
        </template>

    </div>
</template>

<script>
    import Post from "../components/Post";

    export default {
        name: 'Home',
        computed: {
            posts() {
                return this.$store.getters.posts
            },
            username(){
                return this.$store.getters.username
            }
        },
        components: {
            Post
        },
    }
</script>

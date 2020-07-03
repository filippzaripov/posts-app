<template>
    <div>
        <template v-for="post in posts">

            <Post :post="post"></Post>
            <div class="row">
                <div class="col s6 offset-s3 right-align">
                    {{post.comments.length}}
                    <router-link
                            :to="'/post/' + post.id"
                            tag="button"
                            class="btn blue offset-s3"
                    >
                        Comments
                    </router-link>
                </div>
            </div>
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
            username() {
                return this.$store.getters.username
            }
        },
        components: {
            Post
        },
    }
</script>

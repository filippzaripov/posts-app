<template>
    <div>
        <Post :post="post"></Post>

        <template v-for="comment in post.comments">
            <Comment :comment="comment"></Comment>
        </template>
        <div class="row">
            <form class="col s6 offset-s3">
                <div class="row">
                    <div class="input-field col s12">
                        <textarea v-model="commentText" id="textarea2" class="materialize-textarea"
                                  data-length="120"></textarea>
                        <label for="textarea2">Comment</label>
                    </div>
                </div>
                <a class="btn" @click="addComment">Add Comment</a>
            </form>
        </div>
    </div>
</template>

<script>
    import Comment from "../components/Comment";
    import Post from "../components/Post";

    export default {
        name: "Comments",
        computed: {
            post() {
                return this.$store.getters.postById(+this.$route.params.id)
            }
        },
        components: {Post, Comment},
        data: () => ({
            commentText: ''
        }),
        methods: {
            addComment() {
                const comment = {
                    postId: this.post.id,
                    text: this.commentText
                };
                this.$store.dispatch('setComment', comment);
                this.commentText = ""
            }
        }
    }
</script>

<style scoped>

</style>
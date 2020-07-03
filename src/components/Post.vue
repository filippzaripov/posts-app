<template>
    <div class="row">

        <div class="col s6 offset-s3">
            <div class="card">
                <div class="card-image">
                    <img :src="post.image">
                    <span class="card-title">{{post.title}}</span>
                </div>
                <div class="card-content">
                    <p>
                        Submitted on {{post.submitDate | moment("MMM DD, YYYY HH:MM")}} by
                        <strong>{{post.user}}</strong>
                    </p>
                    <div style="margin-bottom: 5%; margin-top: 5%">
                        <button class="btn-small grey" @click="+post.votes-- & changeVotes()"><i
                                class="far fa-thumbs-down"></i></button>
                        {{post.votes}}
                        <button class="btn-small grey" @click="+post.votes++ & changeVotes()"><i
                                class="far fa-thumbs-up"></i></button>
                    </div>
                </div>
                <div class="card-action">
                    <a href="#">This is a link</a>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Post",
        props: ['post'],

        data: () => ({
            hasImage: false,
            image: null,
        }),
        methods: {
            setImage: (output) => {
                this.hasImage = true;
                this.image = output;
                console.log('Info', output.info);
                console.log('Exif', output.exif)
            },
            changeVotes(vote) {
                this.$store.dispatch('updateVotes', {id: this.post.id, updVotes: this.post.votes})
            }
        }
    }
</script>

<style scoped>

</style>
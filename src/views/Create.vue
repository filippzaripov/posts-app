<template>
    <div class="row">
        <div class="col s6 offset-s3">
            <h1>Create post</h1>
            <form @submit.prevent="submitHandler">
                <div class="input-field">
                    <input v-model="title" id="title" type="text" class="validate" required>
                    <label for="title">Title</label>
                    <span class="helper-text" data-error="Title is required"></span>
                </div>
                <div class="file-field input-field">
                    <div class="btn">
                        <span>File</span>
                        <input type="file" @change="onFileChange(image, $event)" accept="image/*">
                    </div>
                    <div class="file-path-wrapper">
                        <input class="file-path " type="text" placeholder="Upload file">
                    </div>
                </div>
                <button class="btn" type="submit" style="margin-right: 1rem">Create</button>
            </form>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Create",
        data: () => ({
            title: '',
            image: null,
        }),
        methods: {
            submitHandler() {
                const post = {
                    title: this.title,
                    id: Date.now(),
                    submitDate: new Date(),
                    image: this.image,
                    votes: 0,
                    user: this.$store.getters.username,
                    comments: []
                };
                this.$store.dispatch('createPost', post);
                this.$router.push('/')
            },
            onFileChange(image, e) {
                let files = e.target.files || e.dataTransfer.files;
                if (!files.length)
                    return;
                this.createImage(image, files[0]);
            },
            createImage(image, file) {
                const reader = new FileReader();
                reader.onload = (e) => {
                    this.image = e.target.result;
                };
                reader.readAsDataURL(file);
            }

        }
    }
</script>

<style scoped>

</style>
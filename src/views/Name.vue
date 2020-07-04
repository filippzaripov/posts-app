<template>
    <div class="container">
        <div class="row">
            <div class="section"></div>

            <div class="col s6 offset-s3">
                <div class="z-depth-3 x-depth-3 grey green-text lighten-4 row"
                     style="display: inline-block; padding: 0 48px 0 48px; border: 1px; margin-top: 10px; ">
                    <div class="section"></div>

                    <div class='row'>
                        <div class='input-field col s12'>
                            <input v-model="username" class='validate' type="text" name='username' id='email' required/>
                            <label for='email'>Username</label>
                        </div>
                    </div>
                    <br/>
                    <div class='row'>
                        <div class="col">
                            <button style="margin-left: 105px" type='submit' name='btn_login'
                                    class='btn blue offset-s6' @click="login">
                                Login
                            </button>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import axios from 'axios';
    import swal from 'sweetalert2';
    import mockup from '../assets/mockup.json'

    export default {
        name: 'Auth',
        computed: {
            posts() {
                return this.$store.getters.posts
            }
        },
        data: () => ({
            username: '',

        }),
        methods: {
            login() {
                // if (!this.posts.length) {
                //     this.$store.dispatch('createPost', mockup);
                // }
                this.$store.dispatch('setName', this.username);
                this.$router.push('/')
            }
        }
    }
</script>
<style scoped>
    .center {
        margin: 0;
        position: absolute;
        top: 50%;
        left: 50%;
        -ms-transform: translate(-50%, -50%);
        transform: translate(-50%, -50%);
    }
</style>

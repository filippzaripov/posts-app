<template>
    <div class="container">
        <div class="row">
            <div class="section"></div>

            <div class="container">
                <div class="z-depth-3 x-depth-3 grey green-text lighten-4 row"
                     style="display: inline-block; padding: 0 48px 0 48px; border: 1px; margin-top: 10px; ">
                    <div class="section"></div>

                    <div class='row'>
                        <div class='input-field col s12'>
                            <input v-model="credentials.username" class='validate' type="text" name='username' id='email' required/>
                            <label for='email'>Username</label>
                        </div>
                    </div>
                    <div class='row'>
                        <div class='input-field col m12'>
                            <input v-model="credentials.password" class='validate' type='password' name='password' id='password' required/>
                            <label for='password'>Password</label>
                        </div>
                        <label style='float: right;'>
                            <a><b style="color: #F5F5F5;">Forgot Password?</b></a>
                        </label>
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

    export default {
        name: 'Auth',
        data: () => ({
            credentials: {},
            valid: true,
            loading: false,
        }),
        methods: {
            login() {
                this.loading = true;
                axios.post('http://localhost:8000/auth/', this.credentials).then(res => {
                    this.$session.start();
                    this.$session.set('token', res.data.token);
                    this.$router.push('/');
                }).catch(e => {
                    this.loading = false;
                    if(e.response && e.response.status === 400){
                        M.toast({html: 'Wrong credentials!', classes: 'red'})
                    }else{
                        M.toast({html: 'Server error', classes: 'red'})
                    }
                })
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

<template>
    <div class="card w-75">
        <h5 class="card-header">Login</h5>
        <div class="card-body">
            <form action="#" @submit.prevent="login">
                <p class="text-center text-danger" v-if="loginFailed">Invalid E-Mail Address or Password!!</p>
                <div class="form-group row">
                    <label for="exampleInputEmail1" class="col-sm-3 col-form-label">E-Mail Address</label>
                    <div class="col-sm-9">
                        <input type="text" class="form-control" id="email" name="email" v-model="email" aria-describedby="emailAlert">
                        <small id="emailAlert" class="form-text text-danger" 
                            v-if="!isEmailValid" 
                            v-html="emailAlertMessage">
                        </small>
                    </div>
                </div>
                <div class="form-group row">
                    <label for="exampleInputPassword1" class="col-sm-3 col-form-label">Password</label>
                    <div class="col-sm-9">
                        <input type="password" class="form-control" id="password" name="password" v-model="password" aria-describedby="passwordAlert">
                        <small id="passwordAlert" class="form-text text-danger" 
                            v-if="!isPasswordValid"
                            v-html="passwordAlertMessage"
                        ></small>
                    </div>
                </div>
                <div class="form-group row">
                    <div class="col-sm-3"></div>
                    <div class="col-sm-9">
                        <button type="submit" class="btn btn-primary">Login</button>
                    </div>
                </div>
            </form>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Login',
        props: {
            msg: String
        },
        data() {
            return {
                email: '',
                password: '',
                isEmailValid: true,
                isPasswordValid: true,
                emailAlertMessage: "",
                passwordAlertMessage: "",
                loginFailed: false
            }
        },
        created() {
            //console.log(this.$store.state.auth.accessToken)
        },
        methods: {
            login() {
                // validate form
                let isValid = true;
                if(this.email == "") {
                    this.isEmailValid = false
                    this.emailAlertMessage = "E-mail Address is required!!"
                    isValid = false
                }
                else if(!this.validEmail(this.email)) {
                    this.isEmailValid = false
                    this.emailAlertMessage = "Wrong Email Address format!!"
                    isValid = false;
                }
                else {
                    this.isEmailValid = true
                }

                if(this.password == "") {
                    this.isPasswordValid = false
                    this.passwordAlertMessage = "Password is required!!"
                    isValid = false;
                }
                else {
                    this.isPasswordValid = true
                }

                if( !isValid ){
                    return false;
                }

                this.$store.dispatch('retrieveToken', {
                    email: this.email,
                    password: this.password
                }).then((result) => {
                    this.$store.dispatch('saveToken', result.message.accessToken)
                    this.$store.dispatch('retrieveUserInfo', result.message.accessToken)
                    this.$router.push('/home')
                }).catch(() => {
                    this.loginFailed = true
                })
            },
            validEmail: function (email) {
                var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
                return re.test(email);
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
    .card {
        margin: 0 auto;
        float: none;
        margin-bottom: 10px;
    }
</style>
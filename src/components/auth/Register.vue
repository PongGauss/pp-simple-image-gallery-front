<template>
    <div class="card w-75">
        <h5 class="card-header">Register</h5>
        <div class="card-body">
            <form action="#" @submit.prevent="register">
                <p class="text-center text-danger" v-if="registerFailed" v-html="registerFormError"></p>
                <div class="form-group row">
                    <label for="exampleInputEmail1" class="col-sm-3 col-form-label">Name</label>
                    <div class="col-sm-9">
                        <input type="text" class="form-control" id="name" name="name" v-model="name" aria-describedby="nameAlert">
                        <small id="nameAlert" class="form-text text-danger" 
                            v-if="!isNameValid" 
                            v-html="nameAlertMessage">
                        </small>
                    </div>
                </div>
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
                    <label for="exampleInputPassword1" class="col-sm-3 col-form-label">Confirm Password</label>
                    <div class="col-sm-9">
                        <input type="password" class="form-control" id="cpassword" name="cpassword" v-model="cPassword" aria-describedby="cPasswordAlert">
                        <small id="cPasswordAlert" class="form-text text-danger" 
                            v-if="!isCPasswordValid"
                            v-html="cPasswordAlertMessage"
                        ></small>
                    </div>
                </div>
                <div class="form-group row">
                    <div class="col-sm-3"></div>
                    <div class="col-sm-9">
                        <button type="submit" class="btn btn-primary">Register</button>
                    </div>
                </div>
            </form>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Register',
        data() {
            return {
				name: '',
                email: '',
				password: '',
				cPassword: '',
				isNameValid: true,
				isEmailValid: true,
				isPasswordValid: true,
				isCPasswordValid: true,
				nameAlertMessage: "",
                emailAlertMessage: "",
				passwordAlertMessage: "",
				cPasswordAlertMessage: "",
				registerFailed: false,
				registerFormError: ""
            }
        },
        created() {
            //console.log(this.$store.state.auth.accessToken)
        },
        methods: {
            register() {
                // validate form
				let isValid = true;
				if(this.name == "") {
                    this.isNameValid = false
                    this.nameAlertMessage = "Name is required!!"
                    isValid = false;
                }
                else {
                    this.isNameValid = true
				}
				
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
				
				if(this.cPassword == "") {
                    this.isCPasswordValid = false
                    this.cPasswordAlertMessage = "Confirm Password is required!!"
                    isValid = false;
				}
				else if(this.cPassword !== this.password) {
					this.isCPasswordValid = false
                    this.cPasswordAlertMessage = "Confirm Password Does not match with password!!"
                    isValid = false;
				}
                else {
                    this.isCPasswordValid = true
                }

                if( !isValid ){
                    return false;
                }

                this.$store.dispatch('register', {
                    email: this.email,
					password: this.password,
					cPassword: this.cPassword,
					name: this.name
                }).then(() => {
                    this.$router.push('/login')
                }).catch((error) => {
					//console.log(error.response.data.message.error.email[0])
					this.registerFormError = error.response.data.message.error.email[0]
                    this.registerFailed = true
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
<style scoped>
h3 {
    margin: 40px 0 0;
}
ul {
    list-style-type: none;
    padding: 0;
}
li {
    display: inline-block;
    margin: 0 10px;
}
a {
    color: #42b983;
}
</style>

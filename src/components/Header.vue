<template>
    <nav class="navbar navbar-expand-md navbar-dark bg-dark mb-4">
        <a class="navbar-brand" href="#">Simple Gallery</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarCollapse">
            <ul class="navbar-nav mr-auto">
                <router-link class="nav-item" to="/home" activeClass="active" tag="li">
                    <a class="nav-link">Home</a>
                </router-link>
                <router-link class="nav-item" to="/gallery" activeClass="active" tag="li">
                    <a class="nav-link">Gallery</a>
                </router-link>
            </ul>
            <ul class="navbar-nav" v-if="!checkAccessTokenExisting">
                <router-link class="nav-item" to="/login" activeClass="active" tag="li">
                    <a class="nav-link">Login</a>
                </router-link>
                <router-link class="nav-item" to="/register" activeClass="active" tag="li">
                    <a class="nav-link">Register</a>
                </router-link>
            </ul>
            <ul class="navbar-nav" v-else>
                <router-link class="nav-item" to="/logout" activeClass="active" tag="li">
                    <a class="nav-link" v-html="checkUserNameExisting"></a>
                </router-link>
            </ul>
        </div>
    </nav>
</template>

<script>
    export default {
        name: 'Header',
        data() {
            return {
                isAccessToken: false,
                logoutBTN: "",
            }
        },
        computed: {
            // a computed getter
            checkAccessTokenExisting: function () {
                // `this` points to the vm instance
                return this.$store.state.auth.accessToken != null;
            },
            checkUserNameExisting: function () {
                // `this` points to the vm instance
                return `Hi! ${this.$store.state.auth.userName}, Logout`;
            }
        }
    }
</script>
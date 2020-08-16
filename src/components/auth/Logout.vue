<template>
    <p>Logging out...</p>
</template>

<script>
    export default {
        name: 'Logout',
        created() {
            this.$store.dispatch('removeToken')
            this.$router.push('/login')
        }
    }
</script>
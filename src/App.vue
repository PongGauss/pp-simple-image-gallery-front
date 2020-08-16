<template>
  <div id="app">
    <appHeader></appHeader>
    <div class="container">
      <transition name="slide" mode="out-in">
        <router-view></router-view>
      </transition>
    </div>
  </div>
</template>

<script>
  import Header from './components/Header.vue'

  export default {
    name: 'App',
    components: {
      appHeader: Header
    },
    created() {
      this.$store.dispatch('loadAccessToken');
    }
  }
</script>

<style>
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
  }
</style>

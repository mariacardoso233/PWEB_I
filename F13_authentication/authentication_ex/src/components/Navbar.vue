<template>
  <div id="nav">
    <span v-if="!this.$store.getters.isLoggedUser">
      <router-link to="/">Login</router-link> |
      <router-link to="/register">Register</router-link> 
    </span>
    <span v-else>
      <router-link @click.native='logout' to="/">Logout</router-link>
    </span>
</div>
</template>

<script>
export default {
  name: "Navbar",
  methods:{
    logout() {
      this.$store.dispatch('logout')
    }
  }
};
</script>

<style>
</style>
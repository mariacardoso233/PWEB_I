<template>
  <div id="home">
      <h1>Area de autenticação </h1>
      <h2>Username: {{getUser.username}}</h2>
  </div>
</template>

<script>
export default {
    name: 'Home',
    computed: {
        // obtenção dos dados do "getters" da store
        // para aparecer na página "home" (informação do username)
        getUser(){
            return this.$store.getters.getLoggedUser
        }
    }
}
</script>

<style>

</style>
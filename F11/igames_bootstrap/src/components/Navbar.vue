<template>
  <div>
    <b-navbar toggleable="lg" type="dark" variant="info">
      <b-navbar-brand href="/">iGames</b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <router-link :to="{ name: 'InsertGame' }" tag="b-nav-item"
            >Adicionar Jogos</router-link
          >
          <router-link :to="{ name: 'ListGames' }" tag="b-nav-item"
            >Listar Jogos</router-link
          >
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>
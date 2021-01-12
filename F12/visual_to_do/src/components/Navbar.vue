<template>
  <div id="nav">
    <b-navbar toggleable="lg" type="dark" variant="info">
      <b-navbar-brand href="/">Visual To Do</b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <router-link :to="{ name: 'AddTasks'}" tag="b-nav-item">
            Adicionar Tarefas
          </router-link>
          <router-link :to="{ name: 'ListTasks' }" tag="b-nav-item">
            Listar Tarefas
          </router-link>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
export default {
  name: "Navbar",
};
</script>

<style>
</style>
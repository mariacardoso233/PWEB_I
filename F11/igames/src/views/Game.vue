<template>
  <div>
    <div v-if="game">
      <h2>{{ game.name }}</h2>
      <img :src="game.cover" />
      <b>Descrição:</b>
      <p>{{ game.description }}</p>
      <b>Ano:</b>
      <p>{{ game.year }}</p>
      <b>Género:</b>
      <p>{{ game.gender }}</p>
      <b>Nº de likes:</b>
      <p>{{ game.likes }}</p>
    </div>
    <p v-else>Jogo não encontrado!</p>
    <a role="button" @click="goBack">Retroceder</a>
  </div>
</template>

<script>
export default {
  name: "Game",
  data() {
    return {
      game: null,
    };
  },
  created() {
    let games = [];
    if (localStorage.getItem("games")) {
      games = JSON.parse(localStorage.getItem("games"));
    }
    this.game = games.find((g) => g.id == this.$route.params.id);
    console.log(this.game);
  },
  methods: {
    goBack() {
      //retroceder pagina anterior
      //this.$router.go(-1)

      //ir pagina listagem de jogos
      this.$router.push({ name: "ListGames" });
    },
  },
};
</script>

<style>
</style>
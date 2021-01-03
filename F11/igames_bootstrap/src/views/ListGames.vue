<template>
  <div id="app">
    <b-container>
      <b-row>
        <GameCard
          v-for="game in games"
          :key="game.name"
          :game="game"
        ></GameCard>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import GameCard from "../components/GameCard.vue";
export default {
  name: "ListGames",
  components: {
    GameCard,
  },
  data() {
    return {
      games: [],
    };
  },
  created() {
    if (localStorage.games) {
      this.games = JSON.parse(localStorage.games);
    }
  },
};
</script>

<style>
</style>
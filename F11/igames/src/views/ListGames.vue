<template>
  <div class="card-columns" v-if="games.length > 0">
    <GameCard
      v-for="(game, i) in games"
      :game="game"
      :key="i"
      @increaseLikes="increaseLikes"
    ></GameCard>
  </div>
  <div v-else>
    <p>NÃO HÁ JOGOS!</p>
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
    if (localStorage.getItem("games")) {
      this.games = JSON.parse(localStorage.getItem("games"));
    }
  },
  methods: {
    increaseLikes(gameId) {
      for (let game of this.games) {
        if (game.id == gameId) {
          game.likes++;
        }

        this.saveGame();
      }
    },
    saveGame() {
      localStorage.setItem("games", JSON.stringify(this.games));
    },
  },
};
</script>

<style>
</style>
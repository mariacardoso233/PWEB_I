<template>
  <div class="card" style="width: 18rem">
    <img class="card-img-top" :src="game.cover" alt="Card image cap" />
    <div class="card-body">
      <h5 class="card-title">{{ game.name }}</h5>
      <p class="card-text">{{ getDescription }}</p>
      <p class="card-text"><b>Nº de likes</b>{{ game.likes }}</p>
      <button @click="increaseLikes" class="btn btn-primary">Gosto</button>
      <button @click="seeDetails" class="btn btn-primary">Ver detalhes</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "GameCard",
  props: {
    game: Object,
  },
  computed: {
    getDescription() {
      return this.game.description.length > 30
        ? this.game.description.substr(0, 30) + "..."
        : this.game.description;
    },
  },
  methods: {
    increaseLike() {
      this.$emit("increaseLikes", this.games.id);
    },
    seeDetails() {
      this.$router.push({ name: "Game", params: { id: this.game.id } });
    },
  },
};
</script>

<style>
</style>
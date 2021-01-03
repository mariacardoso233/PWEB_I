<template>
  <div>
    <b-col cols="8">
      <b-card
        :title="game.name"
        :sub-title="game.likes + 'likes'"
        :img-src="game.cover"
        img-alt="Image"
        img-top
        tag="article"
        style="max-width: 20rem"
        class="mb-2"
      >
        <b-card-text>
          {{ getDescription(game.description) }}
        </b-card-text>

        <b-button @click.once="game.likes++" variant="primary">GOSTAR</b-button>
        <router-link
          :to="{ name: 'Game', params: { gameId: game.id } }"
          tag="b-button"
          variant="warning"
        >
          VER
        </router-link>
      </b-card>
    </b-col>
  </div>
</template>

<script>
export default {
  name: "GameCard",
  props: {
    game: Object,
  },
  methods: {
    getDescription(desc) {
      if (desc.length < 30) {
        return desc;
      } else {
        return `${(desc.substr(0), 30)}...`;
      }
    },
  },
};
</script>

<style>
</style>
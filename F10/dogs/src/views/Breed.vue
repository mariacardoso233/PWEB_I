<template>
  <div class="app">
    <label for="txtBreed">Raça:</label>
    <input type="text" id="txtBreed" v-model="breed" />
    <button @click="getProtoByBreed">OBTER FOTO</button>
    <p v-if="dog.status == 'success'">
      <img :src="dog.message" alt="Dog" />
    </p>
    <p v-else>Raça inexistente ou sem foto!</p>
  </div>
</template>

<script>
export default {
  name: "Breed",
  data() {
    return {
      breed: "",
      dog: "",
    };
  },
  methods: {
    async getPhotoByBreed() {
      const response = await fetch(
        `https://dog.ceo/api/breed/${this.breed}/images/random`
      );
      this.dog = await response.json();
    },
  },
};
</script>

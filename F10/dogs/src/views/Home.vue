<template>
  <div class="home">
    <img alt="Dog" src="dog.message" />
  </div>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      dog: "",
    };
  },
  async created() {
    const response = await fetch("https://dog.ceo/api/breeds/image/random");
    this.dog = await response.json();
  },
};
</script>

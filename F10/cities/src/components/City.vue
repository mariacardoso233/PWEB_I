<template>
  <div class="card">
    <img class="card-img-top" :src="city.link" />
    <div class="card-body">
      <h4 class="card-title">{{ city.name }}</h4>
    </div>
  </div>
</template>

<script>
export default {
  name: "City",
  props: {
    city: Object,
  },
};
</script>

<style>
</style>
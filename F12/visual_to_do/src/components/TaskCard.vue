<template>
  <b-card
    :img-src="getCategory.img"
    :img-alt="getCategory.name"
    img-top
    tag="article"
    style="max-width: 20rem;"
    class="mb-2"
  >
    <b-card-text>{{ task.name }}</b-card-text>
    <b-card-text>Prioridade: {{ task.priority }}</b-card-text>
    <b-button @click="solveTask" :disabled="task.resolved" variant="success"
      >Resolver</b-button
    >
    <b-button @click="deleteTask" variant="danger">Apagar</b-button>
  </b-card>
</template>

<script>
export default {
  name: "TaskCard",
  props: {
    task: Object
  },
  computed: {
    getCategory() {
      return this.$store.getters.getCategoryById(this.task.category);
    }
  },
  methods: {
    solveTask() {
      this.$store.dispatch("solveTask", this.task.id);
      console.log("solved");
    },
    deleteTask() {
      this.$store.dispatch("deleteTask", this.task.id);
      console.log("deleted");
    }
  }
};
</script>

<style></style>

<template>
  <b-container>
    <b-row class="justify-content-md-center">
      <b-alert variant="success" :show="showSuccess">Task criada!</b-alert>
    </b-row>
    <b-row class="justify-content-md-center">
      <b-form @submit.prevent="onSubmit" @reset="onReset">
        <b-form-group
          id="input-group-1"
          label="Nome da task:"
          label-for="input-1"
        >
          <b-form-input
            id="input-1"
            v-model="task.name"
            type="text"
            required
          ></b-form-input>
        </b-form-group>

        <b-form-group id="input-group-3" label="Categoria:" label-for="input-3">
          <b-form-select
            id="input-3"
            v-model="task.category"
            :options="$store.getters.getCategoriesForSelect"
            required
          ></b-form-select>
        </b-form-group>

        <b-form-group
          id="input-group-2"
          label="Prioridade:"
          label-for="input-2"
        >
          <b-form-input
            id="input-2"
            type="number"
            min="1"
            max="5"
            v-model="task.priority"
            required
          ></b-form-input>
        </b-form-group>

        <b-button type="submit" variant="primary" class="mr-2">Criar</b-button>
        <b-button type="reset" variant="danger">Limpar</b-button>
      </b-form>
    </b-row>
  </b-container>
</template>

<script>
export default {
  name: "CreateTask",
  data() {
    return {
      task: {
        name: "",
        category: null,
        priority: 1
      },
      showSuccess: false
    };
  },
  methods: {
    onReset() {
      this.task = {
        id: 0,
        name: "",
        category: null,
        priority: 1
      };
    },
    onSubmit() {
      const task = {
        id: this.$store.getters.getNextTaskId,
        name: this.task.name,
        category: this.task.category,
        priority: this.task.priority,
        resolved: false
      };
      this.$store.dispatch("saveTask", task);
      this.showSuccess = true;
    }
  }
};
</script>

<style></style>

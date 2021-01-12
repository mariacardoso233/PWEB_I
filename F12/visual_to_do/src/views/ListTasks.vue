<template>
  <b-container>
    <b-row class="justify-content-md-center">
      <b-col>
        <p>Ordenar</p>
        <b-form-select
          v-model="optionSortSelected"
          :options="optionsSort"
        ></b-form-select>
      </b-col>
      <b-col>
        <p>Filtrar por categoria</p>
        <b-form-select
          v-model="filterCategorySelected"
          :options="getCategories"
        >
          <template #first>
            <b-form-select-option value="all">TODAS</b-form-select-option>
          </template>
        </b-form-select>
      </b-col>
    </b-row>
    <br />
    <b-row v-if="getTasks.length > 0">
      <b-col>
        <b-button @click="solveAll" variant="success">Resolver Todas</b-button>
      </b-col>
      <b-col>
        <b-button @click="deleteAll" variant="danger">Apagar Todas</b-button>
      </b-col>
    </b-row>
    <br />
    <b-row>
      <b-card-group columns v-if="getTasks.length > 0">
        <TaskCard v-for="myTask in getTasks" :key="myTask.id" :task="myTask" />
      </b-card-group>
      <p v-else>Não há tasks criadas!</p>
    </b-row>
  </b-container>
</template>

<script>
import TaskCard from "../components/TaskCard";
export default {
  name: "ListTasks",
  components: {
    TaskCard,
  },
  data() {
    return {
      optionsSort: [
        {
          value: -1,
          text: "Prioridade ascendente",
        },
        {
          value: 1,
          text: "Prioridade descendente",
        },
      ],
      optionSortSelected: null,
      filterCategorySelected: "all",
    };
  },
  methods: {
    deleteAll() {
      this.getTasks.forEach((task) => {
        this.$store.dispatch("deleteTask", task.id);
      });
    },
    solveAll() {
      this.getTasks.forEach((task) => {
        this.$store.dispatch("solveTask", task.id);
      });
    },
  },
  computed: {
    getCategories() {
      return this.$store.getters.getCategoriesForSelect;
    },
    getTasks() {
      return this.$store.getters.getTasksFiltered(
        this.optionSortSelected,
        this.filterCategorySelected
      );
    },
  },
};
</script>

import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    categories: [
      {
        id: 1,
        name: "Front-end",
        img: "https://miro.medium.com/max/400/1*dszrnf9dNssNBWujoB2F9Q.png",
      },
      {
        id: 2,
        name: "Back-end",
        img:
          "https://i0.wp.com/metro.co.uk/wp-content/uploads/2018/09/junhoe1-5da3.jpg?quality=90&strip=all&zoom=1&resize=644%2C598&ssl=1",
      },
    ],
    tasks: localStorage.getItem("tasks")
      ? JSON.parse(localStorage.getItem("tasks"))
      : [],
  },
  getters: {
    getCategoryById: (state) => (id) => {
      return state.categories.find((category) => category.id == id);
    },



    

    getCategories(state) {
      return state.categories;
    },
    getCategoriesForSelect: (state) =>
      state.categories.map((category) => ({
        value: category.id,
        text: category.name,
      })),

    getTasks: (state) => {
      return state.tasks;
    },
    getTasksFiltered: (state) => (_sort, _category) => {
      const tasks_filtered = state.tasks.filter(
        (task) => task.category == _category || _category == "all"
      );

      return tasks_filtered.sort((a, b) => {
        if (a.priority > b.priority) return -1 * _sort;
        if (a.priority < b.priority) return 1 * _sort;
        return 0;
      });
    },
    getNextTaskId: (state) => {
      return state.tasks.length > 0
        ? state.tasks[state.tasks.length - 1].id + 1
        : 1;
    },
  },
  mutations: {
    SAVE_TASK(state, task) {
      state.tasks.push(task);
      localStorage.setItem("tasks", JSON.stringify(state.tasks));
    },


    SOLVE_TASK(state, id) {
     
      state.tasks.forEach((task) => {
        if (task.id == id) {
          task.resolved = true;
        }
      });

      localStorage.setItem("tasks", JSON.stringify(state.tasks));
    },

    REMOVE_TASK(state, id) {
      state.tasks = state.tasks.filter((task) => task.id != id);

      localStorage.setItem("tasks", JSON.stringify(state.tasks));
    },
  },
  actions: {
    saveTask(context, task) {
      context.commit("SAVE_TASK", task);
    },
    solveTask(context, id) {
      context.commit("SOLVE_TASK", id);
    },
    deleteTask(context, id) {
      context.commit("REMOVE_TASK", id);
    },
  },
  modules: {},
});

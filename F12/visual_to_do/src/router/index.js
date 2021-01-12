import Vue from "vue";
import VueRouter from "vue-router";
import AddTasks from "../views/AddTasks.vue";
import ListTasks from "../views/ListTasks.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/add",
    name: 'AddTasks',
    component: AddTasks
  },
  {
    path: "/list",
    name: 'ListTasks',
    component: ListTasks
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;

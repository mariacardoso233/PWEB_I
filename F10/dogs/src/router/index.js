import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Breed from "../views/Breed.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/breed",
    name: "Breed",
    component: Breed
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASES_URL,
  routes
});

export default router;

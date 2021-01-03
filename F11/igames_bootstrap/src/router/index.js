import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import InsertGame from "../views/InsertGame.vue";
import ListGames from "../views/ListGames.vue";
import Game from "../views/Game.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/isert",
    name: "InsertGame",
    component: InsertGame
  },
  {
    path: "/list",
    name: "ListGames",
    component: ListGames
  },
  {
    path: "/games/:gameId",
    name: "Game",
    component: Game
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;

import Vue from "vue";
import VueRouter from "vue-router";
import store from "../store"
import Login from "../views/Login.vue";
import Home from "../views/Home.vue";
import Register from "../views/Register.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Login",
    component: Login
  },
  {
    path: "/home",
    name: "Home",
    component: Home,
    meta: {
      requiredAuth: true
    }
  },
  {
    path: "/register",
    name: "Register",
    component: Register
  }

];

const router = new VueRouter({
  routes
});

//Protetor de navegação, ou seja, 
//ninguém que não esteja autenticado consiga aceder à area privada
router.beforeEach((to, from, next) => {
  //Se o user que entrar numa pág que está privada e não está logado
  if (to.meta.requiredAuth && !store.getters.isLoggedUser) { //verificação se a rota de destino é uma rota privada e se o utilizador está ou não autenticado
    next({name: 'Login'})
  } else {
    next();
  }
});

export default router;

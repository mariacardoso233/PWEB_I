import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    users:
      localStorage.getItem('users')
        ? JSON.parse(localStorage.getItem('users'))
        : [
          { username: "1", password: "1", location: "1" },
          { username: "2", password: "2", location: "2" },
          { username: "3", password: "3", location: "3" }
        ],
    loggedUser: localStorage.getItem('loggedUser')
      ? JSON.parse(localStorage.getItem('loggedUser'))
      : ''
  },
  getters: {
    //Obtenção dos dados do user logado
    getLoggedUser: (state) => state.loggedUser,
    //Verificação de se o utilizador está autenticado ou não
    isLoggedUser: (state) => state.loggedUser == '' ? false : true
  },
  actions: {
    login(context, payload) {
      //Verificar se o user já existe
      const user = context.state.users.find(user => user.username === payload.username && user.password === payload.password)
      if (user != undefined) {
        //login com sucesso
        context.commit('LOGIN', user)
        //guardar os dados do commit na localStorage 
        localStorage.setItem('loggedUser', JSON.stringify(user))

      } else {
        //login sem sucesso
        throw Error('Login inválido!')
      }
    },

    logout(context) {
      context.commit('LOGOUT')
      //remover o user guardado na localStorage quando se dá logout
      localStorage.removeItem('loggedUser')
    },

    register(context, payload) {
      //Verificar se o user já existe
      const user = context.state.users.find(
        (user) => user.username === payload.username
      );
      if (user == undefined) {
        //registo com sucesso
        context.commit('REGISTER', payload)
        localStorage.setItem('users', JSON.stringify(context.state.users))
      } else {
        //registo sem sucesso
        throw Error('Username já existente!!')
      }
    },
  },
  mutations: {
    LOGIN(state, user) {
      state.loggedUser = user
    },
    LOGOUT(state) {
      state.loggedUser = ""
    },
    REGISTER(state, user) {
      state.users.push(user)
    }
  }

});

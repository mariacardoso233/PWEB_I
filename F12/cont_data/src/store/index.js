import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    count: 0
  },
  getters: {
    getCurrentCount(state) {
      return state.count
    }
  },
  mutations: {
    INCREMENT(state) {
      state.count++
    },
    DECREMENT(state) {
      state.count--
    }
  },
  actions: {
    increment(context){
      context.commit('INCREMENT')
    },
    decrement(context){
      context.commit('DECREMENT')
    },
  },
  modules: {}
});

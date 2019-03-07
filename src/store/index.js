import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    tickets: [],
    showTickets: false,
  },
  mutations: {
    setTickets (state, payload) {
      state.tickets = payload.tickets;
      state.showTickets = payload.showTickets;
    },
  },
  actions: {
    tickets({ commit }, payload) {
      commit('setTickets', payload);
    },
  }
})

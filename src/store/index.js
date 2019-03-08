import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    tickets: [],
    showTickets: false,
    favorites: JSON.parse(localStorage.getItem('myFavorites')) || [],
  },
  mutations: {
    setTickets (state, payload) {
      state.tickets = payload.tickets;
      state.showTickets = payload.showTickets;
    },
    saveFavorites (state, favorites) {
      localStorage.setItem('myFavorites', JSON.stringify(favorites));
      state.favorites = JSON.parse(localStorage.getItem('myFavorites'));
    },
  },
  actions: {
    tickets({ commit }, payload) {
      commit('setTickets', payload);
    },
    saveFavorites({ commit }, favorites) {
      commit('saveFavorites', favorites);
    },
  }
})

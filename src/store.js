import Vue from 'vue'
import Vuex from 'vuex'

import api from './api.js'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {

    menuExposed: true,
    pages: [],
    posts: []
  },
  mutations: {
    updatePages(state, pages) {
      state.pages = pages;
    },
    updatePosts(state, posts) {

      state.posts = posts;
    },
    toggleMenuExposure(state) {

      if (state.menuExposed) state.menuExposed = false;
      else state.menuExposed = true;
    }
  },
  actions: {

    async loadPages (context) {

      context.commit('updatePages', await api.getAllPages())
    },
    async loadPosts (context) {

      context.commit('updatePosts', await api.getAllPosts())
    }
  }
})

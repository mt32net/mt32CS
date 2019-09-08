import Vue from 'vue'
import Vuex from 'vuex'

import api from './api.js'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {

    menuExposed: true,
    pages: [],
    posts: [],
    token: JSON.parse(localStorage.getItem('token')),
    timeOptions: { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' },
    me: {
      name: ''
    },
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
    },
    updateToken(state, token) {
      localStorage.setItem("token", JSON.stringify(token))
    },
    removeToken() {
      localStorage.removeItem("token")
    },
    updateMe(state, me) {
      state.me = me
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

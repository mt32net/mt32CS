import Vue from 'vue'
import Vuex from 'vuex'

import apollo from './apolloClient'
import gql from 'graphql-tag'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {

    menuExposed: true,
    pages: [],
    articles: []
  },
  mutations: {
    updatePages(state, pages) {
      state.pages = pages;
    },
    updateArticles(state, articles) {

      state.articles = articles;
    },
    toggleMenuExposure(state) {

      if (state.menuExposed) state.menuExposed = false;
      else state.menuExposed = true;
    }
  },
  actions: {

    async loadPages (context) {

      const response = await apollo.query({

        query: gql`
        query {
          pages {
            id
            title
            icon
          }
        }
        `
      })

      context.commit('updatePages', response.data.pages)
    },
    async loadArticles (context) {

      const response = await apollo.query({

        query: gql`
        query {
          articles {
            id,
            title,
            content
          }
        }
        `
      })

      context.commit('updateArticles', response.data.articles)
    }
  }
})

import Vue from 'vue'
import Vuex from 'vuex'

import apollo from './apolloClient'
import gql from 'graphql-tag'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {

    currentPage: null,
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
    setCurrentPage(state, page) {

      state.currentPage = page;
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
            title,
            content
          }
        }
        `
      })

      context.commit('updatePages', response.data.pages)
    }
  }
})

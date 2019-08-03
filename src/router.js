import Vue from 'vue'
import Router from 'vue-router'
import Grid from './views/Grid.vue'
import Full from './views/Full.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Grid
    },
    {
      path: '/page/:id',
      name: 'page',
      component: Full
    },
    {
      path: '/post/:id',
      name: 'post',
      component: Full
    }
  ]
})

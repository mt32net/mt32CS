import Vue from 'vue'
import Router from 'vue-router'
import Grid from './views/Grid.vue'
import Full from './views/Full.vue'
import Search from './views/Search.vue'
import Panel from './views/Panel.vue'

Vue.use(Router)

const router =  new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Grid,
      meta: {
        title: 'Home'
      }
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
    },
    {
      path: '/panel/',
      name: 'panel',
      component: Panel
    },
    {
      path: '/search/:q',
      name: 'search',
      component: Search
    }
  ]
})

router.beforeEach((to, from, next) => {
  /* It will change the title when the router is change*/
  if (to.meta.title) {
    document.title = to.meta.title + ' | mt32.net';
  }
  next()
})

export default router

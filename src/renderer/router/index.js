import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'landing-page',
      component: require('@/pages/HomePage').default
    },
    {
      path: '/navigation',
      name: 'navigation-page',
      component: require('@/pages/NavigationPage').default
    },
    {
      path: '*',
      redirect: '/'
    }
  ]
})

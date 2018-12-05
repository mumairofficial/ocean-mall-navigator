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
      path: '/shop',
      name: 'shop-page',
      component: require('@/pages/ShopPage').default
    },
    {
      path: '/watch',
      name: 'watch-page',
      component: require('@/pages/WatchPage').default
    },
    {
      path: '/play',
      name: 'play-page',
      component: require('@/pages/PlayPage').default
    },
    {
      path: '/eat',
      name: 'eat-page',
      component: require('@/pages/EatPage').default
    },
    {
      path: '/event',
      name: 'event-page',
      component: require('@/pages/EventPage').default
    },
    {
      path: '/service',
      name: 'service-page',
      component: require('@/pages/ServicePage').default
    },
    {
      path: '*',
      redirect: '/'
    }
  ]
})

import { createRouter, createWebHistory } from 'vue-router'

import HomePage from '@/pages/HomePage.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', name: 'HomePage', component: HomePage },

    { path: '/movie', name: 'movie', component: () => import('@/pages/MoviesPage.vue') },
    { path: '/tv', name: 'tv', component: () => import('@/pages/TvsPage.vue') },
    { path: '/search', name: 'search', component: () => import('@/pages/SearchPage.vue') },
    { path: '/movie/:id', name: 'Movie', component: () => import('@/pages/Movie.vue') },
    { path: '/tv/:id', name: 'Tv', component: () => import('@/pages/Tv.vue') },
  ],

  scrollBehavior() {
    return {
      top: 0
    }
  }
})

export default router

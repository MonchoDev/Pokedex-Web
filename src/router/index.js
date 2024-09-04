import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/my-pokemons',
      name: 'My Pokemons',
      component: () => import('../views/MyPokemonsView.vue')
    },    
    {
      path: '/pokedex',
      name: 'pokedex',
      component: () => import('../views/PokedexView.vue')
    },
    {
      path: '/search',
      name: 'search',
      component: () => import('../views/SearchView.vue')
    },    {
      path: '/friends',
      name: 'friends',
      component: () => import('../views/FriendsView.vue')
    }
  ]
})

export default router

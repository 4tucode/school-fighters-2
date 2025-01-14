import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'personajes',
    component: () => import('../views/VistaPersonajes.vue')
  },
  {
    path: '/escenarios',
    name: 'escenarios',
    component: () => import('../views/VistaEscenarios.vue')
  },
  {
    path: '/combate',
    name: 'combate',
    component: () => import('../views/VistaCombate.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router

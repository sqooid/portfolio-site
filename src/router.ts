import { createRouter, createWebHistory } from 'vue-router'
import NotFound from '@/404.vue'
import routes from 'voie-pages'

routes.push({
  path: '/:catchAll(.*)',
  component: NotFound,
})

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

export default router

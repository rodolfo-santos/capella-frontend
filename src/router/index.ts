import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/category',
      name: 'category',
      component: () => import('../pages/category/index.vue')
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: () => import('../pages/dashboard/index.vue')
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../pages/login/index.vue')
    },
    {
      path: '/register',
      name: 'register',
      component: () => import('../pages/register/index.vue')
    }
  ]
})

export default router

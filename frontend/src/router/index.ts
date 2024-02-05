import { createRouter, createWebHistory } from 'vue-router'
import ShoppingCartViewVue from '@/views/ShoppingCartView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: '/cart'
    },
    {
      path: '/cart',
      name: 'cart',
      component: ShoppingCartViewVue
    }
  ]
})

export default router

import { createRouter, createWebHistory } from 'vue-router'
import FormPage from '@/pages/form-page/FormPage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: FormPage
    }
  ]
})

export default router

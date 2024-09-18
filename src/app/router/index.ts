import { createRouter, createWebHistory } from 'vue-router'
import FormPage from '@/pages/form-page/FormPage.vue'
import PreviewPage from '@/pages/perview-page/PreviewPage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'form',
      component: FormPage
    },
    {
      path: '/preview',
      name: 'preview',
      component: PreviewPage
    }
  ]
})

export default router

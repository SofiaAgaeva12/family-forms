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

let previousRoute = null
let firstLoad = true

router.beforeEach((to, from, next) => {
  if (firstLoad) {
    to.meta.isForward = null
    firstLoad = false
  } else {
    if (previousRoute) {
      to.meta.isForward = previousRoute < to.fullPath
    } else {
      to.meta.isForward = true
    }
  }

  previousRoute = to.fullPath

  next()
})

export default router

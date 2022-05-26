import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Layout',
    component: () => import('@/layout/indexPage.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router

import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import Layout from '@/layout/indexPage.vue'

const routes = [
  {
    path: '/',
    component: Layout,
    redirect: '/dashboardPage',
    children: [
      {
        path: '/dashboardPage',
        name: 'DashboardPage',
        component: () => import('@/views/dashboardPage.vue')
      }
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router

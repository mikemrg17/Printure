import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Home from '../views/Home.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/home',
    name: 'Home',
    component: Home
  },
  {
    path: '/items',
    name: 'Items',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Items.vue')
  },
  {
    path : '/login',
    name: 'LogIn',
    component: () => import('@/views/LogIn.vue')
  }
  //When we use lazy-loaded we load components when we need them, avoiding to load'em when they are not used
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router

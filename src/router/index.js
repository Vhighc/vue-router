import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/jobs',
    name: 'jobs',
    component: () => import(/* webpackChunkName: "jobs" */ '../views/Jobs/JobsView.vue')
  },
  {
    // path: '/jobs/:slug',
    path: '/jobs/:id',
    name: 'JobDetails',
    component: () => import(/* webpackChunkName: "jobs" */ '../views/Jobs/JobDetails.vue'),
    props: true
  },
  // reedirect
  {
    // path: '/jobs/:slug',
    path: '/all-jobs',
    redirect: '/jobs',
  },
    // catch all 404
    {
      path: '/:catchAll(.*)',
      name: 'NotFound',
      component: () => import(/* webpackChunkName: "jobs" */ '../views/NotFound.vue'),
    },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router

import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path:'/ButtonOne' ,
      name: "ButtonOne",
      component: () => import('../views/ButtonOne.vue'),
    },

    {
      path:'/ButtonTwo' ,
      name: "ButtonTwo",
      component: () => import('../views/ButtonTwo.vue'),
    },
    {
      path: '/',
      name: 'Our Missions',
      component: HomeView,
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue'),
    },
  ],
})

export default router

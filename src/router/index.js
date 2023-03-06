import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Login from "../views/Login.vue"
import Rigister from"../views/Rigister.vue"
import hitory from "../views/hitory.vue"
import car from "../views/Car.vue"
import contact1 from"../views/contact.vue"
import profile from '../views/profile.vue'
import reset from '../views/forget.vue'




const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/home',
      name: 'Home',
      component: HomeView
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/rigis',
      name: 'rigister',
      component: Rigister
    },
    {
      path: '/hitory',
      name: 'hitory',
      component: hitory
    },
    {
      path: '/Car',
      name: 'Car',
      component: car
    },
    {
      path: '/contact',
      name: 'contact',
      component: contact1
    },
    {
      path: '/profile',
      name: 'profile',
      component: profile
    },
    {
      path: '/reset',
      name: 'reset',
      component: reset
    },
   
   
    
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    }
  ]
})

export default router

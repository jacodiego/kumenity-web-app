import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '@/pages/HomePage.vue'
import SignInPage from '@/pages/auth/SignInPage.vue'
import SignUpPage from '@/pages/auth/SignUpPage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomePage,
      meta: { layout: 'DefaultLayout' }
    },
    {
      path: '/auth/sign_in',
      name: 'signIn',
      component: SignInPage,
      meta: { layout: 'DefaultLayout' }
    },
    {
      path: '/auth/sign_up',
      name: 'signUp',
      component: SignUpPage,
      meta: { layout: 'DefaultLayout' }
    },
    /*{
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('@/pages/AboutView.vue')
    }*/
  ]
})

export default router

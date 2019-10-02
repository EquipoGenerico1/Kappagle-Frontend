import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Login from './views/Login.vue'
import SignUp from './views/SignUp.vue'
import { isLogged, getRole } from './helpers/role'
import EmployersList from './views/EmployersList.vue'


Vue.use(Router)

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      redirect: 'landing'
    },
    {
      path: '/login',
      name: 'login',
      component: Login,
      beforeEnter: (to, from, next) => {
        if (isLogged()) {
          next('');
        } else {
          next();
        }
      }
    },
    {
      path: '/signUp',
      name: 'signUp',
      component: SignUp
    },
    {
      path: '/home',
      name: 'home',
      component: Home,
      beforeEnter: (to, from, next) => {
        if (isLogged()) {
          next();
        } else {
          next('/login')
        }
      }
    },
    {
      path: '/users',
      name: 'users',
      component: EmployersList
      , beforeEnter: (to, from, next) => {
        if (getRole() == 'ROLE_ADMIN') {
          next();
        } else {
          next('/login')
        }
      }
    },
    {
      path: '/landing',
      name: 'landing',
      component: () => import('./views/Landing.vue'),
      beforeEnter: (to, from, next) => {
        if (isLogged()) {
          next();
        } else {
          next('/login')
        }
      }
    },
    {
      path: '/history',
      name: 'history',
      component: () => import('./views/LoggedHistory.vue'),
      beforeEnter: (to, from, next) => {
        if (isLogged()) {
          next();
        } else {
          next('/login')
        }
      }
    }
    ,
    {
      path: '/user/:id/history',
      name: 'user-history',
      component: () => import('./views/LoggedHistory.vue'),
      beforeEnter: (to, from, next) => {
        if (isLogged()) {
          next();
        } else {
          next('/login')
        }
      }
    }
  ]
})

export default router
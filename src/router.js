import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Login from './views/Login.vue'
import SignUp from './views/SignUp.vue'
import Checks from './views/Checks.vue'
import { isLogged, getRole } from './helpers/role'
import EmployersList from './views/EmployersList.vue'
import myProfile from './views/MyProfile.vue'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      redirect: 'checks'
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
      path: '/checks',
      name: 'checks',
      component: () => import('./views/Checks.vue'),
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
      path: '/MyProfile',
      name: 'myProfile',
      component: myProfile,
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
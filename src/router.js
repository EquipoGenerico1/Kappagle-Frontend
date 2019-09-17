import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Login from './views/Login.vue'
import SignUp from './views/SignUp.vue'
import Checks from './views/Checks.vue'
import {isLogged, getRole} from './helpers/role'
import EmployersList from './views/EmployersList.vue'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      redirect: 'login'
    },
    {
      path: '/login',
      name: 'login',
      component: Login,
      beforeEnter: (to, from, next) => {
        if(isLogged()){
          next('/checks');
        }else{
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
        if(isLogged()){
          next();
        }else{
          next('/login')
        }
      }
    },
    {
      path: '/checks',
      name: 'checks',
      component: Checks,
      beforeEnter: (to, from, next) => {
        if(isLogged()){
          next();
        }else{
          next('/login')
        }
      }
    },
    {
      path: '/users',
      name: 'users',
      component: EmployersList
      ,beforeEnter: (to, from, next) => {
        if(getRole() == 'ROLE_ADMIN'){
          next();
        }else{
          next('/login')
        }
      }
    }
  ]
})

export default router
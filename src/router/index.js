import Vue from 'vue'
import Router from 'vue-router'
import PanelLayOut from '../components/layout/PanelLayOut'
import Login from '../components/Login'
import AuthLayOut from '../components/auth/AuthLayOut'
import Signup from '../components/Signup'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'PanelLayOut',
      component: PanelLayOut,
      redirect: '/home',
      children: [
        {
          path: 'home',
          name: 'Home',
          component: Login
        }
      ]
    }, {
      path: '/auth',
      name: 'AuthLayOut',
      component: AuthLayOut,
      redirect: '/auth/login',
      children: [
        {
          path: 'login',
          name: 'Login',
          component: Login
        }, {
          path: 'signup',
          name: 'SignUp',
          component: Signup
        }
      ]
    }
  ]
})

import Vue from 'vue'
import Router from 'vue-router'
import PanelLayOut from '../components/layout/PanelLayOut'
import Login from '../components/Login'
import AuthLayOut from '../components/auth/AuthLayOut'
import Signup from '../components/Signup'
import Welcome from "../components/layout/Welcome";
import Me from "../components/layout/me/Me";
import Details from "../components/layout/me/Details";
import ChangePassword from "../components/layout/me/ChangePassword";
import ChangeEmail from "../components/layout/me/ChangeEmail";

Vue.use(Router);

const router = new Router({
  routes: [
    {
      path: '/',
      name: 'PanelLayOut',
      component: PanelLayOut,
      redirect: '/welcome',
      meta: {
        breadcrumb: {
          title: '首页'
        }
      },
      children: [
        {
          path: 'welcome',
          name: 'Welcome',
          component: Welcome,
          meta: {
            breadcrumb: {
              title: '欢迎使用'
            }
          }
        }, {
          path: 'me',
          name: 'Me',
          component: Me,
          redirect: '/me/details',
          meta: {
            breadcrumb: {
              title: '我的账户'
            }
          },
          children: [
            {
              path: 'details',
              name: 'Details',
              component: Details,
              meta: {
                breadcrumb: {
                  title: '账户详情'
                }
              }
            },
            {
              path: 'change-password',
              name: 'ChangePassword',
              component: ChangePassword,
              meta: {
                breadcrumb: {
                  title: '修改密码'
                }
              }
            },
            {
              path: 'change-email',
              name: 'ChangeEmail',
              component: ChangeEmail,
              meta: {
                breadcrumb: {
                  title: '变更邮箱'
                }
              }
            }
          ]
        }
      ]
    },
    {
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
});

export default router;

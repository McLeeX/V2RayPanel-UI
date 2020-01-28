import http from './http'
import router from '../router'
import qs from 'qs';

const redirectToLoginPageWhen401 = (promise) => {
  return new Promise((resolve, reject) => {
    promise.then((res) => {
      resolve(res);
    }).catch(err => {
      setTimeout(() => {
        router.replace({
          path: '/auth/login',
          query: {redirect: router.currentRoute.fullPath}
        });
      }, 1000);
      reject(err);
    })
  })
};

const apiUrls = {
  login: (username, password) => {
    return http.post('/login', qs.stringify({
      username: username,
      password: password
    }), {
      headers: {'content-type': 'application/x-www-form-urlencoded'}
    })
  },
  logout: () => {
    return http.get('/logout');
  },
  signup: (username, password, email, role) => {
    return http.post('/signup', {
      username: username,
      password: password,
      email: email,
      role: role
    })
  },
  getMyAuthentication: () => {
    return redirectToLoginPageWhen401(http.get('/auth/me'))
  }
};
export const api = {
  install: (Vue, options) => {
    Vue.prototype.$api = apiUrls
  }
};

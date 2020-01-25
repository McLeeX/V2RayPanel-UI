import http from './http'

const apiUrls = {
  login: (username, password) => {
    return http.post('/doLogin', {
      username: username,
      password: password
    })
  },
  signup: (username, password, email, role) => {
    return http.post('/signup', {
      username: username,
      password: password,
      email: email,
      role: role
    })
  }
}
export const api = {
  install: function (Vue, options) {
    Vue.prototype.$api = apiUrls
  }
}

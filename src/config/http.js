import axios from 'axios'

// 后台接口地址
axios.defaults.baseURL = window.location.protocol + '//127.0.0.1'
// 超时时间
// axios.defaults.timeout = 10000
// 响应拦截器
axios.interceptors.response.use(
  response => {
    if (response.status === 200) {
      return Promise.resolve(response)
    } else {
      return Promise.reject(response)
    }
  },
  // 服务器状态码不是200的情况
  error => {
    if (error.response.status) {
      switch (error.response.status) {
        // 401: 未登录
        // 未登录则跳转登录页面，并携带当前页面的路径
        // 在登录成功后返回当前页面，这一步需要在登录页操作。
        case 401:
          this.$router.replace({
            path: '/login',
            query: {redirect: this.$router.currentRoute.fullPath}
          })
          break
        // 403 token过期
        // 跳转登录页面
        case 403:
          // 跳转登录页面，并将要浏览的页面fullPath传过去，登录成功后跳转需要访问的页面
          setTimeout(() => {
            this.$router.replace({
              path: '/login',
              query: {redirect: this.$router.currentRoute.fullPath}
            })
          }, 1000)
          break
        // 404请求不存在
        case 404:
          break
        // 其他错误，直接抛出错误提示
        default:

      }
      return Promise.reject(error.response)
    }
  }
)

export default {
  /**
   * 发送get请求
   * @param url 地址
   * @param params 参数
   * @returns {Promise<Object>} Promise<res.data>
   */
  get (url, params) {
    return new Promise((resolve, reject) => {
      axios.get(url, {
        params: params
      }).then(res => {
        resolve(res.data)
      }).catch(err => {
        reject(err.data)
      })
    })
  },
  /**
   * 发送post请求
   * @param url 地址
   * @param params 参数
   * @returns {Promise<Object>} Promise<res.data>
   */
  post (url, params) {
    return new Promise((resolve, reject) => {
      axios.post(url, params)
        .then(res => {
          resolve(res.data)
        })
        .catch(err => {
          reject(err.data)
        })
    })
  },
  /**
   * 发送put请求
   * @param url 地址
   * @param params 参数
   * @returns {Promise<Object>} Promise<res.data>
   */
  put (url, params) {
    return new Promise((resolve, reject) => {
      axios.put(url, params)
        .then(res => {
          resolve(res.data)
        })
        .catch(err => {
          reject(err.data)
        })
    })
  },
  /**
   * 发送put请求
   * @param url 地址
   * @returns {Promise<Object>} Promise<res.data>
   */
  delete (url) {
    return new Promise((resolve, reject) => {
      axios.delete(url)
        .then(res => {
          resolve(res.data)
        })
        .catch(err => {
          reject(err.data)
        })
    })
  },
  install (Vue, options) {
    Vue.prototype.$http = this
  }
}

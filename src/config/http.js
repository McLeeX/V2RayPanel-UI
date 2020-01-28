import axios from 'axios'

// 后台接口地址
axios.defaults.baseURL = window.location.protocol + '//127.0.0.1';
// 超时时间
// axios.defaults.timeout = 10000
// 登录
axios.defaults.withCredentials = true;
export default {
  /**
   * 发送get请求
   * @param url 地址
   * @param params 请求参数
   * @returns {Promise<Object>} Promise<res.data>
   */
  get: (url, params) => {
    return new Promise((resolve, reject) => {
      axios.get(url, {
        params: params
      }).then(res => {
        resolve(res)
      }).catch(err => {
        reject(err.response)
      })
    })
  },
  /**
   * 发送post请求
   * @param url 地址
   * @param data 请求参数
   * @param config axios 配置
   * @returns {Promise<Object>} Promise<res>
   */
  post: (url, data, config) => {
    return new Promise((resolve, reject) => {
      axios.post(url, data, config)
        .then(res => {
          resolve(res)
        })
        .catch(err => {
          reject(err.response)
        })
    })
  },
  /**
   * 发送put请求
   * @param url 地址
   * @param data 请求参数
   * @param config axios 配置
   * @returns {Promise<Object>} Promise<res.data>
   */
  put: (url, data, config) => {
    return new Promise((resolve, reject) => {
      axios.put(url, data, config)
        .then(res => {
          resolve(res)
        })
        .catch(err => {
          reject(err.response)
        })
    })
  },
  /**
   * 发送put请求
   * @param url 地址
   * @returns {Promise<Object>} Promise<res.data>
   */
  delete: (url) => {
    return new Promise((resolve, reject) => {
      axios.delete(url)
        .then(res => {
          resolve(res)
        })
        .catch(err => {
          reject(err.response)
        })
    })
  },
  install: (Vue, options) => {
    Vue.prototype.$http = this
  }
}

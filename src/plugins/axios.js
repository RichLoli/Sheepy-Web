import axios from 'axios'

let apiBaseUrl = ''

const service = axios.create({
  baseURL: apiBaseUrl,
  timeout: 5000, // 请求超时时间
})

const err = (error) => {
  if (error.response) {
    let data = error.response.data
    console.log('------异常响应------', error.response.status)
  }
  return Promise.reject(error)
}

// request interceptor
service.interceptors.request.use(
  (config) => {
    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)

// response interceptor
service.interceptors.response.use((response) => {
  return response.data
}, err)


const installer = {
  vm: {},
  install(app) {
    if (this.installed) {
        return;
    }
    this.installed = true;
    app.config.globalProperties.$axios = service
  }
}

export default (app) => {
  app.use(installer)
}

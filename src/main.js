import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import installElementPlus from './plugins/element'
import installElementPlusIcon from './plugins/element-plus-icons'
import installAxios from './plugins/axios'
import Cookies from 'js-cookie'

import '@/assets/common/css/normalize.css'

const app = createApp(App)
installElementPlus(app)
installElementPlusIcon(app)
installAxios(app)

app.config.globalProperties.$cookies = Cookies

if (process.env.NODE_ENV == 'development') {
  app.config.devtools = true
} else {
  app.config.devtools = false
}

app.use(store).use(router).mount('#app')

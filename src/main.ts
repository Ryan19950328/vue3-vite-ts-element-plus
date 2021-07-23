import { createApp } from 'vue'
import router from './router'
import store from './store'
import App from './App.vue'
import ElementPlus from 'element-plus'
import locale from 'element-plus/lib/locale/lang/zh-cn'
import 'element-plus/lib/theme-chalk/index.css'
import './assets/styles/index.scss'

const app = createApp(App)

app
  .use(router)
  .use(store)
  .use(ElementPlus, { locale })
  .mount('#app')

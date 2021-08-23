import { createApp } from 'vue'
import router from './router'
import store from './store'
import App from './App.vue'
import 'element-plus/lib/theme-chalk/base.css'
import './assets/styles/index.scss'
import './assets/styles/element-plus.scss'
import dragDialog from './directives/dragDialog'

const app = createApp(App)

import { ElButton, ElInfiniteScroll, ElLoading, ElMessage, ElMessageBox } from 'element-plus'

// 全局组件
app.component(ElButton.name, ElButton)
const plugins = [ElInfiniteScroll, ElLoading, ElMessage, ElMessageBox]
plugins.forEach((plugin) => {
  app.use(plugin)
})

// 注册全局组件
const components: any = import.meta.globEager('./components/**/*.vue')
for (const key in components) {
  if (Object.prototype.hasOwnProperty.call(components, key)) {
    const component = components[key].default
    // 如果组件内定义name 则需要全局引用的
    if (component.name) {
      app.component(component.name, component)
    }
  }
}

app.use(dragDialog).use(router).use(store).mount('#app')

import { createStore } from 'vuex'
import { last } from 'lodash-es'

// 自动导入Modules/ 模块
const customModules = {}
const customModuleFiles: any = import.meta.globEager('./modules/*.ts')
for (const i in customModuleFiles) {
  if (Object.prototype.hasOwnProperty.call(customModuleFiles, i)) {
    const key = i.replace(/(\.\/|\.ts)/g, '') as string
    const moduleName = last(key.split('/')) as string
    const element = customModuleFiles[i].default
    customModules[moduleName] = element
  }
}

// // 自动导入views/Module模块
const viewModules = {}
const viewModuleFiles: any = import.meta.globEager('../views/**/*.ts')
for (const i in viewModuleFiles) {
  if (Object.prototype.hasOwnProperty.call(viewModuleFiles, i)) {
    const key = i.replace(/(\.\/|\.ts)/g, '') as string
    const moduleName = last(key.split('/')) as string
    const element = viewModuleFiles[i].default
    viewModules[moduleName] = element
  }
}

export default createStore({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    ...customModules,
    ...viewModules
  }
})

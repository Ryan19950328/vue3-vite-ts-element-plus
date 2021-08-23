import { useRouter, useRoute } from 'vue-router'
import { cloneDeep, assign } from 'lodash-es'
/**
 * @Description: 根据地址下载文件
 * @param : href  下载链接
 * @param : title  文件名称
 */
export function download(href: string, title: string) {
  const a = document.createElement('a')
  a.style.display = 'none'
  a.setAttribute('href', href)
  a.setAttribute('download', title ? title : '')
  // 随机字符串id
  const randomId: string = Math.random().toString(36).substring(2)
  a.id = randomId
  document.body.appendChild(a)
  a.click()
  a.remove()
}

// 在url上设置参数，如点击分页时记录分页信息
export function updateParams(params: Record<string, unknown>) {
  const route = useRoute()
  const router = useRouter()
  const query = cloneDeep(route.query)
  router.replace({
    query: assign(query, params)
  })
}

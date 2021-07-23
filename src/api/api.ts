import { get } from '@/http/request'

export function getMenus() {
  return get('company/menu/getMenu', {})
}

export interface ITableList {
  page: number
  pageSize: number
}
export function getTableData(params: ITableList) {
  return get('/api/getTableList', params)
}

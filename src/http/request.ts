import axios from './axios'
import { AxiosResponse } from 'axios'

// post默认请求
export function post(apiUrl: string, params?: any): Promise<AxiosResponse> {
  return axios.post(apiUrl, params)
}

// get默认请求
export function get(apiUrl: string, params?: any): Promise<AxiosResponse> {
  return axios.get(apiUrl, { params: params })
}

// put默认请求
export function $put(apiUrl: string, params?: any): Promise<AxiosResponse> {
  return axios.put(apiUrl, params)
}

// delete默认请求
export function $delete(apiUrl: string, params?: any): Promise<AxiosResponse> {
  return axios.delete(apiUrl, { data: params })
}

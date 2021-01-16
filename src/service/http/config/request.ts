import axios, { AxiosRequestConfig } from 'axios'
import { baseURL, timeout, validateStatus } from '../constants'
import keys from '../../local/localsotrage-key'
import { localStore } from 'service/utils/localStore'
import { checkStatus } from './refresh_token'

// 请求基本配置
export const instance = axios.create({
  baseURL,
  timeout,
  validateStatus,
})

// 如果请求不需要携带 token
const request = <T>(url: string, options?: AxiosRequestConfig) => {
  const defaultOptions = { url }
  const totalOptions = { ...defaultOptions, ...options }

  return instance
    .request<T>(totalOptions)
    .then((res) => res.data)
    .catch(console.log)
}

// 如果请求需要携带 token
const requestWithToken = <T>(url: string, options?: AxiosRequestConfig) => {
  const { TOKEN } = keys.login

  // 获取 token
  const token = localStore.get(TOKEN)
  const defaultOptions = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
    url,
  }

  const totalOptions = { ...options, ...defaultOptions }
  return instance
    .request<T>(totalOptions)
    .then((response) => response.data)
    .catch((error) =>
      checkStatus(error.response, requestWithToken, url, options)
    )
}

export const getRequest = (withToken = true) => {
  return withToken ? requestWithToken : request
}

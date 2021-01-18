import { AxiosRequestConfig, AxiosResponse } from 'axios'
import keys from 'service/local/localsotrage-key'
import { localStore } from 'service/utils/localStore'
import { BaseAuth } from '../api/auth'
import { refreshPath } from '../constants'
import { instance } from './request'
import PubSub from 'pubsub-js'
import { ResponseSuccess } from '../api/type'

// 标志是否已经有请求去自动刷新请求了
let isRefreshing = true
// 观察的事件名
const REFRESH = 'refresh-'

export const checkStatus = (
  response: AxiosResponse,
  request: Function,
  url: string,
  options?: AxiosRequestConfig
) => {
  const {
    // 响应状态码
    status,
    // 响应数据中的 path，如果 token 过期，其中的 path 是这个请求的请求路径
    data: { path },
  } = response

  // 1. 如果响应结果是 401，并且请求的路径不是刷新 token 的路径, 那么就该去刷新请求
  if (status === 401 && path !== refreshPath) {
    const reToken = localStore.get<string>(keys.login.REFRESH_TOKEN)
    if (isRefreshing) {
      refreshToken(reToken ?? '')
    }
    // 将标志位设置为 false，让后续的请求不要再去刷新 token 了
    isRefreshing = false
    const retryOriginalRequest = new Promise((resolve, reject) => {
      PubSub.subscribeOnce(REFRESH, () => {
        resolve(request(url, options))
      })
    })

    return retryOriginalRequest
  }

  return response
}

export const refreshToken = async (reToken: string) => {
  let refreshFlag = false
  // 刷新的 url
  const url = '/auth/refresh'
  // 刷新 token 应该放置在的请求头名
  const headerName = 'refresh_token'
  // 认证相关存放数据的 key
  const { EXPIRE_TIME, TOKEN, USER_INFO } = keys.login

  try {
    const result = await instance.get<ResponseSuccess<BaseAuth>>(url, {
      headers: {
        [headerName]: reToken,
      },
    })

    const { access_token, info, timestamp, expires_in } = result.data.data!

    console.log(access_token, info)

    localStore.set(TOKEN, access_token)
    localStore.set(EXPIRE_TIME, timestamp + expires_in)
    localStore.set(USER_INFO, info)
    // 刷新成功
    isRefreshing = true
    refreshFlag = true
    // 重新执行被暂停的请求
    PubSub.publish(REFRESH)
  } catch (error) {
    // refresh_token 失效，强制退出到登录页面
    refreshFlag = false
  }

  return refreshFlag
}

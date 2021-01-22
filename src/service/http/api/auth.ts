import { post } from '../config'
import { refreshToken } from '../config/refresh_token'
import { ResponseError, ResponseSuccess } from './type'

const apiUrls = {
  login: '/auth/login',
  register: '/auth/register',
  logout: '/auth/logout',
}

export interface User {
  id: string
  email: string
  phone: string
  avatar: string
  name: string
  currentTeamId: string | null
}

export interface BaseAuth {
  access_token: string
  expires_in: number
  timestamp: number
  token_type: string
  info: User
}

export interface LoginAuth extends BaseAuth {
  refresh_token: string
}

/**
 * 登录
 *
 * @param account 账号
 * @param password 密码
 */
export const login = async (account: string, password: string) =>
  post(apiUrls.login, { account, password }, false) as Promise<
    ResponseSuccess<LoginAuth> | ResponseError
  >

interface RegisterUser {
  email: string
  name: string
  id: string
}

/**
 * 注册
 *
 * @param account 账号
 * @param password 密码
 * @param name 昵称
 */
export const register = async (
  account: string,
  password: string,
  name: string
) =>
  post(apiUrls.register, { account, password, name }, {}, false) as Promise<
    ResponseSuccess<RegisterUser> | ResponseError
  >

/**
 * 注销
 */
export const logout = async () =>
  post(apiUrls.logout) as Promise<ResponseSuccess<any> | ResponseError>

/**
 * 刷新token
 *
 * @param token refresh_token
 */
export const refresh = async (token: string) => refreshToken(token)

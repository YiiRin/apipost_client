import { get } from '../config'
import { User } from './auth'
import { ResponseSuccess } from './type'

const apiUrls = {
  getUserInfo: '/user',
}

/**
 * 获取用户信息
 */
export const getUserInfo = async () =>
  get(apiUrls.getUserInfo) as Promise<ResponseSuccess<User>>

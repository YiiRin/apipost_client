import { LoginAuth } from 'service/http/api/auth'
import keys from 'service/local/localsotrage-key'
import { localStore } from 'service/utils/localStore'

/**
 * 保存登录的用户数据
 *
 * @param data 登录数据
 */
export const saveAuthData = (data: LoginAuth) => {
  const { EXPIRE_TIME, REFRESH_TOKEN, TOKEN, USER_INFO } = keys.login
  const { access_token, expires_in, info, refresh_token, timestamp } = data
  localStore.set(REFRESH_TOKEN, refresh_token)
  localStore.set(TOKEN, access_token)
  localStore.set(USER_INFO, info)
  localStore.set(EXPIRE_TIME, expires_in + timestamp)
}

/**
 * 清除用户的登录数据
 */
export const removeAuthData = () => {
  const { EXPIRE_TIME, REFRESH_TOKEN, TOKEN, USER_INFO } = keys.login
  localStore.removeMany(EXPIRE_TIME, REFRESH_TOKEN, TOKEN, USER_INFO)
}

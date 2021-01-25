import { toggleAuthStatus } from 'store/auth/action'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { authApis } from 'service/http/api'
import keys from 'service/local/localsotrage-key'
import { localStore } from 'service/utils/localStore'

/**
 * 自动登录的逻辑
 */
export const useAutoLogin = () => {
  const dispatch = useDispatch()
  const history = useHistory()

  useEffect(() => {
    async function _() {
      // 1. 从 localstorage 中获取 refresh_token
      const { REFRESH_TOKEN } = keys.login
      const refreshToken = localStore.get(REFRESH_TOKEN) as string
      // 2. 如果存在 refresh_token，请求刷新token
      if (refreshToken) {
        const result = await authApis.refresh(refreshToken)
        if (result) {
          // 刷新 token 成功，切换登录状态
          dispatch(toggleAuthStatus(true))
        }
      }
    }
    _()
  }, [history, dispatch])
}

import { toggleAuthStatus } from 'features/auth/action'
import { removeAuthData } from 'features/auth/auth'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { useBaseConfirm } from 'service/hook/common/useBaseConfirm'
import { authApis } from 'service/http/api'
import { isResponseError } from 'service/http/api/type'
import { removeUserInfo } from '../action'

export const useLogout = () => {
  const { close, open, ...rest } = useBaseConfirm()
  const dispatch = useDispatch()
  const history = useHistory()
  const handleLogout = async () => {
    const result = await authApis.logout()
    if (isResponseError(result)) {
      // 注销失败
      // TODO:
      return
    }
    // 注销成功， 删除用户数据，切换登录状态,跳转到登陆页面
    removeAuthData()
    dispatch(toggleAuthStatus(false))
    dispatch(removeUserInfo())
    history.replace('/auth/login')
  }

  return {
    ...rest,
    open,
    close,
    handleLogout,
  }
}

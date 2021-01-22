import { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { User } from 'service/http/api/auth'
import keys from 'service/local/localsotrage-key'
import { localStore } from 'service/utils/localStore'
import { loadUserInfo } from './action'
import { currentTeamSelector, userInfoSelector } from './selector'
import { loadCurrentTeamThunk } from './thunk'

export const useComponentShow = () => {
  const [isShow, setIsShow] = useState(false)

  const show = () => {
    setIsShow(true)
  }

  const hide = () => {
    setIsShow(false)
  }

  return {
    isShow,
    show,
    hide,
  }
}

export const usePortraitDropdown = () => {
  const containerRef = useRef<HTMLDivElement>(null)
  const [isShow, setIsShow] = useState(false)

  const showPortraitDropdown = () => {
    setIsShow(true)
  }

  const hidePortraitDropdown = () => {
    setIsShow(false)
  }

  return {
    isShow,
    showPortraitDropdown,
    hidePortraitDropdown,
    containerRef,
  }
}

export const useUserInfo = () => {
  const userInfo = useSelector(userInfoSelector)
  const currentTeam = useSelector(currentTeamSelector)
  const dispatch = useDispatch()
  // 组件加载时自动加载 localStorage 中的 userInfo
  useEffect(() => {
    const { USER_INFO } = keys.login
    const userInfo = localStore.get(USER_INFO) as User

    if (userInfo) {
      if (userInfo.currentTeamId) {
        dispatch(loadCurrentTeamThunk(userInfo.currentTeamId))
      }
      dispatch(loadUserInfo.success(userInfo))
    }
  }, [dispatch])

  return { userInfo, currentTeam }
}

import { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { userApis } from 'service/http/api'
import { loadUserInfo } from '../../../store/user/action'
import {
  currentTeamSelector,
  userInfoSelector,
} from '../../../store/user/selector'
import { loadCurrentTeamThunk } from '../../../store/user/thunk'

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
    async function _() {
      const userInfoResult = await userApis.getUserInfo()
      if (userInfoResult.data) {
        dispatch(loadUserInfo.success(userInfoResult.data))
        if (userInfoResult.data.currentTeamId) {
          dispatch(loadCurrentTeamThunk(userInfoResult.data.currentTeamId))
        }
      }
    }
    _()
  }, [dispatch])

  return { userInfo, currentTeam }
}

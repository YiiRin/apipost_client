import { useRef, useState } from 'react'

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

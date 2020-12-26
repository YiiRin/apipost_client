import {useState} from 'react'

export const useTitle = () => {
  const [isShow, setIsShow] = useState(false)

  const showTitle = () => {
    setIsShow(true)
  }

  const hideTitle = () => {
    setIsShow(false)
  }

  return {
    isShow,
    showTitle,
    hideTitle
  }
}
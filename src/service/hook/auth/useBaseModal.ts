import { useCallback, useState } from 'react'

export const useBaseModal = (isShow = false, iDuration = 400) => {
  const [visible, setVisible] = useState(isShow)
  const [inProp, setInProp] = useState(isShow)
  const [duration, setDuration] = useState(iDuration)

  const open = useCallback(() => {
    setVisible(true)
    setInProp(true)
  }, [])

  const close = useCallback(() => {
    setVisible(false)
    setInProp(false)
  }, [])

  return {
    visible,
    inProp,
    open,
    close,
    duration,
    setDuration,
  }
}

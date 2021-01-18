import { useCallback, useState } from 'react'

/**
 *
 * @param isShow 默认是否打开
 * @param iDuration 动画持续时间
 */
export const useBaseConfirm = (isShow = false, iDuration = 400) => {
  const [visible, setVisible] = useState(isShow)
  const [inProp, setInProp] = useState(isShow)
  const [duration, setDuration] = useState(iDuration)

  const open = useCallback(() => {
    setVisible(true)
    setInProp(true)
  }, [])

  const close = useCallback(() => {
    console.log('close')
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

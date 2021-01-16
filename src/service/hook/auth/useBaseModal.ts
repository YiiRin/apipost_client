import { useCallback, useState } from 'react'
import { sleep } from 'service/utils/sleep'

export const useBaseModal = (v = false, animationDuration = 0.2) => {
  const [visible, setVisible] = useState(v)
  const [inProp, setInProp] = useState<boolean>(true)
  const [duration, setDuration] = useState(animationDuration)

  const close = useCallback(async () => {
    setInProp(false)
    await sleep(duration)
    setVisible(false)
  }, [duration])

  const open = useCallback(() => {
    setVisible(true)
    setInProp(true)
  }, [])

  return {
    visible,
    inProp,
    duration,
    setDuration,
    open,
    close,
  }
}

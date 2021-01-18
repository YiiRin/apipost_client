import { useState, useEffect } from 'react'

/**
 * 动画逻辑
 *
 * @param visible 是否可见
 * @param inProp 动画标志位
 */
export const useAnimation = (visible: boolean, inProp: boolean) => {
  const [iVisible, setIVisible] = useState(false)
  const [iInProp, setIInProp] = useState(false)
  useEffect(() => {
    if (visible === inProp) {
      // 处理进入的情况 visible === inProp = true
      if (visible) {
        // 先显示
        setIVisible(true)
      } else {
        // 先退出动画
        setIInProp(false)
      }
    }
  }, [visible, inProp])

  useEffect(() => {
    if (iVisible) {
      // 处理进入动画
      setTimeout(() => setIInProp(true), 10)
    }
  }, [iVisible])

  return {
    iVisible,
    iInProp,
    setIVisible,
    setIInProp,
  }
}

import { useCallback, useEffect, useState } from 'react'

/**
 * 掩膜相关逻辑
 *
 * @param maskClosable 点击模态框是否可以关闭
 * @param keyboard 按键盘esc 是否可以关闭模态框
 * @param onClose 模态框关闭的回调
 */
export const useMask = (
  maskClosable: boolean | undefined,
  keyboard: boolean | undefined,
  onClose: (() => void) | undefined
) => {
  /**
   * 点击掩膜触发关闭模态框回调
   */
  const handleMaskClick = () => {
    // 允许点击掩膜关闭模态框
    if (maskClosable) {
      onClose && onClose()
    }
  }

  /**
   * 按下键盘 esc 触发关闭模态框回调
   */
  const closeModal = useCallback(
    (event) => {
      let e = event || window.event
      if (e && e.keyCode === 27) {
        onClose && onClose()
      }
    },
    [onClose]
  )

  // 绑定键盘按下 esc 关闭模态框
  useEffect(() => {
    keyboard && document.addEventListener('keydown', closeModal)
    return () => {
      keyboard && document.removeEventListener('keydown', closeModal)
    }
  }, [keyboard, closeModal])

  return {
    handleMaskClick,
  }
}


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

/**
 * 在模态框关闭的时候自动销毁 Body
 *
 * @param visible
 */
export const useAutoDestroyBody = (visible = false) => {
  const [isDestroyBody, setIsDestroyBody] = useState(visible)

  useEffect(() => {
    setIsDestroyBody(!visible)
  }, [visible])

  return { isDestroyBody }
}

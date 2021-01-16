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
 * 模态框动画相关
 *
 * @param visible
 */
export const useModalAnimation = (visible = false, outerInProp = false) => {
  const [inProp, setInProp] = useState(false)

  // 组件第一次加载时
  useEffect(() => {
    setInProp(true)
  }, [])

  useEffect(() => {
    // 当模态框打开时，状态应该是 visible: true, inProp: true
    // 当模态框关闭时, 状态应该是 inProp: false, wait: duration, visible: false
    setInProp(visible && outerInProp)
  }, [visible, outerInProp])

  return {
    inProp,
    setInProp,
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

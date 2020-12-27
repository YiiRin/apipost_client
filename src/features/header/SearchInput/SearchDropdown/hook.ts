import { useCallback, useRef, MouseEvent } from 'react'

/**
 * change the button whick is active
 */
export const useChangeActive = () => {
  const containerRef = useRef<HTMLDivElement>(null)
  const changeActive = useCallback((event: MouseEvent) => {
    const btn = event.target
    if (btn instanceof HTMLButtonElement) {
      const btnList = Array.from(containerRef.current?.children!)
      btnList.forEach((btnNode) => {
        btnNode.classList.remove('active')
      })
      btn.classList.add('active')
    }
  }, [])

  return {
    containerRef,
    changeActive,
  }
}

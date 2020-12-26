import { useEffect, useRef, useState } from "react"

export const useDropdown = () => {
  const inputContainerRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)
  const [isDropdownVisible, setIsDropdownVisible] = useState<boolean>(false)

  /**
   * show dropdown
   */
  const showDropdown = () => {
    setIsDropdownVisible(true)
  }

  /**
   * hide dropdown
   */
  const hideDropdown = () => {
    setIsDropdownVisible(false)
  }

  /**
   * keep the input focus
   */
  const keepFocusState = () => {
    inputRef.current?.focus()
  }

  /**
   * make the input blur
   */
  const removeFocusState = () => {
    inputRef.current?.blur()
  }

  /**
   * when mouse is in dropdown
   * keep the input focus
   */
  useEffect(() => {
    const toggleDropdownState = (event: MouseEvent) => {
      const clickElement = event.target as any
      if (inputContainerRef.current?.contains(clickElement)) {
        keepFocusState()
        event.preventDefault()
      }
    }
    document.addEventListener('mousedown', toggleDropdownState)

    return () => {
      document.removeEventListener('mousedown', toggleDropdownState)
    }
  }, [])

  return {
    inputContainerRef,
    inputRef,
    isDropdownVisible,
    showDropdown,
    hideDropdown,
    keepFocusState,
    removeFocusState
  }
}
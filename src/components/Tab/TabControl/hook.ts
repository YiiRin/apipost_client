import { useCallback, useEffect, useState } from 'react'

export const useTabControl = (indexs: string[], currentIndex: string) => {
  /** 当前的 tab 选项卡 index */
  const [currentTabIndex, setCurrentTabIndex] = useState<string>(currentIndex)

  const changeCurrentIndex = useCallback((index: string) => {
    setCurrentTabIndex(index)
  }, [])

  /**
   * 父组件改变 currentIndex 则更新 currentIndex
   */
  useEffect(() => {
    setCurrentTabIndex(currentIndex)
  }, [currentIndex])

  return {
    currentTabIndex,
    changeCurrentIndex,
  }
}

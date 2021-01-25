import { toggleTheme } from 'store/theme/action'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useTheme } from 'styled-components'

const LIGHT_MODE = '日间模式'
const DARK_MODE = '暗黑模式'

export const useToggleTheme = () => {
  const [mode, setMode] = useState(LIGHT_MODE)
  const theme = useTheme()
  const dispatch = useDispatch()

  const handleToggleTheme = () => {
    dispatch(toggleTheme((theme as any).mode === 'light' ? 'dark' : 'light'))
    setMode((theme as any).mode === 'light' ? DARK_MODE : LIGHT_MODE)
  }

  return {
    mode,
    handleToggleTheme,
  }
}

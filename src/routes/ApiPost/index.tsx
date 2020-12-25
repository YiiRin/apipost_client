import React from 'react'
import { useSelector } from 'react-redux'
import { ThemeProvider } from 'styled-components'
import { themeModeSelector } from './selector'

type Props = {}

const ApiPost: React.FC<Readonly<Props>> = (props) => {
  const themeMode = useSelector(themeModeSelector)
  return (
    <>
      <ThemeProvider theme={themeMode}>App</ThemeProvider>
    </>
  )
}

export default ApiPost

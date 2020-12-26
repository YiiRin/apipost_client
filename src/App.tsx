import React from 'react'
import { useSelector } from 'react-redux'
import ApiPost from 'routes/ApiPost'
import { themeModeSelector } from 'routes/ApiPost/selector'
import { ThemeProvider } from 'styled-components'
import { GlobalStyle } from 'assets/css/global'

type Props = {}

const App: React.FC<Readonly<Props>> = (props) => {
  const themeMode = useSelector(themeModeSelector)
  return (
    <ThemeProvider theme={themeMode}>
      <GlobalStyle />
      <ApiPost />
    </ThemeProvider>
  )
}

export default App

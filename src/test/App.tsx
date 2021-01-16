import ModalTest from 'components/Modal/Modal.test'
import React from 'react'
import { useSelector } from 'react-redux'
import { themeModeSelector } from 'routes/ApiPost/selector'
import { ThemeProvider } from 'styled-components'
// import './service/proxy.test'

const App: React.FC<{}> = () => {
  const themeMode = useSelector(themeModeSelector)

  return (
    <ThemeProvider theme={themeMode}>
      <ModalTest />
    </ThemeProvider>
  )
}

export default App

import Message from 'components/Message'
import Notification from 'components/Notification'
import React from 'react'
import { useSelector } from 'react-redux'
import { themeModeSelector } from 'routes/ApiPost/selector'
import { ThemeProvider } from 'styled-components'

const App: React.FC<{}> = () => {
  const themeMode = useSelector(themeModeSelector)

  return (
    <ThemeProvider theme={themeMode}>
      <button
        onClick={() => {
          Notification.pop({
            message: '你家的大米真香啊',
            title: 'good',
            closable: true,
            // key: 'good',
            duration: 4.5,
            type: 'success',
          })
        }}
      >
        success
      </button>
      <button
        onClick={() => {
          Notification.pop({
            message: '你家的大米真香啊',
            title: 'good',
            closable: true,
            // key: 'good',
            duration: 4.5,
            type: 'error',
            placement: 'topLeft',
          })
        }}
      >
        error
      </button>
      <button
        onClick={() => {
          Notification.pop({
            message: '你家的大米真香啊',
            title: 'good',
            closable: true,
            // key: 'good',
            duration: 4.5,
            type: 'info',
          })
        }}
      >
        info
      </button>
      <button
        onClick={() => {
          Notification.pop({
            message: '你家的大米真香啊',
            title: 'good',
            closable: true,
            key: 'good',
            duration: 1200,
            type: 'warning',
          })
        }}
      >
        warning
      </button>
      <button onClick={() => {
        Notification.remove('good')
      }}>
        destroy warning
      </button>
      <br />
      <button
        onClick={() => {
          Message.pop({
            type: 'success',
            duration: 4,
            message: '你家的大米真实好吃呢',
          })
        }}
      >
        success
      </button>

      <button
        onClick={() => {
          Message.pop({
            type: 'error',
            duration: 4,
            message: '你家的大米真实好吃呢',
          })
        }}
      >
        erorr
      </button>
    </ThemeProvider>
  )
}

export default App

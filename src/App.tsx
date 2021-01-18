import React, { Suspense } from 'react'
import { useSelector } from 'react-redux'
import { themeModeSelector } from 'routes/ApiPost/selector'
import { ThemeProvider } from 'styled-components'
import { GlobalStyle } from 'assets/css/global'
import { Route, Switch } from 'react-router-dom'
import GlobalLoading from 'components/GlobalLoading'
import PrivateRoute from 'components/PrivateRoute'
import { useAutoLogin } from './useAutoLogin'

type Props = {}

const ApiPost = React.lazy(() => import('routes/ApiPost'))
const Auth = React.lazy(() => import('routes/Auth'))

const App: React.FC<Readonly<Props>> = (props) => {
  const themeMode = useSelector(themeModeSelector)
  useAutoLogin()
  return (
    <ThemeProvider theme={themeMode}>
      <GlobalStyle />
      <Suspense fallback={<GlobalLoading />}>
        <Switch>
          <PrivateRoute exact path="/">
            <ApiPost />
          </PrivateRoute>
          <Route path="/auth">
            <Auth />
          </Route>
        </Switch>
      </Suspense>
    </ThemeProvider>
  )
}

export default App

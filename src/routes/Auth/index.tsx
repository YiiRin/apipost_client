import { isLoginSelector } from 'features/header/UserInfo/selector'
import React from 'react'
import { useSelector } from 'react-redux'
import { Redirect, Route, Switch } from 'react-router-dom'

type Props = {}

const Login = React.lazy(() => import('features/auth/Login'))
const Register = React.lazy(() => import('features/auth/Register'))

const Auth: React.FC<Readonly<Props>> = (props) => {
  const isLogin = useSelector(isLoginSelector)

  if (isLogin) {
    return <Redirect to="/" />
  }

  return (
    <Switch>
      <Route path="/auth/login">
        <Login />
      </Route>
      <Route path="/auth/register">
        <Register />
      </Route>
    </Switch>
  )
}

export default Auth

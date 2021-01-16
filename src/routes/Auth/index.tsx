import React from 'react'
import { Route, Switch } from 'react-router-dom'

type Props = {}

const Login = React.lazy(() => import('features/auth/Login'))
const Register = React.lazy(() => import('features/auth/Register'))

const Auth: React.FC<Readonly<Props>> = (props) => {
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

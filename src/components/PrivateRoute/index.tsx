import { isLoginSelector } from 'store/auth/selector'
import React from 'react'
import { useSelector } from 'react-redux'
import { Redirect, Route, RouteProps } from 'react-router-dom'
type Props = {}

/**
 * 只有登录了的用户才能访问的路由
 *
 * @param props
 */
const PrivateRoute: React.FC<Readonly<Props & RouteProps>> = (props) => {
  const { children, ...rest } = props
  const isLogin = useSelector(isLoginSelector)
  return (
    <Route
      {...rest}
      render={({ location }) =>
        isLogin ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: '/auth/login',
              state: { from: location },
            }}
          />
        )
      }
    />
  )
}

export default PrivateRoute

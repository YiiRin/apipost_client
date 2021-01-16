import React, { Suspense } from 'react'
import { Route, Switch } from 'react-router-dom'
import { Container } from './index.style'
const Team = React.lazy(() => import('routes/Team'))
type Props = {}

const Content: React.FC<Readonly<Props>> = (props) => {
  return (
    <Container>
      <Suspense fallback={null}>
        <Switch>
          <Route path="/team" component={Team} />
        </Switch>
      </Suspense>
    </Container>
  )
}

export default Content

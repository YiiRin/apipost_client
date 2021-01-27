import React, { Suspense } from 'react'
import { Route, Switch } from 'react-router-dom'
import { Container } from './index.style'
const Team = React.lazy(() => import('features/content/Team'))
const Project = React.lazy(() => import('features/content/Project'))
const Api = React.lazy(() => import('features/content/Api'))
type Props = {}

const Content: React.FC<Readonly<Props>> = (props) => {
  return (
    <Container>
      <Suspense fallback={null}>
        <Switch>
          <Route path="/team" component={Team} />
          <Route path="/project" component={Project} />
          <Route path="/apis" component={Api} />
        </Switch>
      </Suspense>
    </Container>
  )
}

export default Content

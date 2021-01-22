import React, { Suspense } from 'react'
import { Route, Switch } from 'react-router-dom'
import { Container } from './index.style'
const Team = React.lazy(() => import('features/content/Team'))
const Project = React.lazy(() => import('features/content/Project'))
type Props = {}

const Content: React.FC<Readonly<Props>> = (props) => {
  return (
    <Container>
      <Suspense fallback={null}>
        <Switch>
          <Route path="/team" component={Team} />
          <Route path="/project" component={Project} />
        </Switch>
      </Suspense>
    </Container>
  )
}

export default Content

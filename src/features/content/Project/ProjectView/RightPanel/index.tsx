import React from 'react'
import { Route } from 'react-router-dom'
import { Container } from './index.style'
import PanelHeader from './PanelHeader'
import ProjectOperations from './ProjectOperations'

type Props = {}

const RightPanel: React.FC<Readonly<Props>> = (props) => {
  return (
    <Container>
      <PanelHeader />
      <Route
        path="/project/:projectType/:id"
        render={() => <ProjectOperations />}
      ></Route>
    </Container>
  )
}

export default RightPanel

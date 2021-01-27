import React from 'react'
import { Container } from './index.style'
import LeftPanel from './LeftPanel'
import RightPanel from './RightPanel'

type Props = {}

const ProjectView: React.FC<Readonly<Props>> = (props) => {
  return (
    <Container>
      <LeftPanel />
      <RightPanel />
    </Container>
  )
}

export default ProjectView

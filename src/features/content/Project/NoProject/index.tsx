import Button from 'components/Button'
import React from 'react'
import AddProjectModal from '../AddProjectModal'
import { Container } from './index.style'

type Props = {}

const NoProject: React.FC<Readonly<Props>> = () => {
  return (
    <Container>
      <h3 className="title">ApiPost</h3>
      <p className="text">
        请先创建一个项目。
        <Button className="btn">创建项目</Button>
      </p>
      <AddProjectModal />
    </Container>
  )
}

export default NoProject

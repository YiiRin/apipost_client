import Button from 'components/Button'
import React from 'react'
import { useBaseModal } from 'service/hook/auth/useBaseModal'
import AddProjectModal from '../modal/AddProjectModal'
import { Container } from './index.style'

type Props = {}

const NoProject: React.FC<Readonly<Props>> = () => {
  const modalOptions = useBaseModal(false, 300)
  return (
    <Container>
      <h3 className="title">ApiPost</h3>
      <p className="text">
        请先创建一个项目。
        <Button className="btn" onClick={modalOptions.open}>
          创建项目
        </Button>
      </p>
      <AddProjectModal modalOptions={modalOptions} />
    </Container>
  )
}

export default NoProject

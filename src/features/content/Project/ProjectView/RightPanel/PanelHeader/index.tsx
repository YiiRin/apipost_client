import Button from 'components/Button'
import React from 'react'
import { Container } from './index.style'
import { FaRegWindowRestore } from 'react-icons/fa'
import AddProjectModal from 'features/content/Project/modal/AddProjectModal'
import { useBaseModal } from 'service/hook/auth/useBaseModal'

type Props = {}

const PanelHeader: React.FC<Readonly<Props>> = (props) => {
  const modalOptions = useBaseModal(false, 300)
  return (
    <Container>
      <Button className="operation-item" onClick={modalOptions.open}>
        <FaRegWindowRestore /> 新建项目
      </Button>
      <AddProjectModal modalOptions={modalOptions} />
    </Container>
  )
}

export default PanelHeader

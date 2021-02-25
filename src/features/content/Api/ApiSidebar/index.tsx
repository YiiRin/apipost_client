import React from 'react'
import { Container } from './index.style'
import ProjectInfo from './ProjectInfo'
import SidebarOperations from './SidebarOperations'

type Props = {}

const ApiSidebar: React.FC<Readonly<Props>> = () => {
  return (
    <Container>
      <ProjectInfo />
      <SidebarOperations />
      <p style={{
        fontSize: '12px',
        color: '#adb5bd'
      }}>这是一个空项目</p>
    </Container>
  )
}

export default ApiSidebar

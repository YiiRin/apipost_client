import Line from 'components/Line'
import React from 'react'
import ApiContent from './ApiContent'
import ApiSidebar from './ApiSidebar'
import { Container } from './index.style'

type Props = {}

const Api: React.FC<Readonly<Props>> = (props) => {
  return (
    <Container>
      <ApiSidebar />
      <Line width="2px" height="100%" variant="dropdown"/>
      <ApiContent />
    </Container>
  )
}

export default Api

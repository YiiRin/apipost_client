import React from 'react'
import { Container } from './index.style'
import { Scrollbars } from 'react-custom-scrollbars'
import ApiContentHeader from './ApiContentHeader'

type Props = {}

const ApiContent: React.FC<Readonly<Props>> = () => {
  return (
    <Scrollbars>
      <Container>
        <ApiContentHeader />
      </Container>
    </Scrollbars>
  )
}

export default ApiContent

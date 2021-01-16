import React from 'react'
import { Container } from './index.style'
type Props = {}

const GlobalLoading: React.FC<Readonly<Props>> = (props) => {
  return (
    <Container>
      <div className="box"></div>
    </Container>
  )
}

export default GlobalLoading

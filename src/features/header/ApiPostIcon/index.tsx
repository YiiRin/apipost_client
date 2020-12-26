import React from 'react'
import { Container, LogoReg, LogoText } from './index.style'
type Props = {}

const ApiPostIcon: React.FC<Readonly<Props>> = (props) => {
  return (
    <Container>
      <LogoText>ApiPost</LogoText>
      <LogoReg>®</LogoReg>
    </Container>
  )
}

export default ApiPostIcon

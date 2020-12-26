import React from 'react'
import { Container, Triangle, Text } from './index.style'
type Props = {
  text: string
  top?: string
  left?: string
  right?: string
  bottom?: string
  visible: boolean
}

const Title: React.FC<Readonly<Props>> = (props) => {
  const { text, ...rest } = props
  return (
    <Container {...rest}>
      <Text>{text}</Text>
      <Triangle></Triangle>
    </Container>
  )
}

export default Title

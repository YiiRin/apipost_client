import React from 'react'
import { Container } from './index.style'
type Props = {
  text: string
}

const Title: React.FC<Readonly<Props>> = (props) => {
  const { text, ...rest } = props
  return (
    <Container {...rest} className={'pop-title'}>
      {text}
    </Container>
  )
}

export default Title

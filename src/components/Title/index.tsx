import React from 'react'
import { Container } from './index.style'
export type TitleDirection = 'top' | 'bottom'
type Props = {
  text: string
  direction?: TitleDirection
}

const Title: React.FC<Readonly<Props>> = (props) => {
  const { text, direction = 'top', ...rest } = props
  return (
    <Container direction={direction} {...rest} className={'pop-title'}>
      {text}
    </Container>
  )
}

export default Title

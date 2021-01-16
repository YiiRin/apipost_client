import React from 'react'
import { Container } from './index.style'

type Props = {
  text: string
  iconClassName?: string
}

const SmallTip: React.FC<Readonly<Props>> = (props) => {
  const { text, iconClassName } = props
  return (
    <Container className="small-tip">
      {iconClassName && <i className={iconClassName} aria-hidden="true" />}
      {text}
    </Container>
  )
}

export default SmallTip

import React from 'react'
import { Container } from './index.style'
type Props = {
  /**
   * line width, default 100px
   */
  width?: string
  /**
   * line height: default 1px
   */
  height?: string
}

const Line: React.FC<Readonly<Props>> = (props) => {
    return (
        <Container {...props}>
        </Container>
    )
}

export default Line
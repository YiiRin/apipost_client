import React from 'react'
import { CSSProperties } from 'styled-components'
import { Container, LineVariant } from './index.style'
type Props = {
  /**
   * line width, default 100px
   */
  width?: string
  /**
   * line height: default 1px
   */
  height?: string

  /**
   * line variant
   */
  variant?: LineVariant

  /**
   * style
   */
  style?: CSSProperties

  className?: string
}

const Line: React.FC<Readonly<Props>> = (props) => {
  const { variant = 'default', ...rest } = props
  return <Container {...rest} variant={variant}></Container>
}

export default Line

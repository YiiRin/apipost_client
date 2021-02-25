import React from 'react'
import { FaInfoCircle } from 'react-icons/fa'
import { Container } from './index.style'

type Props = {
  text?: string
  className?: string
  width?: string
  height?: string
}

const ApiStatusTip: React.FC<Readonly<Props>> = ({
  text = '',
  className = '',
  width = '',
  height = '',
}) => {
  return (
    <Container className={className} width={width} height={height}>
      <FaInfoCircle />
      <span>{text}</span>
    </Container>
  )
}

export default ApiStatusTip

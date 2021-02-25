import Button from 'components/Button'
import { ButtonProps } from 'components/Button/Button'
import Title, { TitleDirection } from 'components/Title'
import React from 'react'
import { Container } from './index.style'

type Props = {
  className?: string
  text?: string
  tipText?: string
  tipDirection?: TitleDirection
}

const IconButton: React.FC<Readonly<Props & ButtonProps>> = ({
  text = '',
  tipText = '',
  className = '',
  tipDirection = 'top',
  children,
  ...rest
}) => {
  if (children) {
    return <Container className={className}>{children}</Container>
  }
  return (
    <Container className={className}>
      {text && (
        <Button {...rest}>
          {text}
          {tipText && <Title text={tipText} direction={tipDirection} />}
        </Button>
      )}
    </Container>
  )
}

export default IconButton

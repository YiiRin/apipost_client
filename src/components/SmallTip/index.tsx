import React from 'react'
import { Container, SmallTipVariant } from './index.style'
import classnames from 'classnames'
type Props = {
  text: string
  iconClassName?: string
  variant?: SmallTipVariant
  className?: string
}

const SmallTip: React.FC<Readonly<Props>> = (props) => {
  const { text, iconClassName, variant = 'info', className } = props
  return (
    <Container className={classnames('small-tip', className)} variant={variant}>
      {iconClassName && <i className={iconClassName} aria-hidden="true" />}
      {text}
    </Container>
  )
}

export default SmallTip

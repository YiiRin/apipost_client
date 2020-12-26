/**
 * Copyright © 2020 Iliya_Rin. All rights reserved.
 *
 * @author Iliya_Rin
 * @since  2020-12-22 16:12
 */
import { FC } from 'react'
import { ButtonProps } from './Button'
import { StyledButton, StyledAnchor, LinkContainer } from './index.style'

const Button: FC<Readonly<ButtonProps>> = (props) => {
  const {
    btnType,
    target,
    htmlType,
    block,
    icon,
    disabled,
    href,
    children,
    onClick,
    ...rest
  } = props

  const handleDisabledLink = (disabled: boolean | undefined) => {
    return disabled ? undefined : onClick
  }

  if (btnType === 'button') {
    const button = (
      <StyledButton
        block={block}
        disabled={disabled}
        onClick={onClick}
        {...rest}
      >
        {icon} {children}
      </StyledButton>
    )

    if (href)
      return (
        <LinkContainer href={href} target={target}>
          {button}
        </LinkContainer>
      )
    return button
  }

  return (
    <StyledAnchor
      as="a"
      block={block}
      disabled={disabled}
      onClick={handleDisabledLink(disabled)}
      {...rest}
    >
      <span>{children}</span>
    </StyledAnchor>
  )
}

Button.defaultProps = {
  btnType: 'button',
  htmlType: 'button',
  block: false,
  disabled: false,
}

export default Button

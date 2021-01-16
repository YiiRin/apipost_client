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
    htmlType,
    disabled,
    href,
    target,
    block,
    icon,
    onClick,
    children,
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
      block={block}
      disabled={disabled}
      onClick={handleDisabledLink(disabled)}
      href={href}
      target={target}
      {...rest}
    >
      {icon}
      {children}
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

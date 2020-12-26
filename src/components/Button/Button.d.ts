/**
 * Copyright © 2020 Iliya_Rin. All rights reserved.
 *
 * @author Iliya_Rin
 * @since  2020-12-22 16:12
 */
import { AnchorHTMLAttributes, ButtonHTMLAttributes } from 'react'

type ButtonType = 'link' | 'button'
type HTMLButtonType = 'button' | 'submit' | 'reset'

interface BaseProps {
  /**
   * the type of button <br>
   *  1. link button <br>
   *  2. native button
   */
  btnType?: ButtonType

  /**
   * change to a block element <br>
   * default: inline-block
   */
  block?: boolean

  /**
   * the button can be click
   */
  disabled?: boolean

  /**
   * jump to a new link
   */
  href?: string

  /**
   * href target
   */
  target?: string

  /**
   * the primitive button type in HTML
   */
  htmlType?: HTMLButtonType

  /**
   * the icon before text
   */
  icon?: React.ReactNode

  /**
   * the background color in hover
   */
  hoverBgColor?: string
}

type NativeButtonAttributes = AnchorHTMLAttributes<HTMLElement> & BaseProps
type AnchorButtonAttributes = ButtonHTMLAttributes<HTMLElement> & BaseProps

export type ButtonProps = NativeButtonAttributes & AnchorButtonAttributes

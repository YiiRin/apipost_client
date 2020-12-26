import { InputHTMLAttributes } from 'react'

type Props = {
  /**
   * input width
   */
  width?: string
  /**
   * input height
   */
  height?: string

  /**
   * validate rules
   */
  rules?: ValidateRule[]

  /**
   * errorMsg
   */
  errorMsg?: string
}

export interface ValidateRule {
  /**
   * if text - string length
   */
  len?: number

  /**
   * type required
   * if string - max string length
   * if number - max number
   */
  max?: number
  /**
   * type required
   * if string - min string length
   * if number - min number
   */
  min?: number

  /**
   * Reg expression
   */
  pattern?: RegExp

  /**
   * required
   */
  required?: boolean

  /**
   * error message
   */
  message?: string
}

export type InputProps = InputHTMLAttributes<HTMLInputElement> & Props
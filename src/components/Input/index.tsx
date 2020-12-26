import React from 'react'
import { StyledInput } from './index.style'
import { InputProps } from './Input'

const Input: React.FC<Readonly<InputProps>> = (props) => {
  const { rules, errorMsg, ...rest } = props
  return (
    <>
      <StyledInput {...rest} />
    </>
  )
}

export default Input

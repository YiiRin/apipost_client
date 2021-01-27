import React, { InputHTMLAttributes } from 'react'
import { Container } from './index.style'

type Props = {
  /** 文本 */
  text: string
}

const MemberItem: React.FC<
  Readonly<Props & InputHTMLAttributes<HTMLInputElement>>
> = (props) => {
  const { id = 'member-item', type = 'checkbox', text, ...rest } = props
  return (
    <Container>
      <input type={type} id={id} {...rest} />
      <label htmlFor={id}>{text}</label>
    </Container>
  )
}

export default MemberItem

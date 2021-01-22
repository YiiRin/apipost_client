import React, { InputHTMLAttributes } from 'react'
import { Container } from './index.style'

type Props = {
  /** 文本 */
  text: string
}

const MemberItem: React.FC<
  Readonly<Props & InputHTMLAttributes<HTMLInputElement>>
> = (props) => {
  const { id = 'member-item', text, ...rest } = props
  return (
    <Container>
      <input type="checkbox" id={id} {...rest} />
      <label htmlFor={id}>{text}</label>
    </Container>
  )
}

export default MemberItem

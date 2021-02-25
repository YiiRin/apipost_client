import React from 'react'
import { ParamItem } from 'typings/base'
import { Container } from './index.style'

export type IParamProps = {
  paramItem: ParamItem
  onChange?: React.ChangeEventHandler<HTMLInputElement>
}

const Param: React.FC<Readonly<IParamProps>> = ({ paramItem, onChange }) => {
  const { disabled = false, key, value, description = '' } = paramItem
  return (
    <Container>
      <input type="checkbox" name="disabled" checked={disabled} onChange={onChange}/>
      <input type="text" name="key" value={key} onChange={onChange}/>
      <input type="text" name="value" value={value} onChange={onChange}/>
      <input type="text" name="description" value={description} onChange={onChange}/>
    </Container>
  )
}

export default Param

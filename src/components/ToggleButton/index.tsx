import React, { ChangeEventHandler } from 'react'
import { CheckBox, Container, Label } from './index.style'
type Props = {
  onClick?: ChangeEventHandler
  width?: number
  height?: number
}

const ToggleButton: React.FC<Readonly<Props>> = (props) => {
  const { onClick, width, height } = props
  return (
    <Container width={width} height={height}>
      <CheckBox
        type="checkbox"
        id="switch"
        width={width}
        height={height}
        onChange={onClick}
      />
      <Label htmlFor="switch" width={width} height={height}></Label>
    </Container>
  )
}

export default ToggleButton

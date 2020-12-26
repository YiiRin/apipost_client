import styled from 'styled-components'
import theme from 'styled-theming'

interface ToggleButtonProps {
  width?: number
  height?: number
}

export const Container = styled.section<ToggleButtonProps>`
  width: ${(props) => (props.width ? props.width + 'px' : '24px')};
  height: ${(props) => (props.height ? props.height + 'px' : '12px')};
`

export const CheckBox = styled.input<ToggleButtonProps>`
  display: none;

  &:checked + label::before {
    left: ${(props) =>
      props.width && props.height ? (props.width - props.height) + 'px' : '12px'};
  }
`
const labelBgColor = theme('mode', {
  light: '#F7F7F7',
  dark: '#ADB5BD',
})

const labelBorder = theme('mode', {
  light: '1px solid #545b62',
  dark: '1px solid #303030',
})

const btnBgColor = theme('mode', {
  light: '#F7F7F7',
  dark: '#303030',
})

const btnBorder = theme('mode', {
  light: '1px solid #545b62',
  dark: '1px solid #303030',
})

export const Label = styled.label<ToggleButtonProps>`
  display: block;
  margin: 0;
  width: 100%;
  height: 100%;
  border: ${labelBorder};
  border-radius: ${(props) => (props.height ? props.height / 2 + 'px' : '6px')};
  background-color: ${labelBgColor};
  cursor: pointer;

  position: relative;

  &::before {
    content: '';
    position: absolute;
    width: ${(props) => (props.height ? props.height - 2 + 'px' : '10px')};
    height: ${(props) => (props.height ? props.height - 2 + 'px' : '10px')};
    background-color: ${btnBgColor};
    top: 0;
    left: 0;
    border: ${btnBorder};
    border-radius: 50%;
    transition: all 0.3s;
  }
`
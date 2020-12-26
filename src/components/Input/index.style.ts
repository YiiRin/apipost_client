import styled from 'styled-components'
import theme from 'styled-theming'

const BaseInput = styled.input`
  display: block;
  border: none;
  padding: 0;
  &:focus {
    outline: none;
  }
`

const bgColor = theme('mode', {
  light: '#E9ECEF',
  dark: '',
})

export const StyledInput = styled(BaseInput)`
  border: 1px solid thistle;
  padding: 0.5em 0.75em;
  width: ${(props) => props.width || '240px'};
  height: ${(props) => props.height || '32px'};
  background-color: ${bgColor};
`
import styled from 'styled-components'
import theme from 'styled-theming'

const bgColor = theme('mode', {
  light: '#F0F9EB',
  dark: '#292C2F',
})

const color = theme('mode', {
  light: '#67C23A',
  dark: '#67C23A',
})

export const Container = styled.p`
  padding: 0.5em 1em;
  background-color: ${bgColor};
  color: ${color};
  font-size: 12px;

  i {
    margin-right: .5em;
  }
`

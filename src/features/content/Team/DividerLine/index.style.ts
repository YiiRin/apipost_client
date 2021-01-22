import styled from 'styled-components'
import theme from 'styled-theming'

const lineBg = theme('mode', {
  light: '#E9EAEB',
  dark: '#323232',
})

export const Container = styled.div`
  width: 2px;
  height: 100%;
  background-color: ${lineBg};
`

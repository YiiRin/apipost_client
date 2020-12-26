import styled from 'styled-components'
import theme from 'styled-theming'
const color = theme('mode', {
  light: '#545b62',
  dark: '#ADB5BD'
}) 

export const Container = styled.div`
  display: flex;
  flex-flow: column nowrap;
  width: 100vw;
  height: 100vh;
  color: ${color};
`
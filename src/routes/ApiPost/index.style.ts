import styled from 'styled-components'
import theme from 'styled-theming'
const color = theme('mode', {
  light: '#545b62',
  dark: '#ADB5BD',
})

const bgColor = theme('mode', {
  light: '#7e7e7e',
  dark: '#141414',
})

export const Container = styled.div`
  display: flex;
  flex-flow: column nowrap;
  width: 100vw;
  min-width: 1480px;
  height: 100vh;
  color: ${color};
  background-color: ${bgColor};
`

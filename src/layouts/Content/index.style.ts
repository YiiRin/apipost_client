import styled from 'styled-components'
import theme from 'styled-theming'

const backgroundColor = theme('mode', {
  light: '#fcfcfc',
  dark: '#282828',
})
export const Container = styled.div`
  flex: 1 1 auto;
  background-color: ${backgroundColor};
`


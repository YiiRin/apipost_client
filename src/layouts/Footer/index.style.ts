import styled from 'styled-components'
import theme from 'styled-theming'

const backgroundColor = theme('mode', {
  light: '#fcfcfc',
  dark: '#282828',
})

const borderTop = theme('mode', {
  light: '1px solid #e9eaeb',
  dark: '1px solid #323232',
})
export const Container = styled.div`
  height: 41px;
  flex: 0 0 auto; 
  background-color: ${backgroundColor};
  border: ${borderTop};
`


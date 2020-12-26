import styled from 'styled-components'
import theme from 'styled-theming'

const backgroundColor = theme('mode', {
  light: '#f7f7f7',
  dark: '#303030',
})

const borderBottom = theme('mode', {
  light: '1px solid #e9eaeb',
  dark: '1px solid #323232',
})
export const Container = styled.div`
  height: 51px;
  flex: 0 0 auto; 
  background-color: ${backgroundColor};
  border-bottom: ${borderBottom};
  display: flex;
`


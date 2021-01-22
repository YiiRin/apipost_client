import styled from 'styled-components'
import theme from 'styled-theming'


const containerHoverBg = theme('mode', {
  light: '#FCFCFC',
  dark: '#282828',
})

const containerHoverColor = theme('mode', {
  light: '#6C757D',
  dark: '#6C757D',
})

export const Container = styled.div`
  color: #adb5bd;
  font-size: 12px;
  padding: 0.375em .75em;
  user-select: none;

  &:hover {
    background-color: ${containerHoverBg};
    color: ${containerHoverColor};
  }

  input[type='checkbox'] {
    vertical-align: -2px;
    margin-right: 0.3755em;
  }

  label {
    margin: 0
  }
`
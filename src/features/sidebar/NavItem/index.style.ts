import styled from 'styled-components'
import theme from 'styled-theming'

const activeBgColor = theme('mode', {
  light: '#e9ecef',
  dark: '#404040',
})

const iconColor = theme('mode', {
  light: '#B4C1D9',
  dark: '#ADB5BD',
})

const textColor = theme('mode', {
  light: '#636B82',
  dark: '#ADB5BD',
})

export const Container = styled.div`
  width: 50px;
  height: 50px;

  a {
    display: block;
    width: 100%;
    height: 100%;
    border-radius: 6px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    &.active,
    &:hover {
      background-color: ${activeBgColor};
    }
  }
`

export const Icon = styled.i`
  font-size: 18px;
  color: ${iconColor};
`


export const Text = styled.span`
  margin-top: 4px;
  color: ${textColor};
`

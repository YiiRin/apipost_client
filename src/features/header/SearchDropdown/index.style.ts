import styled from 'styled-components'
import theme from 'styled-theming'

const borderColor = theme('mode', {
  light: '#EBEBEB',
  dark: '#323232',
})

const listBgColor = theme('mode', {
  light: '#f7f7f7',
  dark: '#303030',
})

const optionContainerBgColor = theme('mode', {
  light: '#e9ecef',
  dark: '#404040',
})

const activeOptionBgColor = theme('mode', {
  light: '#F7F7F7',
  dark: '#303030',
})

export const Container = styled.div<{visible: boolean}>`
  position: absolute;
  z-index: 10;
  display: ${({visible}) => visible ? 'block' : 'none'};
  width: 100%;
  height: 280px;
  border: 1px solid ${borderColor};
  box-shadow: 0 0 4px rgba(0, 0, 0, .1);
  .list {
    background-color: ${listBgColor};
  }
`

export const OptionContainer = styled.div`
  height: 28px;
  padding-top: 2px;
  background-color: ${optionContainerBgColor};
  
  button.active {
    background-color: ${activeOptionBgColor};
    border-top-left-radius: 4px;
    border-top-right-radius: 4px;
  }
`
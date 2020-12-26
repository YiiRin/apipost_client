import styled from 'styled-components'
import theme from 'styled-theming'

const bgColor = theme('mode', {
  light: '#E9ECEF',
  dark: '#404040',
})

const bgColorFocus = theme('mode', {
  light: '#F7F7F7',
  dark: '#303030',
})

const color = theme('mode', {
  light: '#545B62',
  dark: '#ADB5BD',
})

const iconHoverColor = theme('mode', {
  light: '#EE6A5E',
  dark: '#EE6A5E',
})

export const Container = styled.div`
  display: flex;
  align-items: center;
`

export const InputContainer = styled.div`
  width: 940px;
  height: 36px;
  position: relative;

  &:hover i {
    color: ${iconHoverColor};
  }
`

export const Input = styled.input`
  width: 100%;
  height: 100%;

  border: none;
  border-radius: 18px;
  padding: 0;
  padding-left: 32px;
  padding-bottom: 2px;
  color: ${color};

  background-color: ${bgColor};
  &:focus {
    outline: none;
    border-radius: 0;
    background-color: ${bgColorFocus};
    box-shadow: 0 0 4px rgba(0, 0, 0, 0.1);
  }

  &:focus + i {
    color: ${iconHoverColor};
  }
`

export const Icon = styled.i`
  position: absolute;
  color: ${color};
  left: 14px;
  top: 10px;
`

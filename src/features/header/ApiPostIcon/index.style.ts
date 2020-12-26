import styled from 'styled-components'
import {AlEXA_STD_FONT_NAME} from 'assets/css/global'
import theme from 'styled-theming'

const color = theme('mode', {
  light: '#cfd6e3',
  dark: '#808693',
})

const hoverColor = theme('mode', {
  light: '#BFC8DA',
  dark: '#A0AABB',
})

export const Container = styled.h1`
  height: 50px;
  width: 120px;
  line-height: 50px;
  display: flex;
  justify-content: center;

  color: ${color};
  font-weight: 400;
`

export const LogoText = styled.span`
  font-size: 28px;
  margin-top: 4px;
  font-family: ${AlEXA_STD_FONT_NAME};

  &:hover,
  &:hover + span {
    color: ${hoverColor};
    cursor: pointer;
  }
`

export const LogoReg = styled.span`
  font-size: 14px;
  margin-top: -4px;
  margin-left: 4px;
`
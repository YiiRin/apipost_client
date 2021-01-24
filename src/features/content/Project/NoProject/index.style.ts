import { AlEXA_STD_FONT_NAME } from 'assets/css/global'
import styled from 'styled-components'
import theme from 'styled-theming'

const containerBg = theme('mode', {
  light: '#F7F7F7',
  dark: '#282828',
})

const titleColor = theme('mode', {
  light: '#CFD6E3',
  dark: '#808693',
})

const textColor = theme('mode', {
  light: '#ADB5BD',
  dark: '#ADB5BD',
})

const btnHoverColor = theme('mode', {
  light: '#F1958C',
  dark: '#B55850',
})

export const Container = styled.div`
  background-color: ${containerBg};
  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .title {
    color: ${titleColor};
    font-size: 40px;
    font-family: ${AlEXA_STD_FONT_NAME};
  }

  .text {
    color: ${textColor};
    font-size: 13px;

    .btn {
      font-size: 14px;
      color: #ee6a5e;
      padding: 0;
      margin: 0;

      &:hover {
        color: ${btnHoverColor};
      }
    }
  }
`




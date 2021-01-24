import styled from 'styled-components'
import theme from 'styled-theming'

const textBg = theme('mode', {
  light: '#F7F7F7',
  dark: '#303030',
})
const borderColor = theme('mode', {
  light: '#E9EAEB',
  dark: '#323232',
})
const placeholerColor = theme('mode', {
  light: '#757575',
  dark: '#757575',
})
const inputColor = theme('mode', {
  light: '#545B62',
  dark: '#ADB5BD',
})

export const ModalContentContainer = styled.div`
  .project-name {
    font-size: 13px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 1em;

    label {
      margin-right: 1.25em;
      margin-bottom: 0;
      line-height: 32px;
    }
    input {
      width: 312px;
      height: 32px;
      outline: none;
      border: 1px solid ${borderColor};
      border-radius: 0.375em;
      padding: 0 0.75em;
      background-color: ${textBg};
      color: ${inputColor};

      &::placeholer {
        font-size: 13px;
        color: ${placeholerColor};
      }
    }
  }

  .partners {
    font-size: 13px;
    display: flex;
    justify-content: center;

    .partners-text {
      margin-right: 1.25em;
      margin-bottom: 0;
    }

    .member-container {
      width: 312px;
      height: 320px;
      background-color: ${textBg};
      border: 1px solid ${borderColor};
      border-radius: 0.375em;
    }
  }
`

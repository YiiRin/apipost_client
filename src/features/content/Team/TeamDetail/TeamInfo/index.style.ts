import styled from 'styled-components'
import theme from 'styled-theming'

const btnHoverColor = theme('mode', {
  light: '#F2968E',
  dark: '#B2564E',
})

export const Container = styled.div`
  font-size: 13px;

  .team-info-item {
    height: 48px;
    line-height: 48px;
    display: flex;

    .title {
      text-align: right;
      width: 160px;
      margin-right: 2.5em;
    }

    .content {
      .btn {
        font-size: 12px;
        color: #ee6a5e;
        margin: 0;

        &:hover {
          color: ${btnHoverColor};
        }
      }
    }
  }
`
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
  .tip {
    font-size: 12px;
    color: #ee6a5e;
    background-color: ${textBg};
    padding: 0.375em 0.5em;
    line-height: 1.5;
    margin-bottom: 0.5em;
  }

  .team-name {
    font-size: 13px;
    margin-bottom: 2em;
    display: flex;
    align-items: center;
    justify-content: center;

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
`

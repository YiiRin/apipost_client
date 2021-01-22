import styled from 'styled-components'
import theme from 'styled-theming'

const containerBg = theme('mode', {
  light: '#F7F7F7',
  dark: '#303030',
})

const containerHoverBg = theme('mode', {
  light: '#F8F8F8',
  dark: '#2E2E2E',
})

const color = theme('mode', {
  light: '#6C757D',
  dark: '',
})

export const Container = styled.div`
  width: 240px;
  height: 160px;
  background-color: ${containerBg};
  border-radius: 8px;
  box-shadow: 0 0 4px rgba(0, 0, 0, 0.15);
  margin-right: 16px;
  position: relative;

  &:hover {
    background-color: ${containerHoverBg};
  }

  .left,
  .right {
    position: absolute;
    padding: 0.15em 0.375em 0.2em;
    font-size: 13px;
    border-radius: 0.25em;
    color: #fcfcfc;
  }

  .left {
    left: 0.25em;
    top: 0.25em;
    background-color: #58b882;
  }

  .right {
    right: 4px;
    top: 4px;
    background-color: #ee6a5e;
  }
`

const btnHoverColor = theme('mode', {
  light: '#F2968E',
  dark: '#B2564E',
})
export const MemberInfo = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  .header {
    margin-bottom: 0.5em;
  }

  .content.email {
    margin-top: 0.5em;
    margin-bottom: 1em;
  }

  .header {
    font-size: 13px;
    color: #6c757d;

    &.icon {
      font-size: 24px;
      opacity: 0.5;
    }
  }

  .content {
    color: #545b62;
    font-size: 12px;

    .btn {
      margin: 0;
      padding-left: 0.5em;
      padding-right: 0.5em;
      color: #ee6a5e;

      &:hover {
        color: ${btnHoverColor};
      }
    }
  }

  .footer {
    color: #adb5bd;
    font-size: 12px;
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
  .email-item {
    font-size: 13px;
    margin-bottom: 1em;
    display: flex;
    align-items: center;
    justify-content: center;

    label {
      margin-right: 1.25em;
      margin-bottom: 0;
      line-height: 32px;
      width: 8em;
      text-align: right;
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

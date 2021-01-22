import styled from 'styled-components'
import theme from 'styled-theming'

const containerBg = theme('mode', {
  light: '#FCFCFC',
  dark: '#282828',
})

const btnColor = theme('mode', {
  light: '#EE6A5E',
  dark: '#EE6A5E',
})

const btnHoverColor = theme('mode', {
  light: '#F2968E',
  dark: '#B2564E',
})

const activeBg = theme('mode', {
  light: '#EDEFF2',
  dark: '#3B3B3B',
})

const activeColor = theme('mode', {
  light: '#91969a',
  dark: '#72767A',
})
export const Container = styled.div`
  padding: 4px 2em 0;
  background-color: ${containerBg};
  .create-team-btn {
    padding-left: 0;
    padding-top: 1em;
    padding-bottom: 1em;
    font-size: 13px;
    color: ${btnColor};

    &:hover {
      color: ${btnHoverColor};
    }
  }

  .team-item.active {
    background-color: ${activeBg};
    color: ${activeColor};
  }

  .team-item {
    display: block;
    border-radius: 4px;
    margin-bottom: 2px;

    &:hover {
      background-color: ${activeBg};
      color: ${activeColor};
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
  .text {
    font-size: 12px;
    color: #ee6a5e;
    background-color: ${textBg};
    padding: 0.375em 0.5em;
    line-height: 1.5;
    margin-bottom: .5em;
  }

  .team-name {
    font-size: 13px;
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

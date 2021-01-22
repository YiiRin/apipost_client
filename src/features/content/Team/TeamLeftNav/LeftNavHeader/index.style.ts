import styled from 'styled-components'
import theme from 'styled-theming'

const containerBg = theme('mode', {
  light: '#E9ECEF',
  dark: '#404040',
})

const activeBg = theme('mode', {
  light: '#fcfcfc',
  dark: '#282828',
})

export const Container = styled.div`
  height: 32px;
  background-color: ${containerBg};

  display: flex;
  justify-content: center;
  align-items: flex-end;
  .active {
    background-color: ${activeBg};
  }
  a:not(.last-link) {
    margin-right: 8px;
  }
  a {
    border-top-left-radius: 4px;
    border-top-right-radius: 4px;
    .team-btn {
      font-size: 13px;
      padding-bottom: 0.375em;
      padding-top: 0.5em;
      margin: 0
    }
  }
`

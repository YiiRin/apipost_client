import styled from 'styled-components'
import theme from 'styled-theming'

const color = theme('mode', {
  light: '#545B62',
  dark: '#adb5bd',
})

const bgColor = theme('mode', {
  light: '#7e7e7e',
  dark: '#141414',
})


export const AppContainer = styled.div`
  display: flex;
  flex-flow: column nowrap;
  width: 100vw;
  min-width: 1480px;
  height: 100vh;
  color: ${color};
  background-color: ${bgColor};
`

export const Container = styled.div`
  .small-tip {
    margin-bottom: 1em;
  }

  .remem-pwd {
    margin-bottom: 10px;
    font-size: 12px;
    input[type='checkbox'] {
      vertical-align: middle;
      margin-right: 4px;
    }
    label {
      margin: 0;
      color: ${color};
    }
  }
`

export const StyledForm = styled.form`
  .form-item {
    margin-bottom: 1.5em;
  }
`

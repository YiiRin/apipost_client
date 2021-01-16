import styled from 'styled-components'
import theme from 'styled-theming'

const color = theme('mode', {
  light: '#545B62',
  dark: '#adb5bd',
})

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

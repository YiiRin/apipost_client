import styled from 'styled-components'
import theme from 'styled-theming'

const color = theme('mode', {
  light: '#545B62',
  dark: '#adb5bd',
})

const hoverColor = theme('mode', {
  light: '#F1958C',
  dark: '#b55850',
})
export const Container = styled.div`
  .small-tip {
    margin-bottom: 1em;
  }

  .agree-policy {
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

    .privacy {
      color: #ee6a5e;

      &:hover {
        color: ${hoverColor};
      }
    }
  }
`

export const StyledForm = styled.form`
  .form-item {
    margin-bottom: 20px;
  }
`

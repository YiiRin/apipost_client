import styled from 'styled-components'
import theme from 'styled-theming'

const hoverColor = theme('mode', {
  light: '#F1958C',
  dark: '#b55850',
})

export const Container = styled.div`
  color: #ee6a5e;
  font-size: 12px;
  .find-pwd {
    &:hover {
      color: ${hoverColor};
    }
  }
`
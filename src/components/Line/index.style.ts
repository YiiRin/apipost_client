import styled from 'styled-components'
import theme from 'styled-theming'

type Props = {
  /**
   * line width, default 100px
   */
  width?: string
  /**
   * line height: default 1px
   */
  height?: string
}

const bgColor = theme('mode', {
  light: '#E9ECEF',
  dark: '#404040',
})

export const Container = styled.div<Props>`
  width: ${({ width }) => width || '100px'};
  height: ${({ height }) => height || '1px'};
  background-color: ${bgColor};
`
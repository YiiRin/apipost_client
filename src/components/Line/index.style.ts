import styled from 'styled-components'
import theme from 'styled-theming'

export type LineVariant = 'default' | 'dropdown' | 'sidebar'

type Props = {
  /**
   * line width, default 100px
   */
  width?: string
  /**
   * line height: default 1px
   */
  height?: string

  /**
   * the line variant
   */
  variant: LineVariant
}

const bgColor = theme.variants('mode', 'variant', {
  default: {
    light: '#E9ECEF',
    dark: '#404040',
  },
  sidebar: {
    light: '#E9ECEF',
    dark: '#404040',
  },
  dropdown: {
    light: '#E9EAEB',
    dark: '#323232',
  },
})

export const Container = styled.div<Props>`
  width: ${({ width }) => width || '100px'};
  height: ${({ height }) => height || '1px'};
  background-color: ${bgColor};
`

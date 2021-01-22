import styled from 'styled-components'
import theme from 'styled-theming'

export type SmallTipVariant = 'info' | 'error'

const bgColor = theme.variants('mode', 'variant', {
  info: {
    light: '#F0F9EB',
    dark: '#292C2F',
  },
  error: {
    light: '#F7F7F7',
    dark: '#303030',
  },
})

const color = theme.variants('mode', 'variant', {
  info: {
    light: '#67C23A',
    dark: '#67C23A',
  },
  error: {
    light: '#EE6A5E',
    dark: '#EE6A5E',
  },
})

export const Container = styled.p<{ variant: SmallTipVariant }>`
  padding: 0.5em 1em;
  background-color: ${bgColor};
  color: ${color};
  font-size: 12px;

  i {
    margin-right: 0.5em;
  }
`

import { _f0f9eb_292c2f } from 'assets/theme/color'
import styled from 'styled-components'

interface IProps {
  width: string
  height: string
}

export const Container = styled.div<IProps>`
  padding: 0.375em 0.75em;
  font-size: 12px;
  background-color: ${_f0f9eb_292c2f};
  color: #67c23a;
  border-radius: 4px;
  width: ${({ width }) => width || 'auto'};
  height: ${({ height }) => height || 'auto'};

  svg {
    width: 12px;
    height: 12px;
    vertical-align: -1px;
    margin-right: 0.25em;
  }
`

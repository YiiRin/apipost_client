import styled from 'styled-components'
import { TitleDirection } from '.'

export const Container = styled.div<{ direction: TitleDirection }>`
  position: absolute;
  ${({ direction }) => (direction === 'top' ? 'top: -32px;' : 'bottom: -32px;')}
  left: 50%;
  transform: translateX(-50%);
  border-radius: 4px;
  display: none;
  font-size: 12px;
  font-weight: 400;
  color: #fefefe;
  background-color: #191919;
  padding: 2px 0.5em 2px;
  text-align: center;
  height: 28px;
  line-height: 24px;
  white-space: nowrap;

  &::after {
    position: absolute;
    content: '';
    width: 0;
    height: 0;
    ${({ direction }) => (direction === 'top' ? 'top: 100%;' : 'bottom: 100%;')}
    left: 50%;
    transform: translateX(-50%);
    border: 6px solid transparent;
    ${({ direction }) =>
      direction === 'top'
        ? 'border-top-color: #191919;'
        : 'border-bottom-color: #191919;'}
  }
`

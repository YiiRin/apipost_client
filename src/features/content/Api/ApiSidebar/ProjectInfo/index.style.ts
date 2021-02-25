import { _f2968e_b2564e } from 'assets/theme/color'
import styled from 'styled-components'

export const Container = styled.div`
  font-size: 12px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1em;

  .icons {
    color: #ee6a5e;
    display: flex;
    line-height: 1;
    .icon {
      width: 16px;
      height: 16px;
      position: relative;
      svg {
        width: 100%;
        height: 100%;
      }
      &.first {
        margin-right: 1em;
      }
      &:hover {
        cursor: pointer;
        color: ${_f2968e_b2564e};
      }

      &:hover .pop-title {
        display: block;
      }
    }
  }
`

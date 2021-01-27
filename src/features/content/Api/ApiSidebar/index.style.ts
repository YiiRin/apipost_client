import { _f2968e_b2564e } from 'assets/theme/color'
import styled from 'styled-components'
import theme from 'styled-theming'

export const Container = styled.div`
  width: 300px;
  padding: 20px;
  flex: 0 0 auto;
  font-size: 13px;

  .proj-info {
    font-size: 12px;
    display: flex;
    align-items: center;
    justify-content: space-between;

    .icons {
      color: #ee6a5e;
      display: flex;
      line-height: 1;
      .icon {
        width: 14px;
        height: 14px;
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
  }
`

import { _f2968e_b2564e } from 'assets/theme/color'
import styled from 'styled-components'

export const Container = styled.div`
  font-size: 12px;
  margin-bottom: .75em;

  .zxkav-1 {
    color: #ee6a5e;
    display: flex;
    justify-content: space-between;
    button {
      margin: 0;
      padding: 0.375em 0;

      &:hover {
        color: ${_f2968e_b2564e};
      }
      .icon {
        margin-right: 0.5em;
      }
    }
  }

  .zxkav-2 {
    display: flex;
    justify-content: flex-end;

    button {
      margin: 0;
      padding: 0.25em 0;
      &.first {
        margin-right: 1em;
      }

      .icon {
        margin-right: 0.375em;
      }
    }
  }
`

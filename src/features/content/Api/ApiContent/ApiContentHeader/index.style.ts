import styled from 'styled-components'

export const Header = styled.div`
  padding: 10px;

  display: flex;
  justify-content: space-between;
  .icon-btns-container {
    display: flex;

    .icon-btn {
      margin-right: 0.75em;

      svg {
        width: 12px;
        height: 12px;
        vertical-align: middle;
      }

      &.text {
        font-size: 12px;
        font-family: 'Source Sans Pro', 'Hiragino Sans GB', 'Microsoft Yahei',
          SimSun, Helvetica, Arial, Sans-serif, monospace;
        font-weight: 400;
        display: flex;
        justify-content: center;
        align-items: center;

        svg {
          margin-top: -4px;
          margin-left: 0.2em;
        }
      }
    }
  }
`

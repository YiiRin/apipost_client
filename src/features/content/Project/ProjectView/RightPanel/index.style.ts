import styled from 'styled-components'
import theme from 'styled-theming'

export const Container = styled.div`
  width: 240px;
  flex: 0 0 auto;
  padding: 0.5em 2em;
  font-size: 13px;

  .operation-item {
    display: block;
    color: #6c757d;
    padding-left: 0;
    padding-right: 0;
    margin-bottom: 0.5em;
    &:hover {
      color: #ee6a5e;
    }
    svg {
      margin-right: 0.5em;
    }
  }
`

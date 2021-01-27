import styled from 'styled-components'
import theme from 'styled-theming'

export const Container = styled.div`
  flex: 1 1 auto;
  font-size: 13px;
  color: #6c757d;
  display: flex;
  flex-direction: column;
  .team-name {
    margin-bottom: 1em;
  }

  .nav-link-container {
    padding: 0.75em 1.25em;
    font-size: 16px;

    .link.active {
      color: #ee6a5e;
    }
    span {
      font-size: 12px;
      vertical-align: 2px;
      margin: 0 0.5em;
    }
  }

  .list-container {
    flex: 1 1 auto;
  }
`

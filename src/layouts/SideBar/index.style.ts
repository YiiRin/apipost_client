import { _e9eaeb_323232, _f7f7f7_303030 } from 'assets/theme/color'
import styled from 'styled-components'

export const Container = styled.div`
  width: 71px;
  background-color: ${_f7f7f7_303030};
  border-right: ${_e9eaeb_323232};

  display: flex;
  flex-direction: column;
  align-items: center;

  .nav-list {
    .nav-item {
      margin-top: 1em;
    }
  }

  .business {
    margin-bottom: 1em;
  }
  .business,
  .friends-links {
    flex: 0 0 auto;
  }
  .application {
    flex: 1 1 auto;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    margin-bottom: 2em;
  }
`

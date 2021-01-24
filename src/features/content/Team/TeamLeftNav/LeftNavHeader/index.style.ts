import { _e9ecef_404040, _fcfcfc_282828 } from 'assets/theme/color'
import styled from 'styled-components'

export const Container = styled.div`
  height: 32px;
  background-color: ${_e9ecef_404040};

  display: flex;
  justify-content: center;
  align-items: flex-end;
  .active {
    background-color: ${_fcfcfc_282828};
  }
  a:not(.last-link) {
    margin-right: 8px;
  }
  a {
    border-top-left-radius: 4px;
    border-top-right-radius: 4px;
    .team-btn {
      font-size: 13px;
      padding-bottom: 0.375em;
      padding-top: 0.5em;
      margin: 0;
    }
  }
`

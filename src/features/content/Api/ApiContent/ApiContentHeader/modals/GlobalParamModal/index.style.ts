import {
  _e9eaeb_404040,
  _f7f7f7_303030,
  _fcfcfc_282828,
} from 'assets/theme/color'
import styled from 'styled-components'
import theme from 'styled-theming'

export const Container = styled.div`
  background-color: #bfa;
  font-size: 13px;
  .tab-control {
    background-color: ${_f7f7f7_303030};

    .title-container {
      display: flex;
      background-color: ${_e9eaeb_404040};
      padding: 0.375em 0.75em 0;
      user-select: none;

      .tab-title {
        padding: 0.25em 0.75em;
        border-radius: 0.25em;
        cursor: pointer;
        margin-right: 1em;
      }

      .tab-title.active-tab {
        background-color: ${_f7f7f7_303030};
      }
    }

    .content-container {
      .tab-content {
        height: 400px;
        background-color: ${_fcfcfc_282828};
        display: none;
      }

      .tab-content.show {
        display: block;
      }
    }
  }
`

export const ContentContainer = styled.section`
  background-color: ${_f7f7f7_303030};
  padding: 1em;
  font-size: 12px;

  .tip {
    color: #ee6a5e;
    margin-bottom: 1em;
  }
`

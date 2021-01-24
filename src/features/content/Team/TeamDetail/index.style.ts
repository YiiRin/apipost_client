import {
  _79c69a_4e9b70,
  _92d0ad_478562,
  _f2968e_b2564e,
  _fefefe_d4d4d4,
} from 'assets/theme/color'
import styled from 'styled-components'

export const Container = styled.div`
  padding: 2em;

  .detail-item {
    margin-bottom: 1.5em;
  }

  .no-team-text {
    color: #adb5bd;
    font-size: 13px;
    text-indent: 1em;
    margin-bottom: 0.75em;
  }
`

export const DetailHeader = styled.div`
  font-size: 12px;

  .toggle-current-team-btn {
    background-color: #58b882;
    color: #fcfcfc;
    padding: 0.75em 1em;
    margin-right: 0;
    &:hover {
      background-color: ${_79c69a_4e9b70};
      color: ${_fefefe_d4d4d4};
    }

    &[disabled] {
      background-color: ${_92d0ad_478562};
    }
  }

  .help-doc {
    color: #ee6a5e;
    margin-left: 0;

    &:hover {
      color: ${_f2968e_b2564e};
    }
  }
`

export const OfficialCubicleContainer = styled.div`
  display: flex;
`

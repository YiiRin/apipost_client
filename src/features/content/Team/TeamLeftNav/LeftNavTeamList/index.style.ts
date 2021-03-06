import {
  _545b62_adb5bd,
  _91969a_72767a,
  _e9eaeb_323232,
  _edeff2_3b3b3b,
  _f2968e_b2564e,
  _f7f7f7_303030,
  _fcfcfc_282828,
} from 'assets/theme/color'
import styled from 'styled-components'

export const Container = styled.div`
  padding: 4px 2em 0;
  background-color: ${_fcfcfc_282828};
  .create-team-btn {
    padding-left: 0;
    padding-top: 1em;
    padding-bottom: 1em;
    font-size: 13px;
    color: #ee6a5e;

    &:hover {
      color: ${_f2968e_b2564e};
    }
  }

  .team-item.active {
    background-color: ${_edeff2_3b3b3b};
    color: ${_91969a_72767a};
  }

  .team-item {
    display: block;
    border-radius: 4px;
    margin-bottom: 2px;

    &:hover {
      background-color: ${_edeff2_3b3b3b};
      color: ${_91969a_72767a};
    }
  }
`

export const ModalContentContainer = styled.div`
  .text {
    font-size: 12px;
    color: #ee6a5e;
    background-color: ${_f7f7f7_303030};
    padding: 0.375em 0.5em;
    line-height: 1.5;
    margin-bottom: 0.5em;
  }

  .team-name {
    font-size: 13px;
    display: flex;
    align-items: center;
    justify-content: center;

    label {
      margin-right: 1.25em;
      margin-bottom: 0;
      line-height: 32px;
    }
    input {
      width: 312px;
      height: 32px;
      outline: none;
      border: 1px solid ${_e9eaeb_323232};
      border-radius: 0.375em;
      padding: 0 0.75em;
      background-color: ${_f7f7f7_303030};
      color: ${_545b62_adb5bd};

      &::placeholer {
        font-size: 13px;
        color: #757575;
      }
    }
  }
`

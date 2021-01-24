import {
  _545b62_adb5bd,
  _e9eaeb_323232,
  _f2968e_b2564e,
  _f7f7f7_303030,
} from 'assets/theme/color'
import styled from 'styled-components'

export const Container = styled.div`
  font-size: 13px;

  .team-info-item {
    height: 48px;
    line-height: 48px;
    display: flex;

    .title {
      text-align: right;
      width: 160px;
      margin-right: 2.5em;
    }

    .content {
      .btn {
        font-size: 12px;
        color: #ee6a5e;
        margin: 0;

        &:hover {
          color: ${_f2968e_b2564e};
        }
      }
    }
  }
`

export const ModalContentContainer = styled.div`
  .tip {
    font-size: 12px;
    color: #ee6a5e;
    background-color: ${_f7f7f7_303030};
    padding: 0.375em 0.5em;
    line-height: 1.5;
    margin-bottom: 0.5em;
  }

  .team-name {
    font-size: 13px;
    margin-bottom: 2em;
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

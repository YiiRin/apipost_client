import {
  _545b62_adb5bd,
  _e9eaeb_323232,
  _f2968e_b2564e,
  _f7f7f7_303030,
  _f8f8f8_2e2e2e,
} from 'assets/theme/color'
import styled from 'styled-components'

export const Container = styled.div`
  width: 240px;
  height: 160px;
  background-color: ${_f7f7f7_303030};
  border-radius: 8px;
  box-shadow: 0 0 4px rgba(0, 0, 0, 0.15);
  margin-right: 16px;
  position: relative;

  &:hover {
    background-color: ${_f8f8f8_2e2e2e};
  }

  .left,
  .right {
    position: absolute;
    padding: 0.15em 0.375em 0.2em;
    font-size: 13px;
    border-radius: 0.25em;
    color: #fcfcfc;
  }

  .left {
    left: 0.25em;
    top: 0.25em;
    background-color: #58b882;
  }

  .right {
    right: 4px;
    top: 4px;
    background-color: #ee6a5e;
  }
`

export const MemberInfo = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  .header {
    margin-bottom: 0.5em;
  }

  .content.email {
    margin-top: 0.5em;
    margin-bottom: 1em;
  }

  .header {
    font-size: 13px;
    color: #6c757d;

    &.icon {
      font-size: 24px;
      opacity: 0.5;
    }
  }

  .content {
    color: #545b62;
    font-size: 12px;

    .btn {
      margin: 0;
      padding-left: 0.5em;
      padding-right: 0.5em;
      color: #ee6a5e;

      &:hover {
        color: ${_f2968e_b2564e};
      }
    }
  }

  .footer {
    color: #adb5bd;
    font-size: 12px;
  }
`
export const ModalContentContainer = styled.div`
  .email-item {
    font-size: 13px;
    margin-bottom: 1em;
    display: flex;
    align-items: center;
    justify-content: center;

    label {
      margin-right: 1.25em;
      margin-bottom: 0;
      line-height: 32px;
      width: 8em;
      text-align: right;
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

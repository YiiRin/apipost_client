import { createGlobalStyle } from 'styled-components'

const baseZIndex = 1003
export const MessageStyle = createGlobalStyle`
  .rc-notification {
    position: fixed;
    z-index: ${baseZIndex};

  }

  .rc-notification-notice {
    padding: .5em 1em .5em .75em;
    border-radius: .25em;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
    border: 0px solid rgba(0, 0, 0, 0);
    background: #fff;
    display: block;
    width: auto;
    line-height: 1.5;
    position: relative;
    margin: 10px 0;
  }

  .rc-notification-notice-closable {
    padding-right: 20px;
  }
  .rc-notification-notice-close {
    position: absolute;
    right: 8px;
    top: 5px;
    color: #000;
    cursor: pointer;
    outline: none;
    font-size: 20px;
    font-weight: 500;
    line-height: 1;
    text-shadow: 0 1px 0 #fff;
    filter: alpha(opacity=20);
    opacity: 0.2;
    text-decoration: none;
  }
  .rc-notification-notice-close-x:after {
      content: '×';
  }
  .rc-notification-notice-close:hover {
      opacity: 1;
      filter: alpha(opacity=100);
      text-decoration: none;
  }

  .rc-notification-fade-enter {
      animation: moveIn .3s;
  }
  .rc-notification-fade-leave {
      animation: moveOut .3s;
  }
  .rc-notification-fade-enter.rc-notification-fade-enter-active {
      animation: moveIn .3s;
  }
  .rc-notification-fade-leave.rc-notification-fade-leave-active {
      animation-name: moveOut .3s;
  }

  @keyframes moveOut {
    0% {
      opacity: 1;
    }
    100% {
      opacity: 0;
    }
  }
  @keyframes moveIn {
    0% {
      opacity: 0;
      
    }
    100% {
      opacity: 1;
    }
  }

  .xMessage {
    display: flex;
    padding: .5em 1.5em .5em 1em;
    align-items: center;
    .iconWrap {
        width: 36px;
        display: inherit;
        font-size: 16px;
        &.info {
         color: #1890ff;
        }
        &.success {
            color: #52c41a;
        }
        &.warning {
            color: #faad14;
        }
        &.error {
            color: #f5222d;
        }
    }
    .xMessageTit {
        font-size: 12px;
        font-weight: 400;
    }
  }
`

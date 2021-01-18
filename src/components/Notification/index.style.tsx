import { createGlobalStyle } from 'styled-components'

const baseZIndex = 1002
export const NotificationStyle = createGlobalStyle`
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
      animation: moveLeft .3s;
  }
  .rc-notification-fade-leave {
      animation: moveOutLeft .3s;
  }
  .rc-notification-fade-enter.rc-notification-fade-enter-active {
      animation: moveLeft .3s;
  }
  .rc-notification-fade-leave.rc-notification-fade-leave-active {
      animation-name: moveOutLeft .3s;
  }

@keyframes moveOutLeft {
    0% {
        
    }
    100% {
        right: -200%;
    }
}
@keyframes moveLeft {
    0% {
        right: -200%;
    }
    100% {
        right: 0;
    }
}

.xNotice {
    display: flex;
    padding: 12px;
    .iconWrap {
        width: 36px;
        line-height: 1.5;
        font-size: 20px;
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
    .xNoticeTit {
        margin-bottom: 6px;
        font-size: 14px;
        font-weight: 500;
        line-height: 1.5;
    }
    .xNoticeDesc {
        line-height: 1.5;
        font-size: 12px;
        color: rgba(0,0,0, .65)
    }
}

`

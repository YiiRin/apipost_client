import React from 'react'
import RcNotification from 'rc-notification'
import { NotificationInstance } from 'rc-notification/lib/Notification'
import classnames from 'classnames'
import Icon from 'components/Icon'
import { NotificationStyle } from './index.style'

/**
 * 通知框不同方向默认偏移量
 */
const adapterPos = {
  topLeft: {
    top: '24px',
    left: '24px',
  },
  topRight: {
    top: '24px',
    right: '24px',
  },
  bottomLeft: {
    bottom: '24px',
    left: '24px',
  },
  bottomRight: {
    bottom: '24px',
    right: '24px',
  },
}

/**
 * 四种不同的提示框的图标
 */
const iconType = {
  success: 'FaRegCheckCircle',
  warning: 'FaRegMeh',
  info: 'FaRegLightbulb',
  error: 'FaRegTimesCircle',
}
interface NoticeBaseConfig {
  /**
   * 消息从顶部弹出时，距离底部的位置，单位像素, 默认24
   */
  top?: number
  /**
   * 消息从底部弹出时，距离底部的位置，单位像素, 默认24
   */
  bottom?: number

  /**
   * 显示的时间，默认为 4.5s,单位是 s
   */
  duration?: number

  /**
   * 配置渲染节点的输出位置, 默认是 document.body
   */
  getContainer?: () => HTMLElement

  /**
   * 自定义关闭图标
   */
  closeIcon?: React.ReactNode

  /**
   * 通知框弹出的位置
   */
  placement?: keyof typeof adapterPos
}

interface NoticeConfig extends NoticeBaseConfig {
  /**
   * 通知提醒标题
   */
  title: React.ReactNode
  /**
   * 通知的内容
   */
  message: string
  /**
   * 通知框类型
   */
  type?: keyof typeof iconType

  /**
   * 自定义类名
   */
  className?: string

  /**
   * 自定义图标
   */
  icon?: React.ReactNode

  /**
   * 当前通知框的唯一标识
   */
  key?: string

  /**
   * 是否可以关闭
   */
  closable?: boolean

  /**
   * 关闭的回调
   */
  onClose?: Function

  /**
   * 点击的回调
   */
  onClick?: Function
}

const Notification = (function () {
  let notification: null | NotificationInstance = null

  const config = (config: NoticeBaseConfig) => {
    const { closeIcon, getContainer, placement = 'topRight' } = config

    RcNotification.newInstance(
      {
        getContainer,
        closeIcon,
        style: {
          ...adapterPos[placement!],
        },
      },
      (notice) => (notification = notice)
    )
  }

  /**
   * Notice 类型弹窗
   *
   * @param config 弹窗配置对象
   */
  const pop = (config: NoticeConfig) => {
    const {
      message,
      title,
      bottom,
      className,
      closeIcon,
      duration = 1,
      icon,
      key,
      onClick,
      onClose,
      top,
      type = 'success',
      closable,
    } = config

    if (!notification) {
      console.error('notication is not been initialized')
      return
    }

    notification.notice({
      content: (
        <div className={classnames('xNotice', className)}>
          <NotificationStyle />
          <div className={classnames('iconWrap', type)}>
            {icon ? icon : <Icon type={iconType[type] as 'FaRegCheckCircle'} />}
          </div>
          <div>
            <div className="xNoticeTit">{title}</div>
            <div className="xNoticeDesc">{message}</div>
          </div>
        </div>
      ),
      key,
      closable,
      duration,
      closeIcon,
      style: { top, bottom },
      onClose: () => onClose && onClose(),
      onClick: () => onClick && onClick(),
    })
  }
  const remove = (key: string) => {
    notification?.removeNotice(key)
  }

  const destroy = () => {
    notification?.destroy()
  }

  /**
   * 初始化流程
   */
  if (!notification) {
    RcNotification.newInstance(
      { style: { right: '24px', top: '24px' } },
      (notice) => (notification = notice)
    )
  }

  return {
    pop,
    config,
    remove,
    destroy,
  }
})()

export default Notification

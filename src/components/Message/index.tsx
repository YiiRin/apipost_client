import RcNotification from 'rc-notification'
import { NotificationInstance } from 'rc-notification/lib/Notification'
import classnames from 'classnames'
import { MessageStyle } from './index.style'
import React from 'react'
import {
  FaRegCheckCircle,
  FaRegLightbulb,
  FaRegMeh,
  FaRegTimesCircle,
} from 'react-icons/fa'

/**
 * 四种不同的提示框的图标
 */
const iconType = {
  success: <FaRegCheckCircle />,
  warning: <FaRegMeh />,
  info: <FaRegLightbulb />,
  error: <FaRegTimesCircle />,
}

interface MessageBaseConfig {
  /**
   * 配置渲染节点的输出位置, 默认是 document.body
   */
  getContainer?: () => HTMLElement

  /**
   * 自定义关闭图标
   */
  closeIcon?: React.ReactNode
}

interface MessageConfig extends MessageBaseConfig {
  /**
   * 消息的内容
   */
  message: string
  /**
   * 通知框类型
   */
  type?: keyof typeof iconType

  /**
   * 默认自动关闭延时，单位秒
   */
  duration?: number

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

  /**
   * 消息从顶部弹出时，距离底部的位置，单位像素, 默认24
   */
  top?: number
}
const Message = (() => {
  let message: null | NotificationInstance = null

  /**
   *
   * 消息框弹出
   *
   * @param config 消息框配置
   */
  const pop = (config: MessageConfig) => {
    const {
      message: content,
      className,
      closable,
      closeIcon,
      duration = 4.5,
      icon,
      key,
      onClick,
      onClose,
      top = 24,
      type = 'success',
    } = config

    message?.notice({
      content: (
        <div className={classnames('xMessage', className)}>
          <MessageStyle />
          <div className={classnames('iconWrap', type)}>
            {icon ? icon : iconType[type]}
          </div>
          <div className="xMessageTit">{content}</div>
        </div>
      ),
      key,
      className,
      closable,
      closeIcon,
      duration,
      style: { top },
      onClose: () => onClose && onClose(),
      onClick: () => onClick && onClick(),
    })
  }

  const config = (config: MessageBaseConfig) => {
    const { getContainer, closeIcon } = config

    RcNotification.newInstance(
      {
        getContainer: getContainer,
        closeIcon,
      },
      (notice) => (message = notice)
    )
  }

  const remove = (key: string) => {
    message?.removeNotice(key)
  }

  const destroy = () => {
    message?.destroy()
  }

  /**
   * 初始化流程
   */
  if (!message) {
    RcNotification.newInstance(
      {
        style: {
          top: '20px',
          left: '50%',
          transform: 'translateX(-50%)',
        },
      },
      (notice) => (message = notice)
    )
  }

  return {
    pop,
    config,
    remove,
    destroy,
  }
})()

export default Message

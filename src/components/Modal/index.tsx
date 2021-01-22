import Button from 'components/Button'
import React from 'react'
import { Transition } from 'react-transition-group'

import { useAnimation, useAutoDestroyBody, useMask } from './hook'
import {
  Container,
  FooterBtnContainer,
  ModalBody,
  ModalContent,
  ModalFooterContainer,
  FooterLeftContainer,
  ModalMask,
  ModalTitle,
} from './index.style'
type Props = {
  /**
   * 模态框的宽度
   */
  width?: string

  /**
   * 模态框的高度
   */
  height?: string

  /**
   * 模态框标题
   */
  title?: React.ReactNode

  /**
   * 确认按钮
   */
  okText?: string | React.ReactNode

  /**
   * 取消按钮
   */
  cancelText?: string | React.ReactNode

  /**
   * 是否允许按键盘 esc 退出
   */
  keyboard?: boolean

  /**
   * 是否显示遮罩层
   */
  mask?: boolean

  /**
   * 点击遮罩层是否关闭模态框
   */
  maskClosable?: boolean

  /**
   * 模态框是否可见
   */
  visible?: boolean

  /**
   * 模态框是否有右上角的 x
   */
  closable?: boolean

  /**
   * 模态框确认按钮回调
   */
  onOk?: () => void

  /**
   * 模态框取消按钮回调
   */
  onCancel?: () => void

  /**
   * 模态框点击 x 回调
   */
  onClose?: () => void

  /**
   * 模态框底部
   */
  footer?: React.ReactElement

  /**
   * 使用默认的 footer 时，提供给 footer 左边的 slot
   */
  footerLeft?: React.ReactNode

  /**
   * 是否使用默认的 footer
   * 如果要使用新 footer， 它必须设置为 false
   */
  isUseDefaultFooter?: boolean
  /**
   * 控制模态框的过度状态
   */
  inProp?: boolean

  /**
   * 过渡时间
   */
  duration?: number
}

interface FooterProps {
  /**
   * 确认按钮
   */
  okText?: string | React.ReactNode

  /**
   * 取消按钮
   */
  cancelText?: string | React.ReactNode
  /**
   * 模态框确认按钮回调
   */
  onOk?: () => void

  /**
   * 模态框取消按钮回调
   */
  onCancel?: () => void

  /**
   * 模态框底部, 如果为 null,则不显示底部
   */
  footer?: React.ReactElement

  /**
   * 使用默认的 footer 时，提供给 footer 左边的 slot
   */
  footerLeft?: React.ReactNode

  /**
   * 是否使用默认的 footer
   * 如果要使用新 footer， 它必须设置为 false
   */
  isUseDefaultFooter?: boolean
}

const ModalFooter = (props: FooterProps) => {
  const {
    footer,
    footerLeft,
    isUseDefaultFooter,
    onCancel,
    onOk,
    okText,
    cancelText,
  } = props

  if (isUseDefaultFooter) {
    return (
      <ModalFooterContainer footerLeft={footerLeft}>
        {footerLeft && <FooterLeftContainer>{footerLeft}</FooterLeftContainer>}
        <FooterBtnContainer>
          <Button className="cancel-btn" onClick={onCancel}>
            {cancelText}
          </Button>
          <Button className="ok-btn" onClick={onOk}>
            {okText}
          </Button>
        </FooterBtnContainer>
      </ModalFooterContainer>
    )
  }

  return footer === undefined ? null : footer
}

const Modal: React.FC<Readonly<Props>> = (props) => {
  const {
    children,
    // 模态框大小
    height,
    width,
    // 掩膜相关
    keyboard,
    mask,
    maskClosable,
    // header 相关
    onClose,
    title,
    // 模态框显示相关
    visible,
    closable,
    inProp: outerInProp,
    duration,
    ...rest
  } = props
  // 点击掩膜是否关闭模态框
  const { handleMaskClick } = useMask(maskClosable, keyboard, onClose)
  // const { isDestroyBody } = useModalService(visible, onOk, onCancel, onClose)
  const { iInProp, iVisible, setIVisible } = useAnimation(
    visible!,
    outerInProp!
  )
  // 自动模态框关闭的时候销毁 Body
  const { isDestroyBody } = useAutoDestroyBody(iVisible)
  return (
    <Container visible={iVisible}>
      <Transition
        in={iInProp}
        timeout={duration!}
        appear={true}
        onExited={() => {
          // 退出动画结束，关闭框
          setIVisible(false)
        }}
      >
        {(state) => (
          <ModalContent
            width={width}
            height={height}
            className={`modal modal-${state}`}
            duration={duration}
          >
            <ModalTitle>
              <span className="title-text">{title}</span>
              {closable && (
                <span className="close-btn" onClick={onClose}>
                  x
                </span>
              )}
            </ModalTitle>
            <ModalBody>{!isDestroyBody && children}</ModalBody>
            <ModalFooter {...rest} />
          </ModalContent>
        )}
      </Transition>
      {mask && <ModalMask onClick={handleMaskClick}></ModalMask>}
    </Container>
  )
}

Modal.defaultProps = {
  okText: '确认',
  cancelText: '取消',
  keyboard: true,
  mask: true,
  maskClosable: false,
  title: '标题',
  visible: true,
  onOk: () => {},
  onCancel: () => {},
  onClose: () => {},
  isUseDefaultFooter: true,
  inProp: true,
  duration: 200,
  closable: false,
}

export default Modal

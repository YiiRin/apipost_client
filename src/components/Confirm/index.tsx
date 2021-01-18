import Button from 'components/Button'
import React from 'react'
import { Transition } from 'react-transition-group'
import { useAnimation } from './hook'
import {
  ConfirmContent,
  Container,
  Mask,
  ConfirmTitle,
  ConfirmBody,
  ConfirmFooter,
} from './index.style'

type Props = {
  /**
   * 是否显示确认框
   */
  visible?: boolean
  /**
   * 确认框的宽度
   */
  width?: string

  /**
   * 确认框的高度
   */
  height?: string
  /**
   * 确认框标题
   */
  title?: React.ReactNode

  /**
   * 确认框的文本
   */
  okText?: React.ReactNode

  /**
   * 取消框的文本
   */
  cancelText?: React.ReactNode

  /**
   * 确认回调
   */
  onOk?: () => any
  /**
   * 取消的回调
   */
  onCancel?: () => any

  /**
   * 控制动画状态
   */
  inProp?: boolean

  /**
   * 持续时间，毫秒为单位
   */
  duration?: number
}

const Confirm: React.FC<Readonly<Props>> = ({
  visible = false,
  width = '352px',
  height,
  title = '',
  okText = '确认',
  cancelText = '取消',
  onCancel = () => {},
  onOk = () => {},
  duration = 300,
  inProp = false,
  children,
}) => {
  const { iInProp, iVisible, setIVisible } = useAnimation(visible, inProp)

  return (
    <Container visible={iVisible}>
      <Transition
        in={iInProp}
        timeout={duration}
        onExited={() => {
          // 退出动画结束，关闭框
          setIVisible(false)
        }}
      >
        {(state) => (
          <ConfirmContent
            width={width}
            height={height}
            duration={duration}
            className={`confirm confirm-${state}`}
          >
            <ConfirmTitle>{title}</ConfirmTitle>
            <ConfirmBody>{children}</ConfirmBody>
            <ConfirmFooter>
              <div className="btn-container">
                <Button onClick={onCancel} className={'cancel'}>
                  {cancelText}
                </Button>
                <Button onClick={onOk} className={'ok'}>
                  {okText}
                </Button>
              </div>
            </ConfirmFooter>
          </ConfirmContent>
        )}
      </Transition>
      <Mask />
    </Container>
  )
}

export default Confirm

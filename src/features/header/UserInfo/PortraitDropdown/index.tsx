import Button from 'components/Button'
import React from 'react'
import {
  Container,
  UserInfoContainer,
  PortraitContainter,
  InfoContainer,
  Username,
  Email,
  Nav,
} from './index.style'
import portrait from 'assets/imgs/portrait.png'
import Line from 'components/Line'
import Confirm from 'components/Confirm'
import { useLogout } from './hook'
import { useSelector } from 'react-redux'
import { userInfoSelector } from '../selector'
import { getImgUrl } from 'service/utils/get-img-url'

type Props = {
  visible: boolean
}

const PortraitDropdown: React.FC<Readonly<Props>> = (props) => {
  const { visible } = props
  const {
    open,
    close,
    duration,
    inProp,
    visible: confirmVisible,
    handleLogout,
  } = useLogout()
  const { name = '匿名用户', avatar, email = 'nicai@163.com' } = useSelector(
    userInfoSelector
  )

  return (
    <>
      <Container visible={visible}>
        <UserInfoContainer>
          <PortraitContainter>
            <img src={avatar ? getImgUrl(avatar) : portrait} alt="portrait" />
          </PortraitContainter>
          <InfoContainer>
            <Username>{name}</Username>
            <Email>{email}</Email>
          </InfoContainer>
        </UserInfoContainer>
        <Line width={'180px'} className={'line'} variant="dropdown" />
        <Nav>
          <div>
            <Button
              btnType="link"
              className={'link'}
              block={true}
              icon={<i className="fa fa-id-card-o" aria-hidden="true"></i>}
              href="//www.iliya.org.cn:7340"
              target={'_blank'}
            >
              完善个人资料
            </Button>
          </div>
          <div>
            <Button
              className={'link'}
              btnType="link"
              block={true}
              icon={<i className="fa fa-key" aria-hidden="true"></i>}
              href="http://www.iliya.org.cn:7340/admin/resetpwd"
              target={'_blank'}
            >
              修改密码
            </Button>
          </div>
          <div>
            <Button
              className={'link'}
              btnType="link"
              block={true}
              icon={<i className="fa fa-sign-out" aria-hidden="true"></i>}
              onClick={open}
            >
              退出登录
            </Button>
          </div>
        </Nav>
      </Container>
      <Confirm
        title={'退出登录'}
        okText={'继续退出'}
        cancelText={'取消'}
        onOk={handleLogout}
        onCancel={close}
        inProp={inProp}
        visible={confirmVisible}
        duration={duration}
      >
        确定退出登录么？如果您有未保存的数据建议保存
      </Confirm>
    </>
  )
}

export default PortraitDropdown

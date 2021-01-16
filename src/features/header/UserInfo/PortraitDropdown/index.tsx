import Button from 'components/Button'
import React, { CSSProperties } from 'react'
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

type Props = {
  visible: boolean
}

const PortraitDropdown: React.FC<Readonly<Props>> = (props) => {
  const { visible } = props

  return (
    <Container visible={visible}>
      <UserInfoContainer>
        <PortraitContainter>
          <img src={portrait} alt="portrait" />
        </PortraitContainter>
        <InfoContainer>
          <Username>rin</Username>
          <Email>430252495@qq.com</Email>
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
          >
            退出登录
          </Button>
        </div>
      </Nav>
    </Container>
  )
}

export default PortraitDropdown

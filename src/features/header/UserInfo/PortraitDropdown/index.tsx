import Button from 'components/Button'
import React, { CSSProperties } from 'react'
import {
  Container,
  UserInfoContainer,
  PortraitContainter,
  InfoContainer,
  Username,
  Email,
  Line,
  Nav,
} from './index.style'
import portrait from 'assets/imgs/portrait.png'

type Props = {
  visible: boolean
}

const btnStyle = {
  fontSize: '12px',
  textAlign: 'left',
  padding: '.75em 0 .75em 20px',
  margin: '0',

} as CSSProperties

const PortraitDropdown: React.FC<Readonly<Props>> = (props) => {
  const {visible} = props

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
      <Line />
      <Nav>
        <div>
          <Button
            btnType="link"
            block={true}
            style={btnStyle}
            icon={<i className="fa fa-id-card-o" aria-hidden="true"></i>}
          >
            完善个人资料
          </Button>
        </div>
        <div>
          <Button
            btnType="link"
            block={true}
            style={btnStyle}
            icon={<i className="fa fa-key" aria-hidden="true"></i>}
          >
            修改密码
          </Button>
        </div>
        <div>
          <Button
            btnType="link"
            block={true}
            style={btnStyle}
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

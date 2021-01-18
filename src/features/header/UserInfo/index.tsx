import Button from 'components/Button'
import React from 'react'
import { Container, Img, InfoContainer, PortraitContainer } from './index.style'
import portrait from 'assets/imgs/portrait.png'
import Title from 'components/Title'
import { useComponentShow, useUserInfo } from './hook'
import PortraitDropdown from './PortraitDropdown'
import { getImgUrl } from 'service/utils/get-img-url'
import { useSelector } from 'react-redux'
import { isLoginSelector } from './selector'

type Props = {}

const UserInfo: React.FC<Readonly<Props>> = (props) => {
  const titleShow = useComponentShow()
  const portraitShow = useComponentShow()
  const { userInfo } = useUserInfo()
  const { name, avatar } = userInfo
  const isLogin = useSelector(isLoginSelector)
  return (
    <Container>
      {isLogin && (
        <InfoContainer>
          <span>{name}</span>
          <Button
            icon={<i className="fa fa-users" aria-hidden="true"></i>}
            onMouseEnter={titleShow.show}
            onMouseLeave={titleShow.hide}
          >
            rin的团队
          </Button>
          <Title
            text={'当前团队'}
            top={'-1px'}
            left={'10px'}
            visible={titleShow.isShow}
          />
        </InfoContainer>
      )}
      <PortraitContainer
        onMouseEnter={portraitShow.show}
        onMouseLeave={portraitShow.hide}
      >
        <Img src={avatar ? getImgUrl(avatar) : portrait} alt="portrait" />
        <PortraitDropdown visible={portraitShow.isShow} />
      </PortraitContainer>
    </Container>
  )
}

export default UserInfo

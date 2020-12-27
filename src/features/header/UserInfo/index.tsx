import Button from 'components/Button'
import React from 'react'
import { Container, Img, InfoContainer, PortraitContainer } from './index.style'
import portrait from 'assets/imgs/portrait.png'
import Title from 'components/Title'
import { useComponentShow } from './hook'
import PortraitDropdown from './PortraitDropdown'

type Props = {}

const UserInfo: React.FC<Readonly<Props>> = (props) => {
  const titleShow = useComponentShow()
  const portraitShow = useComponentShow()
  return (
    <Container>
      <InfoContainer>
        <span>rin</span>
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
      <PortraitContainer
        onMouseEnter={portraitShow.show}
        onMouseLeave={portraitShow.hide}
      >
        <Img src={portrait} alt="portrait" />
        <PortraitDropdown visible={portraitShow.isShow} />
      </PortraitContainer>
    </Container>
  )
}

export default UserInfo

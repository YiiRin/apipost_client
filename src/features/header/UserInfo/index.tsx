import Button from 'components/Button'
import React from 'react'
import { Container, Img, InfoContainer, PortraitContainer } from './index.style'
import portrait from 'assets/imgs/portrait.png'
import Title from 'components/Title'
import { useTitle } from './hook'
import PortraitDropdown from '../PortraitDropdown'

type Props = {}

const UserInfo: React.FC<Readonly<Props>> = (props) => {
  const titleStatus = useTitle()
  return (
    <Container>
      <InfoContainer>
        <span>rin</span>
        <Button
          icon={<i className="fa fa-users" aria-hidden="true"></i>}
          onMouseEnter={titleStatus.showTitle}
          onMouseLeave={titleStatus.hideTitle}
        >
          rin的团队
        </Button>
        <Title
          text={'当前团队'}
          top={'-1px'}
          left={'10px'}
          visible={titleStatus.isShow}
        />
      </InfoContainer>
      <PortraitContainer>
        <Img src={portrait} alt="portrait" />
        <PortraitDropdown />
      </PortraitContainer>
    </Container>
  )
}

export default UserInfo

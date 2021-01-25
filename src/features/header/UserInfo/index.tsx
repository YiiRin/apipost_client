import Button from 'components/Button'
import React from 'react'
import { Container, Img, InfoContainer, PortraitContainer } from './index.style'
import portrait from 'assets/imgs/portrait.png'
import Title from 'components/Title'
import { useComponentShow, useUserInfo } from './hook'
import PortraitDropdown from './PortraitDropdown'
import { getImgUrl } from 'service/utils/get-img-url'
import { useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { TeamMemberRole } from 'service/http/api/team'
import { isLoginSelector } from 'store/auth/selector'

type Props = {}

const UserInfo: React.FC<Readonly<Props>> = (props) => {
  const history = useHistory()
  const titleShow = useComponentShow()
  const portraitShow = useComponentShow()
  const { userInfo, currentTeam } = useUserInfo()
  const { name, avatar } = userInfo
  const isLogin = useSelector(isLoginSelector)

  /**
   * 跳转到对应的 team
   */
  const handleJumpToCurrentTeam = () => {
    if (currentTeam.id) {
      const teamMember = currentTeam.members.find(
        (member) => member.userId === userInfo.id
      )

      if (teamMember) {
        const type =
          teamMember.role === TeamMemberRole.ADMINISTRATOR
            ? 'managed'
            : 'joined'
        history.push(`/team/${type}/${currentTeam.id}`, currentTeam.id)
      }
    }
  }
  return (
    <Container>
      {isLogin && (
        <InfoContainer>
          <span>{name}</span>
          <Button
            icon={<i className="fa fa-users" aria-hidden="true"></i>}
            onMouseEnter={titleShow.show}
            onMouseLeave={titleShow.hide}
            onClick={handleJumpToCurrentTeam}
          >
            {currentTeam.name ? currentTeam.name : '暂无当前团队'}
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

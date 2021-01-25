import Button from 'components/Button'
import Confirm from 'components/Confirm'
import Modal from 'components/Modal'
import { userInfoSelector } from 'store/user/selector'
import React from 'react'
import { FaSave, FaUser } from 'react-icons/fa'
import { useSelector } from 'react-redux'
import { TeamMemberRole } from 'service/http/api/team'
import { formatDate } from 'service/utils/formatDate'
import { TeamsType } from '../../TeamLeftNav/LeftNavTeamList'
import { useAddMember, useChangeTeamMemberRole, useExitTeam } from './hook'
import { Container, MemberInfo, ModalContentContainer } from './index.style'

type Props = {
  /**
   * 团队 id
   */
  teamId?: string
  /**
   * 用户 id
   */
  userId?: string
  /**
   * 用户昵称
   */
  username?: string
  /**
   * 用户邮箱
   */
  email?: string

  bindTime?: string | Date
  /**
   * 用户角色
   */
  role?: TeamMemberRole

  type: TeamsType

  /**
   * 切换角色
   */
  changeRole?: Function

  /**
   * 退出团队
   */
  exitTeam?: Function

  /**
   * 添加团队成员
   */
  addTeamMember?: Function
}

const OfficialCubicle: React.FC<Readonly<Props>> = (props) => {
  const {
    email = '尚未绑定团队成员',
    username = '空闲工位',
    userId = '',
    teamId = '',
    role = TeamMemberRole.MEMBER,
    bindTime = '',
    type,
    changeRole = () => () => {},
    exitTeam = () => {},
    addTeamMember = () => {},
  } = props
  const userInfo = useSelector(userInfoSelector)

  const changeRoleOperations = useChangeTeamMemberRole(
    userId,
    userInfo.id,
    teamId,
    changeRole
  )
  const exitTeamOperations = useExitTeam(teamId, userId, exitTeam)
  const addTeamMemberOperations = useAddMember(teamId, addTeamMember)

  let btns: React.ReactNode | null = null

  if (type === 'joined') {
    if (userInfo.id === userId) {
      btns = (
        <Button className="btn" onClick={exitTeamOperations.open}>
          退出工位
        </Button>
      )
    }
  } else {
    if (userId) {
      if (userInfo.id === userId) {
        if (role === TeamMemberRole.ADMINISTRATOR) {
          btns = (
            <>
              <Button className="btn" onClick={exitTeamOperations.open}>
                退出工位
              </Button>
              <Button className="btn" onClick={changeRoleOperations.open}>
                取消管理员
              </Button>{' '}
            </>
          )
        }
      } else {
        if (role === TeamMemberRole.MEMBER) {
          btns = (
            <>
              <Button className="btn" onClick={exitTeamOperations.open}>
                取消绑定
              </Button>
              <Button
                className="btn"
                onClick={changeRoleOperations.handleChangeRole}
              >
                设为管理员
              </Button>{' '}
            </>
          )
        } else {
          btns = (
            <>
              <Button className="btn" onClick={exitTeamOperations.open}>
                取消绑定
              </Button>
              <Button className="btn" onClick={changeRoleOperations.open}>
                取消管理员
              </Button>
            </>
          )
        }
      }
    } else {
      btns = (
        <Button className="btn" onClick={addTeamMemberOperations.open}>
          绑定成员
        </Button>
      )
    }
  }

  return (
    <Container>
      <span className="left">赠送工位</span>
      {userId && <span className="right">已绑定成员</span>}
      <MemberInfo>
        <span className="header icon">
          <FaUser />
        </span>
        <span className="header">
          {username} {role === TeamMemberRole.ADMINISTRATOR ? '（管理员）' : ''}
        </span>
        <span className="content email">{email}</span>
        <span className="content">{btns}</span>
        <span className="footer">
          {bindTime ? `绑定时间: ${formatDate(bindTime)}` : '尚未绑定'}
        </span>
      </MemberInfo>

      <Confirm
        title="取消团队管理员"
        okText="确定取消"
        onCancel={changeRoleOperations.close}
        onOk={async () => {
          await changeRoleOperations.handleChangeRole()
          changeRoleOperations.close()
        }}
        visible={changeRoleOperations.visible}
        inProp={changeRoleOperations.inProp}
        duration={changeRoleOperations.duration}
      >
        确定取消该绑定成员的管理员权限么?
      </Confirm>

      <Confirm
        title={userInfo.id === userId ? '退出工位绑定' : '解除工位绑定'}
        okText={userInfo.id === userId ? '确定退出' : '确定解绑'}
        onCancel={exitTeamOperations.close}
        onOk={async () => {
          await exitTeamOperations.handleExitTeam()
          exitTeamOperations.close()
        }}
        visible={exitTeamOperations.visible}
        inProp={exitTeamOperations.inProp}
        duration={exitTeamOperations.duration}
      >
        {userInfo.id === userId
          ? '确定退出该工位么? 退出后，您将不再属于该团队成员'
          : '确定要解除工位绑定么？解除后，您可以将该工位重新绑定给其他成员'}
      </Confirm>

      <Modal
        title="绑定工位"
        okText={
          <>
            <FaSave
              style={{
                marginRight: '.375em',
              }}
            />
            保存
          </>
        }
        cancelText="关闭"
        onOk={addTeamMemberOperations.handleAddMember}
        onCancel={addTeamMemberOperations.close}
        visible={addTeamMemberOperations.visible}
        inProp={addTeamMemberOperations.inProp}
        duration={addTeamMemberOperations.duration}
      >
        <ModalContentContainer>
          <div className="email-item">
            <label htmlFor="email">用户邮箱</label>
            <input
              type="text"
              name="email"
              id="email"
              placeholder="请输入要绑定的用户邮箱"
              ref={addTeamMemberOperations.emailRef}
            />
          </div>
          <div className="email-item">
            <label htmlFor="confirmEmail">确认用户邮箱</label>
            <input
              type="text"
              name="confirmEmail"
              id="confirmEmail"
              placeholder="请再次输入要绑定的用户邮箱"
              ref={addTeamMemberOperations.confirmEmailRef}
            />
          </div>
        </ModalContentContainer>
      </Modal>
    </Container>
  )
}

export default OfficialCubicle

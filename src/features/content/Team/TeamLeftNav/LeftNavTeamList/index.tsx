import React from 'react'
import { Container, ModalContentContainer } from './index.style'
import { Scrollbars } from 'react-custom-scrollbars'
import { useRouteMatch } from 'react-router-dom'
import Button from 'components/Button'
import TeamItem from './TeamItem'
import { useAddTeamModal, useAutoJumpToTeamInfo, useLoadTeams } from './hook'
import Modal from 'components/Modal'

export type TeamsType = 'managed' | 'joined'
type RouteParams = {
  type: TeamsType
}

type Props = {}

const LeftNavTeamList: React.FC<Readonly<Props>> = () => {
  const { params } = useRouteMatch<RouteParams>()
  const { type } = params
  const teams = useLoadTeams(type)
  useAutoJumpToTeamInfo(type, teams)
  const {
    close,
    duration,
    inProp,
    open,
    visible,
    handleAddTeam,
    teamNameRef,
  } = useAddTeamModal()
  return (
    <Scrollbars style={{ height: 'calc(100% - 32px)' }}>
      <Container>
        {params.type && params.type === 'managed' && (
          <div>
            <Button className="create-team-btn" onClick={open}>
              <span style={{ fontSize: '14px', fontWeight: 'bold' }}>+</span>{' '}
              <span>创建团队</span>
            </Button>
          </div>
        )}

        {teams.map((team) => (
          <TeamItem
            to={{
              pathname: `/team/${type}/${team.id}`,
              state: team.id,
            }}
            teamName={team.name}
            key={team.id}
          />
        ))}
      </Container>
      <Modal
        visible={visible}
        inProp={inProp}
        duration={duration}
        onCancel={close}
        onOk={handleAddTeam}
        title="创建团队"
      >
        <ModalContentContainer>
          <p className="text">
            默认创建的团队是免费团队，赠送 100 个工位，最大支持 100
            个团队成员的协作,您可以在创建成功后进行版本升级和工位扩充
          </p>
          <div className="team-name">
            <label htmlFor="teamName">团队名称</label>
            <input
              type="text"
              name="teamName"
              id="teamName"
              placeholder="请输入团队名称，建议输入公司名/项目组名称等"
              ref={teamNameRef}
            />
          </div>
        </ModalContentContainer>
      </Modal>
    </Scrollbars>
  )
}

export default LeftNavTeamList

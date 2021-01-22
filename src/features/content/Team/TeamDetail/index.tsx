import React from 'react'
import {
  Container,
  DetailHeader,
  OfficialCubicleContainer,
} from './index.style'
import { Scrollbars } from 'react-custom-scrollbars'
import SmallTip from 'components/SmallTip'
import Button from 'components/Button'
import Line from 'components/Line'
import TeamInfo from './TeamInfo'
import OfficialCubicle from './OfficialCubicle'
import {
  useAutoLoadTeamMembers,
  useOfficialCubicleManage,
  useToggleCurrentTeam,
} from './hook'
import { useSelector } from 'react-redux'
import { currentTeamSelector } from 'features/header/UserInfo/selector'
import Confirm from 'components/Confirm'

type Props = {}

const TeamDetail: React.FC<Readonly<Props>> = () => {
  const {
    team,
    teamMembers,
    type,
    setTeam,
    setTeamMembers,
    loadTeamMembers,
  } = useAutoLoadTeamMembers()
  const {
    duration,
    handleToggleCurrentTeam,
    inProp,
    open,
    visible,
    close,
  } = useToggleCurrentTeam(team!)
  const {
    toggleTeamMemberRole,
    exitTeam,
    addTeamMember,
  } = useOfficialCubicleManage(
    type,
    (team && team.id) || '',
    setTeamMembers,
    loadTeamMembers
  )
  const currentTeam = useSelector(currentTeamSelector)
  return (
    <div
      style={{
        flex: '1 1 auto',
      }}
    >
      <Scrollbars>
        <Container>
          <SmallTip
            iconClassName="fa fa-exclamation-triangle"
            text="通过增加工位来绑定更多成员,以便于进行接口文档的团队协作，如管理，编写，查看等"
            variant="error"
            className="detail-item"
          />
          <DetailHeader className="detail-item">
            <Button
              className="toggle-current-team-btn"
              disabled={!team || (team && team.id === currentTeam.id)}
              onClick={open}
            >
              {team && team.id === currentTeam.id ? '当前团队' : '切换当前团队'}
            </Button>
            <Button
              className="help-doc"
              btnType="link"
              href="https://doc.apipost.cn/ff3f1586614cf2c1"
              target="_blank"
            >
              《 帮助文档: ApiPost 如何进行项目管理?
              团队、项目、接口/文档之间的关系是什么？ 》
            </Button>
          </DetailHeader>
          <Line
            width="100%"
            height="2px"
            variant="sidebar"
            className="detail-item"
          />
          <p className="detail-item" style={{ fontSize: '16px' }}>
            团队信息
          </p>
          {team ? (
            <TeamInfo
              name={team.name}
              version={team.teamVersion}
              expireTime={team.expireTime}
              createTime={team.createTime}
              officialCubicleNum={team.officialCubicleNum}
              className="detail-item"
              type={type}
              teamId={team.id}
              setTeam={setTeam}
            />
          ) : (
            <>
              <p className="no-team-text">暂无团队信息</p>
              <Line
                width="100%"
                height="2px"
                variant="sidebar"
                className="detail-item"
              />
            </>
          )}
          <p className="detail-item" style={{ fontSize: '16px' }}>
            工位管理
          </p>
          {team ? (
            <OfficialCubicleContainer>
              {teamMembers.map((member) => (
                <OfficialCubicle
                  key={member.userId}
                  {...member}
                  type={type}
                  changeRole={toggleTeamMemberRole(member.role)}
                  exitTeam={exitTeam}
                  addTeamMember={addTeamMember}
                />
              ))}
              {teamMembers.length < team.officialCubicleNum &&
                type === 'managed' && (
                  <OfficialCubicle
                    type={type}
                    addTeamMember={addTeamMember}
                    teamId={team && team.id}
                  />
                )}
            </OfficialCubicleContainer>
          ) : (
            <p className="no-team-text">暂无工位信息</p>
          )}
        </Container>
        <Confirm
          title="切换为当前团队"
          okText="切换团队"
          cancelText="取消"
          visible={visible}
          inProp={inProp}
          duration={duration}
          onOk={handleToggleCurrentTeam}
          onCancel={close}
        >
          确定切换团队么?
          如果您当前团队下有尚未保存的数据（项目，接口等），请保存再切换
        </Confirm>
      </Scrollbars>
    </div>
  )
}

export default TeamDetail

import Button from 'components/Button'
import Line from 'components/Line'
import Modal from 'components/Modal'
import React, { Dispatch } from 'react'
import { FaSave } from 'react-icons/fa'
import { Team, TeamVersion } from 'service/http/api/team'
import { formatDate } from 'service/utils/formatDate'
import { TeamsType } from '../../TeamLeftNav/LeftNavTeamList'
import { useUpdateTeamName } from './hook'
import { Container, ModalContentContainer } from './index.style'

type Props = {
  /**
   * 团队名
   */
  name: string
  /**
   * 团队版本
   */
  version: TeamVersion
  /**
   * 团队过期时间
   */
  expireTime: string
  /**
   * 团队创建时间
   */
  createTime: string
  /**
   * 团队工位数量
   */
  officialCubicleNum: number

  className?: string

  teamId: string

  type: TeamsType

  setTeam?: Dispatch<Team>
}

const TeamInfo: React.FC<Readonly<Props>> = (props) => {
  const {
    createTime,
    expireTime,
    name,
    officialCubicleNum,
    version,
    className,
    type,
    teamId,
    setTeam,
  } = props
  const {
    close,
    duration,
    handleUpdateTeamName,
    inProp,
    open,
    visible,
    teamNameRef,
  } = useUpdateTeamName(teamId, setTeam!)
  return (
    <Container className={className}>
      <Line width="100%" height="1px" variant="sidebar" />
      <p className="team-info-item">
        <span className="title">名称:</span>
        <span className="content">
          {name}{' '}
          {type === 'managed' && (
            <Button className="btn" onClick={open}>
              改名
            </Button>
          )}
        </span>
      </p>
      <Line width="100%" height="1px" variant="sidebar" />
      <p className="team-info-item">
        <span className="title">版本:</span>
        <span className="content">
          {version === TeamVersion.FREE ? '免费版' : '尊享版'}
        </span>
      </p>
      <Line width="100%" height="1px" variant="sidebar" />
      <p className="team-info-item">
        <span className="title">到期日期:</span>
        <span className="content">{formatDate(expireTime)}</span>
      </p>
      <Line width="100%" height="1px" variant="sidebar" />
      <p className="team-info-item">
        <span className="title">创建时间:</span>
        <span className="content">{formatDate(createTime)}</span>
      </p>
      <Line width="100%" height="1px" variant="sidebar" />
      <p className="team-info-item">
        <span className="title">工位个数:</span>
        <span className="content">
          {officialCubicleNum}个 （最大支持 {officialCubicleNum}{' '}
          个人同时协作,如需更多人协作，请增加工位）
        </span>
      </p>
      <Line width="100%" height="1px" variant="sidebar" />
      <Modal
        title="编辑团队"
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
        onOk={handleUpdateTeamName}
        onClose={close}
        onCancel={close}
        visible={visible}
        inProp={inProp}
        duration={duration}
      >
        <ModalContentContainer>
          <p className="tip">
            为了便于区分，建议取公司名/项目组名称作为团队名称
          </p>
          <div className="team-name">
            <label htmlFor="teamName">团队名称</label>
            <input
              type="text"
              name="teamName"
              id="teamName"
              placeholder="请输入团队名称，建议输入公司名/项目组名称等"
              defaultValue={name}
              ref={teamNameRef}
            />
          </div>
        </ModalContentContainer>
      </Modal>
    </Container>
  )
}

export default TeamInfo

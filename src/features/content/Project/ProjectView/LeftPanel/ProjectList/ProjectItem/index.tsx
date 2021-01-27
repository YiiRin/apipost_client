import React from 'react'
import { Box, Container, ProjectInfo } from './index.style'
import { FaTerminal, FaWindowRestore } from 'react-icons/fa'
import { VscUnlock } from 'react-icons/vsc'
import { AiTwotoneLock } from 'react-icons/ai'
import { NavLink, useHistory } from 'react-router-dom'
import { formatDate } from 'service/utils/formatDate'
import { useSelector } from 'react-redux'
import { currentTeamUsersSelector } from 'store/user/selector'
import { ProjectType } from '../hook'
import { Project, ProjectStatus } from 'service/http/api/project'
import { EDIT_PROJECT } from '../../../constants'

type Props = {
  type: ProjectType

  project: Project

  className?: string
}

const ProjectItem: React.FC<Readonly<Props>> = (props) => {
  const { className = '', type, project } = props
  const { id, name, partners, createTime, apiId, status } = project
  const history = useHistory()
  const currentTeamUsers = useSelector(currentTeamUsersSelector)
  const partnerNames = currentTeamUsers
    .filter((user) => partners.includes(user.id))
    .map((user) => user.name)

  const handleItemClick = () => {
    history.push(`/project/${type}/${id}`, project)
  }

  return (
    <Container className={`proj-item ${className}`} onClick={handleItemClick}>
      <Box>
        <FaWindowRestore />
      </Box>
      <ProjectInfo>
        <p
          className="proj-name"
          onClick={() => {
            PubSub.publish(EDIT_PROJECT, type)
          }}
        >
          {status === ProjectStatus.UNLOCKED ? (
            <VscUnlock className="unlocked"/>
          ) : (
            <AiTwotoneLock className="locked"/>
          )}{' '}
          {name}
        </p>
        <p className="proj-info">
          <span className="create-time">
            创作时间: {formatDate(createTime)}
          </span>
          <span>
            协作人员:{' '}
            {partnerNames.length <= 3
              ? partnerNames.join(' ')
              : partnerNames.slice(0, 3).join(' ') + ' ...'}
          </span>
        </p>
      </ProjectInfo>
      <NavLink
        to={`/apis`}
        className="link-to-api"
        onClick={(event) => event.stopPropagation()}
      >
        <FaTerminal />
        进入该项目接口/文档控制台
      </NavLink>
    </Container>
  )
}

export default ProjectItem

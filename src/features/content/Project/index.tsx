import React from 'react'
import { useSelector } from 'react-redux'
import { Redirect, useLocation } from 'react-router-dom'
import { currentTeamSelector } from 'store/user/selector'
import NoProject from './NoProject'
import ProjectView from './ProjectView'
type Props = {}

const Project: React.FC<Readonly<Props>> = (props) => {
  const currentTeam = useSelector(currentTeamSelector)
  const location = useLocation()

  if (location.pathname === '/project') {
    return <Redirect to="/project/managed" />
  }

  if (!currentTeam.projects || !currentTeam.projects.length) {
    return <NoProject />
  }

  return <ProjectView />
}

export default Project

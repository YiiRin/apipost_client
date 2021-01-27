import React from 'react'
import { useSelector } from 'react-redux'
import { NavLink, Route } from 'react-router-dom'
import { currentTeamSelector } from 'store/user/selector'
import { Container } from './index.style'
import ProjectList from './ProjectList'

type Props = {}

const LeftPanel: React.FC<Readonly<Props>> = (props) => {
  const currentTeam = useSelector(currentTeamSelector)
  return (
    <Container>
      <p className="team-name">当前团队: {currentTeam.name}</p>
      <div className="nav-link-container">
        <NavLink to="/project/managed" className="link">我管理的项目</NavLink>
        <span>|</span>
        <NavLink to="/project/joined" className="link">我参与的项目</NavLink>
      </div>
      <Route path="/project/:projectType">
        <ProjectList />
      </Route>
    </Container>
  )
}

export default LeftPanel

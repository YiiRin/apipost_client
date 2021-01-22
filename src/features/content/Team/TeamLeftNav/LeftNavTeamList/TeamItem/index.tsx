import React from 'react'
import { NavLink, NavLinkProps } from 'react-router-dom'
import { Container } from './index.style'

type Props = {
  /**
   * 团队名
   */
  teamName: string
}

const TeamItem: React.FC<Readonly<Props & NavLinkProps>> = ({
  teamName,
  ...rest
}) => {
  return (
    <NavLink {...rest} className="team-item">
      <Container>
        <span>{teamName}</span>
        <span>&gt;</span>
      </Container>
    </NavLink>
  )
}

export default TeamItem

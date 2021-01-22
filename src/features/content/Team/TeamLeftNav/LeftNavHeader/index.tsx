import Button from 'components/Button'
import React from 'react'
import { NavLink } from 'react-router-dom'
import { Container } from './index.style'

type Props = {}

const LeftNavHeader: React.FC<Readonly<Props>> = (props) => {
  return (
    <Container>
      <NavLink to="/team/managed">
        <Button className="team-btn">我管理的团队</Button>
      </NavLink>

      <NavLink to="/team/joined" className="last-link">
        <Button className="team-btn">我加入的团队</Button>
      </NavLink>
    </Container>
  )
}

export default LeftNavHeader

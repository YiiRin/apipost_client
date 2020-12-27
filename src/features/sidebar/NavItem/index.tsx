import React from 'react'
import { Container, Icon, Text } from './index.style'
import { NavLink } from 'react-router-dom'
export type Props = {
  /**
   * nav item icon
   */
  icon: string
  /**
   * nav item text
   */
  text: string

  /**
   * nav item link path
   */
  to: string
}

const NavItem: React.FC<Readonly<Props>> = (props) => {
  const { icon, text, to } = props
  return (
    <Container className="nav-item">
      <NavLink to={to}>
        <Icon className={icon} />
        <Text>{text}</Text>
      </NavLink>
    </Container>
  )
}

export default NavItem

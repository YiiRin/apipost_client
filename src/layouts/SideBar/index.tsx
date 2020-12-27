import Line from 'components/Line'
import React from 'react'
import { Container } from './index.style'
import { applicationMenu, businessMenu, friendsLinksMenu } from './navigation'

type Props = {}

const SideBar: React.FC<Readonly<Props>> = (props) => {
  return (
    <Container>
      <div className="nav-list business">{businessMenu}</div>
      <Line width={'50px'} />
      <div className="nav-list friends-links">{friendsLinksMenu}</div>
      <div className="nav-list application">{applicationMenu}</div>
    </Container>
  )
}

export default SideBar

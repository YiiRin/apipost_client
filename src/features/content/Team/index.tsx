import React from 'react'
import TeamLeftNav from './TeamLeftNav'
import { Container } from './index.style'
import DividerLine from './DividerLine'
import TeamDetail from './TeamDetail'
import { Route } from 'react-router-dom'

type Props = {}

const Team: React.FC<Readonly<Props>> = (props) => {
  return (
    <Container>
      <TeamLeftNav />
      <DividerLine />
      <Route path="/team/:type">
        <TeamDetail />
      </Route>
    </Container>
  )
}

export default Team
